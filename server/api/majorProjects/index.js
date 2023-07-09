import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
    const id = event.context.params.id

    const client = serverSupabaseClient(event)

    const { data, error } = await client.from('projects').select("id, name, url, caption, text, SupervisedBy").eq("is_major", true)

    if(error){
        throw createError({statusCode: 400, statusMessage: error.message})
    }


    return data
})