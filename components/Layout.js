import "../styles/global.scss";

// HOC to apply global styles per page component
const withLayout = Page => {
  return () => (
    <div>
      <Page />
      <style global jsx>{`
        body {
          /*background-color: var(--color-background);*/
          background: var(--color-page-background);
          margin: 0;
          padding: 0;
        }

        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          /*height: 100%;*/
        }

        a {
          color: var(--color-link);
        }

        a:hover {
          color: var(--color-link-hover);
        }
      `}</style>
    </div>
  );
};

export default withLayout;
