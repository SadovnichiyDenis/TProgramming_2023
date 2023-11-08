export class Car {
    APrice: number;
    modelCar: string;

    transmission = 0;

    constructor(model: string,protected year: number, price?: number) {
        this.year = year;
        this.modelCar = model;
        this.price = price;
    }

    toString(): string {
        return 'Biiii-Biiii';
    }

    changeUpTransmission() {
        if (this.transmission <= 5) {
            this.transmission += 1;
        } else {
            return 'У тебя максимальная передача';
        }
    }
    changeDownTransmission() {
        if (this.transmission > 0) {
            this.transmission -= 1;
        } else {
            return 'У тебя стоит нейтральная передача';
        }
    }
    set price(price: number) {
        this.APrice = this.price < 0 && this.price > 5000000 ? this.APrice ?? price: 1200000;
    }
    get price() {
        return this.APrice;
    }
}