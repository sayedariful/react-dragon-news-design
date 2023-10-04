import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news)


  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Left side */}
        <div className="border-2 border-slate-300 p-3">
          <LeftSideNav></LeftSideNav>
        </div>

          {/* News container */}
        <div className="md:col-span-2 border-2 border-slate-300 p-3">
          {
            news.map(aNews => <NewsCard 
              key={aNews._id}
              news={aNews}
            ></NewsCard>)
          }
        </div>

          {/* Right side */}
        <div className="border-2 border-slate-300 p-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
