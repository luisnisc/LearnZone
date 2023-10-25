import { createBrowserRouter } from "react-router-dom";
import Examen from "../Examen";
    import App from "../App";
import Error404 from "../Error404";
import Layout from "../Layout";
import Asignaturas from "../Asignaturas";
const router = createBrowserRouter([
{
    element:<Layout/>,
    children:[
        {
            path:'/',
            element: <App/>
        },
        
        {
            path : '/examenes',
            element: <Examen/>,
        },
        {
            path : "*",
            element:<Error404/>
        },
        {
            path : "/asignaturas",
            element:<Asignaturas/>,
        },



    ]
}
])
export default router;