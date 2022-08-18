import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersPageContainer from 'components/Users/UsersPageContainer';
import ProfilePageContainer from 'components/Profile/ProfileContainer';
import { initialize } from 'redux/appReduser';
import Preloader from 'components/other/Preloader/Preloader';
import { getInitialized } from 'redux/appSelector';
import Signup from 'components/Login/Signup';
import Login from 'components/Login/Login';

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        return this.props.initialized ? (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route
                                path="/"
                                element={<ProfilePageContainer />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/profile"
                                element={<ProfilePageContainer />}
                            />
                            <Route
                                path="/profile/:id"
                                element={<ProfilePageContainer />}
                            />
                            <Route
                                path="/dialogs"
                                element={<DialogsContainer />}
                            />
                            <Route path="/news" element={<NewsContainer />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route
                                path="/users"
                                element={<UsersPageContainer />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        ) : (
            <Preloader />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: getInitialized(state),
    };
};

export default connect(mapStateToProps, { initialize })(App);
