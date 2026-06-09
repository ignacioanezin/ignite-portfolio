---
# ─────────────────────────────────────────────────────────────────────────────
# PROJECT (case study) TEMPLATE
# Copy this file to  src/content/projects/<slug>.md  and fill it in.
# The filename (minus .md) becomes the URL: /work/<slug>
# Schema lives in src/content.config.ts. Required fields are marked [required].
# Spanish (*_es) fields are optional — leave them out to fall back to English.
# Honesty rule: only include `result` if the outcome is real and true.
# ─────────────────────────────────────────────────────────────────────────────

title: "Project Title"                 # [required] proper noun — not translated
category: race-coverage                 # [required] brand-content | race-coverage | athlete-story
client: "Brand or Race"                 # optional
year: 2026                              # [required] number; newest sorts first
location: "Where it was shot"           # [required]
role: "Director, DP, Editor"            # [required]
youtubeId: "abcdEFGhijk"                # [required] the project video id
thumbnail: "../../assets/projects/<slug>.jpg"  # [required] bright/photographic; drop the file in src/assets/projects/
# previewClip: "/clips/<slug>.mp4"      # optional muted hover loop in /public

excerpt: "One strategic line for the grid."        # [required]
excerpt_es: "Una línea estratégica para la grilla." # optional ES

challenge: "The client's problem."                 # [required]
strategy: "The creative approach."                 # [required]
production: "How it was shot — the embedded angle lives here."  # [required]
deliverables:                                      # [required] the asset ecosystem
  - "3-minute hero film"
  - "Vertical social cutdowns"
  - "Graded stills for press"
# result: "Real, true outcome only — omit if you can't back it up."  # optional

# Optional Spanish long-form (omit any to keep English):
# challenge_es: ""
# strategy_es: ""
# production_es: ""
# result_es: ""
# deliverables_es:
#   - ""

# gallery:                              # optional extra stills
#   - "../../assets/projects/<slug>-1.jpg"
featured: true                          # show on the home grid (keep to ~4)
tags: ["tag-a", "tag-b"]                # optional
---

Optional author's note — a short, first-person line of markdown that renders at
the bottom of the case study. Keep it to a sentence or two.
