# Light 3D starter

 - Three.JS
 - SCSS
 - Vite
 - GSAP (en cours)

## Three.js
Tous les fichiers Three.js sont gérés dans `src/scripts/scene`, il suffit de faire un export default d'une Class ou d'une fonction et de lui faire prendre `{ scene }` comme argument. Le bundle lui fait ensuite passer toute la scène Three.js.

### *Exemples*
    function  Lights({ scene }) {
	    // Création des lumières
    }
    export  default  Lights
Ou : 

    class Lights {
	   	constructor({ scene }) {
		   	this.scene = scene
	   	}
	   	// Création des lumières
    }
    export  default  Lights

## Autres scripts
Pareil, n'importe quel autre Class/fonction appelé dans src/scripts/modules est appelé automatiquement en prenant son export par défaut.