import "../css/SharePost.css";
import { Link } from "react-router-dom";
import Arrow from "../assets/Icons/icon_left.png";

export default function SharePostPage() {
  return (
    <div className="container_share_post_page">
      <div className="share_get_post_page">
        <header className="header_share_post_page">
          <h2 className="h2_share_post_page">
            Gracias por compartir este post :)
          </h2>
        </header>

        <div className="div_share_post_page">
          <p className="p_share_post_page">
            Enlace:{" "}
            <strong className="strong_share_post_page">
              https://websearchingforpetsv1.netlify.app/
            </strong>
          </p>
        </div>

        <div className="div_share_img_post_page">
          <Link to="/">
            <img className="img_share_post_page" src={Arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
