import React from 'react'
import NewsCard from './NewsCard';
import ProfileCard from './ProfileCard';

const profileComponent = ({ user }) => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen w-full lg:px-20 gap-x-6'>
      <div className='lg:w-1/3 lg:sticky lg:top-0 h-full'>
      <ProfileCard user={user}/>      
      </div>
      <div className='lg:w-2/3'>
        <NewsCard/>        
      </div>
    </div>
  )
}

export default profileComponent