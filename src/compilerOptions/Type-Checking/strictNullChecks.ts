declare const loggedUserName: string

const users = [
  {
    name: 'a',
    age: 12,
  },
  {
    name: 'b',
    age: 1,
  },
]

const loggedUser = users.find((u) => u.name === loggedUserName)

console.log(loggedUser.age)
