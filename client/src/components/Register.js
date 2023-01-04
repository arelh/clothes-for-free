import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"

function Register() {
  const navigate=useNavigate()
  const [register, setRegister] = useState({name: "",address: "",phoneNumber:"",email:"",password:""});
  // const [user,setUser]=useState(null)


  const RegisterUser = async ()=>{
    const {data}= await axios.post("http://localhost:5002/clothesForFree/signup",register)
     console.log(data.result);
    //  setUser(data.result)
     navigate(`/ProductUser/${data.result._id}`)
     localStorage.setItem("user", JSON.stringify(data.result))

   }
  //  console.log("user",user);

  return (
    <section className="vh-200" style={{ backgroundColor: "#252525" }}>
      <div className="container  h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5 ">הירשם</h3>
                  {/* ----------------name----------------- */}

                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="typeEmailX-2">
                    שם
                  </label>
                  <input
                    onChange={(e)=>{setRegister((prev)=> {
                      return {...prev,name:e.target.value}})}}
                    type="string"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                </div>
                  {/* ----------------address----------------- */}

                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    כתובת
                  </label>
                  <input
                  onChange={(e)=>{setRegister((prev)=> {
                    return {...prev,address:e.target.value}})}}
                    type="string"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    
                  />
                  
                </div>
                  {/* ----------------phoneNumber----------------- */}
                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    מספר טלפון
                  </label>
                  <input
                  onChange={(e)=>{setRegister((prev)=> {
                    return {...prev,phoneNumber:e.target.value}})}}
                    type="string"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    
                    />
                  
                </div>
                  {/* ----------------email----------------- */}

                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="typePasswordX-2">
                   כתובת מייל
                  </label>
                  <input
                  onChange={(e)=>{setRegister((prev)=> {
                    return {...prev,email:e.target.value}})}}
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    
                  />
                  
                </div>
                {/* ----------------password----------------- */}
                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="typePasswordX-2">
                   סיסמא
                  </label>
                  <input
                  onChange={(e)=>{setRegister((prev)=> {
                    return {...prev,password:e.target.value}})}}
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    
                  />
                  
                </div>

                <div>
                  <button
                    onClick={RegisterUser}
                    className="btn btn-primary btn-lg btn-block m-1"
                    type="submit"
                  >
                    Register
                  </button>
                  <p>?already account</p>
                  <button
                    onClick={RegisterUser}
                    className="btn btn-primary  btn-block m-1"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <label style={{ color: "brown" }}></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register