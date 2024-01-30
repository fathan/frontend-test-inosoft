import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export const add = library.add;

library.add(fas);
library.add(fab);
library.add(far);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

export { FontAwesomeIcon };
