import React, { useState, useEffect, useRef } from 'react';

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
  }, [code, speed]);

  // Enhanced syntax highlighting
  const highlightSyntax = (text, lang) => {
    // Common patterns across languages
    const commonPatterns = [
      { regex: /(\/\/.*|\/\*[\s\S]*?\*\/)/g, class: 'comment' }, // Comments
      { regex: /(`.*?`|'.*?'|".*?")/g, class: 'string' }, // Strings
      { regex: /\b(\d+\.?\d*)\b/g, class: 'number' }, // Numbers
    ];

    // Language-specific patterns
    const languagePatterns = {
      javascript: [
        { regex: /\b(function|const|let|var|return|if|else|for|while|class|export|import|async|await|try|catch|finally)\b/g, class: 'keyword' },
        { regex: /\b(true|false|null|undefined|NaN|Infinity)\b/g, class: 'literal' },
        { regex: /\b(console|window|document|module|require)\b/g, class: 'builtin' },
      ],
      python: [
        { regex: /\b(def|class|return|if|elif|else|for|while|try|except|finally|with|import|from|as|lambda)\b/g, class: 'keyword' },
        { regex: /\b(True|False|None)\b/g, class: 'literal' },
        { regex: /\b(print|len|range|str|int|list|dict|tuple|set)\b/g, class: 'builtin' },
      ],
      html: [
        { regex: /(&lt;\/?[a-zA-Z]+|&gt;)/g, class: 'tag' },
        { regex: /(\s[a-zA-Z-]+=)/g, class: 'attribute' },
      ],
      css: [
        { regex: /\b([a-zA-Z-]+)\s*:/g, class: 'property' },
        { regex: /(#|\.)[a-zA-Z][a-zA-Z0-9_-]*/g, class: 'selector' },
      ],
      java: [
        { regex: /\b(public|private|protected|class|static|void|int|String|boolean|new|this|super|extends|implements)\b/g, class: 'keyword' },
        { regex: /\b(true|false|null)\b/g, class: 'literal' },
        { regex: /\b(System|out|println|main)\b/g, class: 'builtin' },
      ]
    };

    // Apply all patterns
    let highlighted = text;
    
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
    <div style={styles.window}>
      <div style={styles.titleBar}>
        <div style={styles.buttons}>
          <div style={{...styles.button, ...styles.closeButton}} />
          <div style={{...styles.button, ...styles.minimizeButton}} />
          <div style={{...styles.button, ...styles.fullscreenButton}} />
        </div>
        <div style={styles.title}>welcome.{language}</div>
        <div style={styles.userInfo}>
          <span style={styles.userName}>{userName}</span>
          <span style={styles.userTitle}>{userTitle}</span>
        </div>
      </div>
      <div style={styles.codeContainer} ref={codeRef}>
        <pre style={styles.pre}>
          <code 
            dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedCode, language) }} 
            style={styles.code}
          />
          {isTyping && <span style={styles.cursor}>|</span>}
        </pre>
      </div>
      <div style={styles.statusBar}>
        <div style={styles.languageTag}>{language}</div>
        {!isTyping && <div style={styles.readyText}>Welcome to my world!</div>}
      </div>
    </div>
  );
};

// Styles
const styles = {
  window: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    fontFamily: '"Fira Code", "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.5',
    margin: '20px auto',
    position: 'relative'
  },
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: '#3c3c3c',
    borderBottom: '1px solid #252526',
    position: 'relative'
  },
  buttons: {
    display: 'flex',
    gap: '8px',
    marginRight: '12px'
  },
  button: {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  closeButton: {
    backgroundColor: '#ff5f56'
  },
  minimizeButton: {
    backgroundColor: '#ffbd2e'
  },
  fullscreenButton: {
    backgroundColor: '#27c93f'
  },
  title: {
    textAlign: 'center',
    flex: 1,
    color: '#9a9a9a',
    fontSize: '12px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 'auto'
  },
  userName: {
    color: '#d4d4d4',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  userTitle: {
    color: '#9a9a9a',
    fontSize: '10px'
  },
  codeContainer: {
    height: '300px',
    overflowY: 'auto',
    padding: '16px',
    backgroundColor: '#1e1e1e'
  },
  pre: {
    margin: 0
  },
  code: {
    display: 'block',
    whiteSpace: 'pre-wrap'
  },
  cursor: {
    animation: 'blink 1s step-end infinite',
    color: '#569cd6'
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 12px',
    backgroundColor: '#007acc',
    color: 'white',
    fontSize: '12px'
  },
  languageTag: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '2px 8px',
    borderRadius: '4px'
  },
  readyText: {
    opacity: 0.8
  },
  // Syntax highlighting colors
  comment: {
    color: '#6a9955'
  },
  keyword: {
    color: '#569cd6'
  },
  string: {
    color: '#ce9178'
  },
  number: {
    color: '#b5cea8'
  },
  literal: {
    color: '#569cd6'
  },
  builtin: {
    color: '#4ec9b0'
  },
  tag: {
    color: '#569cd6'
  },
  attribute: {
    color: '#9cdcfe'
  },
  property: {
    color: '#9cdcfe'
  },
  selector: {
    color: '#d7ba7d'
  }
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

const ExampleCodeWindow = () => {
  const [currentLanguage, setCurrentLanguage] = useState('javascript');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '15px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {Object.keys(welcomeMessages).map(lang => (
          <button
            key={lang}
            onClick={() => setCurrentLanguage(lang)}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              background: currentLanguage === lang ? '#007acc' : '#3c3c3c',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Fira Code", monospace',
              fontSize: '14px'
            }}
          >
            {lang}
          </button>
        ))}
      </div>
      
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