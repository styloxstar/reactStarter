// React & Router
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

// Redux
import store from "../redux/store";
import RootRedux from "../redux/RootRedux.jsx";

// Context
import Context from "../context";

// Layout Components
import Home from "../components/Home";
import NotFound from "../components/layout/NotFound";
import Buttons from "../components/layout/Buttons";
import Switches from "../components/layout/Switches";
import Cards from "../components/layout/Cards";
import Inputs from "../components/layout/Inputs";
import RadioButtons from "../components/layout/RadioButtons";
import Spinners from "../components/layout/Spinners";
import Checkboxes from "../components/layout/CheckBoxes";
import Sliders from "../components/layout/Sliders";
import Forms from "../components/layout/Forms";
import Accordions from "../components/layout/Accordions";
import Dropdowns from "../components/layout/Dropdowns";
import Tables from "../components/layout/Tables";
import TabNavigations from "../components/layout/TabNavigations";
import ToastNotifications from "../components/layout/ToastNotifications";
import Modals from "../components/layout/Modals";
import Steppers from "../components/layout/Steppers";
import Carousels from "../components/layout/Carousels";
import Navbars from "../components/layout/Navbars";
import Timelines from "../components/layout/TimeLines";
import Sidebar from "../components/layout/Sidebar";
import Sidebars from "../components/layout/Sidebars";
import Footers from "../components/layout/Footers";
import ProductGallery from "../components/layout/ProductGallery";
import ProgressBars from "../components/layout/ProgressBar";
import ImageGallery from "../components/layout/ImageGallery";
import DatePicker from "../components/layout/DatePicker";
import Dividers from "../components/layout/Dividers";
import ScrollSpy from "../components/layout/ScrollSpy";
import Filters from "../components/layout/Filters";

// Common Pages
import NotFoundGallery from "../components/common/pages/NotFoundGAllery";
import InternalServer from "../components/common/pages/InternalServer";
import LoginGallery from "../components/common/pages/LoginGallery";
import RegisterGallery from "../components/common/pages/RegisterGallery";
import ForgotPasswordGallery from "../components/common/pages/ForgotPasswordGallery";
import LandingPageGallery from "../components/common/pages/LandingPageGallery";
import ContactGallery from "../components/common/pages/ContactGallery";
import PricingGallery from "../components/common/pages/PricingGallery";
import ComingSoonGallery from "../components/common/pages/ComingSoonGallery";
import MaintenanceGallery from "../components/common/pages/MaintenanceGallery";
import FeatureGallery from "../components/common/pages/FeatureGallery";
import TeamGallery from "../components/common/pages/TeamGallery";
import TestimonialGallery from "../components/common/pages/TestimonialsGallery";
import TermsGallery from "../components/common/pages/Termsgallery";
import PrivacyGallery from "../components/common/pages/Privacygallery";
import ProfileGallery from "../components/common/pages/ProfileGallery";
import ErrorPageGallery from "../components/common/pages/ErrorPageGallery";
import CheckoutGallery from "../components/common/pages/CheckoutGallery";
import OrderSummaryGallery from "../components/common/pages/OrderSummaryGallery";
import ThankYouGallery from "../components/common/pages/ThankYougallery";
import CartGallery from "../components/common/pages/CartGallery";
import ProductGalleryAnimation from "../components/common/pages/ProductGalleryAnimation";
import AdminPanelGallery from "../components/common/pages/AdminPanelGallery";
import ServicesGallery from "../components/common/pages/ServicesGallery.jsx";
import RTKStore from "../redux-toolkit/store.jsx";
import RootReduxToolkit from "../redux-toolkit/RootReduxToolkit.jsx";


// Route groups
const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/context", element: <Context /> },
  { path: "/about", element: <div><h1>About Page</h1></div> },
  { path: "/services", element: <div><h1>Services Page</h1></div> },
  { path: "/contact", element: <div><h1>Contact Page</h1></div> },
  { path: "/dashboard", element: <div><h1>Dashboard Page</h1></div> },
];

const layoutRoutes = [
  { path: "/components", element: <Buttons /> },
  { path: "/components/buttons", element: <Buttons /> },
  { path: "/components/cards", element: <Cards /> },
  { path: "/components/switches", element: <Switches /> },
  { path: "/components/radio-buttons", element: <RadioButtons /> },
  { path: "/components/inputs", element: <Inputs /> },
  { path: "/components/spinners", element: <Spinners /> },
  { path: "/components/checkboxes", element: <Checkboxes /> },
  { path: "/components/sliders", element: <Sliders /> },
  { path: "/components/forms", element: <Forms /> },
  { path: "/components/accordions", element: <Accordions /> },
  { path: "/components/dropdowns", element: <Dropdowns /> },
  { path: "/components/tables", element: <Tables /> },
  { path: "/components/tab-navigation", element: <TabNavigations /> },
  { path: "/components/toast-notifications", element: <ToastNotifications /> },
  { path: "/components/modals", element: <Modals /> },
  { path: "/components/steppers", element: <Steppers /> },
  { path: "/components/carousels", element: <Carousels /> },
  { path: "/components/navbars", element: <Navbars /> },
  { path: "/components/timelines", element: <Timelines /> },
  { path: "/components/sidebars", element: <Sidebars /> },
  { path: "/components/footers", element: <Footers /> },
  { path: "/components/products", element: <ProductGallery /> },
  { path: "/components/progress-bar", element: <ProgressBars /> },
  { path: "/components/image-gallery", element: <ImageGallery /> },
  { path: "/components/date-picker", element: <DatePicker /> },
  { path: "/components/dividers", element: <Dividers /> },
  { path: "/components/scroll-spy", element: <ScrollSpy /> },
  { path: "/components/filters", element: <Filters /> },
];

const commonPageRoutes = [
  {path: "pages", element: <LoginGallery /> },
  { path: "pages/404", element: <NotFoundGallery /> },
  { path: "pages/500", element: <InternalServer /> },
  { path: "pages/login", element: <LoginGallery /> },
  { path: "pages/register", element: <RegisterGallery /> },
  { path: "pages/forgot-password", element: <ForgotPasswordGallery /> },
  { path: "pages/landing", element: <LandingPageGallery /> },
  { path: "pages/contact-us", element: <ContactGallery /> },
  { path: "pages/pricing", element: <PricingGallery /> },
  { path: "pages/coming-soon", element: <ComingSoonGallery /> },
  { path: "pages/maintenance", element: <MaintenanceGallery /> },
  { path: "pages/features", element: <FeatureGallery /> },
  { path: "pages/team", element: <TeamGallery /> },
  { path: "/pages/testimonials", element: <TestimonialGallery /> },
  { path: "/pages/terms-of-service", element: <TermsGallery /> },
  { path: "/pages/privacy-policy", element: <PrivacyGallery /> },
  { path: "pages/profile", element: <ProfileGallery /> },
  { path: "/pages/error", element: <ErrorPageGallery /> },
  { path: "/pages/checkout", element: <CheckoutGallery /> },
  { path: "/pages/order-summary", element: <OrderSummaryGallery /> },
  { path: "/pages/thank-you", element: <ThankYouGallery /> },
  { path: "/pages/cart", element: <CartGallery /> },
  { path: "/pages/product-gallery", element: <ProductGalleryAnimation /> },
  { path: "/pages/admin-panel", element: <AdminPanelGallery /> },
  { path: "/pages/services", element: <ServicesGallery /> },
];

const reduxRoutes = [
  {
    path: "/redux",
    element: (
      <Provider store={store}>
        <RootRedux />
      </Provider>
    ),
  },
];

const reduxToolKitRoutes = [
  {
    path: "/redux-toolkit",
    element: (
      <Provider store={RTKStore}>
        <RootReduxToolkit />
      </Provider>
    ),
  }
]

const catchAllRoutes = [
  { path: "*", element: <NotFound /> },
];

const AppRoutes = () => (
  <Routes>
    {/* Main Pages */}
    {mainRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}

    {/* Layout Components */}
    {layoutRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}

    {/* Common Pages */}
    {commonPageRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}

    {/* Redux Example */}
    {reduxRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}

    {/* Redux Toolkit Example */}
    {reduxToolKitRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}

    {/* Catch-all */}
    {catchAllRoutes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default AppRoutes;