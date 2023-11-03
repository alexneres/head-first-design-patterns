export enum Size {
    'TALL' = 'tall',
    'GRANDE' = 'grande',
    'VENTI' = 'venti'
}

export class Berevage {
    description: string = 'Unknown Berevage'
    size: Size = Size.TALL
    
    cost(): number {
        return 0
    }

    getDescrition() {
        return this.description
    }

    setSize(size: Size) {
        this.size = size
    }

    getSize() {
        return this.size
    }
}




