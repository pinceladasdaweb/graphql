const { ApolloServer, gql } = require('apollo-server')

const users = [{
  id: 1,
  name: 'Tianna Bosco',
  email: 'tiannabosco@hotmail.com',
  age: 18
},
{
  id: 2,
  name: 'Dion Dickens',
  email: 'diondickens@hotmail.com',
  age: 29
},
{
  id: 3,
  name: 'Adela Hackett',
  email: 'adelahackett@hotmail.com',
  age: 36
}]

const typeDefs = gql`
  type User {
    id: Int
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    discountedPrice: Float
  }

  type Query {
    hello: String,
    currentTime: String
    userLoggedIn: User
    featuredProduct: Product
    lotteryNumbers: [Int!]!
    users: [User]
    user(id: Int): User
  }
`

const resolvers = {
  User: {
    salary (user) {
      return user.salary_real
    }
  },
  Product: {
    discountedPrice (product) {
      if (product.discount) {
        return product.price * (1 - product.discount)
      }

      return product.price
    }
  },
  Query: {
    hello () {
      return 'Hello World!'
    },
    currentTime () {
      return `${new Date}`
    },
    userLoggedIn () {
      return {
        id: 1,
        name: 'Pedro Rogério',
        email: 'pedrorogerio@hotmail.com',
        age: 18,
        salary_real: 1234.56,
        vip: true
      }
    },
    featuredProduct () {
      return {
        name: 'MacBook Air',
        price: 5545.90,
        discount: 0.15
      }
    },
    lotteryNumbers () {
      return [2, 4, 6, 8, 10, 12]
    },
    users () {
      return users
    },
    user (parent, args) {
      const selected = users.filter(u => u.id === args.id)

      return selected ? selected[0] : null
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})