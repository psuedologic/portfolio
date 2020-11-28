import Zdog from "zdog"

const WIDTH = 120
const HEIGHT = 300

class Pillar {
    constructor(anchor, position, scale) {
        this.shape
        this.anchor = anchor
        this.position = position
        this.angle = {x: 0, y: 0, z: 0}
        this.scale = scale
        this.create()
        
    }
    create() {
        this.shape = new Zdog.Box({
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
            scale: this.scale,
            translate: { x: this.position.x,
                         y: this.position.y,
                         z: this.position.z},
        });
    }
    translate(vector) {
        console.log(vector)
        this.shape.translate = 
        { x: this.position.x + vector.x,
            y: this.position.y + vector.y,
            z: this.position.z + vector.z}
    }
    rotate(vector) {
        console.log(vector)
        this.shape.rotate = 
        { x: this.angle.x + vector.x,
            y: this.angle.y + vector.y,
            z: this.angle.z + vector.z}
    }
}

export default Pillar;