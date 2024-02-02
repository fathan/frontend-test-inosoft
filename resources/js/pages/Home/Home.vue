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
        <div class="w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10 oveflow-hidden h-28">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <SelectFilter
                category="1"
                title="Product Type"
                :selectedValue="selectedFilterProductType"
                :options="filterOptionsProductType"
                @onSelectData="onHandleSelectdata($event)"
                @onResetData="onHandleResetdata($event)"
                @filterListItem="onHandleFilterListItem($event)"
              />
            </div>
            <div>
              <SelectFilter
                category="2"
                title="Size"
                :selectedValue="selectedFilterSize"
                :options="filterOptionsSize"
                @onSelectData="onHandleSelectdata($event)"
                @onResetData="onHandleResetdata($event)"
                @filterListItem="onHandleFilterListItem($event)"
              />
            </div>
            <div>
              <SelectFilter
                category="3"
                title="Grade"
                :selectedValue="selectedFilterGrade"
                :options="filterOptionsGrade"
                @onSelectData="onHandleSelectdata($event)"
                @onResetData="onHandleResetdata($event)"
                @filterListItem="onHandleFilterListItem($event)"
              />
            </div>
            <div>
              <SelectFilter
                category="4"
                title="Connection"
                :selectedValue="selectedFilterConnection"
                :options="filterOptionsConnection"
                @onSelectData="onHandleSelectdata($event)"
                @onResetData="onHandleResetdata($event)"
                @filterListItem="onHandleFilterListItem($event)"
              />
            </div>
          </div>
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
import { mapState } from 'vuex';
import { sleep } from '@utils/app';

import CardSectionFirst from '@components/Fragments/Home/CardSectionFirst';
import CardSectionSecond from '@components/Fragments/Home/CardSectionSecond';

import ProductServices from '@services/api/product';

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
  },
  computed: {
    ...mapState('app', {
      filterOptionsProductType: (state) => state.filterOptionsProductType,
      selectedFilterProductType: (state) => state.selectedFilterProductType,
      filterOptionsSize: (state) => state.filterOptionsSize,
      selectedFilterSize: (state) => state.selectedFilterSize,
      filterOptionsGrade: (state) => state.filterOptionsGrade,
      selectedFilterGrade: (state) => state.selectedFilterGrade,
      filterOptionsConnection: (state) => state.filterOptionsConnection,
      selectedFilterConnection: (state) => state.selectedFilterConnection
    })
  },
  mounted () {
    this.initialize();
  },
  methods: {
    async getAllProduct () {
      try {
        let response = await ProductServices.getProducts();
        return response;
      }
      catch (error) {
        console.log(error);
      }
    },
    filterData (data, paramFilter) {
      let filterCriteria = paramFilter;

      const applyFilter = (data, criteria) => {
        if (!criteria) {
          return data; 
        }
        return data.filter((item) => {
          for (const key in criteria) {
            if (item[key] !== criteria[key]) {
              return false;
            }
          }
          return true;
        });
      };

      const filteredData = applyFilter(data, filterCriteria);
      const notFilteredData = data.filter((item) => !applyFilter([item], filterCriteria).length);
      const modifiedNotFilteredData = notFilteredData.map((item) => {
        return { ...item, qty: 0 };
      });

      const combinedData = [...filteredData, ...modifiedNotFilteredData];

      return combinedData;
    },
    getDataProductType (data) {
      const productTypeQtySum = data.reduce((acc, curr) => {
        if (acc[curr.product_type]) {
          acc[curr.product_type] += parseInt(curr.qty);
        }
        else {
          acc[curr.product_type] = parseInt(curr.qty);
        }
        return acc;
      }, {});

      const productTypeQtyArray = Object.keys(productTypeQtySum).map((productType) => ({
        product_type: productType,
        total_qty: productTypeQtySum[productType]
      }));

      return productTypeQtyArray;
    },
    getDataSize (data) {
      const sizeQtySum = data.reduce((acc, curr) => {
        if (acc[curr.size]) {
          acc[curr.size] += parseInt(curr.qty);
        }
        else {
          acc[curr.size] = parseInt(curr.qty);
        }
        return acc;
      }, {});

      const sizeQtyArray = Object.keys(sizeQtySum).map((size) => ({
        size,
        total_qty: sizeQtySum[size]
      }));

      return sizeQtyArray;
    },
    getDataGrade (data) {
      const gradeQtySum = data.reduce((acc, curr) => {
        if (acc[curr.grade]) {
          acc[curr.grade] += parseInt(curr.qty);
        }
        else {
          acc[curr.grade] = parseInt(curr.qty);
        }
        return acc;
      }, {});

      const gradeQtyArray = Object.keys(gradeQtySum).map((grade) => ({
        grade,
        total_qty: gradeQtySum[grade]
      }));

      return gradeQtyArray;
    },
    getDataConnection (data) {
      const connectionQtySum = data.reduce((acc, curr) => {
        if (acc[curr.connection]) {
          acc[curr.connection] += parseInt(curr.qty);
        }
        else {
          acc[curr.connection] = parseInt(curr.qty);
        }
        return acc;
      }, {});

      const connectionQtyArray = Object.keys(connectionQtySum).map((connection) => ({
        connection,
        total_qty: connectionQtySum[connection]
      }));

      return connectionQtyArray;
    },
    async initialize (withLoader = false) {
      if (withLoader) {
        this.$eventBus.$emit('openLoaderFullPage');
        await sleep(1000);
      }

      const res = await this.getAllProduct();
      const body = {};

      if (this.selectedFilterProductType !== '') {
        Object.assign(body, {
          product_type: this.selectedFilterProductType
        });
      }
      if (this.selectedFilterSize !== '') {
        Object.assign(body, {
          size: this.selectedFilterSize
        });
      }
      if (this.selectedFilterGrade !== '') {
        Object.assign(body, {
          grade: this.selectedFilterGrade
        });
      }
      if (this.selectedFilterConnection !== '') {
        Object.assign(body, {
          connection: this.selectedFilterConnection
        });
      }

      // ////////////////////////////////////////////////

      const resFilterData = this.filterData(res, body);

      // ////////////////////////////////////////////////
      
      const resDataProductType = this.getDataProductType(resFilterData);
      this.$store.dispatch('app/setFilterOptionsProductType', resDataProductType);

      const resDatasSize = this.getDataSize(resFilterData);
      this.$store.dispatch('app/setFilterOptionsSize', resDatasSize);
      
      const resDataGrade = this.getDataGrade(resFilterData);
      this.$store.dispatch('app/setFilterOptionsGrade', resDataGrade);
      
      const resDataConnection = this.getDataConnection(resFilterData);
      this.$store.dispatch('app/setFilterOptionsConnection', resDataConnection);

      if (withLoader) {
        this.$eventBus.$emit('closeLoaderFullPage');
      }
    },
    onHandleSelectdata (event) {
      if (event.category === '1') {
        this.$store.dispatch('app/setSelectedFilterProductType', event.data.product_type);
      }
      if (event.category === '2') {
        this.$store.dispatch('app/setSelectedFilterSize', event.data.size);
      }
      if (event.category === '3') {
        this.$store.dispatch('app/setSelectedFilterGrade', event.data.grade);
      }
      if (event.category === '4') {
        this.$store.dispatch('app/setSelectedFilterConnection', event.data.connection);
      }

      this.initialize(true);
    },
    onHandleResetdata (event) {
      if (event.category === '1') {
        this.$store.dispatch('app/setSelectedFilterProductType', '');
      }
      if (event.category === '2') {
        this.$store.dispatch('app/setSelectedFilterSize', '');
      }
      if (event.category === '3') {
        this.$store.dispatch('app/setSelectedFilterGrade', '');
      }
      if (event.category === '4') {
        this.$store.dispatch('app/setSelectedFilterConnection', '');
      }

      this.initialize(true);
    },
    onHandleFilterListItem (event) {
      const valueSearch = new RegExp(event.value, 'i');

      if (event.category === '1') {
        const filtered = this.filterOptionsProductType.filter((item) => {
          return valueSearch.test(item.product_type);
        });

        if (filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsProductType', filtered);
        }
      }
      if (event.category === '2') {
        const filtered = this.filterOptionsSize.filter((item) => {
          return valueSearch.test(item.size);
        });

        if (filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsSize', filtered);
        }
      }
      if (event.category === '3') {
        const filtered = this.filterOptionsGrade.filter((item) => {
          return valueSearch.test(item.grade);
        });

        if (filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsGrade', filtered);
        }
      }
      if (event.category === '4') {
        const filtered = this.filterOptionsConnection.filter((item) => {
          return valueSearch.test(item.connection);
        });

        if (filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsConnection', filtered);
        }
      }
      if (event.value === '') {
        this.initialize();
      }
    }
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