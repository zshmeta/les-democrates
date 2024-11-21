/* eslint-disable react/prop-types */
import styled from 'styled-components';
import flag from '../assets/flag.jpg';
import Button from './ui/Button';
const FooterWrapper = styled.footer`
    position: relative;
    background-image: url(${flag});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    padding: 5px;
    color: white;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }
`;

// const Title = styled.h1`
  
//   font-size: 3rem;
//   font-weight: bold;
//   background: linear-gradient(to right, darkBlue, #b0b0f8, red);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   text-fill-color: transparent;
//   display: inline;
//   text-align: center;
//   font-family: 'Romanesco', Times, serif;
// `;

const Menu = styled.nav`
  margin-top: 10px;
`;

const MenuItem = styled.div`
  display: inline-block;
  margin: 0 15px;
`;
const Footer = ({ footerMenu, onMenuClick }) => {
  return (
    <FooterWrapper>
      <Menu>
        {footerMenu.map((item, index) => (
          <MenuItem key={item.id}>
            <Button
              text={item.title}
              icon={item.icon}
              onClick={() =>
                onMenuClick(item.content, index === 0 ? 'left' : index === 1 ? 'center' : 'right')
              } 
            />
          </MenuItem>
        ))}
      </Menu>
    </FooterWrapper>
  );
};

export default Footer;