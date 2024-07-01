import React from 'react';
import './Avatar.css';
import AvatarImg from "../../../../assets/images/Avatar3.gif";

const Avatar = () => {
  return (
    <div className='avatar-img'>
            <img src={AvatarImg} alt="avatar" />
    </div>
  );
};

export default Avatar;
