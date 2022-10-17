import { useRef, useState } from "react";

function Form() {
  return (
    <>
      <form>
        <label for="name">Name: </label>
        <input type="text" value="" name="name" placeholder="Name" id="name"/>
        <br />
        <br />
        <label for="email">Email: </label>
        <input type="text" value="" name="email" placeholder="Email" id="email"/>
        <br />
        <br />
        <label for="phone-number">Phone Number: </label>
        <input type="text" value="" name="phone-number" placeholder="Phone Number" id="phone-number"/>
        <br />
        <br />
        <label for="phone-type">Phone type: </label>
        <select name="phone-type" id="phone-type">
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
        <br />
        <br />
        <label for="staff">Staff: </label>
        <input type="radio" value="instructor" name="staff" placeholder="Staff" id="staff"/>Instructor
        <input type="radio" value="student" name="staff" placeholder="Staff" id="staff"/>Student
        <br />
        <br />
        <label for="bio">Bio: </label>
        <textarea name="bio" id="bio" value="" placeholder="Bio" cols="30" rows="10"></textarea>
        <br />
        <br />
        <label for="notifications">Sign up for Notifications?</label>
        <input type="checkbox" id="notifications" name="notifications" value="yes"/>Yes
        <input type="checkbox" id="notifications" name="notifications" value="no"/>No

      </form>
    </>
  )
}

export default Form;