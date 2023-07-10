import { RouteConfig } from "@nuxt/types/config/router";

const routes: RouteConfig[] = [
    {
        "path": '/',
        "name": "home"
    },
    {
        "allAreas": '/allAreas',
        "name": 'allAreas',
        children: [
            {
                'path': '/area',
                'name': 'allAreas-area' 
            }, 
            {
                'path':"/projectByArea",
                'name':"allAreas-projectByArea"

            }
        ]
    }, 
    {

    }
]
export default routes;