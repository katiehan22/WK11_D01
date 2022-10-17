import { useRef, useState } from "react";

function Form() {
  return (
    <>
      <form>
        <label for="name">Name: </label>
        <input type="text" value="" placeholder="Name" id="name"/>

        <label for="email">Email: </label>
        <input type="text" value="" placeholder="Email" id="email"/>

        <label for="phone-number">Phone Number: </label>
        <input type="text" value="" placeholder="Phone Number" id="phone-number"/>

        <label for="phone-type">Phone type: </label>
        <select name="phone-type" id="phone-type">
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>


      </form>
    </>
  )
}

export default Form;