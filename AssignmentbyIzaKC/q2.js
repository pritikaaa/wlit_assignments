const square = {
    length: 4,
    breadth: 4,
    area: function() {
        return this.length * this.breadth;
    }
};

const rectangle = {
    length: 5,
    breadth: 10,
    area: function() {
        return this.length * this.breadth;
    }
};

console.log("Area of the square:", square.area());
console.log("Area of the rectangle:", rectangle.area());
