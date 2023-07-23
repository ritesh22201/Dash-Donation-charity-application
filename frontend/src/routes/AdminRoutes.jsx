import React from "react";
import { Route, Routes } from "react-router-dom";
import Trending from "../components/Admins";
import AdminUsers from "../components/AdminUsers";
import Dashboard from "../components/Dashboard";
import Admins from "../components/Admins";
import Fundraise from "../components/Fundraise";
import AdminOrganization from "../components/AdminOrganization";
import AdminPage from "../pages/Admin/AdminPage";
import Events from "../components/Events";
import PageNotFound from "../components/PageNotFound";

const AdminRoutes = () => {
  return (
    <Routes>
       
      <Route
        path="/dashboard"
        element={
          <AdminPage>
            <Dashboard />
          </AdminPage>
        }
      />
      <Route
        path="/adusers"
        element={
          <AdminPage>
            <AdminUsers />
          </AdminPage>
        }
      />
      <Route
        path="/admins"
        element={
          <AdminPage>
            <Admins />
          </AdminPage>
        }
      />
      <Route
        path="/org"
        element={
          <AdminPage>
            <AdminOrganization />
          </AdminPage>
        }
      />
       <Route
        path="/funds"
        element={
          <AdminPage>
            <Fundraise />
          </AdminPage>
        }
      />
       <Route
        path="/events"
        element={
          <AdminPage>
            <Events />
          </AdminPage>
        }
      />
    </Routes>
   
  );
};

export default AdminRoutes;
