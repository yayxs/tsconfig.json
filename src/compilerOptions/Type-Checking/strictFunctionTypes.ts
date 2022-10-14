function f1(x: string) {
  console.log('x' + x.toLowerCase())
}

type StringOrNumberFunc = (ns: string | number) => void

let func: StringOrNumberFunc = f1

func(10)
