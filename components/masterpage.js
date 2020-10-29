import Head from "next/head";
import Navigator from "./navigator";
import { Container } from "react-bootstrap";

const MasterPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js App With The Star Wars API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navigator />
      </div>
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default MasterPage;
