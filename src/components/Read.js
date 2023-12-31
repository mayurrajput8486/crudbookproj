import React,{ useState , useEffect} from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom';
const Read = () => {
    const [data, setData] = useState([]);

   function getData(){
    axios.get("https://63ae79fe3e46516916729e56.mockapi.io/crud1/crud-ravi")
    .then((res) => {
        console.log(res.data);
        setData(res.data)
    });
   }
      function handleDelete(id){
        axios.delete(`https://63ae79fe3e46516916729e56.mockapi.io/crud1/crud-ravi/${id}`
        ).then(() =>{
            getData()
        })
      }
    const  setToLocalStorage = (id,name,email)=>{
            localStorage.setItem("id",id);
            localStorage.setItem("name",name);
            localStorage.setItem("email",email);

    }



    useEffect(() => {
    getData();
     }, [])
   


  return (
    <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    data.map((eachData) =>{
        return(
            <> 
             <tbody>
                <tr>
                    <th scope="row">{eachData.id}</th>
                     <td>{eachData.name}</td>
                     <td>{eachData.email}</td>
                <td>
                 <Link to= "/update">
                 <button type="button" class="btn btn-success" onClick={()=> setToLocalStorage(
                  eachData.id,
                  eachData.name,
                  eachData.email
                 )}>Edit</button>
                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                 </svg>
                 </Link>
        
                </td>
                 <td>
                    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(eachData.id)} >Delete</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                 </svg>
                 </td>
                </tr>
   
            </tbody>
 </>
        )
    })
  
}
</table>
    </>

  )
}

export default Read