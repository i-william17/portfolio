import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const elementsRef = useRef([]);
  const imageRef = useRef(null);

  const features = [
    { 
      title: "Full-Stack Development", 
      description: "Building scalable web applications with modern technologies." 
    },
    { 
      title: "Performance Optimization", 
      description: "Ensuring fast and efficient solutions for better user experience." 
    },
    { 
      title: "Creative Problem Solving", 
      description: "Delivering innovative technical solutions tailored to your needs." 
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content elements
      elementsRef.current.forEach((el, index) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Image parallax effect
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 20,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // Background animation
      gsap.to(aboutRef.current, {
        backgroundPosition: "0% 0%",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '100%',
        margin: '4rem auto 0',
        background: 'rgba(17, 24, 39, 0.95)',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Background gradient animation */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
        zIndex: -1,
        animation: 'rotate 20s linear infinite'
      }} />
      
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (min-width: 768px) {
          .about-container {
            flex-direction: row;
            text-align: left;
            gap: 4rem;
          }
        }
        
        .heading:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .feature-item:hover {
          background: rgba(55, 65, 81, 0.4);
          transform: translateY(-2px);
        }
        
        .feature-item:hover .feature-icon {
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(139, 92, 246, 0.3));
        }
        
        .feature-item:hover .feature-icon svg {
          stroke: #8b5cf6;
          transform: translateX(3px);
        }
        

      `}</style>

      <div 
        className="about-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div 
          ref={(el) => elementsRef.current.push(el)}
          style={{
            flex: 1,
            opacity: 0,
            transform: 'translateY(20px)',
            maxWidth: '42rem'
          }}
        >
          <h2 
            className="heading"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1.75rem',
              backgroundImage: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
              position: 'relative',
              display: 'inline-block'
            }}
          >
            About Me
            <span style={{
              content: '',
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '100%',
              height: '3px',
              background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.4s ease'
            }} />
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#d1d5db',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            I'm a passionate software engineer with expertise in full-stack development, specializing in React, Node.js, and modern web technologies.
          </p>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#d1d5db',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
            opacity: 0.9
          }}>
            With a focus on creating intuitive and high-performing applications, I deliver solutions that are both scalable and maintainable.
          </p>
          
          <div style={{
            marginTop: '2.5rem',
            display: 'grid',
            gap: '1.25rem'
          }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={(el) => elementsRef.current.push(el)}
                className="feature-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'all 0.3s ease',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(31, 41, 55, 0.4)'
                }}
              >
                <div 
                  className="feature-icon"
                  style={{
                    padding: '0.75rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    style={{
                      width: '24px',
                      height: '24px',
                      stroke: '#0ea5e9',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left'
                }}>
                  <span style={{
                    fontWeight: 600,
                    color: '#f3f4f6',
                    fontSize: '1.1rem',
                    marginBottom: '0.25rem'
                  }}>
                    {feature.title}
                  </span>
                  <span style={{
                    fontSize: '0.95rem',
                    color: '#9ca3af',
                    lineHeight: 1.5
                  }}>
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          ref={(el) => elementsRef.current.push(el)}
          style={{
            flex: 1,
            position: 'relative',
            opacity: 0,
            transform: 'translateY(20px)',
            maxWidth: '500px',
            width: '100%'
          }}
        >
          <div 
            ref={imageRef}
            className="image-wrapper"
            style={{
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              transform: 'rotate(3deg)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(139, 92, 246, 0.3))',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              zIndex: 1
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;