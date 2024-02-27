import Home from "../pages/Home";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/basket", component: Home },
];

const privateRouter = [];

export { publicRouter, privateRouter };
