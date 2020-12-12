import Zdog from "zdog"

const WIDTH_BOOK = 60
const HEIGHT_BOOK = 80
const WIDTH_CURLY_BRACE = 18
const HEIGHT_CURLY_BRACE = 28
const WIDTH_TRIANGLE = 40
const HEIGHT_TRIANGLE = 30
const DEFAULT_HEIGHT = 150

const DEFAULT_STROKE = 3

const COLORS = {red: "#C25",
                white: "#FFF",
                blue: "#1414D5",
                yellow: "#faf019",
                green: "#14D218",
                book: "#215B8F",
                silver: "#8B8E8F"}

let x=0
let y=0
let z=0

const DEFAULT_PIECE = {
    color: "red",
    rotation: {},
    translate: {},
    pattern: [{translate: {x,y,z}, rotation: {x,y,z}, scale: 1}]
}

function makePeace(peace) {
    return Object.assign({}, DEFAULT_PIECE, peace)
}

const ICON_TEMPLATE = {
    bookClosed: {
        zdogClass: "Rect",
        pieces: [
            {color: "blue", translate: {x, y, z: -10}},
            {color: "white", translate: {x, y, z: -5}},
            {color: "white", translate: {x, y, z}},
            {color: "white", translate: {x, y, z: 5}},
            {color: "blue", translate: {x, y, z: 10}},
            {color: "blue", width: 20, translate: {x: WIDTH_BOOK / 2 + 1, y, z}, rotation: {y: Math.PI / 2}},
            {color: "blue", width: 20, translate: {x: WIDTH_BOOK / 2 -1, y, z}, rotation: {y: Math.PI / 2}}]
    },
    bookOpen: {
        zdogClass: "Rect",
        pieces: [
            {color: "white", translate: {x, y, z: -10}, rotation: {y: Math.PI / 8}},
            {color: "white", translate: {x, y, z: -7}, rotation: {y: Math.PI / 16}},
            {color: "white", translate: {x, y, z}},
            {color: "white", translate: {x, y, z: 7}, rotation: {y: -Math.PI / 16}},
            {color: "white", translate: {x, y, z: 10}, rotation: {y: -Math.PI / 8}},
            {color: "green", width: 20, translate: {x: WIDTH_BOOK / 2 - 1, y, z}, rotation: {y: Math.PI / 2}},
            {color: "green", width: 20, translate: {x: WIDTH_BOOK / 2 + 1, y, z}, rotation: {y: Math.PI / 2}},
            {color: "green", translate: {x, y, z: 20}, rotation: {y: -Math.PI / 8}},
            {color: "green", translate: {x, y, z: -20}, rotation: {y: Math.PI / 8}},]
    },
    bookStacked: {
        zdogClass: "Rect",
        pieces: [        
            //Top book
            {color: "book", translate: {x, y: -30, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
            {color: "white", translate: {x, y: -25, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
            {color: "white", translate: {x, y: -20, z}, rotation: {x:Zdog.TAU/4, z:-Zdog.TAU/16}},
            {color: "white", translate: {x, y: -15, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
            {color: "book", translate: {x, y: -10, z}, rotation: {x:Zdog.TAU/4, z: -Zdog.TAU/16}},
            //Middle Book
            {color: "book", translate: {x, y: -10, z}, rotation: {x:Zdog.TAU/4}},
            {color: "white", translate: {x, y: -5, z}, rotation: {x:Zdog.TAU/4}},
            {color: "white", translate: {x, y, z}, rotation: {x:Zdog.TAU/4}},
            {color: "white", translate: {x, y: 5, z}, rotation: {x:Zdog.TAU/4}},
            {color: "book", translate: {x, y: 10, z}, rotation: {x:Zdog.TAU/4}},
            //Bottom Book
            {color: "book", translate: {x, y: 10, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
            {color: "white", translate: {x, y: 15, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
            {color: "white", translate: {x, y: 20, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
            {color: "white", translate: {x, y: 25, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
            {color: "book", translate: {x, y: 30, z}, rotation: {x:Zdog.TAU/4, z: Zdog.TAU/16}},
    ]},
    curlyBraces: {
        zdogClass: "Shape",
        pieces: [
            {color: "silver", rotation: {y: Zdog.TAU/4}, translate: {x, y: -30, z}, closed: false,
             path: [
                { x: WIDTH_CURLY_BRACE, y: 2 * HEIGHT_CURLY_BRACE },
                { arc: [
                    { x: 0, y: 2 * HEIGHT_CURLY_BRACE },
                    { x: 0, y: HEIGHT_CURLY_BRACE },
                ]},
                { arc: [
                    { x:  0, y:  0 },
                    { x: -WIDTH_CURLY_BRACE, y: 0 },
                ]},
                { arc: [
                    { x:  -0, y: 0 },
                    { x:  0, y: -HEIGHT_CURLY_BRACE },
                ]},
                { arc: [
                    { x: 0, y: -2 * HEIGHT_CURLY_BRACE },
                    { x: WIDTH_CURLY_BRACE, y: -2 * HEIGHT_CURLY_BRACE },
                ]}
              ],
            pattern: [
                { rotation: {x, y, z},
                    translate: {x, y, z: -2 * WIDTH_CURLY_BRACE}}, 
                { rotation: {x,y: Zdog.TAU/2,z},
                    translate: {x, y, z: 2 * WIDTH_CURLY_BRACE}}
                ]
            }
        ]
    },
    triangle: {
        zdogClass: "Shape",
        pieces: [
            {color: "yellow", rotation: {z: Zdog.TAU/2, y: -Zdog.TAU/4}, translate: {x, y: -25, z}, 
             path: [
                { x: -WIDTH_TRIANGLE, y: -HEIGHT_TRIANGLE },
                { x: WIDTH_TRIANGLE, y: -HEIGHT_TRIANGLE },
                { x: -WIDTH_TRIANGLE, y: HEIGHT_TRIANGLE },
                { x: -WIDTH_TRIANGLE, y: -HEIGHT_TRIANGLE },
              ],
            pattern: [
                { scale: 1}, 
                { scale: 0.85},
                { scale: 0.7},
                { scale: 0.6}
                ]
            }
        ]
    }
}

//Add defaults
Object.values(ICON_TEMPLATE).forEach(icon => {
    icon.pieces.forEach(function(piece, i, pieces) {
        pieces[i] = makePeace(piece)
    })
})

class Icon {
    constructor(anchor, position, icon, stroke, fill, scale) {
        this.anchor = anchor
        this.position = position
        this.icon = ICON_TEMPLATE[icon]
        this.stroke = (stroke ? stroke : DEFAULT_STROKE)
        this.fill = fill
        this.shape = new Zdog.Anchor({addTo: anchor})
        console.log(this)
        this.angle = {x: 0, y: 0, z: 0}
        this.scale = scale ? scale : 1.0,
        
        this.colors = {
            color: '#C25',
            leftFace: '#EA0',
            rightFace: '#E62',
            topFace: '#ED0',
            bottomFace: '#636'}
        this.create()
    }
    // setColors(colors) {
    //     this.shape.color = colors.color
    //     this.shape.leftFace = colors.leftFace
    //     this.shape.rightFace = colors.rightFace
    //     this.shape.topFace = colors.topFace
    //     this.shape.bottomFace = colors.bottomFace
    //     this.colors = colors
    // }
    create() {
        this.icon.pieces.forEach( piece => {
            piece.pattern.forEach( pattern => {
                let template = Object.assign({translate: {x: 0, y: 0, z: 0}, rotation: {x: 0, y: 0, z: 0}, scale: 1}, pattern)

                new Zdog[this.icon.zdogClass] ({
                    addTo: this.shape,
                    position: this.position,
                    width: piece.width ? piece.width : WIDTH_BOOK,
                    height: HEIGHT_BOOK,
                    stroke: this.stroke,
                    fill: this.fill,
                    color: COLORS[piece.color],
                    scale: this.scale * template.scale,
                    closed: this.closed,
                    translate: { 
                        x: piece.translate.x + this.position.x + template.translate.x,
                        y: piece.translate.y - DEFAULT_HEIGHT - HEIGHT_BOOK - 10 + template.translate.y,
                        z: piece.translate.z + this.position.z + template.translate.z
                    },
                    rotate: {
                        x: piece.rotation.x + template.rotation.x,
                        y: piece.rotation.y + template.rotation.y,
                        z: piece.rotation.z + template.rotation.z,
                    },
                    path: piece.path
                })
            })
        })
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
