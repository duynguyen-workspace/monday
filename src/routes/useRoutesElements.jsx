import { useRoutes } from "react-router-dom"
import { PATH }  from "../paths"
import { lazy } from "react"

const RegisterFirst = lazy(() => import("../pages/auth/Register/First"))

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
                            path: "welcome",
                            element: <RegisterFirst />
                        }
                    ]
                },
            ]
        }
    ])

    return elements
}


export default useRoutesElements
