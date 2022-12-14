import Image from "next/image";
import Images from "../../public/Images";
import Link from "next/link";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Box, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Section = {
  backgroundColor: "#000",
  color: "#fff",
  height: "50vh",
  display: " flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const QuickLink = {
  display: "flex",
  flexDirection: "column",
};
const Anchor = {
  margin: ".2rem 0 .9rem",
};
const Connect = {
  display: " flex",
  fontSize: "1rem",
  cursor: "pointer",
  margin: "0 2rem 0",
};
const ConnectText = {
  fontSize: "2rem",
};
const ImageLogo = {
  color: "#ffd2a4",
};
const Search = {
  padding: "1rem",
  borderRadius: "5px",
  color: "#fff",
  border: "none",
  backgroundColor: "transparent",
  border: "1px solid gray",
};

const Footer = () => {
  return (
    <>
      <footer style={Section}>
        <Box>
          <Link href="/" passHref>
            <a style={ImageLogo}>
              <Image src={Images.logo} alt="logo" />
            </a>
          </Link>
          <Text fontSize="sm" fontStyle="600" margin=".7rem 0 2rem 0">
            &copy; FINSWEET 2022
          </Text>
          <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
            (480) 590 2316
          </Text>
          <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
            4517 WASHINGTON AVE.
          </Text>
          <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
            FINSWEET@EXAMPLE.COM
          </Text>
        </Box>
        <Box>
          <span>QUICK LINKS</span>
          <Box style={QuickLink}>
            <Link href="/" passHref>
              <a style={Anchor}>Home</a>
            </Link>
            <Link href="/about" passHref>
              <a style={Anchor}>About us</a>
            </Link>
            <Link href="/sermon" passHref>
              <a style={Anchor}>Sermon</a>
            </Link>
            <Link href="/blog" passHref>
              <a style={Anchor}>Blog</a>
            </Link>
          </Box>
        </Box>
        <Box style={{ height: "180px" }}>
          <h3 style={ConnectText}>Connect</h3>
          <Flex style={(Connect, { justifyContent: "space-around" })}>
            <Link href="/" passHref>
              <a>
                <BsFacebook color="#ffd2a4" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <BsTwitter color="#ffd2a4" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <BsLinkedin color="#ffd2a4" />
              </a>
            </Link>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="4xl">
            SUBSCRIBE TO GET LATEST <br /> UPDATES AND NEWS
          </Text>
          <div height="60px" display="flex">
            <input
              type="text"
              name=""
              placeholder="Youremail@gmail.com"
              style={Search}
            />
            <Button
              background="#ffd2a4"
              size="md"
              p="7"
              m="2rem 0"
              color="#000"
            >
              SUBSCRIBE
            </Button>
          </div>
        </Box>
      </footer>
      <Text
        display="flex"
        justifyContent="center"
        backgroundColor="#000"
        color="#fff"
        fontSize="1.5rem"
      >
        &copy; Copyright 2022 all right reserved Next/React by Mr Dominic
      </Text>
    </>
  );
};

export default Footer;
