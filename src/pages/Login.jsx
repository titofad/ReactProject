import React,{useState,useEffect} from 'react'
import SammyShopping from "../assets/sammyShopping.gif";
import Loader from "../assets/Loader.gif";
import axios from "axios"
import{useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  //  to simulat loading effect, by knowing when the request starts and ends
  const [isLoading, setisLoading] = useState(false)


  const handleSubmit = async (event) => {
    // prevent page from loading
    event.preventDefault();
    // set is loading to true 
    setisLoading(true);
    //  check if email and password has value and password length is greater than 6
    if (email && password && password.length >6)
      // use ES6 try to make catch request
    try {
      // apiurl = https://reqres.in/api/login
      const api_url = "https://reqres.in/api/login" ;
      // if your object name and value has same naming, u can type just the value name and js would infer the name
      const req = await axios.post(`${api_url}`,{
        email,
        password
      });
      alert("login successful");
      sessionStorage.setItem("token",req.data.token)
      console.log(req);
      navigate("/dashboard")
    }catch(err){
      console.log(err);
      alert(err.response.data.error)
    }
    else{
      alert("please fill all input fields");
    }
    setisLoading(false);
  };

  return (
    <div className='h-screen w-screen '>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-blue-400 md:h-screen h-[30vh] w-full flex justify-center items-center'>
          <img src={SammyShopping} alt="" />
        </div>
        <div className='col-span-1 bg-white flex flex-col justify-center items-center'>
       <form className='shadow h-fit md:h-[55%] w-full md:w-[90%] px-3 pb-3 pt-5 rounded' onSubmit={handleSubmit}>
       <h1 className='font-bold text-3xl text-center mb-4'>Login</h1>
         {/* {set value on input field and use onChange to trcat when vaue is updated} */} 
       <input type="text" className='border border-[.1rem] text-center border-gray-200 h-12 w-full mb-4 rounded '
       placeholder='Enter Email'
       value={email}
       onChange={(text) => setEmail(text.target.value)}
       />
       {/* {set value on input field and use onChange to trcat when vaue is updated} */}
        <input type="password" className='border border-[.1rem] text-center border-gray-200 h-12 w-full mb-4 rounded '
       placeholder='Enter Password'
       value={password}
        onChange={(text) => setPassword(text.target.value)}
        required
        />
         {
          isLoading? ( 
          <img src={Loader} />
          ): (
            <button className='h-12 w-[50%] bg-blue-400 rounded text-white mx-[25%]'>Login
      
             </button>
      
          )}
         </form>
       </div>

      </div>
        
    </div>
  );
}

export default Login