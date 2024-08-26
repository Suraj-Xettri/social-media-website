import { useState } from 'react';

const ProfileRecord = () => {
  const [activeTab, setActiveTab] = useState('posts'); // Default to showing posts

  // Dummy data for followers, following, and posts
  const followers = 120;
  const following = 80;
  const posts = [
    { id: 1, image: 'https://via.placeholder.com/150', type: 'post' },
    { id: 2, image: 'https://via.placeholder.com/150', type: 'post' },
    { id: 3, image: 'https://via.placeholder.com/150', type: 'saved' },
    { id: 4, image: 'https://via.placeholder.com/150', type: 'post' },
    { id: 5, image: 'https://via.placeholder.com/150', type: 'saved' },
  ];

  return (
    <div className="changes p-10 rounded-2xl flex-[2] bg-zinc-100 backdrop-blur overflow-y-scroll overflow-x-hidden relative">
      {/* Profile Header */}
      <div className="flex flex-col space-y-10 items-center justify-between mb-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Username</h2>
          </div>
        </div>
        <div className="flex space-x-9">
          <div className="text-center">
            <p className="font-semibold">{posts.filter(post => post.type === 'post').length}</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{following}</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab('posts')}
          className={`pb-2 ${activeTab === 'posts' ? 'border-b-2 border-black' : ''}`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`pb-2 ${activeTab === 'saved' ? 'border-b-2 border-black' : ''}`}
        >
          Saved
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-4">
        {posts
          .filter(post => post.type === activeTab)
          .map(post => (
            <div key={post.id}>
              <img
                src={post.image}
                alt="Post"
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileRecord;
