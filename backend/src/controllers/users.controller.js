const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8)

    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }

}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email: email } })
    if (!user) {
        return res.status(404).json({ message: 'Error usuario y/o contraseña' })
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(404).json({ message: 'Error usuario y/o contraseña' })
    }

    const token = jwt.sign({ id: user.id }, 'clave secreta')
    res.json({ token })
}

module.exports = { register, login }