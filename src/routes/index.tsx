import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default RouterApp
