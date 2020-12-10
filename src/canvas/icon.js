import Zdog from "zdog"

const WIDTH = 60
const HEIGHT = 80
const DEFAULT_HEIGHT = 150

const COLORS = {red: "#C25",
                white: "#FFF",
                blue: "#1414D5",
                green: "#14D218"}

let x=0
let y=0
let z=0

const ICON_TEMPLATE = {
    bookClosed: [
        {color: "blue", translate: {x, y, z: -10}, rotation: {}},
        {color: "white", translate: {x, y, z: -5}, rotation: {}},
        {color: "white", translate: {x, y, z}, rotation: {}},
        {color: "white", translate: {x, y, z: 5}, rotation: {}},
        {color: "blue", translate: {x, y, z: 10}, rotation: {}},
        {color: "blue", width: 20, translate: {x: WIDTH / 2 + 1, y, z}, rotation: {y: Math.PI / 2}},
        {color: "blue", width: 20, translate: {x: WIDTH / 2 -1, y, z}, rotation: {y: Math.PI / 2}}],
    bookOpen: [
        {color: "white", translate: {x, y, z: -10}, rotation: {y: Math.PI / 8}},
        {color: "white", translate: {x, y, z: -7}, rotation: {y: Math.PI / 16}},
        {color: "white", translate: {x, y, z}, rotation: {}},
        {color: "white", translate: {x, y, z: 7}, rotation: {y: -Math.PI / 16}},
        {color: "white", translate: {x, y, z: 10}, rotation: {y: -Math.PI / 8}},
        {color: "green", width: 20, translate: {x: WIDTH / 2 - 1, y, z}, rotation: {y: Math.PI / 2}},
        {color: "green", width: 20, translate: {x: WIDTH / 2 + 1, y, z}, rotation: {y: Math.PI / 2}},
        {color: "green", translate: {x, y, z: 20}, rotation: {y: -Math.PI / 8}},
        {color: "green", translate: {x, y, z: -20}, rotation: {y: Math.PI / 8}},],
    bookStacked: [
        //Top book
        {color: "red", translate: {x, y: -30, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
        {color: "white", translate: {x, y: -25, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
        {color: "white", translate: {x, y: -20, z}, rotation: {x:Zdog.TAU/4, z:-Zdog.TAU/16}},
        {color: "white", translate: {x, y: -15, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
        {color: "red", translate: {x, y: -10, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 + 1, y: -20, z}, rotation: {x: -Zdog.TAU/4, y: Zdog.TAU/4}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 -1, y: -20, z}, rotation: {x: -Zdog.TAU/4, y: Zdog.TAU/4}},
        //Middle Book
        {color: "red", translate: {x, y: -10, z}, rotation: {x:Zdog.TAU/4}},
        {color: "white", translate: {x, y: -5, z}, rotation: {x:Zdog.TAU/4}},
        {color: "white", translate: {x, y, z}, rotation: {x:Zdog.TAU/4}},
        {color: "white", translate: {x, y: 5, z}, rotation: {x:Zdog.TAU/4}},
        {color: "red", translate: {x, y: 10, z}, rotation: {x:Zdog.TAU/4}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 + 1, y, z}, rotation: {x:Zdog.TAU/4, y: Zdog.TAU/4}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 -1, y, z}, rotation: {x:Zdog.TAU/4, y: Zdog.TAU/4}},
        //Bottom Book
        {color: "red", translate: {x, y: 10, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
        {color: "white", translate: {x, y: 15, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
        {color: "white", translate: {x, y: 20, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
        {color: "white", translate: {x, y: 25, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
        {color: "red", translate: {x, y: 30, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 + 1, y: 20, z}, rotation: {x:Zdog.TAU/4, y: Zdog.TAU/4}},
        // {color: "red", width: 20, translate: {x: WIDTH / 2 -1, y: 20, z}, rotation: {x:Zdog.TAU/4, y: Zdog.TAU/4}}
    ]
}

class Icon {
    constructor(anchor, position, scale, icon) {
        this.anchor = anchor
        this.shape = new Zdog.Anchor({addTo: anchor})
        this.position = position
        console.log(position, this.positon)
        console.log(DEFAULT_HEIGHT + HEIGHT + 10)
        this.angle = {x: 0, y: 0, z: 0}
        this.scale = scale,
        this.icon = ICON_TEMPLATE[icon]
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
        
            addTo: this.shape,
            position: this.position,
            width: piece.width ? piece.width : WIDTH,
            height: HEIGHT,            
            stroke: 3,
            fill: 1,
            color: COLORS[piece.color],
            scale: this.scale,
            translate: { 
                x: piece.translate.x + this.position.x,
                y: piece.translate.y -DEFAULT_HEIGHT - HEIGHT - 10,
                z: piece.translate.z + this.position.z},
            rotate: {
                x: piece.rotation.x,
                y: piece.rotation.y,
                z: piece.rotation.z,
            }
        }))

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
}

export default Icon;
