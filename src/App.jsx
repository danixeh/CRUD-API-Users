import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './Components/UsersList'
import { useForm } from 'react-hook-form'
import UsersForm from './Components/UsersForm'


function App() {
  const [cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isBoolean, setIsboolean] = useState();


  const togglePhrase = () => {
    if (isBoolean) {
      setIsboolean()
          } else {
      setIsboolean(true)
    }
  };

  // do a request to all cars API
  const getAllCars = () => {
    const URL ='https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

    // do our first request to new cars API
  useEffect(() => {
    getAllCars()
  },[])   

    const onclickNewUser = () => {
      togglePhrase()
      getAllCars()
  };


  const createNewCar = data => {
    const URL ='https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllCars()
      }
      )
      .catch(err => console.log(err))      
  } 

  console.log(isBoolean);
  console.log(cars);

  return (
    <div className="App">
      <div className="d-hd">
        <h1>Users</h1>
        <button onClick={onclickNewUser}> + Create a new User </button> 
      </div>
      <div >
        {isBoolean ? 
          <UsersForm
         
            createNewCar={createNewCar}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
            getAllCars={getAllCars}
            togglePhrase={togglePhrase}
          />          
          : '' } 
   
      </div>
        <div className="ok">
        {
          cars?.map(car => (
            <UsersList

              key={car.id}
              car={car}
              getAllCars={getAllCars}
              setUpdateInfo={setUpdateInfo} 
              togglePhrase={togglePhrase}
            />            
          ))
        }
      </div>
    </div>
  )
}

export default App
