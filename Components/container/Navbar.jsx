// import styled from "styled-components";
import Link from "next/link";
import Images from "../../public/Image";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const Nav = {
  background: "#000",
  height: "90px",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5rem",
  textTransform: "uppercase",
};
const StyledLink = {
  margin: "0 1rem",
  fontSize: "1em",
};
const NavLink = {
  alignItems: "center",
  flex: "1",
};
const contact = {
  textTransform: "uppercase",
  flex: "2",
  display: "flex",
  justifyContent: "flex-end",
};
const Logo = {
  flex: "1",
};

const Navbar = () => {
  return (
    <div style={Nav}>
      <div style={Logo}>
        <Link href="/" passHref>
          <a>
            <Image src={Images.logo} alt="" />
          </a>
        </Link>
      </div>
      <div style={NavLink}>
        <Link href="/" passHref>
          <a style={StyledLink}>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a style={StyledLink}>About us</a>
        </Link>
        <Link href="/services" passHref>
          <a style={StyledLink}>Sermon</a>
        </Link>
        <Link href="/blog" passHref>
          <a style={StyledLink}>Blog</a>
        </Link>
      </div>
      <div style={contact}>
        <Link href="/contact" passHref>
          <Button colorScheme="yellow" size="md" p="7" style={StyledLink}>
            CONTACT US
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
