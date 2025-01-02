import NavigationBar from "./navigation_bar/NavigationBar";
import { Outlet } from "react-router-dom";

function PageLayout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default PageLayout
