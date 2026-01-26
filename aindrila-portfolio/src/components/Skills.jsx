export function Skills() {
    const skills = [
      {
        title: 'Core Languages',
        items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
      },
      {
        title: 'Frontend',
        items: [
          'React',
          'HTML',
          'CSS',
          'WCAG Accessibility',
          'Component-driven UI Design',
          'Figma'
        ],
      },
      {
        title: 'Backend',
        items: [
          'Spring Boot',
          'Spring',
          'Node.js',
          'Python Flask',
          'REST APIs',
        ],
      },
      {
        title: 'Security & IAM',
        items: [
          'IAM Application Development',
          'KMS-based Encryption',
          'Secure Coding Practices',
          'Audit Readiness',
        ],
      },
      {
        title: 'AI Tools (Productivity)',
        items: [
          'LLMs',
          'Prompt Engineering',
          'ChatGPT',
          'GitHub Copilot',
          'OpenHands',
        ],
      },
      {
        title: 'DevOps & Testing',
        items: [
          'Git',
          'GitHub',
          'CI/CD',
          'Jenkins',
          'JMeter',
          'BlazeMeter',
          'Playwright',
        ],
      },
      {
        title: 'Developer Tools',
        items: [
          'IntelliJ IDEA',
          'VS Code',
          'Postman',
          'Bruno',
          'Swagger',
        ],
      },
    ];
  
    return (
      <section id='skills' className="section" style={{ width: '100vw' }}>
        <h3>Skills</h3>
  
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <h4 className="skill-title">{group.title}</h4>
  
              <div className="skill-chips">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  