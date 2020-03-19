import Nav from "../components/nav";
import Container from "../components/container";
import withLayout from "../components/Layout";
import Helmet from "../components/seo/seo";
import { MdAdd, MdGroup } from "react-icons/md";

function Communities() {
  return (
    <div className="page">
      <Helmet title="Communities" />
      <Nav />

      <Container>
        <div className="wrapper">
          <div className="header">
            <div className="logo"></div>
            <div className="img-wrapper"></div>
            <div className="info">
              <div>
                {/* TODO: Refactor into individual component */}
                <div
                  style={{
                    fontWeight: "500",
                    color: "var(--color-text)",
                    fontSize: "1.2em"
                  }}
                >
                  React Bangalore
                </div>
                <div
                  style={{
                    color: "var(--color-secondary-text-light)",
                    fontSize: "1em"
                  }}
                >
                  Bengaluru, India
                </div>
              </div>
              {/* TODO: Refactor into individual component */}
              <div
                className="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 10px",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer",
                  background: "var(--color-primary)"
                  // boxShadow: "0px 4px 14px rgba(50, 50, 50, 0.3)"
                }}
              >
                <MdAdd fontSize="20" style={{ marginRight: "5px" }} />
                <div style={{ fontSize: "0.97em" }}>Join Community</div>
              </div>
            </div>
          </div>
          <div className="top-members">
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <MdGroup fontSize="24" style={{ marginRight: "8px" }} />
              <div
                style={{
                  fontWeight: "500",
                  color: "var(--color-text)",
                  fontSize: "1em"
                }}
              >
                Top Members
              </div>
            </div>
            <div style={{ flex: "6" }}>
              
            </div>
          </div>
          <div className="content"></div>
          <div className="misc"></div>
        </div>
      </Container>

      <style jsx>{`
        .top-members {
          grid-area: members;
          margin-bottom: -40px;
          display: flex;
          flex-direction: column;
          padding: 8px 18px;
        }

        .header .info {
          position: absolute;
          height: 25%;
          left: calc(120px + 30px + 20px);
          bottom: 20px;
          right: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .header .logo {
          position: absolute;
          background: red;
          width: 120px;
          height: 120px;
          bottom: 30px;
          left: 30px;
          border-radius: 6px;
          border: 3px solid white;
        }

        .header {
          grid-area: header;
          position: relative;
        }

        .header .img-wrapper {
          height: 66%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-image: url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
        }

        .content {
          grid-area: content;
        }

        .misc {
          grid-area: misc;
          margin-top: 44px;
        }

        .wrapper {
          margin: 35px 0;
          min-height: 100vh;
          display: grid;
          grid-gap: 12px 14px;
          grid-template-areas:
            "header header header header members"
            "header header header header members"
            "content content content content misc"
            "content content content content misc"
            "content content content content misc";
        }

        .wrapper > div {
          background: var(--color-secondary);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}

export default withLayout(Communities);
