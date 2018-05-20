var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1200,
    height: 1200,
    scene: {
        preload: preload,
        create: create,
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);
var cardAr = [];
var cardCount = 144;
var index = cardCount;
var scene;
var interval;

function preload() {
    scene = this;
    this.load.image('card', 'assets/card.png');
}

function create() {

    this.add.text(850, 20, name, {
        font: "32px Arial",
        fill: "#fff"
    });

    for (var _i = 0; _i < cardCount; _i++) {
        let card = this.add.sprite(50, _i * 5, "card");
        cardAr.push(card);
    }
    interval = setInterval(move, 2000)
}

function move() {
    index--;
    if (index < 0) {
        clearInterval(interval);
        return;
    }
    let card = cardAr[index];
    scene.tweens.add({
        targets: [card],
        x: 500,
        y: (cardCount - index) * 5,
        duration: 2000
    })
}
