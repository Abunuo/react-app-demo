/*
 * @Date: 2021-12-31 17:19:56
 * @Description: route
 */
import React, { Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layouts
const MainLayout = lazy(() => import('@/layouts/main'))

// views
const MainIndex = lazy(() => import("@/views/index"));
const UserManage = lazy(() => import("@/views/user-manage"));

// login
const Login = lazy(() => import("@/views/login"));
// error
const NoMatch = lazy(() => import("@/views/no-match"));


const AdminRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout title="后台管理系统" />}>
            <Route index element={<MainIndex />} />
            <Route path="user-manage" element={<UserManage />} />
          </Route>
          <Route path="login" element={< Login/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AdminRoute;
