<template>
  <nav class="w-full bg-white py-2 border-b border-gray-200">
    <div class="container m-auto flex justify-between items-center">
      <div class="flex gap-4 items-center justify-center">
        <router-link to="/" class="mt-2">
          <img :src="logo" alt="">
        </router-link>
        <router-link to="/login">
          <FontAwesomeIcon
            class="text-sm text-yellow-600"
            icon="key"
          />
          <span class="ml-2 font-semibold">
            Login
          </span>
        </router-link>
        <router-link to="/sign-up">
          <FontAwesomeIcon
            class="text-sm text-yellow-600"
            icon="user-plus"
          />
          <span class="ml-2 font-semibold">
            Sign Up
          </span>
        </router-link>
      </div>

      <div class="flex gap-4 items-center justify-center">
        <button class="bg-white border border-gray-300 rounded-xl py-1 px-4">
          About Pipesales
        </button>
        <button class="bg-white border border-gray-300 rounded-xl py-1 px-4">
          OCTG Marketplace
        </button>
        <button class="bg-white border border-gray-300 rounded-xl py-1 px-4">
          Blog
        </button>
        <button class="bg-gray-600 text-white border border-gray-300 rounded-xl py-1 px-8">
          Shell My Pipes
        </button>
        <div class="flex flex-col text-center justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            class="text-sm text-gray-500"
            icon="heart"
          />
          <span class="text-sm text-gray-600">
            Wishlist
          </span>
        </div>
        <div class="flex flex-col text-center justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            class="text-sm text-gray-500"
            icon="shopping-cart"
          />
          <span class="text-sm text-gray-600">
            My Enquiry
          </span>
        </div>
        <div class="flex flex-col text-center justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            class="text-sm text-gray-500"
            icon="medal"
          />
          <span class="text-sm text-gray-600">
            Compare
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logoPipes from './../../../../assets/images/pipesales.svg';

export default {
  data () {
    return {
      logo: logoPipes
    };
  }
};
</script>