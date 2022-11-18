import React, { useState, useEffect } from 'react';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';
/**
 * Navigation UI
 */

const menuItems = [
  {
    key: 'home',
    icon: (
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: 'black' } : { color: 'gray' }
        }
      >
        <HomeOutlined />
      </NavLink>
    ),
    label: 'Home',
  },
  {
    key: 'profile',
    icon: (
      <NavLink
        to="profile"
        style={({ isActive }) =>
          isActive ? { color: 'black' } : { color: 'gray' }
        }
      >
        <ProfileOutlined />
      </NavLink>
    ),
    label: 'Profile',
  },
  {
    key: 'protected',
    icon: (
      <NavLink
        to="protected"
        style={({ isActive }) =>
          isActive ? { color: 'black' } : { color: 'gray' }
        }
      >
        <FileProtectOutlined />
      </NavLink>
    ),
    label: 'Protected',
  },
];

const Nav = (props) => {
  const [current, setCurrent] = useState('home');

  //   let location = useLocation();
  //  const location = useLocation();
  //  useEffect(() => {
  //    console.log(location);
  //    //  const location = window.location.href.split('/');
  //    //  const pathname = location[location.length - 1];
  //    //  setCurrent(pathname ? pathname : 'home');
  //  }, [location]);

  return (
    <BrowserRouter>
      <div>
        <Menu
          defaultSelectedKeys={['home']}
          //  selectedKeys={['home']}
          //  selectedKeys={[this.props.location.pathname,]}
          mode="horizontal"
          items={menuItems}
        ></Menu>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/" element={<Public />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// This styling will be applied to a <NavLink> when the
// route that it links to is currently selected.
let activeStyle = {
  textDecoration: 'underline',
};

let activeClassName = 'underline';

export default Nav;
