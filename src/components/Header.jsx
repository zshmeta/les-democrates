/* eslint-disable react/prop-types */
import styled from 'styled-components';
import flag from '../assets/flag.jpg';
import Button from './ui/Button';

const HeaderWrapper = styled.header`
  position: relative;
  background-image: url(${flag});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 10px;
  color: white;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, darkBlue, #b0b0f8, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline;
  text-align: center;
  font-family: 'Romanesco', Times, serif;
`;

const Menu = styled.nav`
  margin-top: 10px;
`;

const MenuItem = styled.div`
  display: inline-block;
  margin: 0 15px;
`;
const Header = ({ headerMenu, onMenuClick }) => {
  return (
    <HeaderWrapper>
      <Title>Les Démocrates</Title>
      <Menu>
        {headerMenu.map((item, index) => (
          <MenuItem key={item.id}>
            <Button
              text={item.title}
              icon={item.icon}
              onClick={() =>
                onMenuClick(item.content, index === 0 ? 'left' : index === 1 ? 'center' : 'right')
              } // Set alignment based on index
            />
          </MenuItem>
        ))}
      </Menu>
    </HeaderWrapper>
  );
};


export default Header;