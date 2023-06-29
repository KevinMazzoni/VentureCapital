export default defineEventHandler((event) => {
    const query = getQuery(event)

    let str = ""

    for(let data in query){
        str += data + " - " + query[data] + ','
    }
    return "You sent me this query, in the /api/folder folder: " + str
})