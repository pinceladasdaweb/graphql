const { users, nextId } = require('../../data/db')

const userIndex = (filter) => {
  if (!filter) return -1

  const { id, email } = filter

  if (id) {
    return users.findIndex(u => u.id === id)
  } else if (email) {
    return users.findIndex(u => u.email === email)
  }

  return -1
}

const newUser = (parent, { data }) => {
  const emailExists = users
    .some(u => u.email === data.email)

  if (emailExists) throw new Error('Email already exists')

  const user = {
    id: nextId(),
    ...data,
    profile_id: 1,
    status: 'ACTIVE'
  }

  users.push(user)

  return user
}

const changeUser = (parent, { data, filter }) => {
  const index = userIndex(filter)

  if (index < 0) return null

  const user = {
    ...users[index],
    ...data
  }

  users.splice(index, 1, user)

  return user
}

const deleteUser = (parent, { filter }) => {
  const index = userIndex(filter)

  if (index < 0) return null

  const excluded = users.splice(index, 1)

  return excluded ? excluded[0] : null
}

module.exports = { newUser, changeUser, deleteUser }