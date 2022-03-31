const road = {

    name: 'Race Car Lab',
    description: 'Canvas app for basic shapes animating',
    version: '1.0.0',
    author: 'JC',
    license: undefined,

    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    car: undefined,
    framesIndex: 0,
    blocks: [],
    imageInstance: undefined,

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.start()

    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    },
    createCar() {
        this.car = new Car(this.ctx, this.gameSize, this.gameSize.w / 2 - 30, this.gameSize.h - 100, 50, 100)
    },
    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.car.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.car.moveRight()
            }
        }
    },
    setDimensions() {

        this.gameSize = {
            w: this.canvasNode.getAttribute('width'),
            h: this.canvasNode.getAttribute('height')
        }

    },
    drawRoad() {

        //backgroundGreen 
        this.ctx.fillStyle = 'green'

        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

        //grey
        this.ctx.fillStyle = 'grey'

        this.ctx.fillRect(50, 0, this.gameSize.w - 100, this.gameSize.h)


        // white lines 
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.gameSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(430, 0, 10, this.gameSize.h)


        // dashed
        this.ctx.strokeStyle = 'white'

        this.ctx.lineWidth = 10

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([20, 20])      // <--
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {

        this.drawRoad()
        this.car.drawCar()

    }


}
