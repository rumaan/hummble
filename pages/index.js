import Nav from "../components/nav";
import Container from "../components/container";
import withLayout from "../components/Layout";
import Helmet from "../components/seo/seo";

const Home = () => (
  <div>
    <Helmet title="Home" />
    <Nav />
    <div style={{ marginTop: `50px` }}>
      <Container>
        <h1>Hello from Home</h1>
      </Container>
    </div>
  </div>
);

export default withLayout(Home);
