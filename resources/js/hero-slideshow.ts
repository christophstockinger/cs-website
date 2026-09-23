/**
 * Hintergrund-Slideshow der Startseite.
 *
 * Blendet die im CMS gepflegten Bilder nacheinander durch, fährt dabei einen
 * langsamen Ken-Burns-Zoom und füllt synchron die Indicator-Balken. Ohne
 * externe Abhängigkeiten, komplett über die Web Animations API.
 *
 * Markup-Vertrag:
 *   [data-slideshow]                – Wurzel; umschließt Bilder UND Indicator,
 *                                     data-slideshow-interval in Sekunden
 *     [data-slideshow-slide]        – eine Ebene pro Bild
 *       [data-slideshow-zoom]       – das Element, das den Zoom fährt
 *     [data-slideshow-indicators]   – beliebig viele Gruppen (mobil/desktop)
 *       [data-slideshow-fill]       – ein Balken pro Bild, in gleicher Reihenfolge
 */

const FADE_MS = 1200;
const ZOOM_SCALE = 1.08;
const DEFAULT_INTERVAL_SECONDS = 5;

type Slide = {
    layer: HTMLElement;
    zoom: HTMLElement | null;
};

function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

class HeroSlideshow {
    private readonly slides: Slide[];
    private readonly indicatorGroups: HTMLElement[][];
    private readonly intervalMs: number;

    private index = 0;
    private timer: ReturnType<typeof setTimeout> | null = null;
    private zoomAnimations = new Map<number, Animation>();
    private fillAnimations: Animation[] = [];

    constructor(root: HTMLElement) {
        this.slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slideshow-slide]')).map((layer) => ({
            layer,
            zoom: layer.querySelector<HTMLElement>('[data-slideshow-zoom]'),
        }));

        this.indicatorGroups = Array.from(root.querySelectorAll<HTMLElement>('[data-slideshow-indicators]')).map(
            (group) => Array.from(group.querySelectorAll<HTMLElement>('[data-slideshow-fill]')),
        );

        const seconds = Number(root.dataset.slideshowInterval);
        this.intervalMs = (Number.isFinite(seconds) && seconds > 0 ? seconds : DEFAULT_INTERVAL_SECONDS) * 1000;
    }

    start(): void {
        if (this.slides.length === 0) {
            return;
        }

        this.reveal(0);

        // Ein einzelnes Bild oder reduzierte Bewegung: stehendes Bild, gefüllter erster Balken.
        if (this.slides.length < 2 || prefersReducedMotion()) {
            this.fillsAt(0).forEach((fill) => {
                fill.style.transform = 'scaleX(1)';
            });

            return;
        }

        this.runZoom(0);
        this.runFill(0);
        this.scheduleNext(this.intervalMs);

        document.addEventListener('visibilitychange', () => {
            document.hidden ? this.pause() : this.resume();
        });
    }

    private advance(): void {
        const previous = this.index;
        this.index = (this.index + 1) % this.slides.length;

        this.reveal(this.index);
        this.runZoom(this.index);
        this.runFill(this.index);

        // Der Zoom der abgelösten Ebene läuft noch bis zum Ende der Blende weiter.
        window.setTimeout(() => this.resetZoom(previous), FADE_MS);

        this.scheduleNext(this.intervalMs);
    }

    private reveal(index: number): void {
        this.slides.forEach((slide, i) => {
            slide.layer.style.opacity = i === index ? '1' : '0';
        });
    }

    private runZoom(index: number): void {
        const zoom = this.slides[index]?.zoom;

        if (!zoom) {
            return;
        }

        this.zoomAnimations.get(index)?.cancel();

        this.zoomAnimations.set(
            index,
            zoom.animate({ transform: ['scale(1)', `scale(${ZOOM_SCALE})`] }, {
                duration: this.intervalMs + FADE_MS,
                easing: 'linear',
                fill: 'forwards',
            }),
        );
    }

    private resetZoom(index: number): void {
        this.zoomAnimations.get(index)?.cancel();
        this.zoomAnimations.delete(index);
    }

    private runFill(index: number): void {
        this.fillAnimations.forEach((animation) => animation.cancel());

        this.indicatorGroups.forEach((group) => {
            group.forEach((fill) => {
                fill.style.transform = 'scaleX(0)';
            });
        });

        this.fillAnimations = this.fillsAt(index).map((fill) =>
            fill.animate({ transform: ['scaleX(0)', 'scaleX(1)'] }, {
                duration: this.intervalMs,
                easing: 'linear',
                fill: 'forwards',
            }),
        );
    }

    private fillsAt(index: number): HTMLElement[] {
        return this.indicatorGroups.map((group) => group[index]).filter((fill): fill is HTMLElement => Boolean(fill));
    }

    private scheduleNext(delay: number): void {
        this.clearTimer();
        this.timer = setTimeout(() => this.advance(), delay);
    }

    private clearTimer(): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private pause(): void {
        this.clearTimer();
        this.fillAnimations.forEach((animation) => animation.pause());
        this.zoomAnimations.forEach((animation) => animation.pause());
    }

    private resume(): void {
        this.fillAnimations.forEach((animation) => animation.play());
        this.zoomAnimations.forEach((animation) => animation.play());

        // Der Fortschrittsbalken ist die Uhr: er sagt, wie viel vom Takt noch übrig ist.
        const elapsed = Number(this.fillAnimations[0]?.currentTime ?? 0);
        this.scheduleNext(Math.max(this.intervalMs - elapsed, 0));
    }
}

export function initHeroSlideshows(): void {
    document.querySelectorAll<HTMLElement>('[data-slideshow]').forEach((root) => {
        new HeroSlideshow(root).start();
    });
}
