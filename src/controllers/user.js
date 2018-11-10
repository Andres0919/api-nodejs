const User = require('../models/user');

module.exports = {
    index: async () => {
        const users = await User.find({});
        res.json(users);
    },
    newUser: () => {

    }
}