import React from "react";

const Experience = () => {
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
        ),
        order: { md: "flex-row" }
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
        ),
        order: { md: "flex-row-reverse" }
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
        ),
        order: { md: "flex-row" }
      }
    ];

    const styles = {
      section: {
        padding: "5rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto"
      },
      header: {
        textAlign: "center",
        marginBottom: "4rem"
      },
      title: {
        fontSize: "1.875rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #6366F1, #EC4899)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      },
      subtitle: {
        fontSize: "1.25rem",
        color: "#6B7280",
        maxWidth: "48rem",
        margin: "0 auto"
      },
      container: {
        position: "relative"
      },
      timelineLine: {
        display: "none",
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: "2px",
        background: "linear-gradient(to bottom, rgba(99, 102, 241, 0.3), #6366F1, rgba(236, 72, 153, 0.3))",
        transform: "translateX(-50%)"
      },
      "@media (min-width: 768px)": {
        timelineLine: {
          display: "block"
        }
      },
      experienceList: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      },
      "@media (min-width: 768px)": {
        experienceList: {
          gap: "4rem"
        }
      },
      experienceItem: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      "@media (min-width: 768px)": {
        experienceItem: {
          flexDirection: "row"
        }
      },
      experienceContent: {
        width: "100%",
        paddingRight: "3rem",
        textAlign: "right",
        marginBottom: "1rem"
      },
      "@media (min-width: 768px)": {
        experienceContent: {
          width: "50%",
          marginBottom: 0
        }
      },
      experienceContentRight: {
        textAlign: "left",
        paddingRight: 0,
        paddingLeft: "3rem"
      },
      experienceTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#111827"
      },
      dark: {
        experienceTitle: {
          color: "#F3F4F6"
        }
      },
      company: {
        color: "#6366F1",
        fontWeight: "500"
      },
      dark: {
        company: {
          color: "#A78BFA"
        }
      },
      period: {
        fontSize: "0.875rem",
        color: "#6B7280"
      },
      dark: {
        period: {
          color: "#9CA3AF"
        }
      },
      iconContainer: {
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        background: "linear-gradient(to right, #6366F1, #EC4899)",
        color: "white",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        zIndex: 10
      },
      "@media (min-width: 768px)": {
        iconContainer: {
          display: "flex"
        }
      },
      experienceDetails: {
        width: "100%",
        paddingLeft: "3rem"
      },
      "@media (min-width: 768px)": {
        experienceDetails: {
          width: "50%"
        }
      },
      experienceCard: {
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid #E5E7EB"
      },
      dark: {
        experienceCard: {
          backgroundColor: "#1F2937",
          borderColor: "#374151"
        }
      },
      description: {
        color: "#4B5563"
      },
      dark: {
        description: {
          color: "#D1D5DB"
        }
      },
      tagsContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginTop: "1rem"
      },
      tag: {
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: "500",
        backgroundColor: "#E0E7FF",
        color: "#4338CA"
      },
      dark: {
        tag: {
          backgroundColor: "rgba(167, 139, 250, 0.1)",
          color: "#C4B5FD"
        }
      }
    };
  
    return (
      <section id="experience" style={styles.section}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            Work Experience
          </h2>
          <p style={styles.subtitle}>
            My professional journey and the companies I've worked with.
          </p>
        </div>
        
        <div style={styles.container}>
          {/* Timeline line */}
          <div style={styles.timelineLine}></div>
          
          {/* Timeline items */}
          <div style={styles.experienceList}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ 
                ...styles.experienceItem,
                flexDirection: exp.order.md === "flex-row-reverse" ? "row-reverse" : "row"
              }}>
                <div style={{ 
                  ...styles.experienceContent,
                  ...(exp.order.md === "flex-row-reverse" ? styles.experienceContentRight : {}),
                  textAlign: exp.order.md === "flex-row-reverse" ? "left" : "right",
                  paddingRight: exp.order.md === "flex-row-reverse" ? 0 : "3rem",
                  paddingLeft: exp.order.md === "flex-row-reverse" ? "3rem" : 0
                }}>
                  <h3 style={styles.experienceTitle}>{exp.title}</h3>
                  <p style={styles.company}>{exp.company}</p>
                  <p style={styles.period}>{exp.period}</p>
                </div>
                <div style={styles.iconContainer}>
                  {exp.icon}
                </div>
                <div style={{ 
                  ...styles.experienceDetails,
                  paddingLeft: exp.order.md === "flex-row-reverse" ? 0 : "3rem",
                  paddingRight: exp.order.md === "flex-row-reverse" ? "3rem" : 0
                }}>
                  <div style={styles.experienceCard}>
                    <p style={styles.description}>
                      {exp.description}
                    </p>
                    <div style={styles.tagsContainer}>
                      {exp.tags.map((tag, i) => (
                        <span key={i} style={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
export default Experience;