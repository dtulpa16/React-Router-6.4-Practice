import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}
