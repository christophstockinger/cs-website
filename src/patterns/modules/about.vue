<template>
  <section class="m-About">
    <div class="m-About-wrapper">
      <div class="m-About-container">
        <div class="m-About-header">
          <c-headline tag="h3" h2 class="m-About-headline"
            >I’m Christoph – a full stack web developer with focus for unique
            digital products</c-headline
          >
        </div>
        <div class="m-About-content">
          <c-paragraph class="m-About-paragraph"
            >I am currently drinking my coffee at my desk at
            <a
              href="https://www.c77.digital?ref=cs-web"
              target="_blank"
              rel="noreferrer"
              >C77 Digital GmbH</a
            >. As a full stack developer and managing director there I am always
            looking for new projects and professional challenges. Whether
            freelancer or full time job drop me a line!</c-paragraph
          >
          <c-paragraph class="m-About-paragraph"
            >Before that I was a frontend magician alias software developer at
            <a
              href="https://www.easy2parts.com"
              target="_blank"
              rel="noreferrer"
              >Easy2Parts</a
            >
            and keyboard artist alias web developer at
            <a href="https://www.sp.design" target="_blank" rel="noreferrer"
              >Strichpunkt Design</a
            >
            and spent my days there with coffee, coke, VSCode and
            Chrome!</c-paragraph
          >
          <c-paragraph class="m-About-paragraph"
            >True to the quote "Stay hungry. Stay foolish" by Steve Jobs, as a
            web developer I am always open for new things and also crazy enough
            to realize the impossible. I have already convinced my customers -
            <a
              href="https://www.dfb-akademie.de"
              target="_blank"
              rel="noreferrer"
              >DFB</a
            >, 
            <a href="https://www.blackboat.com" target="_blank" rel="noreferrer"
              >Blackboat</a
            >,
            <a href="https://dpdhl-brands.com/" target="_blank" rel="noreferrer"
              >DHL</a
            >
            as well as regional companies and many more. I don't use Rocket
            Science because PHP and Node.js (Typescript) for backend
            applications and JS frameworks like Vue.js or React for frontend
            applications are completely sufficient.
          </c-paragraph>
          <c-paragraph class="m-About-paragraph"
            >My personal incentive to learn something new every day is to
            develop myself further.</c-paragraph
          >
          <c-paragraph class="m-About-paragraph"
            >For projects or freelancer inquiries write me at
            <a href="mailto:info@c77.digital">info@c77.digital</a>!<br />
            Otherwise send me funny stories 👀 or job offers to
            <a href="mailto:hello@christophstockinger.de"
              >hello@christophstockinger.de</a
            >!</c-paragraph
          >
        </div>
        <c-social-media-navigation
          class="m-About-socialMmediaNavigation"
        ></c-social-media-navigation>
      </div>
    </div>
  </section>
</template>

<script>
import cHeadline from '@cs/components/headline.vue'
import cParagraph from '@cs/components/paragraph.vue'
import cSocialMediaNavigation from '@cs/components/social-media-navigation.vue'

export default {
  components: {
    'c-headline': cHeadline,
    'c-paragraph': cParagraph,
    'c-social-media-navigation': cSocialMediaNavigation
  }
}
</script>

<style lang="scss">
.m-About {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: $cs-spacing-m;
  transition-timing-function: $cs-transition-timing-function;
  transition-duration: $cs-transition-duration;
  transition-property: opacity;

  @include cs-respond-to(m) {
    margin-top: $cs-spacing-xl;
  }

  @include cs-respond-to(l) {
    margin-top: $cs-spacing-m;
  }

  @include cs-respond-to(xl) {
    margin-top: $cs-spacing-xl;
  }

  &-wrapper {
    @include cs-grid-wrapper;
  }

  &-container {
    @include cs-grid-container;
  }

  &-header {
    @include cs-grid-cell(12);

    @include cs-respond-to(m) {
      @include cs-grid-cell(9);
      @include cs-grid-post(3);
    }
  }

  &-content {
    @include cs-grid-cell(12);

    @include cs-respond-to(m) {
      @include cs-grid-cell(8);
      @include cs-grid-post(4);
    }

    @include cs-respond-to(l) {
      @include cs-grid-cell(9);
      @include cs-grid-post(3);
    }
  }

  &-headline {
    margin-bottom: $cs-spacing-s;
    color: var(--secondary-headline-color);

    @include cs-respond-to(m) {
      margin-bottom: $cs-spacing-l;
    }
  }

  &-paragraph {
    margin-bottom: $cs-spacing-xs;
    color: var(--primary-paragraph-color);
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-link {
    @include cs-typography-paragraph-small;

    display: block;
    color: var(--primary-paragraph-color);
    text-decoration: none;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color;

    @include cs-hover {
      color: var(--primary-link-hover-color);
    }

    @include cs-active {
      color: var(--primary-link-active-color);
    }
  }

  &-socialMmediaNavigation {
    position: relative;
    margin-top: $cs-spacing-l;
    margin-bottom: $cs-spacing-l;

    @include cs-respond-to(m) {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  @at-root {
    body.has-open-legal {
      .m-About {
        opacity: 0.3;
      }
    }

    .cs-dark-mode {
      body.has-open-legal {
        .m-About {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
