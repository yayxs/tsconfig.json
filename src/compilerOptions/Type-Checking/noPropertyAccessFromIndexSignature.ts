interface GameSet {
  speed: 'fast' | 'slow'
  star: '1' | '0'
  [key: string]: string
}

function getSetting(): GameSet {
  return {
    speed: 'fast',
    star: '0',
    username: undefined,
  }
}

const s: GameSet = getSetting()
s.speed = 'fast'
s.star = '0'

s.name = undefined
