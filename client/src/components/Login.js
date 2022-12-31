import React from "react";

function Login() {
//   const [login, setLogin] = useState({
//     username: "",
//     password: "",
//  });
//  const [validEmail, setValidEmail] = useState(null)

const checkLogin=async(e)=>{
  e.preventDefault()
}


  return (
    <section className="vh-100" style={{ backgroundColor: "#252525" }}>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"

                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                <div>
                  <button
                  onClick={checkLogin}
                    className="btn btn-primary btn-lg btn-block m-1"
                    type="submit"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-primary btn-lg btn-block m-1"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <label style={{ color: "brown" }}></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
