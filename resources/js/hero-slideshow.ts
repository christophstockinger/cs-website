/**
 * Hintergrund-Slideshow der Startseite.
 *
 * Die Bilder stehen still — gewechselt wird nur durch eine weiche Blende, deren
 * Dauer in der Klasse `transition-opacity duration-2000` am Slide steht. Die
 * Indicator-Balken laufen synchron mit dem Takt mit; es kann mehrere Gruppen
 * geben (mobil im Kopf, ab md unten rechts), die alle dasselbe anzeigen.
 *
 * Markup-Vertrag:
 *   [data-slideshow]                – Wurzel; umschließt Bilder UND Indicator,
 *                                     data-slideshow-interval in Sekunden
 *     [data-slideshow-slide]        – eine Ebene pro Bild
 *     [data-slideshow-indicators]   – beliebig viele Gruppen
 *       [data-slideshow-fill]       – ein Balken pro Bild, in gleicher Reihenfolge
 */

const DEFAULT_INTERVAL_SECONDS = 5;

function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

class HeroSlideshow {
    private readonly slides: HTMLElement[];
    private readonly indicatorGroups: HTMLElement[][];
    private readonly intervalMs: number;

    private index = 0;
    private timer: ReturnType<typeof setTimeout> | null = null;

    constructor(root: HTMLElement) {
        this.slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slideshow-slide]'));

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

        this.show(0);

        // Ein einzelnes Bild oder reduzierte Bewegung: stehendes Bild, erster Balken voll.
        if (this.slides.length < 2 || prefersReducedMotion()) {
            this.runBars(0, 0);

            return;
        }

        this.runCycle();

        // Im versteckten Tab laufen weder Timer noch Transitions zuverlässig. Statt den
        // Takt nachzurechnen, beginnt der aktuelle Durchlauf bei der Rückkehr neu.
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopTimer();
            } else {
                this.runCycle();
            }
        });
    }

    /** Zeigt das aktuelle Bild, füllt seinen Balken und plant den nächsten Wechsel. */
    private runCycle(): void {
        this.show(this.index);
        this.runBars(this.index, this.intervalMs);

        this.stopTimer();
        this.timer = setTimeout(() => {
            this.index = (this.index + 1) % this.slides.length;
            this.runCycle();
        }, this.intervalMs);
    }

    private show(index: number): void {
        this.slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    /**
     * Setzt alle Balken zurück und lässt den aktiven über `durationMs` volllaufen.
     * Bei `durationMs = 0` steht er sofort voll.
     */
    private runBars(index: number, durationMs: number): void {
        const all = this.indicatorGroups.flat();

        if (all.length === 0) {
            return;
        }

        all.forEach((fill) => {
            fill.style.transition = 'none';
            fill.style.transform = 'scaleX(0)';
        });

        const active = this.indicatorGroups
            .map((group) => group[index])
            .filter((fill): fill is HTMLElement => Boolean(fill));

        const first = active[0];

        if (!first) {
            return;
        }

        // Reflow erzwingen, sonst fasst der Browser Rücksetzen und Füllen zu einem
        // Schritt zusammen und die Transition läuft nie los.
        void first.offsetWidth;

        active.forEach((fill) => {
            fill.style.transition = durationMs > 0 ? `transform ${durationMs}ms linear` : 'none';
            fill.style.transform = 'scaleX(1)';
        });
    }

    private stopTimer(): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}

export function initHeroSlideshows(): void {
    document.querySelectorAll<HTMLElement>('[data-slideshow]').forEach((root) => {
        new HeroSlideshow(root).start();
    });
}
