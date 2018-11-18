import Cell from '../src/cell'

describe('testing cell module', () => {


    it('function neighboursInRow exists', () => {
        let cell = new Cell({ x: 3, y: 1})
        expect(typeof cell.neighboursInRow).toEqual('function');
        let neighbours = cell.neighboursInRow();
        // console.log('row(3,1) = ', neighbours);
        expect(neighbours[1]).toEqual({ x: 1, y: 1 });
    })

    it('function neighboursInCol return points', () => {
        let cell = new Cell({ x: 3, y: 1 })
        expect(typeof cell.neighboursInCol).toEqual('function');
        let neighbours = cell.neighboursInCol();
        //console.log('col(3,1) = ', neighbours);
        expect(neighbours[3]).toEqual({ x: 3, y: 4 });
    })

    it('function blockNeighbours return points', () => {
        let cell = new Cell({ x: 2, y: 4 })
        expect(typeof cell.blockNeighbours).toEqual('function');

        let neighbours = cell.blockNeighbours();
        // console.log('n = ', neighbours);
        expect(neighbours.length).toEqual(8);
        expect(neighbours[3]).toEqual({ x: 0, y: 4 });
    })

    it('create neighbours in constructor', () => {
        let cell = new Cell({ x: 2, y: 4 })
        // console.log('neighbours = ', cell.neighbours);
        expect(cell.neighbours.length).toEqual(20);
        expect(cell.neighbours[2]).toEqual({ x:2, y:2 });
    })
 

})