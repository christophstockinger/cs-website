<template>
  <div class="l-Page">
    <main class="l-Main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.l-Page {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @include cs-respond-to(m) {
    min-height: 100vh;
  }
}

.l-Main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}
</style>
