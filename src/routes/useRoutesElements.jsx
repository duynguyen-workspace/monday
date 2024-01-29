import { useRoutes } from "react-router-dom";
import { PATH } from "../paths";
import { Suspense, lazy } from "react";

const RegisterFirst = lazy(() => import("../pages/auth/Register/First"));
const RegisterSecond = lazy(() => import("../pages/auth/Register/Second"));
const RegisterThird = lazy(() => import("../pages/auth/Register/Third"));
const RegisterLast = lazy(() => import("../pages/auth/Register/Last"));
const InvitePage = lazy(() => import("../pages/auth/Invite"));
const CreateBoardPage = lazy(() => import("../pages/boards/CreateBoard"))

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
                            element: (
                                <Suspense callBack={<div>Loading</div>}>
                                    <RegisterFirst />
                                </Suspense>
                            ),
                        },
                        {
                            path: "create",
                            element: (
                                <Suspense callBack={<div>Loading</div>}>
                                    <RegisterSecond />
                                </Suspense>
                            ),
                        },
                        {
                            path: "ask",
                            element: (
                                <Suspense callBack={<div>Loading</div>}>
                                    <RegisterThird />
                                </Suspense>
                            ),
                        },
                        {
                            path: "how",
                            element: (
                                <Suspense callBack={<div>Loading</div>}>
                                    <RegisterLast />
                                </Suspense>
                            ),
                        },
                    ],
                },
                {
                    path: PATH.INVITE,
                    element: (
                        <Suspense callBack={<div>Loading</div>}>
                            <InvitePage />
                        </Suspense>
                    ),
                },
                {
                    path: PATH.BOARD,
                    element: "",
                    children: [
                        {
                            path: "create",
                            element: (
                                <Suspense callBack={<div>Loading</div>}>
                                    <CreateBoardPage />
                                </Suspense>
                            )
                        }
                    ]
                }
            ],
        },
    ]);

    return elements;
};

export default useRoutesElements;
