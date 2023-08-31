import React from 'react'

const OrgCards = ({name,email,description,website,category}) => {
  return (
    <div className='main'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{email}</p>
        <p>{website}</p>
        <p>{category}</p>
        <button>Donate</button>
    </div>
  )
}

export default OrgCards