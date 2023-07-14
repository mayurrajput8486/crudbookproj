import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
          
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate= useNavigate();
  useEffect(() => {
    
   setId(localStorage.getItem("id"));
   setName(localStorage.getItem("name"));
   setEmail(localStorage.getItem("email"));
 
  }, [])
  
 const  handleUpdate =(e)=>{
  e.preventDefault();
  console.log("id...",id);
  axios.put(`https://63ae79fe3e46516916729e56.mockapi.io/crud1/crud-ravi/${id}`,
  {
    name :name, 
    email:email, 
    
  }
    
).then(()=>{
  navigate("/read");
})

 };

  return (
   <>
   <div> <b>Update</b></div>
   <form>
        <div className="mb-6">
         <label  className="form-label">Name</label>
         <input type="text" className="form-control"  placeholder="Enter Your Name"
         value={name}
         onChange={(e)=> setName(e.target.value)}
         />
        </div>
        <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="name@example.com"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        
        />
        </div>
        <div>
           
        <button type="button" className="btn btn-primary"
        onClick={handleUpdate}
        >
            Update</button>
        </div>
     </form>
   
   </>
  )
}

export default Update;