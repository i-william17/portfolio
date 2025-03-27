import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "@emotion/styled";

// Styled components
const Section = styled.section`
  padding: 5rem 1rem;
  max-width: 80rem;
  margin: 0 auto;
  background-color: #f9fafb;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 32rem;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: #6366f1;
`;

const ContactLabel = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
`;

const ContactValue = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`;

const ContactLink = styled(motion.a)`
  color: #111827;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const FormContainer = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s ease;
  background-color: white;
  color: #111827;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
  }
`;

const Textarea = styled(motion.textarea)`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s ease;
  min-height: 9rem;
  resize: vertical;
  background-color: white;
  color: #111827;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #6366f1, #ec4899);
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
    <Section id="contact" ref={ref}>
      <Grid>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <Title
            variants={item}
          >
            Get In Touch
          </Title>
          <Description variants={item}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </Description>
          <ContactInfo>
            <ContactItem variants={item}>
              <IconContainer>
                <Icon 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Email</ContactLabel>
                <ContactLink 
                  href="mailto:william@example.com" 
                  whileHover={{ scale: 1.05 }}
                >
                  williamwritescode@gmail.com
                </ContactLink>
              </div>
            </ContactItem>
            <ContactItem variants={item}>
              <IconContainer>
                <Icon 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Phone</ContactLabel>
                <ContactLink 
                  href="tel:+1234567890" 
                  whileHover={{ scale: 1.05 }}
                >
                  +(254) 7111-60437                </ContactLink>
              </div>
            </ContactItem>
            <ContactItem variants={item}>
              <IconContainer>
                <Icon 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>Kenya, Africa</ContactValue>
              </div>
            </ContactItem>
          </ContactInfo>
        </motion.div>

        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="Subject"
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message"
                rows="4"
                placeholder="Your message"
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>
            <Button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </Button>
          </Form>
        </FormContainer>
      </Grid>
    </Section>
  );
};

export default Contact;