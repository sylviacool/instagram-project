import React from 'react'
import Foto from '../assets/images/img.jpg'

const Story = (props) => {
  return (
    <div className="w-20 h-20">
      <img
        src={Foto}
        alt="story-foto"
        width="120rem"
        className="w-full h-full object-cover rounded-full mt-3"
      />
      <p className='text-xs text-center'>{props.name}</p>
    </div>
  );
}

export default Story