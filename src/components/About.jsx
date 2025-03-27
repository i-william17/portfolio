import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "@emotion/styled";
import img1 from "../assets/1.png";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 80rem;
  margin: 3rem auto 0;
  background-color: rgba(17, 24, 39, 0.85);
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Content = styled.div`
  flex: 1;
  opacity: 0;
  transform: translateY(20px);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background-image: linear-gradient(to right, #0ea5e9, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 1rem;
  line-height: 1.6;
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
  padding: 0.75rem;
  border-radius: 50%;
  background-color: rgba(14, 165, 233, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 28px;
    height: 28px;
    stroke: #0ea5e9;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 600;
  color: #f3f4f6;
`;

const FeatureDescription = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
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
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const About = () => {
  const aboutRef = useRef(null);
  const elementsRef = useRef([]);

  const features = [
    { title: "Full-Stack Development", description: "Building scalable web applications." },
    { title: "Performance Optimization", description: "Ensuring fast and efficient solutions." },
    { title: "Creative Problem Solving", description: "Delivering innovative technical solutions." }
  ];

  useEffect(() => {
    elementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <Section id="about" ref={aboutRef}>
      <Container>
        <Content ref={(el) => elementsRef.current.push(el)}>
          <Heading>About Me</Heading>
          <Paragraph>
            I'm a passionate software engineer with expertise in full-stack development, React, and Node.js.
          </Paragraph>
          <Paragraph>
            I specialize in creating intuitive and high-performing applications with a focus on scalability.
          </Paragraph>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index} ref={(el) => elementsRef.current.push(el)}>
                <FeatureIcon>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
        </Content>
        <ImageContainer ref={(el) => elementsRef.current.push(el)}>
          <ImageWrapper>
            <Image src={img1} alt="Software engineer at work" loading="lazy" />
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default About;
