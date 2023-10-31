import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./pages/News";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import './App.css'
import NewsPage from "./pages/NewsPage";
import Profile from "./pages/Profile";

const App = () => {
    return (<div className={'container'}>

            <BrowserRouter>
                <Header/>
                <Nav/>
                <Routes>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/news/:id'} element={<NewsPage/>}/>
                    <Route path={'/user/:id'} element={<Profile/>}/>
                    <Route path={'/*'} element={<Navigate to={'/news'}/>}/>
                </Routes>
            </BrowserRouter>
        </div>);
};

export default App;
