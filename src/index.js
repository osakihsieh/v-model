/**
 * Model
 * based on path-to-regexp, axios and bluebird
 *
 * @author xiaomi
 */

import Model from './model';
import install from './install';

// plugin support
Model.install = install;

// Vue use
if(typeof Vue !== 'undefined') {
    Vue.use(Model);
}

export default Model;
