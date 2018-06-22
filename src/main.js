import Vue from 'vue';
import App from './App';

new Vue({
  // render: function(createElement) {
  //   return createElement(App);
  // }
  render: h => h(App),
  // el: '#app' - identical to $mount('#app')
}).$mount('#app');

