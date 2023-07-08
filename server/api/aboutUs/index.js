import * as fs from 'fs'

export default defineEventHandler(async () => {
    const rowData = fs.readFileSync('./aboutUs.json')
    const data = JSON.parse(rowData)
    return data
})