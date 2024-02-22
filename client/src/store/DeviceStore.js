import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфони'},
            {id: 3, name: 'Ноутбуки'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Lenovo'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://img.jabko.ua/image/cache/catalog/products/2021/05/041936/IMG_4457-1397x1397.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://img.jabko.ua/image/cache/catalog/products/2021/05/041936/IMG_4457-1397x1397.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://img.jabko.ua/image/cache/catalog/products/2021/05/041936/IMG_4457-1397x1397.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://img.jabko.ua/image/cache/catalog/products/2021/05/041936/IMG_4457-1397x1397.jpg'}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}