<template>
  <div class="c-ModeSwitcher">
    <button class="c-ModeSwitcher-button" @click="switchMode()">
      <div class="c-ModeSwitcher-icon">
        <!-- Dark -->
        <svg
          v-if="state.mode === 'light'"
          class="c-ModeSwitcher-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 24"
        >
          <path
            d="M13.4.6C9 .1 4.7 2.1 2.3 5.9s-2.4 8.5 0 12.3S9 24 13.4 23.5C4.3 19 4.3 5 13.4.6z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- Light -->
        <svg
          v-else
          class="c-ModeSwitcher-svg"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12.001" r="4" />
            <path
              d="M12 .501v4M12 19.501v4M3.868 3.869l2.829 2.828M17.303 17.304l2.829 2.829M.5 12.001h4M19.5 12.001h4M3.868 20.133l2.829-2.829M17.303 6.697l2.829-2.828"
            />
          </g>
        </svg>
      </div>
      <span v-if="state.mode === 'light'" class="c-ModeSwitcher-label"
        >Go to dark</span
      >
      <span v-else class="c-ModeSwitcher-label">Go to light</span>
    </button>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import Cookies from 'universal-cookie'

export default {
  name: 'mode-switcher',
  setup() {
    const modeCookieName = 'cs-mode'
    const lightModeClass = 'cs-light-mode'
    const darkModeClass = 'cs-dark-mode'

    const state = reactive({ mode: 'light' })

    const cookies = new Cookies()

    onMounted(() => {
      const modeCookie = getModeCookie()

      if (modeCookie === 'dark') {
        state.mode = 'dark'

        addDarkModeClass()
      }
    })

    const switchMode = () => {
      if (state.mode === 'light') {
        state.mode = 'dark'

        addDarkModeClass()
        setModeCookie()
      } else {
        state.mode = 'light'

        removeDarkModeClass()
        setModeCookie()
      }
    }

    const addDarkModeClass = () => {
      const htmlElement = document.getElementsByTagName('html')[0]
      if (htmlElement) {
        htmlElement.classList.add(darkModeClass)
      }
    }

    const removeDarkModeClass = () => {
      const htmlElement = document.getElementsByTagName('html')[0]
      if (htmlElement) {
        htmlElement.classList.remove(darkModeClass)
      }
    }

    const setModeCookie = () => {
      cookies.set(modeCookieName, state.mode, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    }

    const getModeCookie = () => {
      return cookies.get(modeCookieName)
    }

    return {
      state,
      switchMode
    }
  }
}
</script>

<style lang="scss">
.c-ModeSwitcher {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  &-button {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding-top: $cs-spacing-xxs;
    padding-right: $cs-spacing-xxs;
    padding-bottom: $cs-spacing-xxs;
    padding-left: $cs-spacing-xxs;
    color: var(--mode-switcher-color);
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color;

    @include cs-hover {
      color: var(--mode-switcher-hover-color);
    }

    @include cs-active {
      color: var(--mode-switcher-active-color);
    }
  }

  &-icon {
    width: 24px;
    min-width: 24px;
    max-width: 24px;
    height: 24px;
    min-height: 24px;
    max-height: 24px;
    margin-right: $cs-spacing-xxs;
    color: inherit;
  }

  &-label {
    @include cs-typography-paragraph;

    color: inherit;
    user-select: none;
  }

  &-svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }
}
</style>
