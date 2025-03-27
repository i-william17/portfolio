import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "@emotion/styled";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components
const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 80rem;
  margin: 3rem auto 0;
  background-color: rgba(17, 24, 39, 0.8);
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  order: 2;

  @media (min-width: 768px) {
    order: 1;
  }
`;

const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background-image: linear-gradient(to right, #0ea5e9, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  transform: translateY(20px);
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 1rem;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
`;

const FeatureList = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
`;

const FeatureIcon = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(14, 165, 233, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    stroke: #0ea5e9;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 500;
  color: #f3f4f6;
`;

const FeatureDescription = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const ImageContainer = styled.div`
  position: relative;
  order: 1;
  opacity: 0;
  transform: translateY(20px);

  @media (min-width: 768px) {
    order: 2;
  }
`;

const ImageGradient = styled.div`
  position: absolute;
  inset: -1rem;
  background-image: linear-gradient(to right, #0ea5e9, #8b5cf6);
  opacity: 0.3;
  filter: blur(1.5rem);
  z-index: -1;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: rotate(3deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const About = () => {
  const aboutRef = useRef(null);
  const elementsRef = useRef([]);

  // Feature items data
  const features = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Full-Stack Development",
      description: "End-to-end web application development"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Performance Optimization",
      description: "Fast, efficient applications"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Problem Solving",
      description: "Creative technical solutions"
    }
  ];

  // Add elements to ref array
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate elements when component mounts
    elementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
      });
    });

    // Floating animation for the image
    gsap.to(aboutRef.current.querySelector(".about-image"), {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section id="about" ref={aboutRef}>
      <Container>
        <Content>
          <Heading ref={addToRefs}>About Me</Heading>
          <Paragraph ref={addToRefs}>
            I'm a passionate software engineer with 5+ years of experience building web applications. 
            I specialize in JavaScript ecosystems, including React, Node.js, and TypeScript.
          </Paragraph>
          <Paragraph ref={addToRefs}>
            My approach combines technical expertise with a strong focus on user experience and clean code principles. 
            I believe in building software that's not only functional but also maintainable and scalable.
          </Paragraph>
          
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem 
                key={index} 
                ref={addToRefs}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
        </Content>

        <ImageContainer ref={addToRefs}>
          <ImageGradient />
          <ImageWrapper>
            <Image 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="William working" 
              loading="lazy"
              className="about-image"
            />
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default About;