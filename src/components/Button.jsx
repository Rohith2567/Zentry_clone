import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass}) => {

  return (
    <button id={id} className={`group relative z-10 w-fit 
    cursor-pointer overflow-hidden rounded-full bg-violet-50
    px-7 py-3 text-black ${containerClass} hover:bt`} >
        
        {leftIcon}

        <span className="relatve inline-flex overflow-hidden 
        font-general uppercase ">
            <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>
                <b>{title}</b>
            </div>
            <div className="absolute translate-y-[195%] skew-y-12 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
                <b>{title}</b>
            </div>
        </span>
        
        {rightIcon}
    </button>
  )
}

export default Button
