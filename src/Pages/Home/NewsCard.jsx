import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    image_url,
    details,
    _id,
    img,
    name,
    published_date,
  } = news;

  return (
    <div>
      <div>
        <div>
          <figure>
            <img src={img} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl">{name}</h2>
          <p>{published_date}</p>
        </div>
      </div>

      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="font-bold text-blue-600">
                Read More....
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
