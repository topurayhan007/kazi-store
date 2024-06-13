import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage";

export const router = createBrowserRouter([
  // This route follows the main layout
  // Where the top will always be a Navbar, bottom will contain footer,
  // Only the middle portion will be rendered according to the child route
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <h3>About Page</h3>,
      },
      {
        path: "services",
        element: <h3>Services Page</h3>,
      },
    ],
  },

  // If you have a different layout that doesn't have similar design
  // Then you a different layout according to the new design
  // Suppose it might contain a SideBar that doesn't change
  // Only the Main portion changes according to the child routes of dashboard
  /* {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: <>Add Product Page</>,
      },
      {
        path: "analytics",
        element: <>Analytics Page</>,
      },
    ],
  }, */
]);
