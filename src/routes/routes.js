import NoSearchHeaderLayout from "../layouts/NoSearchHeaderLayout";
import Basket from "../layouts/components/Basket";
import Bill from "../layouts/components/Bill";
import Profile from "../layouts/components/Profile/index";
import Upload from "../layouts/components/Upload";
import purchaseOrder from "../layouts/components/PurchaseOrder";
import Home from "../pages/Home";
import SignUp from "../pages/LogInSignUp/SignUp";
import LogIn from "../pages/LogInSignUp/LogIn";
import InformationProduct from "../layouts/components/Product/InformationProduct";
import NoHeaderLayout from "../layouts/NoSearchHeaderLayout";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/dang-ki", component: SignUp, layout: NoHeaderLayout },
  { path: "/dang-nhap", component: LogIn, layout: NoSearchHeaderLayout },
  { path: "/by/id", component: InformationProduct },
  { path: "/thong-tin-don-hang", component: Bill },
  { path: "/thong-tin-don-mua", component: purchaseOrder },
  { path: "/gio-hang", component: Basket },
  { path: "/profile", component: Profile },
  { path: "/them-san-pham", component: Upload, layout: NoSearchHeaderLayout },
  { path: `http://localhost:3000//?page=`, Component: Home },
  { path: `/trang-chu`, Component: Home },
];

for (let page = 1; page <= 1000; page++) {
  const path = `/?page=${page}`;
  publicRouter.push({ path, Component: Home });
}

const privateRouter = [];

export { publicRouter, privateRouter };
