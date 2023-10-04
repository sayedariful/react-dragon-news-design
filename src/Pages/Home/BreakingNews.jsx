import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-danger bg-pink-700 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12 text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...........</Link>

        <Link className="mr-12 text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...........</Link>

        <Link className="text-black" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...........</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
