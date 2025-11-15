import { Link } from "react-router-dom";

function Header() {
    return (
        <header style= { {background: "#999",
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 1rem"
    }}>
        <div style={{fontWeight: "bold" ,fontSize: "1.5rem"}}><Link to="/">404minDS_</Link></div>
        <div style={{textAlign: "right" ,fontSize: "0.9rem"}}>
            <div>Created On: 13/11/25</div>
            <div>Maintained By: Arijeet Roy</div>
        </div>
    </header>
    );
}

export default Header;