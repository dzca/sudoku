import { size, block_size, validValues } from './config'
import _ from 'lodash'

const cell = {
    position: { x: 0, y: 0 },
    //valid value 
    value: 0,



    // blockNeighboursByIndex: (index) => {
    //     let p = this.indexToPosition(index);
    //     return this.blockNeighbours(p);
    // },

    // neighbours in the same row
    rowNeighbours: (p) => {
        let neighbours = [];
        _.times(size, (i) => {
            if (i !== p.x) {
                neighbours.push({ x: i, y: p.y });
            }
        });
        return neighbours;
    },

    colNeighbours: (p) => {
        let neighbours = [];
        _.times(size, (i) => {
            if (i !== p.y) {
                neighbours.push({ x: p.x, y: i });
            }
        });
        return neighbours;
    },

    // return array of position
    blockNeighbours: (p) => {
        let neighbours = [];

        // find the left top point of the block
        const ltx = Math.floor(p.x / block_size) * block_size;
        const lty = Math.floor(p.y / block_size) * block_size;

        // calculate all points in the block by index 0-9
        _.times(size, (idx) => {
            const x = (idx % block_size) + ltx;
            const y = Math.floor(idx / block_size) + lty;

            if (x !== p.x || y !== p.y) {
                neighbours.push({ x, y });
            }
        })

        return neighbours;
    },

    neighbours: (p) => {
        // let n = _.union(
        //     rowNeighbours(p),
        //     colNeighbours(p),
        //     blockNeighbours(p),

        // )

        // let neighbours = _.difference(n, [p]);
        let neighbours = this.rowNeighbours(p);
        return neighbours;
    }
}

export default cell

//=======================
import cell from '../src/cell'

describe('testing cell module', () => {

    describe('test cell.rowNeighbours function', () => {
        it('function rowNeighbours exists', () => {
            expect(typeof cell.rowNeighbours).toEqual('function');
        })

        it('function rowNeighbours return points', () => {
            let neighbours = cell.rowNeighbours({ x: 3, y: 1 });
            // console.log('row(3,1) = ', neighbours);
            expect(neighbours[1]).toEqual({ x: 1, y: 1 });
        })

        it('function colNeighbours return points', () => {
            let neighbours = cell.colNeighbours({ x: 3, y: 1 });
            //console.log('col(3,1) = ', neighbours);
            expect(neighbours[3]).toEqual({ x: 3, y: 4 });
        })

        it('function blockNeighbours return points', () => {
            let neighbours = cell.blockNeighbours({ x: 2, y: 4 });
            // console.log('n = ', neighbours);
            expect(neighbours.length).toEqual(8);
            expect(neighbours[3]).toEqual({ x: 0, y: 4 });
        })

        // it('function neighbours return points', () => {
        //     let neighbours = cell.neighbours({ x: 2, y: 4 });
        //     // console.log('n = ', neighbours);
        //     expect(neighbours.length).toEqual(20);
        //     //expect(neighbours[3]).toEqual({ x: 3, y: 3 });
        // })
    })

})

//========================

import { size, block_size, total } from './config'

const board = {
    // cells are indexed form 0 to 80, and the type is SudokuCell
    // 
    cells: [],

    //giving a index, return a position type=(Point)
    // x = coulmn index, start from 0
    // y = row index, start from 0, (y-th row)
    indexToPosition: (index) => {
        return {
            y: Math.floor(index / size),
            x: index % size
        }
    },

    positionToIndex: (position) => {
        return position.y * size + position.x
    },

    // get a cell by position
    getByPosition: (p) => {
        return this.cells[this.positionToIndex(p)];
    },

    // get a cell by index
    getByIndex: (i) => {
        return this.cells[i];
    },

    // set a cell by position, value
    set: (p, v) => {
        this.cells[this.positionToIndex(p)].value = v;

    },

    // fix a cell by index
    fill: (index) => {
        const cell = this.cells[index];
        // cell.neighbours is a set of indexs
        const neighbourValues = cell.neighbours.map((n) => {
            return this.cells[n].value
        })
    },

}

export default board


//=====

describe('testing board module', () => {

    describe('test board.indexToPosition function', () => {
        it('function indexToPosition exists', () => {
            expect(typeof board.indexToPosition).toEqual('function');
        })

        it('function indexToPosition convert idx=12 to p(x=3, y=1)', () => {
            let p = board.indexToPosition(12);
            expect(p).toEqual({ x: 3, y: 1 });
        })

        it('function indexToPosition convert idx=75 to p(x=4, y=7)', () => {
            let p = board.indexToPosition(75);
            expect(p).toEqual({ x: 3, y: 8 });
        })

        it('function indexToPosition convert idx=80 to p(x=8, y=8)', () => {
            let p = board.indexToPosition(80);
            expect(p).toEqual({ x: 8, y: 8 });
        })

        it('function indexToPosition convert idx=0 to p(x=0, y=0)', () => {
            let p = board.indexToPosition(0);
            expect(p).toEqual({ x: 0, y: 0 });
        })
    })

    describe('test board.positionToIndex function', () => {
        it('function positionToIndex exists', () => {
            expect(typeof board.positionToIndex).toEqual('function');
        })

        it('function positionToIndex convert p(x=4, y=7) to index=75', () => {
            let i = board.positionToIndex({ x: 3, y: 8 });
            expect(i).toEqual(75);
        })
    })
})

const myObj = {
    fa: () => {
        return 'aa';
    },

    fb: () => {
        return 'bb';
    },

    fc: (t) => {
        return t.fa() + t.fb();
    }
}

console.log(myObj.fc(myObj));

//===========

// import {Point, SudokuCell} from './SudokuCell'
// import _ from 'lodash'

// const p1 = new Point(2,5)
// const c1 = new SudokuCell(p1);

// console.log(c1.toString())

// _.times(3, (i)=>{
//     console.log(i)
// })
