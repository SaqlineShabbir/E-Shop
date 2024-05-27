import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export default function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
