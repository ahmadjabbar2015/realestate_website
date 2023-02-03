import { useState } from "react";
import LoginUser from "../actions/auth";

function Login() {
  const { http, setToken } = LoginUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   if (email === '' || password === '') {
  //     console.log('error');
  //   } else {
  //     console.log('Hello');
  //     LoginUser(formData);
  //     console.log('BlowJob');
  //   }
  // };
  const submitForm = () => {
    // api call
    http.post("/login", formData).then((res) => {
      setToken(res.data.user, res.data.token);
    });
  };
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-6">
        <div className="card p-4">
          {/* <form
          //  onSubmit={onFormSubmit}
          > */}
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={onFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              id="pwd"
              value={password}
              onChange={onFormChange}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button
            onClick={submitForm}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          {/* </form> */}
          {/* <form>
            <div ClassName="mb-3">
              <label for="exampleInputEmail1" ClassName="form-label">
                Email address
              </label>
              <input
                type="email"
                ClassName="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" ClassName="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div ClassName="mb-3">
              <label for="exampleInputPassword1" ClassName="form-label">
                Password
              </label>
              <input
                type="password"
                ClassName="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div ClassName="mb-3 form-check">
              <input
                type="checkbox"
                ClassName="form-check-input"
                id="exampleCheck1"
              />
              <label ClassName="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" ClassName="btn btn-primary">
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
