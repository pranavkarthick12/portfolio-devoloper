# Pranav Karthick — Cinematic Developer Portfolio

A high-performance, scroll-driven personal portfolio for **Pranav Karthick S K** (Software Developer & Quality Engineer). Featuring a cinematic hero entrance, scrubbed scroll transitions, a puzzle break-apart chapter, an interactive 3-door About Me module, hidden Selected Works showcase, interactive mouse-tracking 3D robots, and a technical editorial section.

Built with pure **HTML5, CSS3, and JavaScript** — zero dependencies, zero build step, zero framework overhead.

---

## ⚡ Quick Start

No build steps or package installations are required.

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](index.html) to open it in any modern browser.

### Option 2: Local HTTP Server (Recommended)
Run a local Python server for smooth asset loading:

```bash
python -m http.server 4173
```
Then visit **<http://localhost:4173>**.

---

## ✨ Key Features & Experience Flow

| # | Chapter | Interaction & Motion | Description |
|---|---|---|---|
| 01 | **Hero** | Timed entrance & cursor parallax | Atmospheric red-and-dark aesthetic, portrait reveal with eye glint, dynamic status notification badge |
| 02 | **Engineering Statement** | Pinned & scrubbed scroll | Masked typography animation ("Where Code Meets Creative Thinking") with interactive floating tags |
| — | **Puzzle Transition** | Scroll-driven clip-path | Seamless visual break-apart transition deconstructing the layout into geometric fragments |
| 03 | **About Me** | Click & tabs | Three distinct viewports: *Who I Am*, *What I Do*, and *How I Think* |
| 04 | **Selected Works** | Click to reveal & 3D camera pan | Hidden showcase modal highlighting featured technical and hardware projects |
| 05 | **The Mind (Big Robot)** | Mouse tracking + scroll | Spline 3D interactive robot tracking cursor position alongside engineering domain glass cards |
| 06 | **The Method (Arsenal)** | Pinned scroll sequence | Technical skill matrix, development mindset, certifications, and contest milestones |
| 07 | **Problem Solving (Small Robot)** | Interactive cursor follow | Minimalist Spline 3D robot following mouse orientation with LeetCode/CodeChef ratings |
| 08 | **Editorial Footer** | Interactive links & scroll to top | Direct contact channels, social networks, navigation, and resume access |

> **Note on Motion:** Every scroll sequence is scrubbed in real-time. Pausing your scroll freezes the animation; scrolling upwards cleanly reverses it.

---

## 🛠️ Tech Stack & Architecture

- **Core:** Semantic HTML5, Modular Vanilla JavaScript (ES6+)
- **Styling:** Vanilla CSS3 (Custom design system, CSS Grid/Flexbox, dynamic variables, glassmorphism, responsive breakpoints)
- **3D Interactive Scenes:** [Spline](https://spline.design) WebGL runtime
- **Typography:** Anton, Archivo, and Inter via Google Fonts
- **Data Architecture:** Separated content layer in `content.js` allowing complete portfolio text updates without touching layout or animation code

---

## 📁 Project Structure

```
├── assets/                 # Optimized images, icons, and 3D scene files
├── references/             # UI/UX design references and inspirations
├── content.js              # Centralized portfolio text, projects & config
├── index.html              # Clean semantic markup with no-JS fallback
├── styles.css              # Custom styling, animations, and design tokens
├── script.js               # Modular animation, 3D tracking & scroll logic
├── GUIDE.md                # Comprehensive documentation & customization guide
├── run.md                  # Quick server command reference
└── README.md               # Project overview & documentation
```

---

## 🚀 Featured Projects Highlighted

1. **AI Interview Assistant** (AI · React · Redux)
   - Real-time AI-based interview simulation platform featuring automated resume parsing, question scoring, and dual-role dashboards.
2. **Pachyderm Partner** (IoT · ESP32 · Hardware)
   - Wearable animal & mahout safety system using ESP32 microcontrollers and Bluetooth connectivity (*2nd Place Winner at Project Expo*).
3. **PhishSiren** (Cybersecurity · Machine Learning · Flask)
   - ML-driven phishing and spam email classification system integrated with Gmail OAuth 2.0 and Scikit-learn.

---

## ⚙️ Customization & Editing

All copy, project entries, skills, and links can be updated directly in [`content.js`](content.js):

- **Update Projects:** Add or modify objects in `heroContent.works.projects`.
- **Update Skills & Certifications:** Modify `heroContent.editorial.skills` or `heroContent.editorial.exploring`.
- **Update Contact Info:** Update email and social profiles in `heroContent.footer`.

For in-depth customization instructions, refer to **[GUIDE.md](GUIDE.md)**.

---

## ♿ Accessibility & Performance

- **Responsive Design:** Custom layouts tailored for mobile, tablet, and ultra-wide screens.
- **Motion Accessibility:** Automatically respects system `prefers-reduced-motion` settings.
- **Resource Optimization:** Lazy-loaded 3D canvases that pause rendering when scrolled out of view.
- **Graceful Fallback:** Complete content visibility preserved if JavaScript is disabled.

---

## 📄 License & Credits

- Designed & Developed by **[Pranav Karthick S K](https://github.com/pranavkarthick12)**
- 3D Robot Assets created with [Spline](https://spline.design)

