interface UserData {
  a?: 'dark' | 'light'
}

const userData: UserData = {
  a: 'dark'
}

userData.a = undefined
