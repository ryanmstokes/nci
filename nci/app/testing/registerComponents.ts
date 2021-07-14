import path from 'path';
import glob from 'glob';
import Vue from 'vue';

/** Register Nuxt Components List
 * Register the nuxt components so that the testing framework
 * has access to them within the tests.
 * https://stackoverflow.com/questions/64989140/nuxt-jest-unknow-custom-element-if-components-is-not-set
 * ** To be used later for testing Vuex Store.
 * @function registerComponents
 * @return void;
*/
function registerComponents(): void {

  // Automatically register all components
  const fileComponents = glob.sync(path.join(__dirname, '../components/**/index.vue'));

  // Iterate through components directory and add each file object to an array
  for (const file of fileComponents) {
    const lastFolder = file.substr(0, file.lastIndexOf('/')).match(/([^\/]*)\/*$/)![1];
    Vue.component(lastFolder, require(file).default);
  }
}

export default registerComponents;
