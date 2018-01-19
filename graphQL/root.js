const { GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt } = require('graphql');
const students = require('./../models/students')
const address = require('./../models/address')

const StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    address: {
      type: AddressType,
      resolve(student) {
        console.log('hit address');
        return address.find(student.id);
      }
    },
  }),
});
const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    id: { type: GraphQLInt },
    studentId: { type: GraphQLInt },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
  }),
});
// This is the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'SchooleAppSchema',
  fields: {
    students: {
      type: StudentType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return students.find(args.id);
      }
    },
    address: {
      type: AddressType,
      args: {
        studentId: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return address.find(args.studentId);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
