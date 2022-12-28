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

const Nav = (props) => {
  const [selectedKeys, setSelectedKeys] = useState(['home']);

  const menuItems = [
    {
      key: 'home',
      icon: (
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#d0ae0d',
                  //  borderBottom: '4px solid #d0ae0d',
                }
              : { color: 'gray' }
          }
        >
          <HomeOutlined />
          {`     Home`}
        </NavLink>
      ),
      //  style: { borderBottom: '4px solid #d0ae0d' },
    },
    {
      key: 'profile',
      icon: (
        <NavLink
          to="profile"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#d0ae0d',
                }
              : { color: 'gray' }
          }
          //  onSelect={() => setSelectedKeys('profile')}
        >
          <ProfileOutlined />
          {`     Profile`}
        </NavLink>
      ),
      //  label: 'Profile',
      //  style: { borderBottom: 'none !important' },
    },
    {
      key: 'protected',
      icon: (
        <NavLink
          to="protected"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#d0ae0d',
                }
              : { color: 'gray' }
          }
        >
          <FileProtectOutlined />
          {`     Protected`}
        </NavLink>
      ),
      //  label: 'Protected',
      //   style: { u: '#d0ae0d' },
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ backgroundColor: 'black' }}
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

export default Nav;
