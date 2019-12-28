import Nav from "../components/nav";
import Container from "../components/container";
import withLayout from "../components/Layout";
import Helmet from "../components/seo/seo";

function Communities() {
  return (
    <div className="page">
      <Helmet title="Communities" />
      <Nav />
      <div style={{ margin: `35px 0px` }}>
        <Container>
          <div className="wrapper">
            <div className="header"></div>
            <div className="top-members"></div>
            <div className="content"></div>
            <div className="misc"></div>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .header {
          grid-area: header;
        }

        .top-members {
          grid-area: members;
          margin-bottom: -40px;
        }

        .content {
          grid-area: content;
        }

        .misc {
          grid-area: misc;
          margin-top: 44px;
        }

        .wrapper {
          min-height: 100vh;
          display: grid;
          grid-gap: 12px 14px;
          grid-template-areas:
            "header header header members"
            "header header header members"
            "content content content misc"
            "content content content misc"
            "content content content misc";
        }

        .wrapper div {
          background: var(--color-secondary);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}

export default withLayout(Communities);
