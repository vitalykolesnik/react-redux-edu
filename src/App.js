import React from 'react';
import './App.css';
import store from 'redux/reduxStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import UsersPageContainer from 'components/Users/UsersPageContainer';
import ProfilePageContainer from 'components/Profile/ProfileContainer';
import LoginContainer from 'components/Login/LoginContainer';
import Logout from 'components/Logout/Logout';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/" element={<LoginContainer />} />
                            <Route path="/login" element={<LoginContainer />} />
                            <Route path="/logout" element={<Logout />} />
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
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route
                                path="/users"
                                element={<UsersPageContainer />}
                            />
                        </Routes>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
