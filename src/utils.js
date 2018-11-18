import { size, block_size, validValues } from './config'

const sukodu = {
    indexToPosition: (index) => {
        return {
            y: Math.floor(index / size),
            x: index % size
        }
    },

    positionToIndex: (position) => {
        return position.y * size + position.x
    }
}

export default sukodu