import { useState } from 'react';
import ProfileRecord from './ProfileRecord';
const Profile = () => {
  
  return (
    <div className='h-screen w-screen flex justify-center items-center pt-[50px]'>
      <div className="flex lg:w-[50vw] h-[85vh] md:w-[70vw] sm:w-[80vw] w-[95vw] ">
        <ProfileRecord/>
      </div>
    </div>
  );
};

export default Profile;
