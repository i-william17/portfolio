import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Define color themes
const lightTheme = {
  body: "#f8fafc",
  text: "#1e293b",
  subtitle: "#64748b",
  heading: "#1e293b",
  subheading: "#64748b",
  cardBg: "#ffffff",
  cardBorder: "#e2e8f0",
  cardHoverBorder: "#7dd3fc",
  title: "#1e293b",
  description: "#64748b",
  tagBg: "#f0f9ff",
  tagText: "#0369a1",
  tagBorder: "#bae6fd",
  link: "#0369a1",
  linkHover: "#0c4a6e",
  buttonBg: "linear-gradient(to right, #0ea5e9, #8b5cf6)",
  buttonShadow: "rgba(14, 165, 233, 0.2)",
  buttonHoverShadow: "rgba(14, 165, 233, 0.3)",
  imageOverlay: "linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent 70%)",
};

const darkTheme = {
  body: "#0f172a",
  text: "#f8fafc",
  subtitle: "#94a3b8",
  heading: "#f8fafc",
  subheading: "#94a3b8",
  cardBg: "#1e293b",
  cardBorder: "#334155",
  cardHoverBorder: "#0ea5e9",
  title: "#f8fafc",
  description: "#94a3b8",
  tagBg: "rgba(14, 165, 233, 0.1)",
  tagText: "#7dd3fc",
  tagBorder: "rgba(14, 165, 233, 0.2)",
  link: "#7dd3fc",
  linkHover: "#0ea5e9",
  buttonBg: "linear-gradient(to right, #0ea5e9, #8b5cf6)",
  buttonShadow: "rgba(14, 165, 233, 0.2)",
  buttonHoverShadow: "rgba(14, 165, 233, 0.3)",
  imageOverlay: "linear-gradient(to top, rgba(2, 6, 23, 0.9), transparent 70%)",
};

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={project.image} alt={project.title} loading="lazy" />
        <ImageOverlay>
          <Title>{project.title}</Title>
        </ImageOverlay>
      </ImageContainer>
      <Content>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
        <Links>
          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <LinkIcon viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </LinkIcon>
            Live Demo
          </Link>
          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <LinkIcon viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </LinkIcon>
            View Code
          </Link>
        </Links>
      </Content>
    </Card>
  );
};

const Projects = ({ darkMode, toggleDarkMode }) => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Financial Analytics",
      description:
        "Advanced financial analytics platform with interactive visualizations, predictive modeling, and portfolio management tools.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["TypeScript", "D3.js", "Python", "AWS"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "Firebase", "Tailwind", "GraphQL"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Health Tracker",
      description:
        "A mobile health tracking application with workout logging, nutrition tracking, and health metrics visualization.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React Native", "GraphQL", "Firebase", "Apple Health"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Centralized dashboard for managing multiple social media accounts with scheduling and analytics features.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Vue.js", "Express", "MongoDB", "OAuth"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Forecast",
      description:
        "Real-time weather forecasting application with interactive maps and severe weather alerts.",
      image:
        "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Redux", "Weather API", "Mapbox"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Section id="projects">
        <HeadingContainer>
          <Subtitle>My Work</Subtitle>
          <Heading>Featured Projects</Heading>
          <Subheading>
            Here are some of my recent projects that showcase my skills and expertise.
          </Subheading>
        </HeadingContainer>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>

        <ButtonContainer>
          <Button href="#" className="view-all-btn">
            View All Projects
            <ButtonIcon viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </ButtonIcon>
          </Button>
        </ButtonContainer>
      </Section>
    </ThemeProvider>
  );
};

export default Projects;

// Styled Components
const Section = styled.section`
  padding: 100px 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 18px;
  color: ${({ theme }) => theme.subtitle};
  margin-bottom: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.heading};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.subheading};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  border: 1px solid ${({ theme }) => theme.tagBorder};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.cardHoverBorder};
    color: white;
  }
`;

const ThemeIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.cardHoverBorder};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.imageOverlay};
  display: flex;
  align-items: flex-end;
  padding: 24px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.description};
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.6;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  border: 1px solid ${({ theme }) => theme.tagBorder};
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 8px 0;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
    transform: translateX(4px);
  }
`;

const LinkIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: currentColor;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 64px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background: ${({ theme }) => theme.buttonBg};
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px ${({ theme }) => theme.buttonShadow};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.buttonHoverShadow};
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
  }
`;

const ButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-right: -4px;
  fill: currentColor;
  transition: transform 0.3s ease;

  ${Button}:hover & {
    transform: translateX(4px);
  }
`;