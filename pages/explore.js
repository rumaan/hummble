import Nav from "../components/nav";
import Container from "../components/container";
import withLayout from "../components/Layout";
import Helmet from "../components/seo/seo";

function Explore() {
  return (
    <div>
      <Helmet title="Explorer" />
      <Nav />
      <div style={{ marginTop: `50px` }}>
        <Container>
          <h1>Hello from Explore</h1>
        </Container>
      </div>
    </div>
  );
}

export default withLayout(Explore);
