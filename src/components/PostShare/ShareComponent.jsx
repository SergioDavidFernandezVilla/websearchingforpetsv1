import { Link } from "react-router-dom";

import compartir from "../../assets/Icons/icon_compartir.png";
export default function ShareComponent() {
  return (
    <Link className="link_post_user" to="/post/share">
      <img
        className="link_post_user_img_icon"
        src={compartir}
        alt="icon_compartir"
      />
    </Link>
  );
}
