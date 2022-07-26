export default class Lights {
  constructor({ scene }) {
    this.scene = scene
    this.init()
  }

  init() {
    console.log('lights initialized')
  }
}