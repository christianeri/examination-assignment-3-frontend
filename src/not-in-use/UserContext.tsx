import React, { createContext, useContext, useState } from 'react'
import { User, UserRequest } from './UserModel'


export interface IUserContextProps {
     children:any
     
}

export interface IUserContext {
     user:          User
     setUser:       React.Dispatch<React.SetStateAction<User>>
     userRequest:   UserRequest
     setUserRequest:React.Dispatch<React.SetStateAction<UserRequest>>
     users:         User[]
     create:        (e:React.FormEvent) => void
     get:           (id:number) => void
     getAll:        () => void
     update:        (id:number, e: React.FormEvent) => void
     // update:        (e: React.FormEvent) => void
     remove:        (id:number) => void
}

export const UserContext = createContext<IUserContext|null>(null)
export const useUserContext = () => {return useContext(UserContext)}

const UserProvider = ({children}:IUserContextProps) => {


     const baseUrl = 'http://localhost:5000/api/users'

     const userDefault = {id:0, firstName:'', lastName:'', email:''}
     const [user, setUser] = useState<User>(userDefault)
     
     const userRequestDefault = {firstName:'', lastName:'', email:'', password:''}
     const [userRequest, setUserRequest] = useState<UserRequest>(userRequestDefault)


     const [users, setUsers] = useState<User[]>([])


     const create = async (e:React.FormEvent) => {
          e.preventDefault()

          const result = await fetch(`${baseUrl}`, {
               method: 'post',
               headers: {
                    'Content-Type': 'application/json'
               }, body: JSON.stringify(userRequest)
          })
          if (result.status === 201) {
               setUserRequest(userRequestDefault)
               const newUser = await result.json()
               setUsers(oldUsers => [...oldUsers, newUser])

          }
     }

     const get = async (id:number) => {
          const result = await fetch(`${baseUrl}/${id}`)
          if (result.status === 201)
               setUser(await result.json())
     }

     const getAll = async () => {
          const result = await fetch(`${baseUrl}`)
               if (result.status === 200)
               setUsers(await result.json())
     }


     // const update = async (e: React.FormEvent) => {
     const update = async (id:number, e:React.FormEvent) => {
          e.preventDefault()

          const result = await fetch(`${baseUrl}/${user.id}`, {
               method: 'put',
               headers: {
                    'Content-Type': 'application/json'
               }, body: JSON.stringify(user)
          })
          if (result.status === 200)
          setUser(await result.json())
     }



     const remove = async (id:number) => {
          
          const result = await fetch(`${baseUrl}/${id}`, {
               method: 'delete'
          })
          if (result.status === 204)
          setUser(userDefault)
     }


  return (
     <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove}}>
          {children}
     </UserContext.Provider>
  )
}

export default UserProvider