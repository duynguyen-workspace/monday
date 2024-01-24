import { useRoutes } from "react-router-dom"
import { PATH }  from "../paths"
import { lazy } from "react"

const RegisterFirst = lazy(() => import("../pages/auth/Register/First"))
const RegisterSecond = lazy(() => import("../pages/auth/Register/Second"))

const useRoutesElements = () => {
    const elements = useRoutes([
        {
            path: PATH.HOME,
            element: "",
            children: [
                {
                    path: PATH.REGISTER,
                    element: "",
                    children: [
                        {
                            index: true,
                            path: "welcome",
                            element: <RegisterFirst />
                        },
                        {
                            path: "create",
                            element: <RegisterSecond />
                        }
                    ]
                },
            ]
        }
    ])

    return elements
}


export default useRoutesElements
