import React, { useState, useEffect } from 'react';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <div>
        <Menu
          defaultSelectedKeys={['home']}
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

export default Nav;
