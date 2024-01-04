import React from 'react';

const ArticleLayout = ({ children, props }) => {
    return (
        <div>
            {/* Add your header component here */}
            <header>
                {/* Header content */}
                <h1>{props.title}</h1>
            </header>

            {/* Add your main content here */}
            <main>
                {children}
            </main>

            {/* Add your footer component here */}
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default ArticleLayout;
