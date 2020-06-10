import React from "react"
import ReactDOM from "react-dom"
import styled from "@emotion/styled"
import { defaultTheme } from "../utils/themes"

export default function Modal({ title, text }) {
  return ReactDOM.createPortal(
    <StyledModal>
      <strong>{title}</strong>
      <p>{text}</p>
    </StyledModal>,
    document.body
  )
}

const StyledModal = styled.aside`
  z-index: 10;
  margin: 0 auto;
  display: grid;
  border-radius: 20px;
  max-width: 400px;
  min-height: 200px;
  border: 2px solid ${defaultTheme.gray};
  padding: 20px;
`
