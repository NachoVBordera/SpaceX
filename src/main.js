//import "./app-element";
import { Router } from "@vaadin/router";
import "./main.css";
import "./app-element";

const outlet = document.querySelector("#outlet");
const router = new Router(outlet);

router.setRoutes([
  { path: "/", component: "app-element" },
  { path: "(.*)", redirect: "/" },
]);
