import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />

      {/* Dynamic Pages According to Routes */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
