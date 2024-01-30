import Vue from 'vue';

import { EventBus } from '@configurations/event-bus';

((i) => {
  i.prototype.$api = {};
  i.prototype.$eventBus = EventBus;
})(Vue);
