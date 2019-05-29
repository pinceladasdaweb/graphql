let id = 1

const nextId = () => {
  return id++
}

const profiles = [{
  id: 1,
  name: 'user'
}, {
  id: 2,
  name: 'admin'
}]

const users = [{
  id: nextId(),
  name: 'Tianna Bosco',
  email: 'tiannabosco@hotmail.com',
  age: 18,
  profile_id: 1
},
{
  id: nextId(),
  name: 'Dion Dickens',
  email: 'diondickens@hotmail.com',
  age: 29,
  profile_id: 2
},
{
  id: nextId(),
  name: 'Adela Hackett',
  email: 'adelahackett@hotmail.com',
  age: 36,
  profile_id: 1
}]

module.exports = { profiles, users, nextId }
