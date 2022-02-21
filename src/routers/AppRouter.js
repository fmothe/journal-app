import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/auth";
import { useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginAction(user.email, user.uid));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <h1> Waiting for firebase</h1>;
  } else {
    return (
      <Router>
        <div>
          <Switch>
            <PublicRoute isAuthenticated={isLogged} path="/auth" component={AuthRouter} />
            <PrivateRoute
              isAuthenticated={isLogged}
              exact
              path="/"
              component={JournalScreen}
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
  }
};
