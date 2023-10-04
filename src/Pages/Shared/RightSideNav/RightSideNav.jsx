import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      {/* ------------Login With--------- */}
      <div className="border-2 border-slate-400 p-4">
        <h2 className="text-3xl pb-3">Login With</h2>
        <div className="">
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Login With Google
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Login With GitHub
          </button>
        </div>
      </div>
      {/*------------ Find Us On----------- */}
      <div className="border-2 border-slate-400 p-4 mt-7">
        <h2 className="text-3xl pb-3">Find Us On</h2>
        <div className="p-4 border-2 rounded-t-lg border-slate-300">
          <a className="flex items-center gap-2 font-medium" href="">
            <FaFacebook className="text-blue-500"></FaFacebook>
            Facebook
          </a>
        </div>
        {/* ---------Twitter-------- */}
        <div className="p-4 border-x-2 border-slate-300">
          <a className="flex items-center gap-2 font-medium" href="">
            <FaTwitter className="text-blue-500"></FaTwitter>
            Twitter
          </a>
        </div>
        {/*--------- Instagram -----------*/}
        <div className="p-4 border-2 rounded-b-lg border-slate-300">
          <a className="flex items-center gap-2 font-medium" href="">
            <FaInstagram className="text-blue-500"></FaInstagram>
            Instagram
          </a>
        </div>
      </div>
      {/* ------------Q-Zone----------- */}
      <div className="border-2 border-slate-400 p-4">
        <h2 className="text-3xl pb-3">Q-Zone</h2>
        <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
