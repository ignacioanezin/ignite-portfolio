---
# ─────────────────────────────────────────────────────────────────────────────
# BLOG POST TEMPLATE
# Copy this file to  src/content/posts/<slug>.md  and fill it in.
# The filename (minus .md) becomes the URL: /blog/<slug>
# Schema lives in src/content.config.ts. Required fields are marked [required].
# *_es fields are optional — leave them out to fall back to English.
# ─────────────────────────────────────────────────────────────────────────────

title: "Post Title"                          # [required]
title_es: "Título del post"                  # optional ES
description: "One line for the card + meta."  # [required]
description_es: "Una línea para la tarjeta."  # optional ES
pubDate: 2026-06-01                          # [required] YYYY-MM-DD; newest first
# updatedDate: 2026-06-10                     # optional
# heroImage: "../../assets/posts/<slug>.jpg"  # optional; drop file in src/assets/posts/
tags: ["approach", "gear"]                   # optional
draft: false                                 # true = excluded from the build
---

Write the post body in markdown. Headings (`##`), **bold**, _italics_, lists,
and > blockquotes are all styled.

## A section heading

Body copy here.

> A pulled-out line, if you want one.
