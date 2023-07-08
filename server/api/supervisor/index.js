import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    
    const url = event.node.req.url
    const splitted = url.split("=")
    const supervisorId = splitted[1]
    const client = serverSupabaseClient(event)
    const { data, error } = await client.from('persons').select("id, name, role, description, url").eq('id', supervisorId)   
    if(error){
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})