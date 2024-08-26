import axios from "axios";
import { useEffect, useState } from "react";

const ProfileRecord = ({ id }) => {
  const [activeTab, setActiveTab] = useState("posts"); // Default to showing posts
  const [profileUser, setProfileUser] = useState({});

  const profileDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/profile/66c8296b76aba599782ef833"
      );
      setProfileUser(response.data.user);
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    profileDetails();
  }, []);

  console.log(profileUser);

  return (
    <div className="changes p-10 rounded-2xl flex-[2] bg-zinc-100 backdrop-blur overflow-y-scroll overflow-x-hidden relative">
      {/* Profile Header */}
      <div className="flex flex-col space-y-10 items-center justify-between mb-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img
            src={`/profile/${profileUser?.profilePicture}`}
            alt={profileUser.username}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{profileUser.username}</h2>
          </div>
        </div>
        <div className="flex space-x-9">
          <div className="text-center">
            <p className="font-semibold">{profileUser.post ? profileUser.post.length : 0}</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{profileUser?.followers?.length}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{profileUser?.following?.length}</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("posts")}
          className={`pb-2 ${
            activeTab === "posts" ? "border-b-2 border-black" : ""
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={`pb-2 ${
            activeTab === "saved" ? "border-b-2 border-black" : ""
          }`}
        >
          Saved
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-4">
      </div>
    </div>
  );
};

export default ProfileRecord;
