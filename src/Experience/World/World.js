import * as kokomi from "kokomi.js";

import Slider from './Slider';
export default class World extends kokomi.Component {
  constructor(base) {
    super(base);

    this.base.am.on("ready", async () => {
      console.log('ready')
      this.slider = new Slider(this.base);
      await this.slider.addExisting();
      document.querySelector('.loader-screen')?.classList.add('hollow');
    });
  }
}
