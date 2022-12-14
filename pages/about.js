import Head from "next/head";
// import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Hero = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 3rem;
  font-weight: bold;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <heading>About page</heading>
      </Hero>
    </>
  );
}
