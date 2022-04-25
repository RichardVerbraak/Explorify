const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`

const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster',
	},
]

const resolvers = {
	Query: {
		books: () => {
			return books
		},
	},
}

const server = new ApolloServer({ typeDefs, resolvers })

const setupServer = async () => {
	const { url } = await server.listen()

	console.log(`Server is up at ${url}`)
}

setupServer()
