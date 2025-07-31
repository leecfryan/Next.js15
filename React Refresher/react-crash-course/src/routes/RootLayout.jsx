import { Outlet } from "react-router-dom"; //Special component provided by react router which should be rendered in the place where the actual nested route content should be injected
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
