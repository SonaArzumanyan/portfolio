# AI Career Assistant Skills

## 1. CV Improvement
- Analyze and rewrite CV content for clarity and professionalism
- Adapt CV for developer roles (React, TypeScript, UI...)
- Transform non-technical experience into transferable skills
- Improve structure, readability, and impact
- Convert CV into modern, concise markdown format

## 2. Job-Specific CV Tailoring
- Compare CV against job descriptions
- Highlight relevant skills and experience
- Adjust wording to match job requirements
- Emphasize keywords for better alignment

## 3. Cover Letter Generation
- Generate personalized cover letters based on:
  - User CV
  - Job description
- Maintain professional and confident tone
- Highlight relevant achievements and skills
- Keep content concise and structured

## 4. Content Structuring
- Output results in clean Markdown format
- Use clear sections and bullet points
- Ensure content is ready for rendering in UI

## 5. Language & Tone Optimization
- Use professional, recruiter-friendly language
- Improve grammar and sentence clarity
- Avoid unnecessary repetition
- Keep tone confident but natural

## 6. Career Guidance (Optional Extension)
- Suggest missing skills based on job requirements
- Recommend improvements for stronger applications

## 7. Fallback & Source CV
- The source CV lives in `src/data/cv.ts` and is never deleted by the app
- Use the provided CV as the source of truth; tailor it without inventing new experience
- API output is optional; on failure the UI continues showing the source CV
- Only persist an AI-generated CV when the user explicitly saves it
