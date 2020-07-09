<template>
  <nav class="c-SocialMediaNavigation">
    <ul class="c-SocialMediaNavigation-list">
      <!-- Github -->
      <li class="c-SocialMediaNavigation-item">
        <a
          class="c-SocialMediaNavigation-link"
          href="https://github.com/christophstockinger"
        >
          <svg
            class="c-SocialMediaNavigation-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 .667a15.333 15.333 0 00-4.847 29.885c.766.133 1.008-.316 1.008-.721 0-.367.008-1.383 0-2.667-4.266.925-5.148-2.02-5.148-2.02a4.057 4.057 0 00-1.701-2.243c-1.392-.952.104-.933.104-.933a3.219 3.219 0 012.35 1.579 3.264 3.264 0 004.46 1.274c.071-.775.417-1.5.974-2.042-3.404-.39-6.984-1.704-6.984-7.582a5.93 5.93 0 011.58-4.114 5.501 5.501 0 01.15-4.058S9.234 6.613 12.16 8.6a14.51 14.51 0 017.68 0c2.934-1.984 4.212-1.574 4.212-1.574a5.508 5.508 0 01.152 4.058 5.923 5.923 0 011.578 4.117c0 5.893-3.586 7.188-7.002 7.565a3.636 3.636 0 011.05 2.827v4.245c0 .41.248.863 1.026.715A15.333 15.333 0 0016 .667z"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>
      <!-- Linkedin -->
      <li class="c-SocialMediaNavigation-item">
        <a
          class="c-SocialMediaNavigation-link"
          href="https://www.linkedin.com/in/christoph-stockinger-8601b416b/"
        >
          <svg
            class="c-SocialMediaNavigation-svg"
            viewBox="0 0 30 29"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.667 28H1V10.667h6.667V28zm12-12A2.667 2.667 0 0017 18.667V28h-6.667V10.667H17v1.98a8.41 8.41 0 015.32-1.994c3.95 0 6.68 2.934 6.68 8.474V28h-6.667v-9.333A2.667 2.667 0 0019.667 16zm-12-11.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>
      <!-- Facebook -->
      <li class="c-SocialMediaNavigation-item">
        <a
          class="c-SocialMediaNavigation-link"
          href="https://www.facebook.com/christophstockinger.de"
        >
          <svg
            class="c-SocialMediaNavigation-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.667 31.333H2A1.333 1.333 0 01.667 30V2C.667 1.264 1.264.667 2 .667h28c.736 0 1.333.597 1.333 1.333v28c0 .736-.597 1.333-1.333 1.333h-8v-12h3.412a.667.667 0 00.667-.584l.5-4a.667.667 0 00-.667-.749H22v-1.753A2.25 2.25 0 0124.248 10h2.419a.667.667 0 00.666-.667v-4a.667.667 0 00-.666-.666h-2.419a7.59 7.59 0 00-7.581 7.58V14h-3.334a.667.667 0 00-.666.667v4c0 .368.298.666.666.666h3.334v12z"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>
      <!-- Instagram -->
      <li class="c-SocialMediaNavigation-item">
        <a
          class="c-SocialMediaNavigation-link"
          href="https://www.instagram.com/christophstockinger.de/"
        >
          <svg
            class="c-SocialMediaNavigation-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x=".667" y=".667" width="30.667" height="30.667" rx="6" />
              <circle cx="16" cy="16" r="8" />
              <circle cx="25.333" cy="6.667" r="2" />
            </g>
          </svg>
        </a>
      </li>
      <!-- Xing -->
      <li class="c-SocialMediaNavigation-item">
        <a
          class="c-SocialMediaNavigation-link"
          href="https://www.xing.com/profile/Christoph_Stockinger3"
        >
          <svg
            class="c-SocialMediaNavigation-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.756 6H2.001l3.991 7.27L.671 22h6.754l5.322-8.73zM31.337.667h-7.165L13.527 19.31l6.86 12.022h7.165l-6.86-12.022z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'

export default {
  name: 'social-media-navigation',
  setup() {}
}
</script>

<style lang="scss">
.c-SocialMediaNavigation {
  width: 100%;
  height: auto;

  @include cs-respond-to(m) {
    width: 32px;
  }

  &-list {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;

    @include cs-respond-to(m) {
      flex-flow: column nowrap;
      width: 32px;
    }
  }

  &-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: $cs-spacing-l;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }

    @include cs-respond-to(m) {
      margin-right: 0;
      margin-bottom: $cs-spacing-l;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-link {
    display: block;
    width: 32px;
    height: 32px;
    color: var(--icon-color);
    cursor: pointer;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color, transform;

    @include cs-hover {
      color: var(--icon-hover-color);
      transform: rotate(-5deg);
    }

    @include cs-active {
      color: var(--icon-active-color);
    }
  }

  &-svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }
}
</style>
