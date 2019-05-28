const { profiles: profilesData, users: usersData } = require('../data/db')

const hello = () => {
  return 'Hello World!'
}

const currentTime = () => {
  return `${new Date}`
}

const userLoggedIn = () => ({
  id: 1,
  name: 'Pedro Rogério',
  email: 'pedrorogerio@hotmail.com',
  age: 18,
  salary_real: 1234.56,
  vip: true
})

const featuredProduct = () => ({
  name: 'MacBook Air',
  price: 5545.90,
  discount: 0.15
})

const lotteryNumbers = () => {
  return [2, 4, 6, 8, 10, 12]
}

const users = () => {
  return usersData
}

const user = (parent, args) => {
  const selected = usersData.filter(u => u.id === args.id)

  return selected ? selected[0] : null
}

const profiles = () => {
  return profilesData
}

const profile = (parent, args) => {
  const selected = profilesData.filter(p => p.id === args.id)

  return selected ? selected[0] : null
}

module.exports = {
  hello,
  currentTime,
  userLoggedIn,
  featuredProduct,
  lotteryNumbers,
  users,
  user,
  profiles,
  profile
}
