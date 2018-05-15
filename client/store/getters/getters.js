export default {
  // fullName: state => state.fristName + '' + state.lastName
  fullName (state) {
    return `${state.fristName} ${state.lastName}`
  }
}
