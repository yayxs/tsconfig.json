class genBox {
  width: number
  height: number
  constructor(w: number, h: number) {
    this.width = w
    this.height = h
  }

  getArea() {
    return function () {
      // "this" 隐式具有类型 "any"，因为它没有类型注释。
      return this.width * this.height
    }
  }
}
