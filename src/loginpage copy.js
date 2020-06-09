import React,{useState} from 'react';
import database from './firebaseConfig';

const  Loginpage =() => {
    const [userName, setUser]= useState("");
    const handleLogin= (e)=>{
        e.preventDefault();
        const provider= new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        // .then(result =>{
        //     const user=result.user;
        //     d
        // })
            
        // database.collection('users').add({
        //     fullName: userName,
        // })
        // console.log(userName)
    }
        return (
        <div className="loginForm">
            <h1>Login</h1>
            {/* <form onSubmit={handleLogin}> */}
                {/* <input type="text" placeholder="Name" value={userName} onChange={e=>{setUser(e.target.value)}}></input>
                <input placeholder="Input Password" type="password" ></input> */}
                <button onClick={Loginpage}>signinwithgoogle</button>
            {/* </form> */}
            
        </div>

        
        );
}
  
  export default Loginpage;