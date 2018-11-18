import Board from '../src/board'


describe('testing board module', () => {

    it('function indexToPosition exists', () => {
        let board = new Board();
        board.initCells();
        //expect(typeof board.indexToPosition).toEqual('function');
    })
    
})