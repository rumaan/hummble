import React from 'react';
import theme from '../styles/theme';

function Layout({ children }) {
    return (
        <div>
            {children}
            <style global jsx>{`
                body {
                    background-color: ${theme.colors.background};
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
                    color: ${theme.colors.link};
                }

                a:hover {
                    color: ${theme.colors.linkHover};
                }
            `}</style>
        </div>
    )
}

export default Layout
