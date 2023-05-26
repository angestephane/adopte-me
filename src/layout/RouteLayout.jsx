import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";

const RouteLayout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();
  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Outlet />
    </>
  );
};
export default RouteLayout;
