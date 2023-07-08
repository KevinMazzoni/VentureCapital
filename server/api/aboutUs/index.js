import * as fs from 'fs'

export default defineEventHandler(async () => {
    try {
        const rowData = fs.readFileSync('./assets/aboutUs/aboutUs.json');
        const data = JSON.parse(rowData);
        return data;
    } catch (error) {
        console.error('This is the error', error);
        return null;
    }
})