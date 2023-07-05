export default defineEventHandler( (event) => {
    const id = event.context.params.id
    
    return "You sent me this parameters " + id
})