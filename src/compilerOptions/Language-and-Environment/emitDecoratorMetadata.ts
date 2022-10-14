function LogFunc(target: any, propertyKey: string | symbol) {
  console.log(target)
  console.log(propertyKey)
}

class Demo {
  @LogFunc
  public foo() {}
}
