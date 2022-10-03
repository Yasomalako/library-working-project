import "./Header.css";
import React from "react";
import {Link} from "react-router-dom"
const Pages = ["Books-Screen","Books-details"]
function Header() {
  return (
    <div className="header">
      <Link to={"/"}><button>Home</button></Link>
      <Link to={"Books-Screen"}><button>BooksScreen</button></Link>
      <Link to={"Books-Details"}><button>Books-details</button></Link>
      {/* {Pages.map((pageItem)=>
        <Link to={pageItem}><button>{pageItem}</button></Link>

      )} */}

    </div>
  );
};

export default Header;
