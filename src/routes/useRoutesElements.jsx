import { useRoutes } from "react-router-dom"
import { PATH }  from "../paths"
import { lazy } from "react"

const RegisterPage = lazy(() => import("../pages/admin/Register"))

const useRoutesElements = () => {
    const elements = useRoutes([
        {
            path: PATH.HOME,
            element: "",
            children: [
                {
                    path: PATH.REGISTER,
                    element: <RegisterPage />,
                },
            ]
        }
    ])

    return elements
}


export default useRoutesElements
