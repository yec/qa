import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
// import Menu from 'react-burger-menu/lib/menus/slide'
import HamburgerMenu from 'react-hamburger-menu';
import {connect} from 'react-redux';

import { menuOpenSelector } from '../reducers';

const Wrapper = styled.div`
  z-index: 1200;
  position: fixed;
  height: 56px;
  background-color: white;

  width: 100%;
  display: flex;
  justify-content: center;

  box-shadow: 0 0 15px 0px rgba(0,0,0,.1);

  @media (min-width: 769px) {
    margin-top: 40px;
    height: 72px;
    // box-shadow: inset 0 -1px 0 0 #eeeeee;
  }

  &:after {
    width: 0;
    transition: width 0.1s;
    content: '';
    display: block;
    position: absolute;
    height: 4px;
    left: 0;
    bottom: -4px;
    background-color: #8de2e0;
  }

  ${props => props.menuOpen && css`
    &:after {
      width: 100%;

      @media (min-width: 769px) {
        display: none;
      }
    }
  `}
`;

const Level = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  @media (min-width: 769px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Picture = styled.picture`
  display: flex;
  flex-grow: 1;
  position: relative;
  height: 100%;
  align-items: center;
`;

const Image = styled.img`
  display: flex;
  position: relative;
  height: 100%;

  @media (min-width: 769px) {
    height: 60px
  }
`;

const Primary = styled.ul`
  display: none;
  position: fixed;
  z-index: 1201;
  background-color: white;
  width: 100%;
  height: 40px;
  box-shadow: inset 0 -1px 0 0 #eeeeee;
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    display: flex;
  }
`

const Decoration = styled.div`
  height: 2px;
  width: 0%;
  display: flex;
  background-color: #e40000;
  position: absolute;
  left: 0;
  bottom: -1px;
  transition: width 0.2s;
`;

const PrimaryItem = styled.li`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 12px;
  height: calc(100% - 2px);
  position: relative;

  &:hover ${Decoration} {
    width: 100%;
  }

  ${props => props.active && css`
    color: #e40000;
    ${Decoration} {
      width:100%;
    }
  `}
`;

const Anchor = styled(Link)`
  text-decoration: none;
  height: 100%;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #e40000;
  }
`;

const Phone = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Ciutadella";

  svg {
    padding-right: 20px;
  }

  span {
    display: none;
    padding-right: 20px;
  }

  @media (min-width: 769px) {
    span {
      display: flex
    }
  }
`;

const Login = styled.button`

  display: none;
  font-size: 18px;
  font-family: "Ciutadella-Regular";
  align-items: center;
  justify-content: center;

  border: none;
  background: inherit;

  padding: 0;

  svg {
    padding-right: 20px;
  }

  @media (min-width: 769px) {
    display: flex
  }
`;

const StyleBurger = styled.div`
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #dddddd;

  @media (min-width: 769px) {
    display: none
  }
`

const StyleMenu = styled.div`
  @media (min-width: 769px) {
    display: none
  }
`

const Spacer = styled.div`

  height: 56px;

  @media (min-width: 769px) {
    height: 112px;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FlexSpacer = styled.div`
  flex: 1;
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#323232',
    fontSize: '1.15em',
    paddingTop: 4
  },
  bmMenuWrap: {
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    // display: 'inlinblock'
    color: 'white',
    textDecoration: 'none',
    padding: '0.8em',
    borderBottom: '1px solid #555'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const MenuOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #555;
  opacity: 0
  transition: opacity 0.1s;
`;

const MenuList = styled.ul`
  position: relative;
  top: 0;
  left: 0;
  background: #323232;
  width: 80%;
  max-width: 500px;
  height: calc(100vh - 60px);
  padding: 4px 0 0 0;
  margin: 0;

  transform: translate3d(-100%, 0, 0);
  transition: transform 0.3s;

`;

const MenuItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #555;
  color: white;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
    font-family: "Ciutadella";
    font-size: 1.125rem;
  }

  ${props => props.isActive && css`
    background-color: white;
    color: #555;

    &:before {
      top: 0;
      left: 0;
      content: '';
      position: absolute;
      background-color: #8de2e0;
      width: 6px;
      height: 100%;
    }
  `}
`;

const Menu = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: none;

  ${props => props.isOpen && css`
    display: block;

    ${MenuOverlay} {
      opacity: 0.4;
    }

    ${MenuList} {
      transform: translate3d(0, 0, 0);
    }
  `}
`;

const Header = (props) => {
  return (
    <React.Fragment>
      <Primary>
        <PrimaryItem active={props.location.pathname=="/"}>
          <Anchor to="/">Home</Anchor>
          <Decoration />
        </PrimaryItem>
        <PrimaryItem active={props.location.pathname.indexOf("/faqs") === 0}>
          <Anchor to="/faqs">FAQS</Anchor>
          <Decoration />
        </PrimaryItem>
      </Primary>
      <Wrapper menuOpen={props.menuOpen}>
        <Level>

        <Picture>
          <source srcSet="https://www.qantasassure.com//dist/165b24bc17fd2a112937c8f9febcd80d.svg" media="(min-width: 769px)" />
          <Image src="https://www.qantasassure.com//dist/f00b2d94ca7de17df2a2d916148407f6.svg" alt="Qantas Insurance Header Logo" />
          <HomeLink to="/">
          </HomeLink>
        </Picture>
        <FlexSpacer />
        <Phone href="tel:1300479581">
          <svg width="14" height="20" viewBox="0 0 14 20"><path fill="#e40000" d="M11.303 14.048c-.586-.631-1.261-.889-2.073-.47l-.814.434c-.45.23-.455.363-.622.623-.434.678-1.02.523-1.295.23-1.172-1.247-2.627-4.05-2.641-4.076-.49-.95-.786-1.947-.962-2.936-.067-.398.137-.961.943-.92.307.015.418.09.868-.142l.826-.407c.812-.417.998-1.114.824-1.96L5.418.758a1.378 1.378 0 0 0-1.852-.61l-1.762.887c-.304.155-.59.472-.774.834-1.487 2.512-1.4 6.472.496 10.16.068.137 2.972 7.202 8.751 7.84.401.061.823.015 1.127-.143l1.748-.915a1.378 1.378 0 0 0 .581-1.86l-2.43-2.903" fillRule="evenodd"></path></svg>
          <span>1300 479 581</span>
        </Phone>
        <StyleBurger>
        <HamburgerMenu
          isOpen={props.menuOpen}
          menuClicked={props.menuToggle}
          width={22}
          height={13}
          strokeWidth={2}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.1}
        />
        </StyleBurger>
        <Login onClick={ev => props.history.push('/login')}>
          <svg width="19" height="20" viewBox="0 0 19 20">
          <path fillRule="even" fill="#e40000" d="M17.911 15.133C19.873 16.723 19.054 20 16.495 20H2.628c-2.639 0-3.62-3.47-1.399-4.916 1.632-1.05 3.111-1.742 4.861-2.08-.008-.261-.01-.541-.007-.952 0-.166-.098-.358-.54-1.048-.48-.75-.713-1.243-.769-1.845-.156-.434-.239-1.109-.305-2.134-.026-.395-.087-1.623-.083-1.562a5.942 5.942 0 0 0-.035-.45C3.94 2.683 4.844.796 6.841.201c.916-.273 4.66-.268 5.44.014 2.03.735 2.905 2.492 2.495 4.809-.012.067-.02.334-.025.929-.006.558-.008.75-.016 1.047-.026 1.043-.085 1.717-.243 2.16-.06.624-.33 1.137-.875 1.901-.496.696-.603.88-.603.988.001.437 0 .702-.009.956 1.86.362 3.839 1.271 4.906 2.128zm-1.618 3.084c.969 0 1.309-1.36.43-2.072-.861-.692-2.616-1.491-4.209-1.78a1.339 1.339 0 0 1-1.114-1.37c.011-.264.014-.517.012-1.003 0-.58.117-.78.862-1.825.407-.57.572-.896.585-1.188a.744.744 0 0 1 .07-.283c.072-.15.134-.765.156-1.647.007-.277.009-.46.014-.994.007-.733.014-.956.047-1.146.279-1.572-.211-2.556-1.458-3.007-.439-.16-3.747-.164-4.34.013-1.136.339-1.649 1.41-1.37 2.982.022.128.036.307.054.615-.003-.05.055 1.133.08 1.503.057.893.14 1.518.218 1.682a.744.744 0 0 1 .07.283c.014.307.157.62.523 1.193.626.978.759 1.239.759 1.823-.003.455 0 .73.01.998a1.342 1.342 0 0 1-1.115 1.37c-1.52.277-2.824.882-4.29 1.824-.92.598-.515 2.03.54 2.03h13.466z" ></path>
          </svg>
          <span>Log in</span>
        </Login>
        </Level>
      </Wrapper>
      <Spacer />
      <StyleMenu>
        <Menu
          isOpen={ props.menuOpen }
          styles={ styles }>
          <MenuOverlay onClick={ props.menuToggle } />
          <MenuList>
            <MenuItem isActive={props.location.pathname == '/'}>
              <Link className="menu-item" to="/">Home</Link>
            </MenuItem>
            <MenuItem isActive={props.location.pathname.indexOf('/faqs') === 0}>
              <Link className="menu-item" to="/faqs">Faqs</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </StyleMenu>
    </React.Fragment>
  );
};

export default connect(state => ({
  menuOpen: menuOpenSelector(state)
}), {
  menuToggle: () => ({ type: 'MENU_TOGGLE' })
})(Header);
