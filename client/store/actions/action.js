export default {
  updataCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updataCount', {
        num: data.num
      })
    }, data.time)
  }
  // updataCountAsync ({commit}, data) {
  //   setTimeout(() => {
  //     commit('updataCount', {
  //       num: data.num
  //     })
  //   }, data.time)
  // }
}
