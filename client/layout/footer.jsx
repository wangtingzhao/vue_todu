import ClassName from '../assets/styles/footer.styl'
export default {
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render () {
    return (
      <div id={ClassName.footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}