import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Contact Us</span>
        <li>
            Mobile: 9877631831
        </li>
        <li>
            Mail: krsatish987@gmail.com
        </li>
        <li>
            Github: https://www.github.com/callmesatz
        </li>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
