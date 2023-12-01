import { createBrowserRouter } from "react-router-dom"
import Layout from "../block/Layout"
import HomeScreen from "../Pages/homeScreen"
import Register from "../Auth/Register"
import SignIn from "../Auth/SignInScreen"
import Verify from "../Auth/verifyScreen"
export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout/>
        ),
        children: [{index: true, element: <HomeScreen/>}]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <SignIn/>
    },

    {
        path: "/verify",
        element: <Verify/>
    },
])