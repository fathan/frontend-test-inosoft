<template>
  <div class="flex flex-col">
    <div class="h-16 items-center justify-center">
      <img
        :src="icon"
        alt="Icon"
        class="m-auto"
      >
    </div>
    <h2 class="font-bold text-2xl text-gray-700 mb-3">
      {{ title }}
    </h2>
    <p class="text-base text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>