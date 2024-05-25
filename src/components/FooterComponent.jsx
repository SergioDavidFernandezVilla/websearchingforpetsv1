import "../css/Footer.css";

import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="footer_container">
      <div className="container_pie">
        <h4 className="h4_footer_container">
          &copy; 2024 WebSearchingForPets. Todos los derechos reservados.
        </h4>

        <nav className="nav_footer_container">
          <ul className="ul_footer_container">
            <li className="li_footer_container">
              <Link className="link_footer_container" to="/acerca-nosotros">
                Acerca de nosotros
              </Link>
              <Link className="link_footer_container" to="/mision">
                Mision
              </Link>
              <Link className="link_footer_container" to="/vision">
                Vision
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
