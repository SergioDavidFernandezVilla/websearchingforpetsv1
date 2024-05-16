import { Link } from "react-router-dom";

import SearchIcon from "../assets/Icons/icon_search.png";
import AddPostIcon from "../assets/Icons/icon_addpost2.png";

const SubHeaderComponent = ({ onClick, searchOpen, toggleSearch }) => {
  return (
    <header className="header_hero header_hero_segundo">
      <nav className="header_nav_segundo">
        <Link className="header_nav_segundo_link" onClick={toggleSearch}>
          <figure className="figure_img_nav_segundo">
            <img
              src={SearchIcon}
              className="img_icon_nav_segundo"
              alt="search-icon"
            />
          </figure>
        </Link>

        <Link className="header_nav_segundo_link">
          <figure className="figure_img_nav_segundo">
            <img
              src={AddPostIcon}
              className="img_icon_nav_segundo"
              alt="add-post-icon"
            />
          </figure>
        </Link>
      </nav>
    </header>
  );
};

export default SubHeaderComponent;
