import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Blog from '../../components/Blog';

const BlogPage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Blog/>
            <Footer/>
        </>
    );
} 

export default BlogPage;