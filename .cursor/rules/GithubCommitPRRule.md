# Skill: GitHub Commit Message & PR Generator

## Purpose
Generate clean, professional commit messages and pull request descriptions based on code changes.

---

## Trigger
- "commit"
- "write commit"
- "generate commit message"
- "create PR"
- "write PR description"

---

## Behavior

### 1. Commit Message Generation
- Analyze changes in code
- Summarize what was done
- Follow conventional commit format

Format:
<type>: <short summary>

Examples:
- feat: add user authentication
- fix: resolve null reference in login service
- refactor: simplify API response handling

---

### 2. PR Description Generation

Generate structured PR description:

### Summary
- What was done

### Changes
- Key modifications

### Testing
- How it can be tested

### Notes
- Important considerations or limitations

---

## Commit Types
- feat → new feature
- fix → bug fix
- refactor → code improvement
- docs → documentation
- test → tests
- chore → maintenance

---

## Rules
- Keep messages short and clear
- No unnecessary words
- Use present tense ("add", not "added")
- Be specific, not generic

---

## Output Format

### For Commit:
<type>: <message>

### For PR:

Summary:
...

Changes:
- ...
- ...

Testing:
- ...

Notes:
- ...

---

## Constraints
- Do NOT include unrelated changes
- Do NOT be vague ("update stuff")
- Do NOT over-explain

---

## Example Input
"commit"

## Example Output
fix: handle undefined response in login API