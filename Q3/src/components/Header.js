import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to My Next.js Application</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog-post">Blog Post</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;