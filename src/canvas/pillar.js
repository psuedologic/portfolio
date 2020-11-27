import Zdog from "zdog"

const WIDTH = 120
const HEIGHT = 300

class Pillar {
    constructor(anchor, position, scale) {
        this.anchor = anchor
        this.position = position
        this.scale = scale
        this.create()
        
    }
    create() {
        new Zdog.Box({
            addTo: this.anchor,
            width: WIDTH,
            height: HEIGHT,
            depth: WIDTH,
            stroke: 0,
            color: '#C25',
            leftFace: '#EA0',
            rightFace: '#E62',
            topFace: '#ED0',
            bottomFace: '#636',
            translate: { x: this.position.x,
                         y: this.position.y,
                         z: this.position.z}
        });
    }
}

export default Pillar;