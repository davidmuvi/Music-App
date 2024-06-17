const { Sequelize } = require('sequelize')
require('dotenv').config()

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
})

const connectToDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected succesfully!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sequelize, connectToDB
}