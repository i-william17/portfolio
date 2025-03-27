import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "@emotion/styled";

// Styled components
const FooterContainer = styled.footer`
  background-color: #111827;
  color: #f3f4f6;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const GridContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const BrandSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LogoLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #6366f1 0%, #ec4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Tagline = styled(motion.p)`
  color: #9ca3af;
  line-height: 1.6;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIconLink = styled(motion.a)`
  color: #9ca3af;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(motion.a)`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const CopyrightSection = styled(motion.div)`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const LegalLink = styled(motion.a)`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const columns = [
    {
      title: "Navigation",
      links: [
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Experience", href: "#experience" },
        { text: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#" },
        { text: "Case Studies", href: "#" },
        { text: "Open Source", href: "#" },
        { text: "Design System", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { text: "Email Me", href: "#" },
        { text: "Book a Call", href: "#" },
        { text: "Newsletter", href: "#" },
        { text: "Mentorship", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    {
      name: "GitHub",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      href: "#"
    },
    {
      name: "LinkedIn",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      href: "#"
    },
    {
      name: "Twitter",
      path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      href: "#"
    }
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookies", href: "#" }
  ];

  return (
    <FooterContainer ref={ref}>
      <GridContainer
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <BrandSection variants={item}>
          <LogoLink 
            href="#" 
            whileHover={{ scale: 1.05 }}
          >
            <LogoIcon>//</LogoIcon>
            <LogoText>def william_writes_code():</LogoText>
          </LogoLink>
          <Tagline variants={item}>
            Building digital experiences that matter with clean code and creative solutions.
          </Tagline>
          <SocialLinks>
            {socialIcons.map((icon, index) => (
              <SocialIconLink
                key={index}
                href={icon.href}
                aria-label={icon.name}
                variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={icon.path} />
                </svg>
              </SocialIconLink>
            ))}
          </SocialLinks>
        </BrandSection>

        {columns.map((column, index) => (
          <Column 
            key={index}
            variants={item}
          >
            <ColumnTitle>{column.title}</ColumnTitle>
            <LinkList>
              {column.links.map((link, linkIndex) => (
                <FooterLink
                  key={linkIndex}
                  href={link.href}
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  {link.text}
                </FooterLink>
              ))}
            </LinkList>
          </Column>
        ))}
      </GridContainer>

      <CopyrightSection
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <p>© {new Date().getFullYear()} William Writes Code. All rights reserved.</p>
        <LegalLinks>
          {legalLinks.map((link, index) => (
            <LegalLink
              key={index}
              href={link.href}
              whileHover={{ scale: 1.05 }}
            >
              {link.text}
            </LegalLink>
          ))}
        </LegalLinks>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;