import React from 'react';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
    RouteComponentProps,
} from 'react-router-dom';

import './App.css';
import { PrivateRoute } from './router/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import ProfileView from './views/ProfileView';
import NotFoundView from './views/NotFoundView';

function App(): JSX.Element {
    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
                <Link to="/profile">
                    <button>Profile</button>
                </Link>
            </header>
            <hr />
            <div className="App">
                <AuthProvider>
                    <Switch>
                        <Route
                            exact={true}
                            path="/login"
                            component={(props: RouteComponentProps) => (
                                <LoginView {...props} />
                            )}
                        />
                        <Route
                            exact={true}
                            path="/signup"
                            component={SignUpView}
                        />
                        <PrivateRoute
                            exact={true}
                            path="/profile"
                            component={() => <ProfileView />}
                        />
                        <Route component={NotFoundView} />
                    </Switch>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;
