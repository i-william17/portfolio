import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Define color themes
const lightTheme = {
  body: "#f8fafc",
  text: "#1e293b",
  subtitle: "#64748b",
  heading: "linear-gradient(to right, #6366F1, #EC4899)",
  cardBg: "#ffffff",
  cardBorder: "#e2e8f0",
  cardHover: "rgba(0, 0, 0, 0.1)",
  jobTitle: "#111827",
  company: "#6366F1",
  period: "#6B7280",
  description: "#4B5563",
  tagBg: "#E0E7FF",
  tagText: "#4338CA",
  timelineLine: "linear-gradient(to bottom, rgba(99, 102, 241, 0.3), #6366F1, rgba(236, 72, 153, 0.3))",
  iconBg: "linear-gradient(to right, #6366F1, #EC4899)",
};

const darkTheme = {
  body: "#0f172a",
  text: "#f8fafc",
  subtitle: "#94a3b8",
  heading: "linear-gradient(to right, #818CF8, #F472B6)",
  cardBg: "#1e293b",
  cardBorder: "#334155",
  cardHover: "rgba(255, 255, 255, 0.05)",
  jobTitle: "#f8fafc",
  company: "#A78BFA",
  period: "#9CA3AF",
  description: "#D1D5DB",
  tagBg: "rgba(167, 139, 250, 0.1)",
  tagText: "#C4B5FD",
  timelineLine: "linear-gradient(to bottom, rgba(129, 140, 248, 0.3), #818CF8, rgba(244, 114, 182, 0.3))",
  iconBg: "linear-gradient(to right, #818CF8, #F472B6)",
};

const ExperienceItem = ({ experience, index }) => {
  return (
    <TimelineItem $alternate={index % 2 !== 0}>
      <TimelineContent $alternate={index % 2 !== 0}>
        <JobTitle>{experience.title}</JobTitle>
        <Company>{experience.company}</Company>
        <Period>{experience.period}</Period>
      </TimelineContent>
      
      <TimelineIcon>
        {experience.icon}
      </TimelineIcon>
      
      <TimelineCard $alternate={index % 2 !== 0}>
        <Description>{experience.description}</Description>
        <Tags>
          {experience.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
      </TimelineCard>
    </TimelineItem>
  );
};

const Experience = ({ darkMode, toggleDarkMode }) => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechSolutions Inc.",
      period: "Jan 2021 - Present",
      description: "Lead the development of enterprise SaaS applications, mentored junior developers, and implemented CI/CD pipelines that reduced deployment times by 40%.",
      tags: ["React", "Node.js", "AWS"],
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      description: "Developed full-stack web applications for clients across various industries. Implemented performance optimizations that improved page load times by 60%.",
      tags: ["JavaScript", "Python", "Django"],
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "Jun 2016 - Feb 2018",
      description: "Contributed to the development of a SaaS platform from the ground up. Gained experience in agile methodologies and full-stack development.",
      tags: ["Angular", "Firebase", "NoSQL"],
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Section id="experience">
        <Header>
          <Title>Work Experience</Title>
          <Subtitle>My professional journey and the companies I've worked with.</Subtitle>
        </Header>
        
        <TimelineContainer>
          <TimelineLine />
          
          <TimelineList>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </TimelineList>
        </TimelineContainer>
      </Section>
    </ThemeProvider>
  );
};

export default Experience;

// Styled Components
const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.heading};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.subtitle};
  max-width: 48rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
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
  border: 1px solid ${({ theme }) => theme.cardBorder};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.company};
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

const TimelineContainer = styled.div`
  position: relative;
`;

const TimelineLine = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.timelineLine};
  transform: translateX(-50%);

  @media (min-width: 768px) {
    display: block;
  }
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: ${({ $alternate }) => $alternate ? 'row-reverse' : 'row'};
    align-items: flex-start;
  }
`;

const TimelineContent = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    text-align: ${({ $alternate }) => $alternate ? 'left' : 'right'};
    padding: ${({ $alternate }) => $alternate ? '0 0 0 3rem' : '0 3rem 0 0'};
    margin-bottom: 0;
  }
`;

const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.iconBg};
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TimelineCard = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.cardHover};
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 1.5rem;
    margin: ${({ $alternate }) => $alternate ? '0 3rem 0 0' : '0 0 0 3rem'};
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.jobTitle};
  margin-bottom: 0.5rem;
`;

const Company = styled.p`
  color: ${({ theme }) => theme.company};
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const Period = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.period};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.description};
  line-height: 1.6;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
`;