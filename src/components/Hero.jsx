import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/DSC_0111.jpg";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ darkMode, toggleDarkMode }) => {
  const heroRef = useRef(null);
  const elementsRef = useRef([]);

  // Add elements to ref array
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Set minimum height to viewport height
    const setHeight = () => {
      if (heroRef.current) {
        heroRef.current.style.minHeight = `${window.innerHeight}px`;
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight);

    // Animate elements when component mounts
    const animations = elementsRef.current.map((el, index) => {
      return gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });

    // Parallax effect for the image
    const imageWrapper = heroRef.current.querySelector(".image-wrapper");
    if (imageWrapper) {
      const parallax = gsap.to(imageWrapper, {
        y: 30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        window.removeEventListener('resize', setHeight);
        animations.forEach(anim => anim.kill());
        parallax.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => {
      window.removeEventListener('resize', setHeight);
      animations.forEach(anim => anim.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Style objects with dark mode support
  const sectionStyles = {
    padding: "6rem 1.5rem 4rem",
    maxWidth: "100%",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
    color: darkMode ? "#e2e8f0" : "#1e293b",
    transition: "background-color 0.3s ease, color 0.3s ease"
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3rem",
    alignItems: "center",
    width: "80%"
  };

  // Media query for larger screens
  const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

  if (isLargeScreen) {
    gridStyles.gridTemplateColumns = "1.5fr 1fr";
    sectionStyles.padding = "8rem 2rem 5rem";
  }

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center"
  };

  const headingStyles = {
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
    opacity: 0,
    transform: "translateY(20px)"
  };

  const gradientTextStyles = {
    background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block"
  };

  const subHeadingStyles = {
    fontSize: "clamp(1.125rem, 3vw, 1.875rem)",
    fontWeight: 500,
    color: darkMode ? "#94a3b8" : "#64748b",
    margin: 0,
    opacity: 0,
    transform: "translateY(20px)",
    transition: "color 0.3s ease"
  };

  const paragraphStyles = {
    fontSize: "1.125rem",
    color: darkMode ? "#94a3b8" : "#64748b",
    maxWidth: "36rem",
    lineHeight: 1.6,
    margin: 0,
    opacity: 0,
    transform: "translateY(20px)",
    transition: "color 0.3s ease"
  };

  const buttonContainerStyles = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "0.5rem"
  };

  const baseButtonStyles = {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-block",
    opacity: 0,
    transform: "translateY(20px)",
    fontSize: "1rem"
  };

  const primaryButtonStyles = {
    ...baseButtonStyles,
    background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
    color: "white",
    border: "none",
  };

  const secondaryButtonStyles = {
    ...baseButtonStyles,
    border: darkMode ? "1px solid #334155" : "1px solid #e2e8f0",
    color: darkMode ? "#e2e8f0" : "#334155",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: darkMode ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.5)"
    }
  };

  const socialLinksStyles = {
    display: "flex",
    gap: "1.5rem",
    marginTop: "1.5rem"
  };

  const socialIconStyles = {
    color: darkMode ? "#94a3b8" : "#64748b",
    transition: "color 0.3s ease, transform 0.3s ease",
    opacity: 0,
    transform: "translateY(20px)",
    ":hover": {
      color: darkMode ? "#7dd3fc" : "#0ea5e9"
    }
  };

  const imageContainerStyles = {
    position: "relative",
    perspective: "500px",
    opacity: 0,
    transform: "translateY(20px)",
    width: "100%",
    maxWidth: "350px",
    marginLeft: "auto",
    marginRight: isLargeScreen ? "2rem" : "auto"
  };

  const imageGradientStyles = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
    borderRadius: "1rem",
    transform: "rotate(-6deg)",
    zIndex: -1,
    opacity: darkMode ? 0.9 : 0.8,
    width: "100%",
    height: "100%",
    transition: "opacity 0.3s ease"
  };

  const imageWrapperStyles = {
    position: "relative",
    borderRadius: "1rem",
    overflow: "hidden",
    border: darkMode ? "8px solid #1e293b" : "8px solid white",
    boxShadow: darkMode 
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.3)" 
      : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transform: "rotate(6deg)",
    transition: "all 0.5s ease",
    width: "100%"
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    aspectRatio: "1/1"
  };

  // Theme toggle button styles
  const themeToggleStyles = {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    padding: "0.5rem",
    borderRadius: "50%",
    backgroundColor: darkMode ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.5)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    ":hover": {
      backgroundColor: darkMode ? "rgba(30, 41, 59, 0.7)" : "rgba(241, 245, 249, 0.7)",
      transform: "rotate(15deg)"
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="home" 
      aria-label="Hero section"
      style={sectionStyles}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        style={themeToggleStyles}
      >
        {darkMode ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={darkMode ? "#e2e8f0" : "#334155"}
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={darkMode ? "#e2e8f0" : "#334155"}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>

      <div style={gridStyles}>
        <div style={contentStyles}>
          <h1 style={headingStyles} ref={addToRefs}>
            This is <span style={gradientTextStyles}>William</span>
          </h1>
          <h2 style={subHeadingStyles} ref={addToRefs}>Full-Stack Software Engineer</h2>
          <p style={paragraphStyles} ref={addToRefs}>
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating efficient, scalable, and user-friendly
            applications.
          </p>

          <div style={buttonContainerStyles}>
            <a
              href="#contact"
              style={primaryButtonStyles}
              ref={addToRefs}
              aria-label="Contact me"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              style={{
                ...secondaryButtonStyles,
                ":hover": {
                  backgroundColor: darkMode ? "rgba(30, 41, 59, 0.5)" : "rgba(241, 245, 249, 0.5)"
                }
              }}
              ref={addToRefs}
              aria-label="View my projects"
            >
              View My Work
            </a>
          </div>

          <div style={socialLinksStyles}>
            {[
              { 
                platform: "github", 
                url: "https://github.com", 
                label: "GitHub profile" 
              },
              { 
                platform: "linkedin", 
                url: "https://linkedin.com", 
                label: "LinkedIn profile" 
              },
              { 
                platform: "twitter", 
                url: "https://twitter.com", 
                label: "Twitter profile" 
              }
            ].map(({ platform, url, label }, index) => (
              <a
                key={platform}
                href={url}
                style={{
                  ...socialIconStyles,
                  transitionDelay: `${0.3 + index * 0.1}s`
                }}
                target="_blank"
                rel="noopener noreferrer"
                ref={addToRefs}
                aria-label={label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = darkMode ? "#7dd3fc" : "#0ea5e9";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = darkMode ? "#94a3b8" : "#64748b";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 24, height: 24 }}>
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
              </a>
            ))}
          </div>
        </div>

        <div style={imageContainerStyles} ref={addToRefs}>
          <div style={imageGradientStyles} aria-hidden="true" />
          <div 
            className="image-wrapper" 
            style={imageWrapperStyles}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(6deg) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(6deg)";
            }}
          >
            <img
              src={img1}
              style={imageStyles}
              alt="William working on a laptop"
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;