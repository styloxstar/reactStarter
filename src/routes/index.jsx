import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/layout/NotFound";
import Context from "../context";
import store from "../redux/store";
import RootRedux from "../components/reduxComponents/RootRedux";
import { Provider } from "react-redux";
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

const AppRoutes = () => (
<Routes>
        <Route path="/" element={<Home />} />
    <Route path="/context" element={<Context />} />
    <Route path="/about" element={<div><h1>About Page</h1></div>} />
    <Route path="/services" element={<div><h1>Services Page</h1></div>} />
    <Route path="/contact" element={<div><h1>Contact Page</h1></div>} />
    <Route path="/dashboard" element={<div><h1>Dashboard Page</h1></div>} />
    <Route path="/buttons" element={<Buttons />} />
    <Route path="/cards" element={<div><Cards/></div>} /> 
    <Route path="/switches" element={<Switches />} /> 
    <Route path="/radio-buttons" element={<RadioButtons />} />
    <Route path="/inputs" element={<Inputs />} />
    <Route path="/spinners" element={<Spinners />} />
    <Route path="/checkboxes" element={<Checkboxes />} />
    <Route path="/sliders" element={<Sliders />} />
    <Route path="/forms" element={<Forms />} />
    <Route path="/accordions" element={<Accordions />} />
    <Route path="/dropdowns" element={<Dropdowns />} />
    <Route path="/tables" element={<Tables />} />
    <Route path="/tab-navigation" element={<TabNavigations />} />
    <Route path="/toast-notifications" element={<ToastNotifications />} />
    <Route path="/modals" element={<Modals />} />
    <Route path="/steppers" element={<Steppers />} />
    <Route path="/carousels" element={<Carousels />} />
    <Route path="/navbars" element={<Navbars />} />
    <Route path="/timelines" element={<Timelines />} />
    <Route path="/sidebars" element={<div><Sidebars /></div>} />
    <Route path="/footers" element={<div><Footers /></div>} />
        <Route path='/redux' element={
            <Provider store={store}>
              <RootRedux />
            </Provider>
          } />
        <Route path="*" element={<NotFound />} />
</Routes>
);

export default AppRoutes;