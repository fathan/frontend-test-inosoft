<!-- eslint-disable max-len -->
<template>
  <div
    v-if="showLoader"
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black opacity-60 flex flex-col items-center justify-center"
  >
    <div class="lds-ripple">
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLoader: false
    };
  },

  created () {
    this.$eventBus.$on('openLoaderFullPage', this.onHandleOpen);
    this.$eventBus.$on('closeLoaderFullPage', this.onHandleClose);
  },

  methods: {
    onHandleOpen () {
      this.showLoader = true;
    },

    onHandleClose () {
      this.showLoader = false;
    }
  }
};
</script>

<style lang="scss">
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>