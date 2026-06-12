import React, { useState } from 'react';

function App() {
  const [projName, setProjName] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [features, setFeatures] = useState('');
  const [copied, setCopied] = useState(false);


  const generateReadme = () => {
    return `# 🚀 ${projName || 'Project Title'}

${description || 'A brief description of what this amazing project does.'}

---

## ✨ Features
${features ? features.split(',').map(f => `* **${f.trim()}**`).join('\n') : '* **Feature 1**\n* **Feature 2**'}

---

## 🛠️ Tech Stack
${techStack ? techStack.split(',').map(t => `* \`${t.trim()}\``).join('\n') : '* `React` \n* `JavaScript`'}

---

## 💻 Getting Started

1. **Clone the project:**
   \`\`\`bash
   git clone https://github.com/Adhieeeh/your-repo-name.git
   \`\`\`

2. **Install packages:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReadme());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '50px auto', padding: '30px', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fdfdfd', borderRadius: '12px', border: '1px solid #eef0f2', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
      <h1 style={{ color: '#1a1f2c', marginBottom: '5px' }}>🚀 QuickRepo</h1>
      <p style={{ color: '#8a94a6', marginTop: '0', marginBottom: '30px' }}>Instantly generate clean, professional README boilerplates for your projects.</p>

      {/* Input Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#3a4252' }}>Project Name</label>
          <input type="text" placeholder="e.g., DevSign Generator" value={projName} onChange={(e) => setProjName(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #d2d7e0', borderRadius: '6px' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#3a4252' }}>Brief Description</label>
          <textarea placeholder="What does this project do?" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #d2d7e0', borderRadius: '6px', height: '60px', resize: 'vertical' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#3a4252' }}>Tech Stack (Separate with commas)</label>
          <input type="text" placeholder="e.g., React, Vite, CSS, Shields.io" value={techStack} onChange={(e) => setTechStack(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #d2d7e0', borderRadius: '6px' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', color: '#3a4252' }}>Key Features (Separate with commas)</label>
          <input type="text" placeholder="e.g., Live Preview, Copy to clipboard, Dark mode" value={features} onChange={(e) => setFeatures(e.target.value)} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #d2d7e0', borderRadius: '6px' }} />
        </div>
      </div>

      {/* Output / Code Copy Section */}
      <div style={{ position: 'relative' }}>
        <h3 style={{ color: '#3a4252', marginBottom: '10px' }}>Generated Markdown Blueprint:</h3>
        <pre style={{ backgroundColor: '#0f141c', color: '#a5b4fc', padding: '20px', borderRadius: '8px', overflowX: 'auto', fontSize: '13px', lineHeight: '1.6', margin: '0' }}>
          {generateReadme()}
        </pre>
        <button onClick={handleCopy} style={{ position: 'absolute', top: '45px', right: '15px', padding: '8px 16px', backgroundColor: copied ? '#10b981' : '#312e81', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', transition: '0.2s' }}>
          {copied ? 'Copied Boilerplate! 🎉' : 'Copy README Code'}
        </button>
      </div>
    </div>
  );
}

export default App;