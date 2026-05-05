export const CV_PROMPT = `You are a professional tech recruiter and CV writer.

Your task is to rewrite the following CV into a modern, compelling Frontend Developer profile suitable for a portfolio website.

IMPORTANT REQUIREMENTS:
- Focus on transitioning the candidate into a Frontend Developer role
- Highlight JavaScript, React, TypeScript, and web development skills
- Emphasize transferable skills from teaching, economics, and HR (communication, analytical thinking, problem-solving)
- Keep the tone professional, confident, and concise
- Avoid long paragraphs
- Use clear sections and bullet points
- Make it visually suitable for a portfolio (clean structure)

OUTPUT FORMAT (STRICT):
Return the result in MARKDOWN format with these sections:

# Name
## Frontend Developer

## Summary
(3–4 lines strong professional summary)

## Skills
(bullet list grouped: Frontend / Tools / Other)

## Projects
(create 2–3 realistic project descriptions based on skills if not provided)

## Experience
(rewrite experience to emphasize relevant skills)

## Education

## Certifications

## Languages

## Additional
(optional: hobbies or strengths, keep short)

-----

Here is the original CV:

Sona Arzumanyan

Address: 107, Street 1, Verishen Village, Goris
Phone: +374 77 31 39 63
Email: sona.arzuamnanyan1983@gmail.com
GitHub: https://github.com/SonaArzumanyan
LinkedIn: www.linkedin.com/in/sona-arzumanyan

Experience:
Software Test Automation Engineer (2025-Present), EPAM Systems
- Developed and maintained automated test scripts for web applications
- Implemented test automation frameworks using Cypress and Cucumber, PLaywright
- Collaborated with development teams to improve test coverage
- Optimized test execution for faster feedback

Lecturer, HR Specialist (2023–Present), Goris State College 
- Teach economics, entrepreneurship, marketing, management
- Manage HR processes and employee documentation
- Ensure compliance with employment laws

Logistics Manager (2010–2011), Svetlye Okna, Moscow
- Built logistics chains
- Managed personnel
- Conducted interviews
- Calculated salaries
- Resolved customer conflicts

Economist, Lecturer (2006–2010), Goris State University
- Calculated economic indicators
- Developed economic plans
- Taught economics, statistics, international economics

Education:
Yerevan State University of Economics
- International Economics
- Graduated with honors

Certifications:
- JavaScript and Node.js (2025)
- IT Project Management (2024)
- Web development (HTML, CSS, JS) (2021)
- Graphic Design (2020)

Languages:
- Russian (Fluent)
- English (Intermediate B1/B2)
- German (Basic)

Hobbies:
Hiking, reading, movies, music

-----

Make the result strong enough to impress recruiters for a junior or mid-level frontend developer role.`;