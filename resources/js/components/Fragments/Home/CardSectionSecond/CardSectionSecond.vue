<!-- eslint-disable max-len -->
<template>
  <div class="w-full">
    <h2 class="font-bold text-base lg:text-4xl text-gray-600 mb-4">
      {{ title }}
    </h2>
    <p class="text-lg text-gray-500 mb-5">
      {{ description }}
    </p>
    <div class="flex gap-4">
      <router-link :to="linkAction1">
        <button class="rounded-full bg-white border border-gray-400 px-8 py-2">
          <FontAwesomeIcon
            class="text-sm text-yellow-500"
            icon="info-circle"
          />
          {{ labelAction1 }}
        </button>
      </router-link>
      <router-link :to="linkAction2">
        <button class="rounded-full bg-yellow-500 border border-yellow-500 px-8 py-2 text-white">
          {{ labelAction2 }}
        </button>
      </router-link>
    </div>
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
    labelAction1: {
      type: String,
      default: ''
    },
    linkAction1: {
      type: String,
      default: ''
    },
    labelAction2: {
      type: String,
      default: ''
    },
    linkAction2: {
      type: String,
      default: ''
    }
  }
};
</script>