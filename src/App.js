import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact';
import Categories from './Pages/Blog/Categories';
import Post from './Pages/Blog/Post';
import BlogLayout from './Pages/Blog/BlogLayout';
import Page404 from './Pages/Page404';
import PrivateRoutes from './PrivateRoutes';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import { useAuth } from './AuthContext';


function App() {

  const { user } = useAuth();


  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}> Home </NavLink>
        <NavLink to="/contact" style={({ isActive }) =>
        ({
          backgroundColor: isActive ? 'red' : 'transparent'
        })}> Contact </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {user &&  <NavLink to="/profile">Profile</NavLink>}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogLayout />}>
          <Route index={true} element={<Blog></Blog>}></Route>
          <Route path='categories' element= {<Categories/>} />
          <Route path='post/:url' element ={ <Post></Post>}/> 
        </Route>
        <Route path='*' element={<Page404></Page404>}></Route>
        <Route path='/profile' element={<PrivateRoutes><Profile></Profile></PrivateRoutes>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App;
