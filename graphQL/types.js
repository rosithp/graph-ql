const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const Student = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = Student;