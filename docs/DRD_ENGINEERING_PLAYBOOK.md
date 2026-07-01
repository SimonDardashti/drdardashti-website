# DRD ENGINEERING PLAYBOOK

**Version:** 1.1

**Established:** 2026-06-30

**Updated:** 2026-06-30

**Status:** Frozen

---

## Repository Authority

The repository is maintained under these governance principles:

- **Owner:** SimonDardashti (Dr. Dardashti)
- **Engineering Standard:** DRD_ENGINEERING_PLAYBOOK.md (this document)
- **Approval Authority:** Owner approval required for project freezes and major standard deviations
- **Escalation:** Standards deviations require documented justification and owner review
- **Repository Maintenance:** Engineering standards supersede individual project preferences

---

## Engineering Principles

These principles guide all engineering work on DrDardashti.com.

- **Repository code is the source of truth.** Never guess about repository state. Verify before reporting.
- **Evidence overrides assumptions.** Repository evidence is the only source of truth.
- **Read before modifying.** Always read a file before editing it.
- **Verify before reporting.** Verify claims against the repository before including them in documentation.
- **One logical change per commit.** Each commit represents one focused, coherent change.
- **Build after every change.** Run production build after every modification to ensure no regressions.
- **Separate engineering work from content creation.** Engineering maintains code and structure. Content development creates illustrations and educational material.
- **Missing assets are backlog items, not engineering failures.** Deferred illustrations are tracked as content development work.

---

## Repository Inspection Standards

Use the highest-level repository tools available.

**Priority:**
1. Native repository navigation
2. Direct file reads (Read tool)
3. Direct file edits (Edit tool)
4. Terminal only when genuinely required

**Terminal reserved for:**
- git operations
- npm operations
- production builds
- deployment commands

**Avoid:**
- Shell scripts for repository inspection
- grep pipelines
- awk, sed, xargs
- Temporary files
- Shell variables
- For loops for code analysis

**If repository inspection begins resembling a shell program:** Stop and use repository tools instead.

---

## Definition of Done

A change is complete when all of the following are satisfied:

- Code changes are complete and match stated objective
- Production build verified (no errors or critical warnings)
- Git diff reviewed and approved
- Changes are logically cohesive (one change per commit)
- Acceptance Report produced documenting the change
- Approval received before commit is created
- Commit message explains WHY, not WHAT
- Work is ready for immediate deployment if approved

Do not commit incomplete work. If a change cannot satisfy all criteria, decompose it into smaller increments or defer to backlog.

---

## Rollback Philosophy

Changes are designed to be reversible:

- If a change breaks functionality, rollback to the prior commit immediately
- Rollback does not require analysis or approval (emergency recovery)
- After rollback, root cause must be investigated before re-attempting
- Emergency hotfixes follow the same approval and documentation workflow as regular changes
- No change is so critical that it bypasses engineering standards

---

## Document Hierarchy

When multiple documents are available, use this hierarchy to determine authority:

1. **DRD_ENGINEERING_PLAYBOOK.md** — Permanent engineering standards (highest authority)
2. **PROJECT_*_BASELINE.md** — Frozen project state (read-only, version-controlled)
3. **PROJECT_*_CHARTER.md** — Project plans (version-controlled, updateable by project)
4. **DECISIONS.md** — Engineering reasoning (append-only log, why decisions were made)
5. **CHANGELOG.md** — Implementation history (append-only log, what changed and when)
6. **ROADMAP.md** — Future direction (living document, updateable, not authority)

**Precedence rule:** If documents conflict, the higher-ranked document takes precedence.

---

## Content Audit Workflow

Apply this workflow when auditing any page-based content for completeness and correctness. The 4-step process can be adapted to different audit types (illustrations, text, metadata, accessibility, etc.).

Review one page at a time.

### STEP 1: Read the page

Use Read tool to access the full page source.

### STEP 2: Determine educational objective

Understand what the page is teaching patients about.

### STEP 3: Verify MedicalFigure components

Check if MedicalFigure components exist and are appropriate.

### STEP 4: Verify illustration assets

For each MedicalFigure:
- Verify the image path is correct
- Verify the referenced asset exists in the repository
- Check for correct placement supporting educational flow
- Verify role assignment (anatomy/mechanism/reference/comparison/hero)
- Verify caption appropriateness
- Verify alt text quality

---

## Image Path Verification Protocol

Before classifying an illustration as missing:

1. **Verify the referenced file does not exist** — Check exact path in repository
2. **Search the repository for the illustration** — Look for same subject matter
3. **Check topic subdirectories** — Illustrations may be organized by topic:
   - headache/
   - crps/
   - nerve/
   - peripheral-neuropathy/
   - spine/
   - joints/
   - hip/
   - knee/
   - procedures/
   - (and others)
4. **If the correct illustration exists elsewhere, classify as CHANGE PATH (Incorrect Image Path)** — Not Missing Asset
5. **Only after full verification, classify as Missing Asset** — Only when no appropriate illustration exists anywhere in repository

---

## Page Review Outcomes

### FAST PATH — No changes required

**Criteria:**
- All MedicalFigure components are appropriate
- All image paths are correct
- All referenced assets exist
- Placement supports educational objective
- Role assignment is correct
- Caption and alt text are appropriate

**Output:**
```
PAGE REVIEW

Page: [name]

Educational Objective: [summary]

MedicalFigure Present: Yes

Asset Verified: Yes

Placement Appropriate: Yes

Result: NO CHANGE REQUIRED
```

**Action:** Automatically continue to next page. Do not wait for approval.

### CHANGE PATH — Code modification required

**Criteria:**
- Issue exists requiring code change
- Examples: incorrect path, wrong illustration, poor placement, incorrect role, weak caption/alt text

**Output:**
1. Explain the issue
2. Provide evidence
3. Propose ONE change
4. STOP and wait for approval

**After approval:**
1. Implement ONE change only
2. Run production build
3. Review git diff
4. Commit with focused message
5. Produce Acceptance Report
6. Continue to next page

**Principle:** One logical change per commit.

### BACKLOG PATH — Missing asset, no modification

**Criteria:**
- Required illustration does not exist in repository
- Full verification confirms no appropriate alternative exists

**Actions:**
- Do NOT create a placeholder
- Do NOT substitute another illustration
- Do NOT remove MedicalFigure component
- Do NOT modify the page

**Output:**
```
STATUS: Deferred – Missing Foundational Illustration Asset

[Asset name and path]

Required by: [pages]

Content: [educational purpose]
```

**Action:** Continue automatically to next page. Do not wait for approval.

---

## Commit Standards

Each commit represents one logical change.

**Commit message format:**
```
[Type]: [Summary]

[Optional detailed explanation]

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

**Types:**
- Fix: Corrects an existing issue
- Add: Introduces new functionality
- Update: Modifies existing functionality
- Refactor: Restructures code without changing behavior

**Principles:**
- One logical change per commit
- Message explains the WHY, not the WHAT
- Reference relevant files or components
- Build verified before committing

---

## Build Verification

Always run production build after code modifications.

```bash
npm run build
```

**Success criteria:**
- Compilation succeeds
- All pages generate without errors
- No TypeScript errors
- No warnings in critical areas

**If build fails:**
- Investigate error messages
- Fix root cause
- Re-run build
- Do not commit until build passes

---

## Documentation Standards

All engineering documentation must:

- Use repository evidence only
- Avoid speculation or assumptions
- Include specific file paths and line numbers
- Reference exact commit hashes when relevant
- Separate engineering work from content work
- Distinguish between code defects and content defects
- Use "verified" only for repository-confirmed facts

**Duplication Prevention:**
- Never duplicate information across documents
- Reference other documents instead of repeating content
- When in doubt, add to CHANGELOG.md or DECISIONS.md, not baseline documents
- Each document has a single responsibility (see Document Hierarchy)
- Information drift occurs when the same fact is maintained in multiple places

---

## Scope Control

Every piece of work has a defined boundary:

- **In scope:** Repository code, repository documentation, repository structure, build verification, git operations
- **Out of scope:** Illustration creation, content authoring, design decisions, UX decisions, SEO strategy
- **Discipline:** Do not add work to a project that crosses scope boundaries
- **When scope expands:** Create a new project or defer to backlog; do not bloat the current project
- **Mixed projects fail:** Engineering + content work in one project = delayed delivery and compromised standards

---

## Repository Integrity

The repository must maintain integrity at all times:

- **Production build always passes** — Never commit code that breaks the build
- **Git history is accurate** — Commit messages explain the WHY
- **Code changes are reversible** — Rollback to any prior commit must be safe
- **Evidence is preserved** — Decisions are documented in DECISIONS.md
- **No dead code** — Unused code is removed, not commented out
- **No temporary changes** — Every commit is production-ready
- **Architecture is preserved** — Refactoring should improve or maintain architecture, never degrade it

---

## Project Classification

**Engineering projects:**
- Repository audits
- Code modifications
- Path corrections
- Build verification
- Documentation

**Content projects:**
- Illustration creation
- Educational UX optimization
- SEO optimization
- Feature development

**Do not combine engineering and content work in a single project.**

---

## Freezing and Archival

When a project reaches completion:

1. Freeze the project document
2. Archive in `/docs` directory
3. Establish as baseline for future work
4. Limit future modifications to defect fixes only
5. Create charter for next project

---

## This Playbook is the Engineering Standard

All repository work on DrDardashti.com should follow this playbook.

Deviations require explicit authorization.

Questions about this playbook should be addressed before beginning work.
