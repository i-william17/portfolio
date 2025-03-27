import { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Styles object
  const styles = {
    nav: {
      position: 'fixed',
      width: '100%',
      backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      zIndex: 50,
      borderBottom: darkMode ? '1px solid rgba(30, 41, 59, 0.2)' : '1px solid rgba(241, 245, 249, 0.2)'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
      alignItems: 'center'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textDecoration: 'none'
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLink: {
      color: darkMode ? '#cbd5e1' : '#334155',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    navLinkHover: {
      color: darkMode ? '#7dd3fc' : '#0ea5e9'
    },
    themeToggle: {
      padding: '8px',
      borderRadius: '50%',
      backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mobileMenuButton: {
      display: 'none',
      padding: '8px',
      borderRadius: '6px',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: mobileMenuOpen ? 'block' : 'none',
      backgroundColor: darkMode ? '#0f172a' : '#ffffff',
      borderTop: darkMode ? '1px solid rgba(30, 41, 59, 0.2)' : '1px solid rgba(241, 245, 249, 0.2)'
    },
    mobileMenuContent: {
      padding: '8px 12px'
    },
    mobileNavLink: {
      display: 'block',
      padding: '12px',
      color: darkMode ? '#cbd5e1' : '#334155',
      textDecoration: 'none',
      borderRadius: '6px',
      transition: 'background-color 0.3s ease'
    },
    mobileNavLinkHover: {
      backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)'
    },
    contactButton: {
      padding: '8px 16px',
      borderRadius: '6px',
      background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'opacity 0.3s ease'
    },
    contactButtonHover: {
      opacity: '0.9'
    }
  };

  // Handle hover effects
  const handleMouseEnter = (e) => {
    e.target.style.color = styles.navLinkHover.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = styles.navLink.color;
  };

  const handleMobileLinkMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.mobileNavLinkHover.backgroundColor;
  };

  const handleMobileLinkMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.navContent}>
          <a href="#" style={styles.logo}>//william_writes_code</a>
          
          {/* Desktop Navigation */}
          <div style={styles.desktopMenu}>
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={styles.navLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              style={styles.contactButton}
              onMouseEnter={(e) => e.target.style.opacity = styles.contactButtonHover.opacity}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Contact
            </a>
            <button 
              onClick={toggleDarkMode}
              style={styles.themeToggle}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={styles.mobileNavLink}
                onMouseEnter={handleMobileLinkMouseEnter}
                onMouseLeave={handleMobileLinkMouseLeave}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Toggle Theme</span>
              <button 
                onClick={toggleDarkMode}
                style={{
                  ...styles.themeToggle,
                  padding: '4px',
                  backgroundColor: 'transparent'
                }}
              >
                {darkMode ? (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;