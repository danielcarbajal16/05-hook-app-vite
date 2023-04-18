import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, NavBar } from "./";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    )
}
