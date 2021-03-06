function Finger(string, fret) {
    this.string = string;
    this.fret = fret;
    this.fingerColour = "DeepSkyBlue";
}

Finger.prototype.draw = function(x, y) {
    this.circle = new createjs.Shape();
    this.circle.graphics.beginFill(this.fingerColour).drawCircle(0, 0, 25);
    this.circle.x = x;
    this.circle.y = y;
    return this.circle;
}