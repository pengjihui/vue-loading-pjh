import LoadingComponent from './loading.vue'
let $vm
export default {
  install (Vue, option) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(LoadingComponent)
      $vm = new LoadingPlugin({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)
    }
    $vm.show = false
    let loading = {
      show (text = '加载中') {
        $vm.show = true

        $vm.text = text
      },
      hide () {
        $vm.show = false
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = loading
    }

    // Vue.prototype.$loading = Vue.$loading;

    Vue.mixin({
      created () {
        this.$loading = Vue.$loading
      }
    })
  }
}
