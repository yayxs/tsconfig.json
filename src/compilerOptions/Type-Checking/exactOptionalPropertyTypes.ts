interface User {
  color?: 'dark' | 'light'
}

const u: User = {
  color: 'dark',
}

u.color = undefined
