import Nav from "../components/nav";
import Container from "../components/container";
import withLayout from "../components/Layout";
import Helmet from "../components/seo/seo";

function Communities() {
  return (
    <div>
      <Helmet title="Communities" />
      <Nav />
      <div style={{ marginTop: `50px` }}>
        <Container>
          <h1>Hello from Communities</h1>
        </Container>
      </div>
    </div>
  );
}

export default withLayout(Communities);
