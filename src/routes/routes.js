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

const SIDEBAR_ITEMS = [
  {
    to: "dien-thoai-phu-kien",
  },
  {
    to: "may-tinh-lap-top",
  },
  {
    to: "my-pham-chinh-hang",
  },
  {
    to: "thoi-trang-nam-nu",
  },
  {
    to: "san-pham-khac",
  },
  {
    to: "hoan-thanh",
  },
  {
    to: "van-chuyen",
  },
  {
    to: "can-xu-ly",
  },
  {
    to: "tat-ca",
  },
];

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
  { path: `/?page=`, component: Home },
  { path: `/trang-chu`, component: Home },
  ...SIDEBAR_ITEMS.map((item) => ({
    path: `/${item.to}`,
    component: Home,
  })),
];

for (let page = 1; page <= 1000; page++) {
  const path = `/?page=${page}`;
  publicRouter.push({ path, component: Home });
}

const privateRouter = [];

export { publicRouter, privateRouter };
