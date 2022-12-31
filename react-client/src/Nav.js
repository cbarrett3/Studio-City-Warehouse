import React, { useState, useEffect } from 'react';
import Homepage from './Homepage';
import Profile from './Profile';
import Protected from './Protected';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  SmileOutlined,
  FileProtectOutlined,
  BarChartOutlined,
  PushpinOutlined,
} from '@ant-design/icons';
/**
 * Navigation UI
 */

const Nav = (props) => {
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
                }
              : { color: 'gray' }
          }
        >
          <HomeOutlined />
        </NavLink>
      ),
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
          <PushpinOutlined />
        </NavLink>
      ),
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
        >
          <SmileOutlined />
        </NavLink>
      ),
    },
    //  {
    //    key: 'usage-metrics',
    //    icon: (
    //      <NavLink
    //        to="usage"
    //        style={({ isActive }) =>
    //          isActive
    //            ? {
    //                color: '#d0ae0d',
    //              }
    //            : { color: 'gray' }
    //        }
    //      >
    //        <BarChartOutlined />
    //      </NavLink>
    //    ),
    //  },
  ];

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: 'black',
          height: '100vh',
          overflow: 'scroll',
          overflowX: 'hidden',
          overflowY: 'hidden',
          borderImageWidth: 25,
        }}
      >
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{
            backgroundColor: 'black',
            borderImage:
              'repeating-linear-gradient(45deg, #d0ae0d, #3bf, #d0ae0d 30px) 60',
          }}
        ></Menu>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Nav;
