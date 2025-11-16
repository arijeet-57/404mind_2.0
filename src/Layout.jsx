import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function Layout() {
    return (
    <div style={{background: "#1656F5", minHeight: "100vh"}}>
      <Header/>
      <Navbar/>
      <main style={{
        background: "#999",
        margin: "2rem auto",
        width: "70%",
        padding: "1rem"
      }}>
        {/* this is the place where the pages will get reloaded */}
        <Outlet/>
      </main>
    </div>
    );
}

export default Layout;
