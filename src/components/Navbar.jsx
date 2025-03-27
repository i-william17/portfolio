import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${({ darkMode }) => darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  z-index: 50;
  border-bottom: ${({ darkMode }) => darkMode ? '1px solid rgba(30, 41, 59, 0.2)' : '1px solid rgba(241, 245, 249, 0.2)'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #0ea5e9, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ darkMode }) => darkMode ? '#cbd5e1' : '#334155'};
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: ${({ darkMode }) => darkMode ? '#7dd3fc' : '#0ea5e9'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #0ea5e9, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ContactButton = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: linear-gradient(to right, #0ea5e9, #8b5cf6);
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.3);
  }

  &:focus {
    outline: 2px solid ${({ darkMode }) => darkMode ? '#7dd3fc' : '#0ea5e9'};
    outline-offset: 2px;
  }
`;

const ThemeToggle = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ darkMode }) => darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  &:hover {
    background-color: ${({ darkMode }) => darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(241, 245, 249, 0.7)'};
  }

  &:focus {
    outline: 2px solid ${({ darkMode }) => darkMode ? '#7dd3fc' : '#0ea5e9'};
    outline-offset: 2px;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ darkMode }) => darkMode ? '#cbd5e1' : '#334155'};
  }

  &:focus {
    outline: 2px solid ${({ darkMode }) => darkMode ? '#7dd3fc' : '#0ea5e9'};
    outline-offset: 2px;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  background-color: ${({ darkMode }) => darkMode ? '#0f172a' : '#ffffff'};
  border-top: ${({ darkMode }) => darkMode ? '1px solid rgba(30, 41, 59, 0.2)' : '1px solid rgba(241, 245, 249, 0.2)'};
  transition: all 0.3s ease;
`;

const MobileMenuContent = styled.div`
  padding: 0.5rem 0.75rem;
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 0.75rem;
  color: ${({ darkMode }) => darkMode ? '#cbd5e1' : '#334155'};
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  font-weight: 500;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: ${({ darkMode }) => darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)'};
  }

  &:focus {
    outline: 2px solid ${({ darkMode }) => darkMode ? '#7dd3fc' : '#0ea5e9'};
    outline-offset: 2px;
  }
`;

const ThemeToggleMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  color: ${({ darkMode }) => darkMode ? '#cbd5e1' : '#334155'};
`;

const ToggleButtonMobile = styled.button`
  padding: 0.25rem;
  border-radius: 0.375rem;
  background-color: ${({ darkMode }) => darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ darkMode }) => darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(241, 245, 249, 0.7)'};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <Nav darkMode={darkMode} style={{ 
      backgroundColor: scrolled 
        ? darkMode 
          ? 'rgba(15, 23, 42, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)' 
        : darkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)'
    }}>
      <Container>
        <NavContent>
          <Logo href="#" aria-label="Home" className='logo'>//william_writes_code</Logo>
          
          <DesktopMenu darkMode={darkMode}>
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                darkMode={darkMode}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </NavLink>
            ))}
            <ContactButton 
              href="#contact" 
              darkMode={darkMode}
              aria-label="Navigate to Contact section"
            >
              Contact
            </ContactButton>
            <ThemeToggle 
              onClick={toggleDarkMode}
              darkMode={darkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              )}
            </ThemeToggle>
          </DesktopMenu>

          <MobileMenuButton 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            darkMode={darkMode}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </MobileMenuButton>
        </NavContent>

        <MobileMenu isOpen={mobileMenuOpen} darkMode={darkMode} className="mobile-menu-container">
          <MobileMenuContent>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <MobileNavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                darkMode={darkMode}
                onClick={() => setMobileMenuOpen(false)}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </MobileNavLink>
            ))}
            <ThemeToggleMobile darkMode={darkMode}>
              <span>Toggle Theme</span>
              <ToggleButtonMobile 
                onClick={toggleDarkMode}
                darkMode={darkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                ) : (
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                )}
              </ToggleButtonMobile>
            </ThemeToggleMobile>
          </MobileMenuContent>
        </MobileMenu>
      </Container>
    </Nav>
  );
};

export default Navbar;