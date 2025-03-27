import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Financial Analytics",
      description: "Advanced financial analytics platform with interactive visualizations, predictive modeling, and portfolio management tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["TypeScript", "D3.js", "Python"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management",
      description: "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "Firebase", "Tailwind"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  // Styles object
  const styles = {
    section: {
      padding: "80px 16px",
      maxWidth: "1280px",
      margin: "0 auto 48px",
      borderRadius: "24px",
      backgroundColor: "rgba(248, 250, 252, 0.3)"
    },
    darkSection: {
      backgroundColor: "rgba(15, 23, 42, 0.3)"
    },
    headingContainer: {
      textAlign: "center",
      marginBottom: "64px"
    },
    heading: {
      fontSize: "30px",
      fontWeight: "700",
      marginBottom: "16px",
      background: "linear-gradient(to right, #0ea5e9, #8b5cf6)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    },
    subheading: {
      fontSize: "20px",
      color: "#64748b",
      maxWidth: "768px",
      margin: "0 auto"
    },
    darkSubheading: {
      color: "rgba(203, 213, 225, 0.7)"
    },
    projectsGrid: {
      display: "grid",
      gap: "32px",
      gridTemplateColumns: "1fr"
    },
    mdProjectsGrid: {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    lgProjectsGrid: {
      gridTemplateColumns: "repeat(3, 1fr)"
    },
    projectCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      border: "1px solid rgba(241, 245, 249, 0.5)",
      transition: "box-shadow 0.3s ease"
    },
    darkProjectCard: {
      backgroundColor: "#0f172a",
      borderColor: "rgba(30, 41, 59, 0.5)"
    },
    projectImageContainer: {
      position: "relative",
      overflow: "hidden",
      height: "192px"
    },
    projectImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease"
    },
    projectImageOverlay: {
      position: "absolute",
      inset: "0",
      background: "linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",
      display: "flex",
      alignItems: "flex-end",
      padding: "24px"
    },
    projectTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#ffffff"
    },
    projectContent: {
      padding: "24px"
    },
    projectDescription: {
      color: "#64748b",
      marginBottom: "16px"
    },
    darkProjectDescription: {
      color: "rgba(203, 213, 225, 0.7)"
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "16px"
    },
    tag: {
      padding: "4px 12px",
      borderRadius: "9999px",
      fontSize: "12px",
      fontWeight: "500",
      backgroundColor: "rgba(14, 165, 233, 0.1)",
      color: "#075985"
    },
    darkTag: {
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      color: "#bae6fd"
    },
    linksContainer: {
      display: "flex",
      gap: "16px"
    },
    link: {
      color: "#0ea5e9",
      textDecoration: "none",
      display: "flex",
      alignItems: "center"
    },
    darkLink: {
      color: "#7dd3fc"
    },
    linkIcon: {
      width: "16px",
      height: "16px",
      marginRight: "4px"
    },
    viewAllButton: {
      display: "inline-flex",
      alignItems: "center",
      padding: "12px 24px",
      border: "none",
      fontSize: "16px",
      fontWeight: "500",
      borderRadius: "6px",
      background: "linear-gradient(to right, #0ea5e9, #8b5cf6)",
      color: "#ffffff",
      cursor: "pointer",
      textDecoration: "none"
    },
    buttonIcon: {
      width: "20px",
      height: "20px",
      marginLeft: "12px",
      marginRight: "-4px"
    }
  };

  return (
    <section 
      id="projects" 
      style={styles.section}
      data-theme="dark"
    >
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>
          Featured Projects
        </h2>
        <p style={{...styles.subheading, ...styles.darkSubheading}}>
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
      </div>
      
      <div style={{
        ...styles.projectsGrid,
        ...styles.mdProjectsGrid,
        ...styles.lgProjectsGrid
      }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{
              ...styles.projectCard,
              ...styles.darkProjectCard,
              ':hover': {
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <div style={styles.projectImageContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={styles.projectImage}
              />
              <div style={styles.projectImageOverlay}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
              </div>
            </div>
            <div style={styles.projectContent}>
              <p style={{...styles.projectDescription, ...styles.darkProjectDescription}}>
                {project.description}
              </p>
              <div style={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{...styles.tag, ...styles.darkTag}}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={styles.linksContainer}>
                <a 
                  href={project.liveLink} 
                  style={{...styles.link, ...styles.darkLink}}
                >
                  <svg 
                    style={styles.linkIcon} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                  </svg>
                  Live
                </a>
                <a 
                  href={project.codeLink} 
                  style={{...styles.link, ...styles.darkLink}}
                >
                  <svg 
                    style={styles.linkIcon} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{textAlign: "center", marginTop: "48px"}}>
        <a 
          href="#" 
          style={styles.viewAllButton}
        >
          View All Projects
          <svg 
            style={styles.buttonIcon} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;