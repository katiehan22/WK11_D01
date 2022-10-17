import { useRef, useState } from "react";

function Form() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "",
    staff: "",
    bio: "",
    notifications: ""
  });

  const [errors, setErrors] = useState([]);

  const validates = () => {
    let errors = [];
    if(user.name.length === 0){
      errors.push("Name cannot be blank");
    } 
    if(user.email.length === 0) {
      errors.push("Email cannot be blank");
    }
    if(user.phoneType === "" && user.phoneNumber.length > 0) {
      errors.push("Must specify phone type");
    }
    if(user.bio.length > 280) {
      errors.push("Bio cannot exceed 280 characters");
    }
    return errors;
  }

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
    console.log(user);
    let errors = validates();
    if(errors.length) {
      setErrors(errors);
    }
  }

  const showErrors = () => {
    if(!errors.length) {
      return null;
    } else {
      return (
        <ul>
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      )
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" value={user.name} name="name" placeholder="Name" id="name" onChange={handleChange("name")}/>
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" value={user.email} name="email" placeholder="Email" id="email" onChange={handleChange("email")} />
        <br />
        <br />
        <label htmlFor="phone-number">Phone Number: </label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={user.phoneNumber} name="phone-number" placeholder="123-456-7890" id="phone-number" onChange={handleChange("phoneNumber")} />
        <br />
        <br />
        <label htmlFor="phone-type">Phone type: </label>
        <select name="phone-type" value={user.phoneType} id="phone-type" onChange={handleChange("phoneType")}>
          <option value="" disabled>Select Phone Type</option>
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
      {showErrors()}
    </>
  )
}

export default Form;