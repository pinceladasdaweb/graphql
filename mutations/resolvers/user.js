const { profiles } = require('../data/db')

const salary = (user) => {
  return user.salary_real
}

const profile = (user) => {
  const selected = profiles.filter(p => p.id === user.profile_id)

  return selected ? selected[0] : null
}

module.exports = { salary, profile }
