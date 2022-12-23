
import React from 'react'
import { IUserContext, UserContext } from '../not-in-use/UserContext'

const CreateForm = () => {

     const {userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext

  return (
     <form onSubmit={create} className='d-grid m-3'>

          <h3 className="display-6 mb-4">Create user</h3>

          <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter firstname...' />
          
          <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter lastName...' />
          
          <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter email...' />

          <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter password...' />
          
          <button type='submit' className='btn btn-success'>CREATE USER</button>

   </form>
  )
}

export default CreateForm