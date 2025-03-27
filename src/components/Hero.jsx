import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "@emotion/styled";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components for better maintainability
const Section = styled.section`
  padding: 8rem 1rem 5rem;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const SubHeading = styled.h2`
  font-size: clamp(1.25rem, 3vw, 1.875rem);
  font-weight: 500;
  color: #64748b;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 36rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  color: white;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid #e2e8f0;
  color: #334155;
  background-color: transparent;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #64748b;
  transition: color 0.3s ease;
  opacity: 0;
  transform: translateY(20px);

  &:hover {
    color: #0ea5e9;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(20px);
`;

const ImageGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
  border-radius: 1rem;
  transform: rotate(-6deg);
  z-index: -1;
  opacity: 0.8;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  border: 8px solid white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: rotate(6deg);
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(6deg) scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const Hero = () => {
  const heroRef = useRef(null);
  const elementsRef = useRef([]);

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
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    // Parallax effect for the image
    gsap.to(heroRef.current.querySelector(".image-wrapper"), {
      y: 30,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={heroRef} id="home">
      <Grid>
        <Content>
          <Heading ref={addToRefs}>
            This is <GradientText>William</GradientText>
          </Heading>
          <SubHeading ref={addToRefs}>Full-Stack Software Engineer</SubHeading>
          <Paragraph ref={addToRefs}>
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating efficient, scalable, and user-friendly
            applications.
          </Paragraph>

          <ButtonContainer>
            <PrimaryButton
              href="#contact"
              ref={addToRefs}
            >
              Get In Touch
            </PrimaryButton>
            <SecondaryButton
              href="#projects"
              ref={addToRefs}
            >
              View My Work
            </SecondaryButton>
          </ButtonContainer>

          <SocialLinks>
            {["github", "linkedin", "twitter"].map((platform, index) => (
              <SocialIcon
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                ref={addToRefs}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  {platform === "github" && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  )}
                  {platform === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {platform === "twitter" && (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  )}
                </svg>
              </SocialIcon>
            ))}
          </SocialLinks>
        </Content>

        <ImageContainer ref={addToRefs}>
          <ImageGradient />
          <ImageWrapper className="image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="William working"
              loading="lazy"
            />
          </ImageWrapper>
        </ImageContainer>
      </Grid>
    </Section>
  );
};

export default Hero;