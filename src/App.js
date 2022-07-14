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
import ProfileWithUriPageContainer from 'components/Profile/ProfileContainer';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route
                                path="profile"
                                element={<ProfileWithUriPageContainer />}
                            />
                            <Route
                                path="profile/:id"
                                element={<ProfileWithUriPageContainer />}
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
