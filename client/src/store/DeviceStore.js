import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro",
        price: 100000,
        rating: 0,
        img: "6230e27c-3c32-4601-9c33-d8d85d406e30.jpg",
      },
      {
        id: 2,
        name: "a51",
        price: 100000,
        rating: 0,
        img: "07760f1c-fa24-4594-9d1c-0ad53ea8a911.jpg",
      },
      {
        id: 3,
        name: "a515",
        price: 100000,
        rating: 0,
        img: "b98c5fee-8850-4087-95d2-134592a05906.jpg",
      },
      {
        id: 4,
        name: "note pro",
        price: 100000,
        rating: 0,
        img: "c867913a-925d-4c22-a416-37a193598d47.jpg",
      },
      {
        id: 5,
        name: "Atlant",
        price: 100000,
        rating: 0,
        img: "18cb79fe-083e-4e6e-bb6f-9344cbb00d44.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
