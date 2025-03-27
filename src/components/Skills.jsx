import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "@emotion/styled";

// Styled components
const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9fafb;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Category = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
  font-size: 1.1rem;
`;

const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  color: white;
  font-size: 0.75rem;
`;

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      category: "Frontend",
      icon: "💻",
      items: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "Python", "REST APIs"]
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      category: "DevOps",
      icon: "🚀",
      items: ["Docker", "AWS", "CI/CD", "Kubernetes"]
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  return (
    <Section id="skills" ref={ref}>
      <Header>
        <Title initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Technical Skills</Title>
        <Subtitle initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>A diverse tech stack for building modern web applications.</Subtitle>
      </Header>
      
      <Grid variants={container} initial="hidden" animate={controls}>
        {skills.map((skill, index) => (
          <Card key={index} variants={item} transition={{ type: "spring", stiffness: 300 }}>
            <Icon>{skill.icon}</Icon>
            <Category>{skill.category}</Category>
            <List>
              {skill.items.map((item, i) => (
                <ListItem key={i} initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + (index * 0.1) + (i * 0.05) }}>
                  <SkillBadge>✓</SkillBadge>
                  {item}
                </ListItem>
              ))}
            </List>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
