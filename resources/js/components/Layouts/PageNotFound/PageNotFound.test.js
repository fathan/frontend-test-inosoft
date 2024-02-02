// PageNotFound.spec.js

import { mount } from '@vue/test-utils';
import PageNotFound from './PageNotFound.vue';

describe('TEST PageNotFound', () => {
  it('renders correctly', () => {
    const wrapper = mount(PageNotFound);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the error message', () => {
    const wrapper = mount(PageNotFound);
    expect(wrapper.text()).toContain('Page Not Found');
  });

  it('redirects to the dashboard on button click', async () => {
    const $router = {
      push: jest.fn(),
    };
    const wrapper = mount(PageNotFound, {
      mocks: {
        $router,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    expect($router.push).toHaveBeenCalledWith({ path: '/' });
  });
});
