
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ToolDetail from './Pages/Home/ToolDetail';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import Users from './Pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/Shared/NotFound';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/tool/:toolId' element={<RequireAuth><ToolDetail></ToolDetail></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="Manage" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>




        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
