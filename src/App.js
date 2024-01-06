import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import Header from "./pages/Header";
import UserTaskCard from "./pages/UserCard";
import BackgroundVideo from "./pages/BackgroundVideo";
import Waitlist from "./pages/Waitlist";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
    <BackgroundVideo />
    <Navbar />
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
    </>
  );
}
export default App;
