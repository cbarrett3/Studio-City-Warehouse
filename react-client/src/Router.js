// import React, { useState, useEffect } from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
// import Nav from './Nav';
// import Public from './Public';
// import Profile from './Profile';
// import Protected from './Protected';
// /**
//  * Logic to hold the router and some logic to determine the current route name
//  */

// const Router = () => {
//   const [current, setCurrent] = useState('home');
//   useEffect(() => {
//     setRoute();
//     window.addEventListener('hashchange', setRoute);
//     return () => window.removeEventListener('hashchange', setRoute);
//   }, []);
//   function setRoute() {
   //  const location = window.location.href.split('/');
   //  const pathname = location[location.length - 1];
   //  setCurrent(pathname ? pathname : 'home');
//   }
//   return (
//     <HashRouter>
//       {/* purpose of the Nav is to control what is seen in the nav bar and curren has colored text */}
//       <Nav current={current} />
      // <Routes>
      //   <Route path="/" element={<Public />} />
      //   <Route path="/profile" element={<Profile />} />
      //   <Route path="/protected" element={<Protected />} />
      //   <Route element={<Public />} />
      // </Routes>
//     </HashRouter>
//   );
// };

// export default Router;
