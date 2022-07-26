import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, PCFSoftShadowMap, ACESFilmicToneMapping, sRGBEncoding } from "three";

export default class Base {
  constructor() {
    this.container = document.querySelector("#scene")
    this.init()
  }

  init(container) {
    console.log('scene initialized')

    if(container) {
      this.container = document.querySelector(container)
    }

    const pixelRatio = window.devicePixelRatio;

    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.toneMappingExposure = 0.6;
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.powerPreference = "high-performance";

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      20,
      this.width / this.height,
      1,
      10000
    );

    this.camera.position.set(0, 15, 100);
    this.camera.lookAt(new Vector3(0, 0, 0));

    this.handleResize()
    this.initViewport()
    this.render()
  }

  render = () => {
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => {
      this.render();
    });
  }

  initViewport() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  handleResize = () => {
    window.addEventListener('resize', () => {
      this.initViewport()
    })
  }
}