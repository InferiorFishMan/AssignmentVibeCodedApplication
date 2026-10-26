# Repair Cafe

A static, mobile-friendly appliance repair guide. The experience offers a short, safety-first check and lets people choose between private at-home repair and a community repair cafe.

## Research-to-design

Week 3 research changed the design direction from an assumed eco-anxious, emotionally attached customer to people who may be practical and self-reliant. In two interviews, one participant described trying to find the cause of an appliance problem, while another preferred a private mechanic and repairs at their own organization. A participant also valued the shared experience at a repair cafe; the other was not interested in one.

The prototype therefore:

- starts with a quick symptom check rather than a long lesson or sign-up;
- gives low-risk, external checks and clear stop conditions;
- does not require an account or collect a repair report;
- offers both at-home repair and community repair as equally valid choices.

Two interviews are an early signal, not a representative sample. The lo-fi artifact at [prototype.html](./prototype.html) includes the research rationale and follow-up questions to test.

## Run locally

Serve the folder with any static web server:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`. Open `/prototype.html` for the lo-fi prototype.

## Deployment

The project uses the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`, which publishes the repository root on pushes to `main`.

- Code: https://github.com/InferiorFishMan/AssignmentVibeCodedApplication
- Build: https://inferiorfishman.github.io/AssignmentVibeCodedApplication/
- Lo-fi prototype: https://inferiorfishman.github.io/AssignmentVibeCodedApplication/prototype.html

The local-support links open Google Maps searches. Location text is only included in those links after the visitor chooses to search; no data is stored by this static site.
