import React from 'react'

const OrgCards = ({name,email,description,website,category}) => {
  return (
    <div className='main'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{email}</p>
        <p>{website}</p>
        <p>{category}</p>
<<<<<<< HEAD
=======
        <button>Donate</button>
>>>>>>> 89c6fc9d577e1a38e58b2da0c3e0ac5b45e9995a
    </div>
  )
}

export default OrgCards