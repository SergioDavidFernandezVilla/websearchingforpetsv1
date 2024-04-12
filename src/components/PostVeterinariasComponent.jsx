import { Link } from "react-router-dom";

const PostVeterinariasComponent = ({
  imgURL,
  imgINFO,
  imgCOMPARTIR,
  imgALT,
}) => {
  return (
    <section className="section_veterinarias_page">
      <img className="img_veterinarias_page" src={imgURL} alt={imgALT} />

      <article className="article_veterinarias_page">
        <Link className="link_veterinarias_page">
          <img className="img_info_veterinarias_page" src={imgINFO} />
        </Link>
        <Link className="link_veterinarias_page">
          <img className="img_info_veterinarias_page" src={imgCOMPARTIR} />
        </Link>
      </article>
    </section>
  );
};

export default PostVeterinariasComponent;
