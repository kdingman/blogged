const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'petethecat',
        email: 'petethecat@gmail.com',
        password: 'pete1234thecat'
    },
    {
        username: 'CDinger',
        email: 'caleb@yahoo.com',
        password: 'cdinger1234'
    },
    {
        username: 'MCDingman',
        email: 'morgan@gmail.com',
        password: 'mcd5678!'
    },
    {
        username: 'marshmellow53',
        email: 'themellow@gmail.com',
        password: 'marshman56412:'
    },
    {
        username: 'henrydanger101',
        email: 'thehenrydanger@msn.com',
        password: 'henryisawesome1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;