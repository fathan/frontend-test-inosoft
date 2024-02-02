<!-- eslint-disable max-len vue/no-v-html -->
<template>
  <div>
    <button
      class="w-full bg-gray-100 border border-gray-300 text-gray-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-5 items-center"
      type="button"
    >
      <div
        class="flex justify-between"
        @click="onHandleVisibleDropdown"
      >
        <span>{{ title }} </span>
        <FontAwesomeIcon
          class="text-sm text-yellow-600"
          :icon="(visibleDropdown ? 'chevron-up' : 'chevron-down')"
        />
      </div>

      <div class="w-full text-left">
        <template v-if="selectedValue !== ''">
          <div class="flex justify-between" @click="onClickResetFilter(category)">
            <span class="font-bold text-yellow-600">
              {{ selectedValue }}
            </span>
            <FontAwesomeIcon
              class="text-sm text-gray-500"
              icon="times-circle"
            />
          </div>
        </template>
        <template v-else>
          <span class="font-bold text-yellow-600 uppercase">
            All
          </span>
        </template>
      </div>
    </button>

    <div
      v-show="visibleDropdown"
      class="w-full mt-2 z-10 bg-white border border-gray-300 rounded-lg "
    >
      <div class="p-3">
        <div>
          <p class="text-sm text-gray-500" v-html="computeTitleList(title)" />
        </div>

        <label for="input-group-search" class="sr-only">
          Search
        </label>

        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon
              class="text-sm text-gray-500"
              icon="search"
            />
          </div>
          <input
            v-model="searchValue"
            type="text"
            class="block w-full p-2 pl-6 ps-10 text-sm text-gray-900 border-b border-gray-300 focus:outline-none focus:ring-white"
            placeholder="Search"
            @keyup="onHandleFilterListItem"
          >
        </div>
      </div>

      <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
        <li
          v-for="(item, i) in options"
          :key="i"
          class="flex flex-row justify-between py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          @click="onHandleSelectItem(category, item)"
        >
          <div>
            <span v-if="category === '1'">
              {{ item.product_type }}
            </span>
            <span v-if="category === '2'">
              {{ item.size }}
            </span>
            <span v-if="category === '3'">
              {{ item.grade }}
            </span>
            <span v-if="category === '4'">
              {{ item.connection }}
            </span>
          </div>
          <div>
            <span class="font-bold text-yellow-500">
              {{ computeFormatQty(item.total_qty) }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatedNumber } from '@utils/app';

export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    selectedValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      visibleDropdown: false,
      searchValue: '',
      debounce: null
    };
  },
  methods: {
    onHandleVisibleDropdown () {
      this.visibleDropdown = !this.visibleDropdown;
    },
    onClickResetFilter (category) {
      this.$emit('onResetData', {
        category
      });

      this.visibleDropdown = false;
    },
    computeTitleList (type) {
      let result = '';

      if (type === 'Product Type') {
        result = 'Select a <strong>Product Type</strong> below';
      }
      if (type === 'Size') {
        result = 'Select an <strong>OD</strong> below';
      }
      if (type === 'Grade') {
        result = 'Select a <strong>Grade Type</strong> below';
      }
      if (type === 'Connection') {
        result = 'Select a <strong>Connection Type</strong> below';
      }

      return result;
    },
    computeFormatQty (param) {
      return formatedNumber(param);
    },
    onHandleSelectItem (category, data) {
      this.$emit('onSelectData', {
        category,
        data
      });

      this.onHandleVisibleDropdown();
    },
    onHandleFilterListItem () {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        const value = this.searchValue;
        const category = this.category;

        this.$emit('filterListItem', {
          category,
          value
        });
      }, 1000);
    }
  }
};
</script>