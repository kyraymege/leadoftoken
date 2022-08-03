import React from 'react'
import ProfileCard from './ProfileCard';

const profileComponent = ({ user }) => {
  return (
    <div className='flex'>
      <ProfileCard user={user}/>      
    </div>
  )
}

export default profileComponent