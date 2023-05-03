import { Router } from "@vaadin/router";
import "./main.css";
import "./pages/launches.page";
import "./pages/home.page";

const outlet = document.querySelector("#outlet");
const router = new Router(outlet);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/launches", component: "launches-page" },
  { path: "(.*)", redirect: "/" },
]);
