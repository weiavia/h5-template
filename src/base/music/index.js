import WaitComponent from './music'

const Music = {}

Music.install = function(Vue) {
  const MusicConstructor = Vue.extend(WaitComponent)
  const instance = new MusicConstructor()

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$play = () => {
    instance.play()
  }
}

export default Music