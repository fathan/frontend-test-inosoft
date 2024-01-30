<!-- eslint-disable max-len -->
<template>
  <section class="flex items-center h-full p-16">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl mb-10">
          Page Not Found
        </p>
        <router-link :to="{ path: '/' }">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Back to Dashboard
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>