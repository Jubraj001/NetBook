import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [credentials,setCredentials] = useState({name:"",email:"",password:""});
  let navigate = useNavigate();
  const onClickHandler=async()=>{
      console.log(credentials)
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body:JSON.stringify(credentials)
      });
      const json = await response.json();
      console.log(json.authToken)
      if(json.success)
      {
          // Save the auth token
          localStorage.setItem('token',json.authToken);
          // Navigate to the home page
          navigate("/");
      }
      else{
          alert(json.error);
      }
  }
  const onChange = (e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value});
  }
return (
  <div>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={onChange}/>
      </div>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={onChange}/>
      </div>
      <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange}/>
      </div>
      <button className="btn btn-primary" onClick={onClickHandler}>Submit</button>
  </div>
)
}
