var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 800,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var emoijArray;
var scene;

function preload() {
    this.load.atlas('emoij', 'assets/emoij.png', 'assets/emoij.json');
    this.load.json('emoij', 'assets/emoij.json');
}

function create() {
    emoijArray = this.cache.json.get('emoij');
    scene = this;

    var times = getRandom(1, 5);
    for (var i = 0; i < times; i++) {
        createEmoij();
    }
    times = getRandom(1, 5);
    for (var i = 0; i < times; i++) {
        createText();
    }
}

function createEmoij() {
    var name = emoijArray.frames[getRandom(0, emoijArray.frames.length)].filename;
    scene.add.sprite(getRandom(0, config.width - 150), getRandom(0, config.height - 150), 'emoij', name);
}

function createText() {
    var name = emoijArray.frames[getRandom(0, emoijArray.frames.length)].filename;
    scene.add.text(getRandom(0, config.width - 150), getRandom(0, config.height - 150), name, {
        font: getRandom(10, 50) + "px Arial",
        fill: "#fff"
    });
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
