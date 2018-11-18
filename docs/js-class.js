class Point {
    // x = position in row, start from 0
    // y = position in column, start from 0
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // toString() {
    //     return '(' + this.p.x + ', ' + this.p.y + ')';
    // }
}

class SudokuCell {
    constructor(p) {
        this.position = p;
    }

    toString() => {
    //return '(' + this.position.toString() +')';
    return '(' + this.position.x + ', ' + this.position.y + ')';
}
}

const myObj = (
    fa: () => {
        return 'aa';
    },

    fb: () => {
        return 'bb';
    },

    fc: () => {
        return this.fa() + this.fb();
    }
}



export { Point, SudokuCell } 