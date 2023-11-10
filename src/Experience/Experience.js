import * as kokomi from "kokomi.js";

import World from "./World/World";

import Debug from "./Debug";

import resources from "./resources";

export default class Experience extends kokomi.Base {
  constructor(sel = "#sketch") {
    super(sel);

    window.experience = this;

    this.debug = new Debug();

    this.am = new kokomi.AssetManager(this, resources);

    const screenCamera = new kokomi.ScreenCamera(this);
    screenCamera.addExisting()

    this.world = new World(this);
  }
}
