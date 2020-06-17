import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//PAGE
import Login from "./Page/Login/Login";
import ResetPassword from "./Page/ResetPassword/ResetPassword";
// SUPER ADMIN
import Dashboard from "./RoleSuperAdmin/Dashboard/Dashboard";
import RelationshipManager from "./RoleSuperAdmin/RelationshipManager/Listing/RelationshipManager";
import RelationshipManagerSingle from "./RoleSuperAdmin/RelationshipManager/Single/RelationshipManagerSingle";
import SuperAdminNgoListing from "./RoleSuperAdmin/NGO/Listing/NgoListing";
import SuperaAminNgoSingle from "./RoleSuperAdmin/NGO/Single/NgoSingle";
import SuperAdminNgoSingleProgram from "./RoleSuperAdmin/NGO/SingleProgram/NgoSingleProgram";
import SuperAdminNgoSingleBeneficiary from "./RoleSuperAdmin/NGO/SingleBeneficiary/NgoSingleBeneficiary";
import NgoBeneficiaryReport from "./RoleSuperAdmin/NGO/BeneficiaryReport/NgoBeneficiaryReport";
import SuperAdminCommunication from "./RoleSuperAdmin/Communication/Communication";
import Notification from "./RoleSuperAdmin/Notification/Notification";
//RELATIONSHIP MANAGER
import NgoListing from "./RoleRelationshipManager/container/NgoListing/NgoListing";
import NgoSingle from "./RoleRelationshipManager/container/NgoSingle/NgoSingle";
import NgoSingleProgram from "./RoleRelationshipManager/container/NgoSingleProgram/NgoSingleProgram";
import NgoSingleBeneficiary from "./RoleRelationshipManager/container/NgoSingleBeneficiary/NgoSingleBeneficiary";
import Notifications from "./RoleRelationshipManager/container/Notifications/Notifications";
import Communication from "./RoleRelationshipManager/container/Communication/Communication";
import ManagerDashboard from "./RoleRelationshipManager/container/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Page */}
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ResetPassword} />

        {/* SUPER ADMIN */}
        <Route exact path="/superadmin/dashboard" component={Dashboard} />
        <Route
          exact
          path="/superadmin/ngo-listing"
          component={SuperAdminNgoListing}
        />
        <Route
          exact
          path="/superadmin/ngo-single/:id"
          component={SuperaAminNgoSingle}
        />
        <Route
          exact
          path="/superadmin/ngo-program"
          component={SuperAdminNgoSingleProgram}
        />
        <Route
          exact
          path="/superadmin/ngo-beneficiary"
          component={SuperAdminNgoSingleBeneficiary}
        />
        <Route
          exact
          path="/superadmin/beneficiary-report"
          component={NgoBeneficiaryReport}
        />
        <Route
          exact
          path="/superadmin/relationship-managers"
          component={RelationshipManager}
        />
        <Route
          exact
          path="/superadmin/relationship-manager/single"
          component={RelationshipManagerSingle}
        />
        <Route
          exact
          path="/superadmin/communication"
          component={SuperAdminCommunication}
        />
        <Route exact path="/superadmin/notification" component={Notification} />
        {/* RELATIONSHIP MANAGER */}
        <Route
          exact
          path="/relationship-manager/dashboard"
          component={ManagerDashboard}
        />

        <Route
          exact
          path="/relationship-manager/ngo-listing"
          component={NgoListing}
        />
        <Route
          exact
          path="/relationship-manager/ngo-single"
          component={NgoSingle}
        />
        <Route
          exact
          path="/relationship-manager/ngo-program"
          component={NgoSingleProgram}
        />
        <Route
          exact
          path="/relationship-manager/ngo-beneficiary"
          component={NgoSingleBeneficiary}
        />
        <Route
          exact
          path="/relationship-manager/notifications"
          component={Notifications}
        />
        <Route
          exact
          path="/relationship-manager/communication"
          component={Communication}
        />
      </div>
    </Router>
  );
}

export default App;
