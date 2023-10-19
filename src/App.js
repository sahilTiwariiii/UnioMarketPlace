import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Offers from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import Category from './pages/Category';
import CreateListing from './pages/CreateListings';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/category/:categoryName' element={<Category/>}/>
      <Route path='/editlisting/:listingId' element={<EditListing/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact/:landlordId' element={<Contact/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/create-listing' element={<CreateListing/>} />
      <Route path='/category/:categoryName/:listingId' element={<Listing/>} />

      <Route path='/offers' element={<Offers/>}/>


      <Route path='/profile' element={<PrivateRoute/>}>
         <Route path='/profile' element={<Profile/>} />
         
        
      </Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
