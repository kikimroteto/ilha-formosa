import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { About } from "./pages/about";
import { Access } from "./pages/access";
import { News } from "./pages/news";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "access", Component: Access },
      { path: "news", Component: News },      
    ],
  },
]);