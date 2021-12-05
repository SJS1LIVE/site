import { useStaticQuery, graphql } from "gatsby"

import React from "react"
import styled from "styled-components";
import Header from "./header"
import Sidebar from "./sidebar/sidebar"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const data = useStaticQuery(graphql`
query SiteTitleQuery {
    site {
    siteMetadata {
        title
        description
    }
    }
}
`)

    const siteTitle = data.site.siteMetadata?.title || `Title`
    const description = data.site.siteMetadata?.description || 'Description'
    const width = 100

    return (
        <Container>
            <Seo title="Home" />
            <Logo>
                <StaticImage
                    src="../images/logo.jpeg"
                    alt="SJS1 Hero Image"
                    width={width}
                />
            </Logo>
            <NavBar>South Jersey Sports 1 Media and Technology Platform</NavBar>
            <Main>{children}</Main>
            <Left><Sidebar /></Left>
            <ContentBox>
                <Content1></Content1>
                <Content2></Content2>
                <Content3></Content3>
            </ContentBox>
            <Footer></Footer>
        </Container>
    );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "logo nav nav nav"
    "left main main main"
    "left content content content"
    "left footer footer footer";
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: #30475b;
  font-family: Arial;
`;
const Logo = styled.nav`
  grid-area: logo;
  padding: 0.25rem;
  padding-left: 3rem;
`;
const NavBar = styled.nav`
  grid-area: nav;
  padding: 0.25rem;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  border-bottom:1px solid #30475b;
  font-weight: bold;
`;
const Main = styled.main`
  grid-area: main;
  padding: 0.25rem;
  font-size: 2vw;
`;
const Left = styled.div`
  grid-area: left;
  padding: 0.25rem;
  padding-left: 3rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  grid-area: footer;
  padding: 0.25rem;
`;

export default Layout;
