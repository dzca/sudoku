import sudoku from '../src/utils'

describe('sudoku util module', () => {

    it('function indexToPosition exists', () => {
        expect(typeof sudoku.positionToIndex).toEqual('function');
        expect(typeof sudoku.indexToPosition).toEqual('function');
    })

    describe('indexToPosition function', () => {

        it('function indexToPosition convert idx=12 to p(x=3, y=1)', () => {
            let p = sudoku.indexToPosition(12);
            expect(p).toEqual({ x: 3, y: 1 });
        })

        it('function indexToPosition convert idx=75 to p(x=4, y=7)', () => {
            let p = sudoku.indexToPosition(75);
            expect(p).toEqual({ x: 3, y: 8 });
        })

        it('function indexToPosition convert idx=80 to p(x=8, y=8)', () => {
            let p = sudoku.indexToPosition(80);
            expect(p).toEqual({ x: 8, y: 8 });
        })

        it('function indexToPosition convert idx=0 to p(x=0, y=0)', () => {
            let p = sudoku.indexToPosition(0);
            expect(p).toEqual({ x: 0, y: 0 });
        })
    })

    describe('sudoku.positionToIndex function', () => {

        it('function positionToIndex convert p(x=4, y=7) to index=75', () => {
            let i = sudoku.positionToIndex({ x: 3, y: 8 });
            expect(i).toEqual(75);
        })
    })
})