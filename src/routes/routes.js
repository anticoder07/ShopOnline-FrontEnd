import Basket from "../layouts/components/Basket";
import Bill from "../layouts/components/Bill";
import InformationProduct from "../layouts/components/Product/InformationProduct";
import Home from "../pages/Home";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/hello", component: InformationProduct },
  { path: "/thong-tin-don-hang", component: Bill },
  { path: "/gio-hang", component: Basket },
  { path: `http://localhost:3000//?page=`, Component: Home },
];

for (let page = 1; page <= 1000; page++) {
  const path = `/?page=${page}`;
  publicRouter.push({ path, Component: Home });
}

const privateRouter = [];

export { publicRouter, privateRouter };
