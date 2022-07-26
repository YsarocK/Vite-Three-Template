import './styles/main.scss'
import Base from './scripts/scene/init'

// Automatically load JS files in modules
const modules = import.meta.globEager(`./scripts/modules/*.js`)
for (const path in modules) {
  if(modules[path].default !== undefined) {
    if(modules[path].default.prototype.constructor) {
      new modules[path].default
    } else if(typeof modules[path].default === 'function') {
      modules[path].default()
    }
  }
}

//Load Three.js scene & partials
const scene = []
const sceneLoader = () => {
  const base = new Base()
  import.meta.env.MODE === 'development' && console.log(`init.js loaded`)
  
  const modules = import.meta.globEager(`./scripts/scene/*/*.js`, { import: 'default' })
  for (const path in modules) {
    let module;
    if(modules[path].default.prototype.constructor) {
      new modules[path].default(base)
    } else if(typeof modules[path].default === 'function') {
      modules[path].default(base)
    } else {
      return
    }
    import.meta.env.MODE === 'development' && console.log(`${path.split('/')[path.split('/').length - 1]} loaded`)
    scene.push(module)
  }
}

sceneLoader()