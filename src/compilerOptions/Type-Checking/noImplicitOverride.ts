class Album {
  setup() {
    console.log('default setup')
  }
  download() {
    console.log('download')
  }
}

class shareAlbum extends Album {
  // download(): void {
  //   console.log('Override to get info from many sources')
  // }
}

class MLAlbum extends Album {
  // setup(): void {}
}
