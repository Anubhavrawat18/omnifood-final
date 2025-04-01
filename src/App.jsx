import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
