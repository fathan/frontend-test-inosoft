<!-- eslint-disable max-len -->
<template>
  <div class="w-full">
    <TheNavigation />

    <section class="relative overflow-hidden w-full bg-center bg-cover bg-gray-700">
      <div class="globe" />
      <div class="container mx-auto z-20 wrapper-banner">
        <div class="absolute flex w-full">
          <div class="mt-12">
            <img
              src="https://pipesales.com/view2/image/webp/tomi-full.webp"
              alt=""
            >
          </div>
          <div class="text-center">
            <div class="container px-4 mx-auto mt-44">
              <div class="max-w-4xl mx-auto text-center">
                <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                  Your global marketplace to
                </h2>
                <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-yellow-600">
                  buy & sell tubular products
                </h2>
                <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Quickly overcome supply gaps and target zero inventory with Pipesales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <div class="w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10">
          test
        </div>
      </div>
    </section>

    <section class="w-full py-24">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <CardSectionFirst
          v-for="(item, idx) in cardSectionFirstList"
          :key="idx"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </section>

    <section class="w-full py-24">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <div class="w-full lg:w-1/2">
          <div>
            <img
              :src="landingImage1"
              alt="Landing Image 1"
              class="m-auto"
            >
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <CardSectionSecond
            title="Urgent fulfilment for time-critical projects"
            description="Pipesales marketplace assists in managing procurement shortfalls quickly and easily. Browse and find quality tubular products and accessories to your specifications, and Pipesales recognised trade partners will handle the order fulfilment, guaranteeing peace of mind."
            labelAction1="How to Buy?"
            linkAction1="/"
            labelAction2="Browse Inventory"
            linkAction2="/"
          />
        </div>
      </div>
    </section>

    <section class="w-full py-8">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <div class="w-full lg:w-1/2">
          <CardSectionSecond
            title="Fair market rates for surplus inventory"
            description="Target zero inventory by moving surplus products through a trusted network supported by Marubeni-Itochu Steel Inc (MISI). Pipesales can provide you with pricing recommendations to arrive at a fair open market value, then connect you with potential buyers globally."
            labelAction1="How to Buy?"
            linkAction1="/"
            labelAction2="Shell My Pipes"
            linkAction2="/"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <div>
            <img
              :src="landingImage2"
              alt="Landing Image 1"
              class="m-auto"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-8">
      <div class="container mx-auto flex flex-col bg-gray-700 rounded-lg gap-4 p-16 py-24">
        <div class="mb-10">
          <div>
            <span class="font-bold text-5xl text-white">
              Need more information?
            </span>
          </div>
          <div>
            <span class="font-bold text-5xl text-yellow-500">
              Contact Us
            </span>
          </div>
        </div>

        <form class="w-full">
          <div class="flex gap-4 flex-col lg:flex-row w-full">
            <div class="w-full lg:w-1/2">
              <div class="w-full mb-5 inline-block">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Name*"
                >
              </div>
              <div class="w-full mb-5 inline-block">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Country*"
                >
              </div>
              <div class="w-full flex gap-4 flex-col lg:flex-row">
                <div class="w-full lg:w-4/12">
                  <select
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Country Code</option>
                    <option value="-">-</option>
                    <option value="-">-</option>
                    <option value="-">-</option>
                    <option value="-">-</option>
                  </select>
                </div>
                <div class="w-full lg:w-8/12">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Phone"
                  >
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="w-full mb-5 inline-block">
                <input
                  type="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email*"
                >
              </div>
              <div class="w-full mb-5 inline-block">
                <textarea
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-4 w-full">
            <div class="flex justify-between w-full">
              <div class="flex items-center">
                <input
                  id="aggre-check"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                >
                <label
                  for="aggre-check"
                  class="ml-2 text-sm font-medium text-white"
                >
                  Stay updated wit our latest news
                </label>
              </div>

              <div>
                <button class="rounded-full bg-yellow-500 border border-yellow-500 px-24 py-2 text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script>
/* eslint-disable max-len */
import CardSectionFirst from '@components/Fragments/Home/CardSectionFirst';
import CardSectionSecond from '@components/Fragments/Home/CardSectionSecond';

import GlobeSvg from './../../../assets/svg/globe.svg';
import DollarSvg from './../../../assets/svg/dollar.svg';
import PipaSvg from './../../../assets/svg/pipa.svg';

import LandingImage1 from './../../../assets/images/landing-image-1.png';
import LandingImage2 from './../../../assets/images/landing-image-2.png';

export default {
  components: {
    CardSectionFirst,
    CardSectionSecond
  },
  data () {
    return {
      cardSectionFirstList: [
        {
          id: 1,
          title: 'Buy or sell globally, manage it locally',
          description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',
          icon: GlobeSvg
        },
        {
          id: 1,
          title: 'Supporting cost-effective inventory management',
          description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',
          icon: DollarSvg
        },
        {
          id: 1,
          title: 'Large range of ready-made pipes fit for purpose',
          description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',
          icon: PipaSvg
        }
      ],
      landingImage1: LandingImage1,
      landingImage2: LandingImage2
    };
  }
};
</script>

<style scoped>
.globe {
  background-image: url(https://pipesales.com/view2/image/header-background-2.png); 
  background-size: 1024px !important;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.wrapper-banner {
  height: 450px;
}
</style>