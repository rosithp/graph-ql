const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql');

const StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
  }),
});