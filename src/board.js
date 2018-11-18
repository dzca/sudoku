import { size, block_size, total, validValues } from './config'
import _ from 'lodash'
import sudoku from './utils'
import Cell from './cell';

class Board {
    constructor() {
        this.initCells();
        // this.position = p;
        // this.neighbours = this.sortedNeighbours();
    }

    initCells() {
        this.cells = _.times(total, (index) =>{
            const p = sudoku.indexToPosition(index);
            return new Cell(p);
        })
    }

    print() {
        // this.cells.forEach((i) =>{
        //     console.log('cell [', i.position.x, ',', i.position.y, ']=', i.value);
        // })

        const line = '--------------------------';
        console.log(line)
        _.times(size, (y) => {
            _.times(size, (x) => {
                const cell = this.cells[sudoku.positionToIndex({ x, y })];

                if (x % block_size === 0) {
                    process.stdout.write('| ');
                }
                process.stdout.write(`${cell.value} `);
            });
            process.stdout.write('|\n');
            if (y % block_size === 2) {
                console.log(line);
            }
        });
    }

    clear() {
        for (const cell of this.cells) {
            cell.value = 0;
        }
    }

    fillBoard(){
        // start from index 0 recursively
        if(!this.fill(0)) {
            console.error('Unable to fill board');
        }
    }

    // fill each cell
    fill(index){
        const cell = this.cells[index];
        const neighbourValues = cell.neighbours.map((p) => {
            return this.getCellByPosition(p).value
        });
        const remainingOptions = _.difference(validValues, neighbourValues);

        for(let option of remainingOptions) {
            cell.value = option;

            if(index === this.cells.length - 1 || this.fill(index + 1)){
                return true;
            }
        }

        cell.value = 0;
        return false;
    }

    getCellByPosition(p) {
        return this.cells[sudoku.positionToIndex(p)]
    }
}

export default Board

