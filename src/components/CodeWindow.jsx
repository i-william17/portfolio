import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Animation for cursor blink
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Styled components
const Window = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 20px auto;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #3c3c3c;
  border-bottom: 1px solid #252526;
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 12px;
`;

const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const CloseButton = styled(Button)`
  background-color: #ff5f56;
`;

const MinimizeButton = styled(Button)`
  background-color: #ffbd2e;
`;

const FullscreenButton = styled(Button)`
  background-color: #27c93f;
`;

const Title = styled.div`
  text-align: center;
  flex: 1;
  color: #9a9a9a;
  font-size: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

const UserName = styled.span`
  color: #d4d4d4;
  font-size: 12px;
  font-weight: bold;
`;

const UserTitle = styled.span`
  color: #9a9a9a;
  font-size: 10px;
`;

const CodeContainer = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: 16px;
  background-color: #1e1e1e;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #252526;
  }

  &::-webkit-scrollbar-thumb {
    background: #3e3e42;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 600px) {
    height: 250px;
    font-size: 12px;
  }
`;

const Pre = styled.pre`
  margin: 0;
`;

const Code = styled.code`
  display: block;
  white-space: pre-wrap;
`;

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
  color: #569cd6;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  background-color: #007acc;
  color: white;
  font-size: 12px;
`;

const LanguageTag = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
`;

const ReadyText = styled.div`
  opacity: 0.8;
`;

const CodeWindow = ({ 
  code, 
  language = 'javascript', 
  speed = 30,
  userName = 'William',
  userTitle = 'Full-Stack Developer'
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const codeRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    setDisplayedCode('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (i < code.length) {
        setDisplayedCode(prev => prev + code.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [code, speed, language]);

  // Enhanced syntax highlighting
  const highlightSyntax = (text, lang) => {
    if (!text) return '';
    
    // Common patterns across languages
    const commonPatterns = [
      { regex: /(\/\/.*|\/\*[\s\S]*?\*\/|#.*)/g, class: 'comment' }, // Comments
      { regex: /(`.*?`|'.*?'|".*?")/g, class: 'string' }, // Strings
      { regex: /\b(\d+\.?\d*)\b/g, class: 'number' }, // Numbers
    ];

    // Language-specific patterns
    const languagePatterns = {
      javascript: [
        { regex: /\b(function|const|let|var|return|if|else|for|while|class|export|import|async|await|try|catch|finally|new|this)\b/g, class: 'keyword' },
        { regex: /\b(true|false|null|undefined|NaN|Infinity)\b/g, class: 'literal' },
        { regex: /\b(console|window|document|module|require)\b/g, class: 'builtin' },
      ],
      python: [
        { regex: /\b(def|class|return|if|elif|else|for|while|try|except|finally|with|import|from|as|lambda|and|or|not|in|is)\b/g, class: 'keyword' },
        { regex: /\b(True|False|None)\b/g, class: 'literal' },
        { regex: /\b(print|len|range|str|int|list|dict|tuple|set|__init__|self)\b/g, class: 'builtin' },
      ],
      html: [
        { regex: /(&lt;\/?[a-zA-Z][a-zA-Z0-9-]*|&gt;)/g, class: 'tag' },
        { regex: /(\s[a-zA-Z-]+=)/g, class: 'attribute' },
        { regex: /(&lt;!--[\s\S]*?--&gt;)/g, class: 'comment' },
      ],
      css: [
        { regex: /\b([a-zA-Z-]+)\s*:/g, class: 'property' },
        { regex: /(#|\.|@)[a-zA-Z][a-zA-Z0-9_-]*/g, class: 'selector' },
        { regex: /\/\*[\s\S]*?\*\//g, class: 'comment' },
      ],
      java: [
        { regex: /\b(public|private|protected|class|static|void|int|String|boolean|new|this|super|extends|implements|interface|throws|try|catch|finally)\b/g, class: 'keyword' },
        { regex: /\b(true|false|null)\b/g, class: 'literal' },
        { regex: /\b(System|out|println|main|args)\b/g, class: 'builtin' },
      ]
    };

    // Apply all patterns
    let highlighted = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Apply common patterns
    commonPatterns.forEach(pattern => {
      highlighted = highlighted.replace(pattern.regex, `<span class="${pattern.class}">$&</span>`);
    });

    // Apply language-specific patterns if available
    if (languagePatterns[lang]) {
      languagePatterns[lang].forEach(pattern => {
        highlighted = highlighted.replace(pattern.regex, `<span class="${pattern.class}">$&</span>`);
      });
    }

    return highlighted;
  };

  // Scroll to bottom as code types
  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, [displayedCode]);

  return (
    <Window>
      <TitleBar>
        <Buttons>
          <CloseButton />
          <MinimizeButton />
          <FullscreenButton />
        </Buttons>
        <Title>welcome.{language}</Title>
        <UserInfo>
          <UserName>{userName}</UserName>
          <UserTitle>{userTitle}</UserTitle>
        </UserInfo>
      </TitleBar>
      <CodeContainer ref={codeRef}>
        <Pre>
          <Code 
            dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedCode, language) }} 
          />
          {isTyping && <Cursor>|</Cursor>}
        </Pre>
      </CodeContainer>
      <StatusBar>
        <LanguageTag>{language}</LanguageTag>
        {!isTyping && <ReadyText>Welcome to my world!</ReadyText>}
      </StatusBar>
    </Window>
  );
};

// Welcome message from William in different languages
const welcomeMessages = {
  javascript: `// Welcome to my digital space!
// I'm William, a passionate Full-Stack Developer

const aboutMe = {
  name: "William",
  role: "Software Engineer",
  skills: ["JavaScript", "React", "Node.js", "Python"],
  passions: ["Clean code", "Problem solving", "Continuous learning"]
};

function greet() {
  console.log("Hello there! 👋");
  console.log("Let's build something amazing together!");
}

// Start the journey
greet();`,

  python: `# Welcome to my digital space!
# I'm William, a passionate Full-Stack Developer

about_me = {
    "name": "William",
    "role": "Software Engineer",
    "skills": ["Python", "Django", "JavaScript", "React"],
    "passions": ["Clean code", "Algorithms", "Teaching"]
}

def greet():
    print("Hello there! 👋")
    print("Let's collaborate on something great!")

# Start the journey
if __name__ == "__main__":
    greet()`,

  html: `<!-- Welcome to my digital space! -->
<!-- I'm William, a passionate Full-Stack Developer -->

<!DOCTYPE html>
<html>
<head>
  <title>William's Portfolio</title>
  <meta name="description" content="Creative developer building digital experiences">
</head>
<body>
  <header>
    <h1>Hello there! 👋</h1>
    <h2>I'm William</h2>
    <p>A Full-Stack Developer passionate about building web solutions</p>
  </header>
  
  <main>
    <section id="skills">
      <h3>My Toolkit:</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Let's connect and create something amazing!</p>
  </footer>
</body>
</html>`,

  java: `// Welcome to my digital space!
// I'm William, a passionate Full-Stack Developer

public class Welcome {
    public static void main(String[] args) {
        System.out.println("Hello there! 👋");
        System.out.println("I'm William, a Software Engineer");
        
        String[] skills = {"Java", "Spring", "JavaScript", "React"};
        String[] passions = {"Clean code", "System design", "Mentoring"};
        
        System.out.println("Let's build robust solutions together!");
    }
}`
};

const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

const LanguageButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  background: ${({ active }) => active ? '#007acc' : '#3c3c3c'};
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover {
    background: ${({ active }) => active ? '#006bb3' : '#4d4d4d'};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #007acc;
    outline-offset: 2px;
  }
`;

const ExampleCodeWindow = () => {
  const [currentLanguage, setCurrentLanguage] = useState('javascript');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <LanguageSelector>
        {Object.keys(welcomeMessages).map(lang => (
          <LanguageButton
            key={lang}
            onClick={() => setCurrentLanguage(lang)}
            active={currentLanguage === lang}
            aria-label={`Show ${lang} code`}
          >
            {lang}
          </LanguageButton>
        ))}
      </LanguageSelector>
      
      <CodeWindow 
        code={welcomeMessages[currentLanguage]} 
        language={currentLanguage}
        speed={15}
        userName="William"
        userTitle="Full-Stack Developer"
      />
    </div>
  );
};

export default ExampleCodeWindow;