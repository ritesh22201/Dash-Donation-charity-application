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
import AdminPrivateRoute from "../components/AdminPrivateRoute";

const AdminRoutes = () => {
  return (
    <Routes>
       
      <Route
        path="/dashboard"
        element={
            <AdminPrivateRoute>
          <AdminPage>
                
            <Dashboard />
          </AdminPage>
            </AdminPrivateRoute>
        }
      />
      <Route
        path="/adusers"
        element={
            <AdminPrivateRoute>

          <AdminPage>
            <AdminUsers />
          </AdminPage>
            </AdminPrivateRoute>
        }
      />
      <Route
        path="/admins"
        element={
            <AdminPrivateRoute>

          <AdminPage>
            <Admins />
          </AdminPage>
            </AdminPrivateRoute>
        }
      />
      <Route
        path="/org"
        element={
            <AdminPrivateRoute>

          <AdminPage>
            <AdminOrganization />
          </AdminPage>
            </AdminPrivateRoute>
        }
      />
       <Route
        path="/funds"
        element={
            <AdminPrivateRoute>
          <AdminPage>
            <Fundraise />
          </AdminPage>
          </AdminPrivateRoute>
        }
      />
       <Route
        path="/events"
        element={
             <AdminPrivateRoute>

          <AdminPage>
            <Events />
          </AdminPage>
             </AdminPrivateRoute>
        }
      />
    </Routes>
   
  );
};

export default AdminRoutes;
