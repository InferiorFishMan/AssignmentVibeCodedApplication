# Prototype testing notes — Repair Cafe v3

## Session feedback

The facilitator observed one participant using the application. The participant's experience surfaced these points:

- The light screen felt too bright; a clear light/dark switch was requested.
- The generic logo should be replaced with a logo the project owner will provide.
- The layout felt crowded and noisy, with too much text and too many different text sizes.
- Text and controls felt too small, and the next step was not immediately clear.
- The experience needed more interactive elements.
- The symptom list did not cover every situation; the participant asked for an “Other” choice with a free-text description.
- Some fields felt redundant.
- A phone contact and a chatbox were requested; the chat can be a visual demonstration rather than a live service.

Follow-up feedback on the first v3 highlighted that the page still felt crowded and that the repair check's left/right layout made it unclear where to look next. The participant asked for a complete redesign with plain language and one obvious reading order.

The next visual direction request was for a more distinctive vector look, with gentle scroll animation that does not compete with the app content. The user clarified this as a soft take on futuristic anti-gravity racing game visuals.

## Changes in the redesigned v3

- Added a one-click light/dark mode control.
- Removed the temporary RC graphic mark and kept a plain text wordmark until the owner supplies a logo.
- Rebuilt the page as a single column with a clear top-to-bottom flow. The repair check now shows question 1, question 2, the action button, then the answer.
- Removed the side-by-side quick-check layout and extra explanatory cards. Replaced labels and instructions with shorter, everyday language.
- Increased text and control sizes, spacing, and contrast. Kept each section in the same reading order on desktop and mobile.
- Added an “Other” symptom option that reveals a required description box. Its output uses general, safety-first guidance rather than claiming to diagnose the custom issue.
- Kept a phone contact presentation and moved the interactive chat demo into the help section so it no longer floats over the page. Both are explicitly labelled as prototype/demo-only, not real support.
- Preserved the existing safety guidance and the optional map searches for at-home technicians and community repair cafes.
- Added original vector accents with a soft neon racing palette. Scroll reveals are limited to decoration; content is not obscured, and reduced-motion preferences disable the motion.
- Removed the header symbol and hovercraft illustration at the user's request; the header now uses a plain text wordmark and only abstract section accents remain.

## Scope and next test

This note records the facilitator's report; it does not claim that a second usability session or formal accessibility audit has taken place. The redesign was checked in a browser at desktop and mobile widths, including the main interactive paths. Test the revised build with a few more people and ask them to:

1. Follow the repair check from the first question through the result without prompting.
2. Select “Something else,” describe a problem, and explain what the result recommends.
3. Find the two support routes and tell whether the phone/chat are live or demonstrative.
4. Switch between light and dark mode and note any readability issues.
