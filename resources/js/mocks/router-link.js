import { shallowMount } from '@vue/test-utils';

export default {
  name: 'router-link',
  render(h) {
    return h('a', this.$slots.default);
  },
};