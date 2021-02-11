import React, { useState } from 'react';
import '../component/react.css';

const Reactform = () => {
    
    const [email , setEmail]=useState("");
    const [password , setpassword]=useState("");
    const [setallentry , setnewentry]=useState([]);

    const onchangevalue=(e)=>{
        e.preventDefault();
        const newentry={email:email , password:password};

         setnewentry([...setallentry,newentry]);
        console.log(setallentry);
    }


  return (
    <>
    <h2 className="header">WELCOME TO REACT JS LOGIN FORM</h2>
        <div className="main_div">
        <form action="" onSubmit={onchangevalue}>
           <div>
           <label htmlFor="email">Email-- </label>
            <input type="text" name="email" autoComplete="off" id="email" 
            placeholder="Iinput your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
           </div>
           <div>
           <label htmlFor="password">password</label>
           <input type="password" name="password" autoComplete="off" id="password" 
           placeholder="input your password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            
            />
           </div>
           <button type="submit" className="btn">Submit</button>
        </form>

        <div>
            {
                setallentry.map((curEle)=>{
                    return(
                        <div className="detailsshow">
                            <p>{curEle.email}</p>
                            <p>{curEle.password}</p>
                        </div>
                    )
                })
               

                }
            
        </div>
        </div>

       
      
    </>
  )
}

export default Reactform
