import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  // Style objects
  const navStyles = {
    position: 'fixed',
    width: '100%',
    backgroundColor: darkMode 
      ? scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)'
      : scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    zIndex: 50,
    borderBottom: darkMode ? '1px solid rgba(30, 41, 59, 0.3)' : '1px solid rgba(226, 232, 240, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const logoStyles = {
    fontSize: '1.25rem',
    fontWeight: 700,
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    letterSpacing: '-0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navLinkStyles = (darkMode) => ({
    color: darkMode ? '#e2e8f0' : '#334155',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    fontWeight: 500,
    fontSize: '0.95rem',
    position: 'relative',
    padding: '0.5rem 0'
  });

  const contactButtonStyles = (darkMode) => ({
    padding: '0.5rem 1.25rem',
    borderRadius: '0.5rem',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    fontSize: '0.95rem',
    border: '1px solid transparent'
  });

  const themeToggleStyles = (darkMode) => ({
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0.5rem'
  });

  const mobileNavLinkStyles = (darkMode) => ({
    display: 'block',
    padding: '0.75rem 1rem',
    color: darkMode ? '#e2e8f0' : '#334155',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    transition: 'all 0.2s ease',
    fontWeight: 500,
    margin: '0.25rem 0',
    fontSize: '1rem'
  });

  return (
    <nav style={navStyles}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '4.5rem',
          alignItems: 'center'
        }}>
          <a 
            href="#" 
            aria-label="Home" 
            className="logo" 
            style={logoStyles}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ content: '"❯"', fontSize: '1rem', color: '#0ea5e9' }}>❯</span>
            william_writes_code
          </a>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }} className="desktop-menu">
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-label={`Navigate to ${item} section`}
                onClick={() => setMobileMenuOpen(false)}
                style={navLinkStyles(darkMode)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = darkMode ? '#7dd3fc' : '#0ea5e9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = darkMode ? '#e2e8f0' : '#334155';
                }}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              aria-label="Navigate to Contact section"
              style={contactButtonStyles(darkMode)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(14, 165, 233, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={themeToggleStyles(darkMode)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(241, 245, 249, 0.7)';
                e.currentTarget.style.transform = 'rotate(15deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)';
                e.currentTarget.style.transform = 'rotate(0)';
              }}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.75rem', height: '1.75rem', color: darkMode ? '#e2e8f0' : '#334155' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.75rem', height: '1.75rem', color: darkMode ? '#e2e8f0' : '#334155' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div 
          style={{
            display: mobileMenuOpen ? 'block' : 'none',
            backgroundColor: darkMode ? '#0f172a' : '#ffffff',
            borderTop: darkMode ? '1px solid rgba(30, 41, 59, 0.3)' : '1px solid rgba(226, 232, 240, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'absolute',
            left: 0,
            right: 0,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
          className="mobile-menu-container"
        >
          <div style={{ padding: '0.5rem 1.5rem 1.5rem' }}>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-label={`Navigate to ${item} section`}
                onClick={() => setMobileMenuOpen(false)}
                style={mobileNavLinkStyles(darkMode)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)';
                  e.currentTarget.style.color = darkMode ? '#7dd3fc' : '#0ea5e9';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = darkMode ? '#e2e8f0' : '#334155';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {item}
              </a>
            ))}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              color: darkMode ? '#e2e8f0' : '#334155',
              borderTop: darkMode ? '1px solid rgba(30, 41, 59, 0.3)' : '1px solid rgba(226, 232, 240, 0.3)',
              marginTop: '0.5rem'
            }}>
              <span>Toggle Theme</span>
              <button
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(241, 245, 249, 0.7)';
                  e.currentTarget.style.transform = 'rotate(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)';
                  e.currentTarget.style.transform = 'rotate(0)';
                }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add media queries in a style tag */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .logo {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;