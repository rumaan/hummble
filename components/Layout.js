import React from 'react';

function Layout({ children }) {
    return (
        <div>
            {children}
            <style global jsx>{`
                body {
                    background-color: var(--color-background);
                    margin: 0;
                    padding: 0;
                }
                
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div,
                div#__next > div > div {
                    height: 100%;
                }

                a {
                    color: var(--color-link);
                }

                a:hover {
                    color: var(--color-link-hover);
                }
            `}</style>
        </div>
    )
}

export default Layout
