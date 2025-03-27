import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "@emotion/styled";

// Color palette
const colors = {
  primary: "#7C3AED", // Vibrant purple
  primaryLight: "#8B5CF6",
  primaryDark: "#6D28D9",
  secondary: "#EC4899", // Pink
  secondaryLight: "#F472B6",
  secondaryDark: "#DB2777",
  background: "#F8FAFC", // Light gray
  surface: "#FFFFFF", // White
  textPrimary: "#1E293B", // Dark blue-gray
  textSecondary: "#64748B", // Medium blue-gray
  success: "#10B981", // Emerald
  error: "#EF4444", // Red
  warning: "#F59E0B", // Amber
  info: "#3B82F6", // Blue
  dark: {
    background: "#0F172A", // Dark blue
    surface: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8"
  }
};

// Styled components
const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 85rem;
  margin: 0 auto;
  background-color: ${colors.background};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.background};
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.75rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: ${colors.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 36rem;
  line-height: 1.7;

  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.textSecondary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const IconContainer = styled.div`
  padding: 0.875rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, ${colors.primaryLight}, ${colors.primaryDark});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, ${colors.primaryDark}, ${colors.primary});
  }
`;

const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

const ContactLabel = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.textSecondary};
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.textSecondary};
  }
`;

const ContactValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.textPrimary};
  }
`;

const ContactLink = styled(motion.a)`
  color: ${colors.textPrimary};
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.textPrimary};
  }

  &:hover {
    color: ${colors.primary};
    transform: translateX(4px);
  }
`;

const FormContainer = styled(motion.div)`
  background-color: ${colors.surface};
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.surface};
    border-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: ${colors.dark.textPrimary};
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #E2E8F0;
  outline: none;
  transition: all 0.3s ease;
  background-color: ${colors.surface};
  color: ${colors.textPrimary};
  font-size: 1rem;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.surface};
    border-color: #334155;
    color: ${colors.dark.textPrimary};
  }
`;

const Textarea = styled(motion.textarea)`
  width: 100%;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #E2E8F0;
  outline: none;
  transition: all 0.3s ease;
  min-height: 10rem;
  resize: vertical;
  background-color: ${colors.surface};
  color: ${colors.textPrimary};
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.dark.surface};
    border-color: #334155;
    color: ${colors.dark.textPrimary};
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    opacity: 0.95;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
`;

const SuccessMessage = styled(StatusMessage)`
  background-color: #ECFDF5;
  color: ${colors.success};
  border: 1px solid #A7F3D0;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(16, 185, 129, 0.15);
    border-color: rgba(16, 185, 129, 0.3);
  }
`;

const ErrorMessage = styled(StatusMessage)`
  background-color: #FEE2E2;
  color: ${colors.error};
  border: 1px solid #FECACA;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.3);
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      // Replace with your actual form submission logic
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: false });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
      }, 5000);
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
          <Title variants={item}>
            Let's Connect
          </Title>
          <Description variants={item}>
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!
          </Description>
          <ContactInfo>
            <ContactItem variants={item}>
              <IconContainer>
                <Icon 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Email</ContactLabel>
                <ContactLink 
                  href="mailto:williamwritescode@gmail.com" 
                  whileHover={{ scale: 1.02 }}
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
                  strokeWidth="2"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Phone</ContactLabel>
                <ContactLink 
                  href="tel:+254711160437" 
                  whileHover={{ scale: 1.02 }}
                >
                  +(254) 7111-60437
                </ContactLink>
              </div>
            </ContactItem>
            <ContactItem variants={item}>
              <IconContainer>
                <Icon 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </Icon>
              </IconContainer>
              <div>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>Nairobi, Kenya</ContactValue>
              </div>
            </ContactItem>
          </ContactInfo>
        </motion.div>

        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="How can I help?"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            <Button
              type="submit"
              disabled={status.submitting}
              whileHover={!status.submitting ? { scale: 1.02 } : {}}
              whileTap={!status.submitting ? { scale: 0.98 } : {}}
            >
              {status.submitting ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send Message
                </>
              )}
            </Button>

            {status.success && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}

            {status.error && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6" />
                  <path d="M9 9l6 6" />
                </svg>
                Oops! Something went wrong. Please try again.
              </ErrorMessage>
            )}
          </Form>
        </FormContainer>
      </Grid>
    </Section>
  );
};

export default Contact;