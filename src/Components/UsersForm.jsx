import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

const defaultValue = {
    
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',  
}


const UsersForm = ({createNewCar, updateInfo, getAllCars, setUpdateInfo, togglePhrase}) => {


const {register, handleSubmit, reset} = useForm()   

    
    useEffect(() => {
        if(updateInfo){
            reset(updateInfo)
        }
 
    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            const URL =`https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
            axios.put(URL, data)
                .then(res => {
                    console.log(res.data)
                    getAllCars()                  
                })
                .catch(err => console.log(err))  
            reset(defaultValue)
            setUpdateInfo(null)
            togglePhrase()
        } else { 
            createNewCar(data)
            console.log(data)
            reset(defaultValue)
            togglePhrase()
            setUpdateInfo(null)
       
        } 
    }


    return (
        <div className="identification">
        <form onSubmit={handleSubmit(submit)} className="User-form" >   
            <div> 
            <label htmlFor="email">Email  </label>
            <input placeholder="please write the email" {...register('email')} type="mail" id='email' />
            </div>
            <div>
            <label htmlFor="password">Password  </label>
            <input placeholder="please write the password" {...register('password')} type="password" id='password' />
            </div>
            <div>
            <label htmlFor="first_name">First Name  </label>
            <input placeholder="please write the first name" {...register('first_name')} type="name" id='first_name' />
            </div>
            <div>
            <label htmlFor="last_name">Last Name  </label>
            <input placeholder="please write the last name" {...register('last_name')} type="name" id='last_name' />
            </div>
            <div>
            <label htmlFor="birthday">Birthday  </label>
            <input placeholder="please write the birthday" {...register('birthday')} type="date" id='birthday' />
                </div>  
            <div className='four' >    
           <button className='five'>Submit</button>
 
           </div>
            </form>
            <div><button className='fivee' onClick={togglePhrase}>Get Back</button></div>
       
      </div>
  )
}

export default UsersForm