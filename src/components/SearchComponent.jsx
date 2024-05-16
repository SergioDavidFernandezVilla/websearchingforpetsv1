import { useState } from "react";

import searchLight from "../assets/Icons/searchLight.png";

const SearchComponent = ({ toggleSearch }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState(
    "container_search_component"
  );

  const handleToggleSearch = () => {
    setAnimationClass(
      "container_search_component"
        ? "container_search_component"
        : "container_search_component_close"
    );
    toggleSearch();
  };

  return (
    <div className={animationClass}>
      <div className="container_search_animation">
        <div className="container_input_search_component">
          <input
            className="input_search_component"
            type="text"
            placeholder="Buscar"
          />

          <div className="div_figure_search_component">
            <img className="img_search_component" src={searchLight} alt="" />
          </div>
        </div>

        <button className="btn_search_component" onClick={handleToggleSearch}>
          {searchOpen ? "Cerrar" : "Cerrar"}
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
