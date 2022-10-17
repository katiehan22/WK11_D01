import { useRef, useState } from "react";

function Form() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "home",
    staff: "",
    bio: "",
    notifications: ""
  });

  const handleChange = (incomingKey) => {
    return (e) => {
      console.log(e);
      console.log(incomingKey);
      const userObj = Object.assign({}, user, {[incomingKey]: e.target.value});
      setUser(userObj);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(user)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" value={user.name} name="name" placeholder="Name" id="name" onChange={handleChange("name")}/>
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" value={user.email} name="email" placeholder="Email" id="email" onChange={handleChange("email")} />
        <br />
        <br />
        <label htmlFor="phone-number">Phone Number: </label>
        <input type="text" value={user.phoneNumber} name="phone-number" placeholder="Phone Number" id="phone-number" onChange={handleChange("phoneNumber")} />
        <br />
        <br />
        <label htmlFor="phone-type">Phone type: </label>
        <select name="phone-type" value={user.phoneType} id="phone-type" onChange={handleChange("phoneType")}>
          <option value="home" >Home</option>
          <option value="work" >Work</option>
          <option value="mobile" >Mobile</option>
        </select>
        <br />
        <br />
        <label htmlFor="staff">Staff: </label>
        <input type="radio" value="instructor" onChange={handleChange("staff")} name="staff" placeholder="Staff" id="staff"/>Instructor
        <input type="radio" value="student" onChange={handleChange("staff")} name="staff" placeholder="Staff" id="staff"/>Student
        <br />
        <br />
        <label htmlFor="bio">Bio: </label>
        <textarea name="bio" id="bio" value={user.bio} placeholder="Bio" cols="30" rows="10" onChange={handleChange("bio")}></textarea>
        <br />
        <br />
        <label htmlFor="notifications">Sign up for Notifications?</label>
        <input type="checkbox" id="notifications" onChange={handleChange("notifications")} name="notifications" value="yes"/>Yes
        <input type="checkbox" id="notifications" onChange={handleChange("notifications")} name="notifications" value="no"/>No
        <br />
        <br />
        <button>Submit</button>

      </form>
    </>
  )
}

export default Form;