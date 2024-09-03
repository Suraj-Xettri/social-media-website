import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProfileRecord = ({ id }) => {
  const [activeTab, setActiveTab] = useState(true); // Default to showing posts
  const [profileUser, setProfileUser] = useState([]);
  const [loading, setLoding] = useState(false);
  const profileDetails = async () => {
    setLoding(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/users/profile/${id}`
      );

      setProfileUser(response?.data?.user);
      setLoding(false);
    } catch (error) {
      setLoding(false);
      console.error("Error fetching profile details:", error);
    }
  };

  profileUser?.post?.map((post, index) => (
    console.log(post)
  ))

    
  

  useEffect(() => {
    profileDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex text-4xl justify-center items-center">Loading</div>
    );
  if (!profileUser)
    return (
      <div className="flex text-white text-[4vw] justify-center items-center w-full">
        No User found.
      </div>
    );
  return (
    <div className="changes p-10 rounded-2xl flex-[2] bg-[#2B2A3C] text-white backdrop-blur overflow-y-scroll overflow-x-hidden relative">
      {/* Profile Header */}
      <Link to={"/home"}>
        <HiOutlineArrowLeft className="absolute text-xl lg:hidden cursor-pointer" />
      </Link>
      <div className="flex flex-col space-y-10 items-center justify-between mb-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img
            src={`/profile/${profileUser?.profilePicture}`}
            alt={profileUser?.username}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{profileUser?.username}</h2>
          </div>
        </div>
        <div className="flex space-x-9">
          <div className="text-center">
            <p className="font-semibold">
              {profileUser.post ? profileUser?.post?.length : 0}
            </p>
            <p className="text-[#FFBADE]">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{profileUser?.followers?.length || 0}</p>
            <p className="text-[#FFBADE]">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{profileUser?.following?.length || 0}</p>
            <p className="text-[#FFBADE]">Following</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab((p) => !p)}
          className={`pb-2 ${activeTab ? "border-b-2 border-black" : ""}`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab((p) => !p)}
          className={`pb-2 ${!activeTab ? "border-b-2 border-black" : ""}`}
        >
          Saved
        </button>
      </div>

      {/* Posts Grid */}
      {activeTab ? (
         <div className="flex flex-wrap  gap-4">
         {profileUser?.post?.map((post, index) => (
           <div key={index} className="w-[210px] h-[300px] rounded-xl">
             <img
               src={`/posts/${post.image}`}
               alt={`Post ${index + 1}`}
               className="object-cover w-full h-full rounded-xl opacity-80"
             />
           </div>
         ))}
       </div>
      ) : (
        <div>saved</div>
      )}
    </div>
  );
};

export default ProfileRecord;
