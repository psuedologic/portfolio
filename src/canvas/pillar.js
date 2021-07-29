import Zdog from "zdog"

const WIDTH = 120
const HEIGHT = 400

class Pillar {
    constructor(anchor, position) {
        this.shape
        this.anchor = anchor
        this.position = position
        this.angle = {x: 0, y: 0, z: 0}
        this.scale = {x: 1, y: 1, z: 1}
        this.colors = {
            color: '#C25',
            leftFace: '#EA0',
            rightFace: '#E62',
            topFace: '#ED0',
            bottomFace: '#636'}
        this.create()
        
    }
    setColors(colors) {
        this.shape.color = colors.color
        this.shape.leftFace = colors.leftFace
        this.shape.rightFace = colors.rightFace
        this.shape.topFace = colors.topFace
        this.shape.bottomFace = colors.bottomFace
        this.colors = colors
    }
    create() {
        this.shape = new Zdog.Box({
            addTo: this.anchor,
            width: WIDTH,
            height: HEIGHT,
            depth: WIDTH,
            fill: false,
            stroke: 3,
            scale: this.scale,
            translate: { x: this.position.x,
                         y: this.position.y,
                         z: this.position.z},
        });
    }
    translate(vector) {
        this.shape.translate = 
        { x: this.position.x + vector.x,
            y: this.position.y + vector.y,
            z: this.position.z + vector.z}
    }
    rotate(vector) {
        this.shape.rotate = 
        { x: this.angle.x + vector.x,
            y: this.angle.y + vector.y,
            z: this.angle.z + vector.z}
    }
    addScale(scaler) {
        this.scale.x = this.scale.x + scaler
        this.scale.y = this.scale.y + scaler
        this.scale.z = this.scale.z + scaler
        this.shape.scale = this.scale
    }
    resetScale() {
        this.scale = {x: 1, y: 1, z: 1}
        this.shape.scale = this.shape
    }
}

export default Pillar;