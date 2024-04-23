import React from "react";
import Title from "../Elements/Title";
import Button from "../Elements/Button";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: 'Nunito', sans-serif;
  font-size: 32px; /* Increased font size */
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: whitesmoke;
  background: black;
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 40px; /* Increased padding */
  margin: 50px; /* Added margin to create gap */

  &:hover,
  &:focus {
    border: 8px solid white; /* Adjust border thickness and color */
  }

  &:hover::after {
    content: "${(props) => props.hoverMessage}"; 
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: darkgrey;
    color: white;
    padding: 15px 30px; /* Adjusted padding */
    border-radius: 15px; /* Adjusted border radius */
    font-size: 24px; /* Adjusted font size */
    white-space: nowrap;
  }
`;

function SelectPlayer({ xClick, oClick }) {
  return (
    <>
      <Title style={{'paddingBottom':'40px'}}>Select Player</Title>
      <StyledButton width={"220px"} height={"220px"} onClick={xClick} hoverMessage={'The Bold Choice'}>
        X
      </StyledButton>
      <StyledButton width={"220px"} height={"220px"} onClick={oClick} hoverMessage={'The Smooth Operator'}>
        O
      </StyledButton>
    </>
  );
}

export default SelectPlayer;
