/* eslint-disable react/prop-types */
import styled from 'styled-components';


const getStyles = (alignment) => {
    if (alignment === 'left') {
      return {
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.575), rgba(255, 255, 255, 0))', // Left to right
        color: 'darkred', // Text color for left
      };
    } else if (alignment === 'center') {
      return {
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.575), rgba(255, 255, 255, 0))', // Divided into three parts
        color: 'blue', // Text color for center
      };
    } else if (alignment === 'right') {
      return {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.575), rgba(255, 255, 255, 0))', // Right to left
        color: 'darkblue', // Text color for right
      };
    }
    return { background: 'none', color: 'white' }; // Default styles
  };
  
  const BoardsWrapper = styled.div`
  position: fixed;
  ${(props) =>
    props.alignment === 'left' ? 'left: 0;' : props.alignment === 'center' ? 'left: 33.33%;' : 'right: 0;'}
  width: 33.33%; /* Each board takes up 33.33% of the width */
  top: 0;
  height: 100vh; /* Full height */
  padding: 15px 30px;
  background: ${(props) => getStyles(props.alignment).background}; /* Dynamic background gradient */
  color: ${(props) => getStyles(props.alignment).color}; /* Dynamic text color */
  font-size: 2.5rem;  /* Larger font */
  font-weight: bold;
  font-family: 'Romanesco', Courier, monospace;  /* Fancy font */
  text-align: center;  /* Centered text */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const Boards = ({ content, alignment, onClick }) => {
  return (
    <BoardsWrapper isVisible={!!content} alignment={alignment} onClick={onClick}>
      <div>
        {content}
      </div>
    </BoardsWrapper>
  );
};

export default Boards;
