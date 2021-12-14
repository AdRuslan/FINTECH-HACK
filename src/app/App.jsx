import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "../pages/main/main";
import History from "../pages/history/history";
import AddCard from "../pages/add-card/add-card";
import ProfileEdit from "../pages/profile-edit/profile-edit";
import Receive from "../pages/receive/receive";
import SignIn from "../pages/sign-in/sign-in";
import SignUp from "../pages/sign-up/sign-up";
import Withdraw from "../pages/withdraw/withdraw";
import {AppRoute} from "../utils/const";
import browserHistory from "../browser-history"
import React from "react";
import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import NotFound from "../pages/not-found/not-found";


function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route
          exact
          path={AppRoute.MAIN}
          element={
            <React.Fragment>
              <Header
                isMain={true}
              />
              <Main/>
              <Navigation/>
            </React.Fragment>
          }
        />
        <Route
          exact
          path={AppRoute.SIGN_IN}
          element={
            <SignIn/>
          }
        />
        <Route
          exact
          path={AppRoute.SIGN_UP}
          element={
            <SignUp/>
          }
        />
        <Route
          exact
          path={AppRoute.PROFILE_EDIT}
          element={
            <React.Fragment>
              <Header/>
              <ProfileEdit/>
              <Navigation></Navigation>
            </React.Fragment>
          }
        />
        <Route
          exact
          path={AppRoute.ADD_CARD}
          element={
            <React.Fragment>
              <Header/>
              <AddCard/>
              <Navigation></Navigation>
            </React.Fragment>
          }
        />
        <Route
          exact
          path={AppRoute.RECEIVE}
          element={
            <React.Fragment>
              <Header/>
              <Receive/>
              <Navigation></Navigation>
            </React.Fragment>
          }
        />
        <Route
          exact
          path={AppRoute.WITHDRAW}
          element={
            <React.Fragment>
              <Header/>
              <Withdraw/>
              <Navigation></Navigation>
            </React.Fragment>            
          }
        />
        <Route
          exact
          path={AppRoute.HISTORY}
          element={
            <React.Fragment>
              <Header/>
              <History/>
              <Navigation></Navigation>
            </React.Fragment>
          }
        />
        <Route
          path="*"
          element={
            <React.Fragment>
              <NotFound/>
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
