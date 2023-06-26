import express from "express"
import { Sequelize, DataTypes } from "sequelize"

import { fileURLToPath } from "url"
import path from "path"

import dataInitialization from './DBdata.js'

// const __filename = fileURLToPath(import.meta.url)
const __dirname = "./" /*path.dirname(__filename)*/

const app = express()
app.use(express.json())

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

async function initDB() {
    const models = {}

    await db.authenticate()

    models.Project = db.define('project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    await db.sync({ force: true })

    await dataInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/projectsDB', async (req, res) => {
        const data = await models.Project.findAll()

        res.status(200).json(data)
    })

    app.use(express.static(path.join(__dirname, "pages")))
    app.listen(3000, () => {
       console.log("Listening on port 3000")
    })
}

initServer();

// export default fromNodeMiddleware(app)