import React from 'react';

const ArticleLayout = ({ children, props }) => {
    return (
        <div className='flex items-center content-center flex-col'>

            {/* Add your header component here */}
            <header className='w-full'>
                {/* Header content */}
                <h1 className='text-4xl font-bold border-b-2 text-center py-7 border-solid'>{props.title}</h1>
            </header>

            {/* Add your main content here */}
            <main className='py-3 container mx-auto px-4 w-[750px]'>
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
