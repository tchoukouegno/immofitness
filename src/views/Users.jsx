/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect, useState} from 'react';
import { useNavigate, Outlet } from "react-router-dom";


export function Users () {

    const [showButton, setShowButton] = useState(true);

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

    

   

    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }       


    },[]);


    const handleAdd = ()=>{

        setShowButton(!showButton)

      return  navigate('/sideNavBar/Users/addUsers');


    };

   
    return (

        <>
        
       
       <div className='usersArray'>

       <Outlet/>

       {showButton&& <button onClick={handleAdd} className='goToAddUser'>+</button> }


            <h3 className='users'>Clients</h3>

                <div className='arrayContainer'>











                </div>
            
        


       </div>
        
        
            
        
      
            
           
        
        </>






    );



}
