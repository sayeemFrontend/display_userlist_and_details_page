import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Home from '../pages/home';
const UserDetails = React.lazy(() => import('../pages/user-details'));
import NotFound from './NotFound';

export default function RootElement() {
  //implement logics for layout and nested routes
  //outlet contains independent router and layout control dependent routes
  return (
    <>
      <Outlet />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='user/:id' element={<UserDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
