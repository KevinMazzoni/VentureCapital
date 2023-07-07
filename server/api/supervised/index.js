import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    
    const url = event.node.req.url
    const splitted = url.split("=")
    const supervisedId = splitted[1]
    const client = serverSupabaseClient(event)

    const { data, error } = await client.from('projects').select("id, name, url, caption, text").eq('SupervisedBy', supervisedId)   
    if(error){
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})