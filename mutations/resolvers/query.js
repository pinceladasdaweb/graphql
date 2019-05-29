const { profiles: profilesData, users: usersData } = require('../data/db')

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
  users,
  user,
  profiles,
  profile
}
