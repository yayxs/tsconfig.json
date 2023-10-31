/**
 * 派生类继承基类的时候。通常不希望去覆盖基类已经有的方法
 * 在真正需要覆盖基类方法的时候 这一配置的作用就是 避免在不使用 `override` 关键字的情况下
 */

class BaseCls {
  print() {}
}

class SomeCls1 extends BaseCls {
  override print(): void {}
}

class SomeCls2 extends BaseCls {
  // 错误
  // print(): void {
  // }
}

// class Album {
//   setup() {
//     console.log('default setup')
//   }
//   download() {
//     console.log('download')
//   }
// }

// class shareAlbum extends Album {
//   // download(): void {
//   //   console.log('Override to get info from many sources')
//   // }
// }

// class MLAlbum extends Album {
//   // setup(): void {}
// }
