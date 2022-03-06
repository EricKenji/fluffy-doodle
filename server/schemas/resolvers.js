const { User } = require('../models')

const resolvers = {
    Query: {
        me: async () => {
            return User.find().sort({ createdAt: -1 });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },

        login: async () => {

        }
    }
};


module.exports = resolvers;