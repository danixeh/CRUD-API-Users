
import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

const UsersList = ({ car, getAllCars, setUpdateInfo, togglePhrase }) => {

    const deleteCarById = id => {
        const URL = `https://users-crud1.herokuapp.com/users/${id}`
            axios.delete(URL)
              .then(res =>{
                console.log(res.data)
                getAllCars()     
              }      

              )
            .catch(err => console.log(err))
    }

  const getInfoUpdate = () => { 
    togglePhrase()
    setUpdateInfo(car);

  }
  
    return (
      <div className="one">

        <h2 className="three" >{car.first_name} {car.last_name}</h2>
        <hr />
        <p>Email</p>
        <b><h6>{car.email}</h6></b> 
        <p>Birthday</p>
        <h3>{car.birthday}</h3>
        <hr />
        <div className="two">
        <button className='btn-f' onClick={() => deleteCarById(car.id)}><img src="basura.svg" alt="" /></button>
        <button className='btn-f' onClick={getInfoUpdate}><img src="Lapiz.svg" alt="" /></button>
        </div>
        {/* it is necessary to inclose the formula between brakets in order to avoid its works at beginin    */}   
        </div>    
  )
}

export default UsersList