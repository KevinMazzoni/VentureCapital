import express from "express"
import { Sequelize, DataTypes } from "sequelize"

import { fileURLToPath } from "url"
import path from "path"

import dataInitialization from './DBdata.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

async function initDB() {
    await db.authenticate()

    const Dog = db.define('dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    })

    await db.sync({ force: true })

    const models = {
        Dog
    }

    await dataInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/dogs', async (req, res) => {
        const data = await models.Dog.findAll()

        res.status(200).json(data)
    })

    app.use(express.static(path.join(__dirname, "client")))
    app.listen(3000, () => {
       console.log("Listening on port 3000")
    })
}

initServer();

//20 minuti