import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "./button"
// import Modal from "./modal"

export default function Newsletter() {
  const [values, setValues] = useState({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  })
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(values.EMAIL, { FNAME: values.FNAME, LNAME: values.LNAME })
      .then(response => {
        alert(response.msg)
      })
      .catch(error => {
        alert(error)
      })
  }
  const handleInputChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Div>
        <label htmlFor="email">
          Email Address
          <input
            id="email"
            placeholder="Enter email address"
            aria-label="Email Address"
            name="EMAIL"
            type="text"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="firstname">
          First Name
          <input
            id="firstname"
            type="text"
            placeholder="Enter first name"
            aria-label="First Name"
            name="FNAME"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="lastname">
          Last Name
          <input
            id="lastname"
            type="text"
            placeholder="Enter last name"
            aria-label="Last Name"
            name="LNAME"
            onChange={handleInputChange}
          />
        </label>

        <Button text="Subscribe" type="submit" />
      </Div>
      {/* <Modal title={response.result} text={response.msg} /> */}
    </form>
  )
}

const Div = styled.div`
  display: grid;
  flex-direction: column;
  input {
    display: block;
    width: 100%;
    border: 1px solid #abb0b2;
    border-radius: 3px;
    margin: 0.35em 0 0.65em;
    padding: 8px 0;
    text-indent: 2%;
  }
  button {
    margin: 0.5em 0 1em;
    max-width: 150px;
  }
`
