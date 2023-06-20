/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect} from 'react';
import {  useNavigate } from "react-router-dom";


export function Dashboard () {

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

   
    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }


    },[])
    

    return (

        <>
        
        
           
        
        
        </>






    );



}



