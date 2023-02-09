import React from "react";
import  { useState, useEffect } from 'react';
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from "@material-ui/core";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "react-spring";
import { faLinkedin, faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons";
import resume from "../../static/files/CV.pdf";
import Projects from "../components/Projects";
// import Contact from "../components/Contact";
import Experience from "../components/Experience";
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  const animatedTextsMainbody = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 0.8, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      //title={` ${siteConfig.title}`}
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Grid container spacing={2} style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Hello! I am</Translate>
              <span className="intro__name"> <Translate>Xuan Wen</Translate></span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={{...animatedTextsMainbody[0], fontSize: '20px'}}>
            <Typography variant="body0">
              <Translate>
                PhD student in Neuroscience at Vanderbilt University, Brain Institute (VBI). 
                Interested in higher-order cognitive function, human and machine intelligence and computational neuroscience.
              </Translate>{" "}
            </Typography>
          </animated.div>
          &nbsp;
          {/* <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>My Skills:</Translate>
            </Typography>
            <Typography variant="body1" gutterBottom>
              React.js, React Native, Node.js, Material UI, JavaScript, HTML5,
              Azure, etc.
            </Typography>
          </animated.div>
          &nbsp; */}
          <animated.p style={animatedTexts[2]}>
            <Button
              style={{ textTransform: "none", borderWidth: "3px" }}
              color="primary"
              variant="outlined"
              size="large"
              href={resume}
            >
              <Translate>My CV</Translate>
            </Button>
          </animated.p>
          <SocialLinks animatedProps={animatedTexts[3]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/Mathematics-bro.svg")}
            style={animatedHero}
          />
          
        </Grid>
      </Grid>
      {/* Experiences section */}
      <Grid>
        <Experience />
      </Grid>
      {/* Projects section */}
      <Grid>
        <Projects />
      </Grid>
      {/* Contact form */}
      {/* <Grid>
        <Contact />
      </Grid> */}
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {

  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={3}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            <Translate>Social Media:</Translate>
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/hcq/">
            <FontAwesomeIcon icon={faLinkedin}  style={{ fontSize: '32px' }}/>
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/xwen1765">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '32px' }}/>
          </a>
        </Grid>
        <Grid item>
          <a href="img/weixin.jpg">
            <FontAwesomeIcon icon={faWeixin} style={{ fontSize: '32px' }}/>
          </a>
        </Grid>

      </Grid>
    </animated.div>
  );
}

export default Home;
