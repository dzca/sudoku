import { size, block_size, validValues } from './config'
import _ from 'lodash'



class Cell {

    constructor(p) {
        this.position = p;
        this.neighbours = this.sortedNeighbours();
    }

    // {i.y * size + i.x}
    // neighbours in the same row
    neighboursInRow() {
        let neighbours = [];
        _.times(size, (i) => {
            if (i !== this.position.x) {
                neighbours.push({ x: i, y: this.position.y });
            }
        });
        return neighbours;
    }

    // neighbours in the same column
    neighboursInCol() {
        let neighbours = [];
        _.times(size, (i) => {
            if (i !== this.position.y) {
                neighbours.push({ x: this.position.x, y: i });
            }
        });
        return neighbours;
    }

    // neighbours in the same 3x3 block
    // return array of position
    blockNeighbours() {
        let neighbours = [];

        // find the left top point of the block
        const ltx = Math.floor(this.position.x / block_size) * block_size;
        const lty = Math.floor(this.position.y / block_size) * block_size;

        // calculate all points in the block by index 0-9
        _.times(size, (idx) => {
            const x = (idx % block_size) + ltx;
            const y = Math.floor(idx / block_size) + lty;

            if (x !== this.position.x || y !== this.position.y) {
                neighbours.push({ x, y });
            }
        })

        return neighbours;
    }

    // calculate neighbours and sort by index
    sortedNeighbours() {
        let neighbours = _.uniqBy([
            ...this.neighboursInRow(),
            ...this.neighboursInCol(),
            ...this.blockNeighbours()
        ], (c) => {return c.y * size + c.x});
        
        // ['asc', 'desc']
        let sortedByIndex = _.orderBy(neighbours, ['y', 'x'], ['asc', 'asc']);
        // return neighbours;
        return sortedByIndex;
    }

    toString(){
        return '(' + this.position.x + ', ' + this.position.y + ')';
    }
}

export default Cell