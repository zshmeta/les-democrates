/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 0px solid white;
  border-radius: 5px;
  background-color: #fff;  
  color: darkblue;
  cursor: pointer;
  transition: box-shadow 0.7s ease-in-out, color 0.7s ease-in-out;
    background: linear-gradient(to right, darkBlue, #b0b0f8, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  z-index: 100;

  /* Default box shadow with no offset */
  box-shadow: 0 0 0px rgba(0, 0, 0, 0);

  &:hover {
    color: darkblue; 
    box-shadow: -10px 0 20px darkblue, 10px 0 20px red; 
  }

  &:active {
    color: darkblue;
      background: linear-gradient(to right, darkBlue, blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin-right: ${({ hasText }) => (hasText ? '10px' : '0')};
  }
`;

const Button = ({ text, icon, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  return (
    <StyledButton onClick={handleClick} isActive={isActive} hasText={!!text}>
      {icon && <span className="icon">{icon}</span>}
      {text && <span>{text}</span>}
    </StyledButton>
  );
};

export default Button;
