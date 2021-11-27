import './App.css';
import AuthProvider from './components/Context/AuthProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AddService from './components/Services/AddServices';
import ManageServices from './components/Services/ManageServices';
import Booking from './components/Booking/Booking';
import Features from './components/Features/Features';
import Register from './components/Register/Register';
import About from './components/About/About';
import AddFeatures from './components/Features/AddFeatures';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Products from './components/Services/Services';
import ManageOrders from './components/Orders/ManageOrders'




function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/review">
              <OrderReview />
            </Route>
            <Route path="/shipping">
              <Shipping />
            </Route>
            <Route path="/placeorder">
              <PlaceOrder />
            </Route>

            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/booking/:_id">
              <Booking />
            </PrivateRoute>
            <Route path="/addService">
              <AddService />
            </Route>
            <Route path="/addFeatures">
              <AddFeatures />
            </Route>
            <Route path="/manageServices">
              <ManageServices />
            </Route>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <Route path="/features">
              <Features />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Products />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/orders:_id">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:_id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
