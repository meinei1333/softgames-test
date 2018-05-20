var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'Fire',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
}

function create ()
{
    var particles = this.add.particles('flares');

    particles.createEmitter({
        frame: 'yellow',
        radial: false,
        x: 300,
        y: 300,
        lifespan: 2000,
        speedX: { min: -100, max: 100 },
        speedY: -300,
        //speedY: { min: -100, max: -800 },
        quantity: 6,
        //gravityX: 0,
        gravityY: -100,
        scale: { start: 0.6, end: 0, ease: 'Power3' },
        blendMode: 'ADD'
    });
}
