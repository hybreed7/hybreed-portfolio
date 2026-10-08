import "./index.css";

/* ---------- Edit your content here ---------- */
const PROFILE = {
  logo: "hybreed.dev",
  email: "awonugaoladimeji@gmail.com",
  phone: "+2349043042800",
  github: "https://github.com/hybreed7",
};

const SKILLS = [
  { title: "Frontend", bg: "#FF6B8B", icon: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>, chips: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive design", "Component architecture"] },
  { title: "Mobile", bg: "#FFC93C", icon: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>, chips: ["React Native", "Expo", "Android and iOS", "Cross-platform"] },
  { title: "Data and state", bg: "#17B3A3", icon: <><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.700 3.600 3 8 3s8-1.300 8-3V6M4 12v6c0 1.700 3.600 3 8 3s8-1.300 8-3v-6"/></>, chips: ["Redux / Redux Toolkit", "REST API integration", "Authentication", "Form validation", "Error handling"] },
  { title: "Tools", bg: "#B9C2FF", icon: <><path d="M14.700 6.300a4 4 0 00-5.400 5.400L3 18l3 3 6.300-6.300a4 4 0 005.400-5.400l-2.700 2.700-2.500-.5-.5-2.500z"/></>, chips: ["Git", "GitHub", "VS Code", "npm", "Chrome DevTools", "cPanel"] },
];

const EDUCATION = [
  { title: "HND, Computer Engineering (2019)", school: "Moshood Abiola Polytechnic, Abeokuta" },
  { title: "ND, Computer Engineering (2015)", school: "Moshood Abiola Polytechnic, Abeokuta" },
];

const JOBS = [
  {
    date: "Nov 2022 – Present",
    role: "Frontend Developer, Brookes Professional Services",
    place: "Abeokuta, Ogun State",
    points: [
      "Build and maintain React Native apps for Android and iOS, plus React web platforms.",
      "Turn designs from UI/UX teams into pixel-perfect interfaces.",
      "Use Redux for state management and integrate APIs and third-party libraries with back-end developers.",
      "Gather requirements with product managers, run user testing and improve apps from feedback.",
    ],
  },
  {
    date: "Sept 2019 – Oct 2022",
    role: "IT Officer, Jaroy Investment Limited",
    place: "Abeokuta, Ogun State",
    points: [
      "Part of the team that analysed data and placed over 100,000 pupils into secondary schools across Ogun State's local governments within six weeks.",
      "Ran the company's IT section, taught ICT and Microsoft Digital Literacy classes, and networked all business devices.",
      "Designed marketing flyers and banners, repaired systems and handled international registrations for clients.",
    ],
  },
];

const PROJECTS = [
  { title: "MoniVault", text: "Cooperative platform with Admin, Entity, Member and mobile apps covering onboarding, savings, loans, guarantors and approvals.", tags: ["React.js", "React Native", "Redux"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#17B3A3"/><rect x="24" y="26" width="170" height="118" rx="12" fill="#fff"/><rect x="36" y="40" width="50" height="9" rx="4" fill="#1F2350"/><rect x="36" y="62" width="70" height="30" rx="8" fill="#FFC93C"/><rect x="114" y="62" width="70" height="30" rx="8" fill="#FF6B8B"/><rect x="36" y="102" width="148" height="10" rx="5" fill="#B9C2FF"/><rect x="214" y="44" width="62" height="112" rx="12" fill="#1F2350"/><rect x="220" y="54" width="50" height="92" rx="7" fill="#fff"/><rect x="226" y="62" width="38" height="18" rx="5" fill="#17B3A3"/><rect x="226" y="88" width="38" height="7" rx="3" fill="#B9C2FF"/></svg> },
  { title: "OLARMS", text: "Ogun State land administration and revenue portal that automates land transactions and tax assessment. Improved efficiency by about 70%.", tags: ["Web", "Government"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#FFC93C"/><rect x="30" y="26" width="240" height="118" rx="14" fill="#fff"/><rect x="44" y="40" width="64" height="10" rx="5" fill="#1F2350"/><path d="M48 128l36-34 30 18 44-48 40 26 38-22" stroke="#FF6B8B" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "E-Procurement, Ogun State", text: "Secure cloud platform that digitises procurement, vendor interactions, documents and approvals.", tags: ["Web", "Government"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#FF6B8B"/><rect x="50" y="24" width="120" height="126" rx="10" fill="#fff"/><rect x="64" y="42" width="60" height="9" rx="4" fill="#1F2350"/><rect x="64" y="62" width="92" height="8" rx="4" fill="#B9C2FF"/><rect x="64" y="78" width="80" height="8" rx="4" fill="#B9C2FF"/><rect x="64" y="94" width="92" height="8" rx="4" fill="#B9C2FF"/><circle cx="222" cy="86" r="44" fill="#fff"/><path d="M204 86l14 14 26-30" stroke="#17B3A3" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Promix Accounting", text: "SaaS accounting for SMEs: invoicing, expenses and financial reporting with multi-user collaboration.", tags: ["Web", "SaaS"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#B9C2FF"/><rect x="62" y="20" width="122" height="134" rx="10" fill="#fff"/><rect x="76" y="36" width="54" height="9" rx="4" fill="#1F2350"/><rect x="76" y="58" width="94" height="7" rx="3" fill="#B9C2FF"/><rect x="76" y="74" width="94" height="7" rx="3" fill="#B9C2FF"/><rect x="76" y="90" width="94" height="7" rx="3" fill="#B9C2FF"/><rect x="76" y="116" width="94" height="22" rx="8" fill="#17B3A3"/><rect x="204" y="64" width="12" height="62" rx="4" fill="#FFC93C"/><rect x="224" y="40" width="12" height="86" rx="4" fill="#FF6B8B"/><rect x="244" y="82" width="12" height="44" rx="4" fill="#1F2350"/></svg> },
  { title: "Promix Payroll", text: "Automated payroll for SMEs with tax compliance, leave management and employee self-service.", tags: ["Web", "SaaS"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#FF6B8B"/><rect x="40" y="30" width="150" height="110" rx="12" fill="#fff"/><circle cx="70" cy="62" r="14" fill="#8D5A3B"/><rect x="94" y="54" width="68" height="9" rx="4" fill="#1F2350"/><rect x="94" y="70" width="44" height="7" rx="3" fill="#B9C2FF"/><rect x="56" y="96" width="118" height="8" rx="4" fill="#B9C2FF"/><rect x="56" y="112" width="84" height="8" rx="4" fill="#B9C2FF"/><circle cx="226" cy="88" r="40" fill="#FFC93C"/><circle cx="226" cy="88" r="28" fill="none" stroke="#1F2350" strokeWidth="5"/><path d="M226 74v28M218 82h14a6 6 0 010 12h-14" stroke="#1F2350" strokeWidth="5" fill="none" strokeLinecap="round"/></svg> },
  { title: "Artist management app", text: "Mobile platform linking music artists with A&Rs, producers, promoters and managers for discovery and collaboration.", tags: ["Mobile", "Cloud"], cover: <svg viewBox="0 0 300 170"><rect width="300" height="170" fill="#17B3A3"/><circle cx="150" cy="85" r="56" fill="#1F2350"/><circle cx="150" cy="85" r="20" fill="#FFC93C"/><circle cx="150" cy="85" r="36" fill="none" stroke="#FF6B8B" strokeWidth="5" strokeDasharray="8 8"/><circle cx="62" cy="48" r="12" fill="#fff"/><circle cx="244" cy="126" r="16" fill="#fff"/></svg> },
];

const MORE_WORK = [
  "Promix Cooperative App", "Social Register", "EDMS (document management)", "School Portal",
  "Promix Fixed Assets", "RCCG Accounting", "NSCDC Cooperative app", "Ogun Building and Compliance",
  "Ogun Trading website", "Ogun Trading mobile app", "Ogun IRS Admin app",
];

/* ---------- Pieces ---------- */
const Hero = () => (
  <svg viewBox="0 0 400 360" role="img" aria-label="Illustration of a developer at a laptop with a phone and code brackets">
<circle cx="200" cy="180" r="165" fill="#FFC93C" opacity=".35"/>
<g className="bob"><rect x="52" y="52" width="90" height="62" rx="14" fill="#FF6B8B"/><path d="M80 70l-12 13 12 13M114 70l12 13-12 13" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>
<g className="bob" style={{ animationDelay: "-2s" }}><rect x="316" y="196" width="50" height="86" rx="12" fill="#1F2350"/><rect x="321" y="204" width="40" height="70" rx="7" fill="#EEF0FB"/><rect x="327" y="212" width="28" height="14" rx="4" fill="#17B3A3"/><rect x="327" y="232" width="28" height="6" rx="3" fill="#B9C2FF"/><rect x="327" y="244" width="18" height="6" rx="3" fill="#B9C2FF"/></g>
<circle cx="338" cy="96" r="30" fill="#17B3A3"/><path d="M326 96l9 9 16-18" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="70" y="288" width="250" height="14" rx="7" fill="#1F2350"/>
<rect x="115" y="190" width="160" height="98" rx="10" fill="#1F2350"/>
<rect x="125" y="200" width="140" height="78" rx="4" fill="#EEF0FB"/>
<path d="M137 222h52M137 238h82M137 254h40" stroke="#FF6B8B" strokeWidth="6" strokeLinecap="round"/><rect x="227" y="212" width="28" height="28" rx="8" fill="#17B3A3"/>
<circle cx="195" cy="120" r="34" fill="#8D5A3B"/>
<path d="M161 114c0-24 14-38 34-38s36 14 34 38c-8-10-20-14-34-14s-26 4-34 14z" fill="#1F2350"/>
<circle cx="183" cy="124" r="3" fill="#1F2350"/><circle cx="207" cy="124" r="3" fill="#1F2350"/><path d="M186 136q9 8 18 0" stroke="#1F2350" strokeWidth="3" fill="none" strokeLinecap="round"/>
<path d="M145 190c4-26 22-38 50-38s46 12 50 38z" fill="#FF6B8B"/>
</svg>
);

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

/* ---------- Page ---------- */
export default function App() {
  return (
    <div className="wrap">
      <nav>
        <b>{PROFILE.logo}</b>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div>
          <h1>Frontend developer building web and mobile apps that people rely on.</h1>
          <p>
            I'm Ibrahim Oladimeji Awonuga. I build with React and React Native, and have delivered
            platforms for government, finance, cooperatives, e-commerce and SaaS.
          </p>
          <div className="facts">
            <span>4+ years experience</span>
            <span>17 products shipped</span>
            <span>Web and mobile</span>
          </div>
          <div className="btns">
            <a className="btn p" href="#projects">See my work</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </div>
        <Hero />
      </header>

      <section id="about">
        <h2>About me</h2>
        <div className="about">
          <div>
            <p>
              I turn UI/UX designs into responsive, production-ready interfaces and connect them to
              REST APIs, with authentication, form validation and state management done properly.
            </p>
            <p>
              I work closely with designers, product managers and back-end developers. Before
              software, I studied computer engineering and built hardware projects, which is why I
              like solving problems from the ground up.
            </p>
          </div>
          <div className="edu">
            <h3>Education</h3>
            <ul>
              {EDUCATION.map((e) => (
                <li key={e.title}><b>{e.title}</b>{e.school}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {SKILLS.map((s) => (
            <div className="skill" key={s.title}>
              <i style={{ background: s.bg }}><Icon>{s.icon}</Icon></i>
              <h3>{s.title}</h3>
              <div className="chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="tl">
          {JOBS.map((j) => (
            <div className="job" key={j.role}>
              <small>{j.date}</small>
              <h3>{j.role}</h3>
              <small>{j.place}</small>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Selected projects</h2>
        <div className="proj">
          {PROJECTS.map((p) => (
            <article className="card" key={p.title}>
              {p.cover}
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="more">
          <h3>More work</h3>
          <div className="chips">{MORE_WORK.map((m) => <span key={m}>{m}</span>)}</div>
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <h2>Let's build something</h2>
          <p>I'm open to frontend and mobile roles and freelance projects. Send me a message and I'll get back to you.</p>
          <a className="btn" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <div className="social">
            <a href={`tel:${PROFILE.phone}`} aria-label="Call"><Icon><path d="M22 16.900v3a2 2 0 01-2.200 2 19.800 19.800 0 01-8.600-3.100 19.500 19.500 0 01-6-6A19.800 19.800 0 012.100 4.200 2 2 0 014.100 2h3a2 2 0 012 1.700c.1 1 .4 1.900.7 2.800a2 2 0 01-.5 2.100L8.100 9.900a16 16 0 006 6l1.300-1.300a2 2 0 012.100-.4c.9.300 1.800.6 2.800.7a2 2 0 011.700 2z"/></Icon></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></Icon></a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon><path d="M9 19c-4 1-4-2-6-2m12 4v-3.500a3 3 0 00-1-2.500c3 0 6-2 6-5.500a4.300 4.300 0 00-1-3 4 4 0 000-3s-1-.3-3 1a10 10 0 00-6 0c-2-1.300-3-1-3-1a4 4 0 000 3 4.300 4.300 0 00-1 3C5 14.500 8 16.500 11 16.500a3 3 0 00-1 2.500V21"/></Icon></a>
          </div>
        </div>
      </section>

      <footer>Ibrahim Oladimeji Awonuga · Abeokuta, Nigeria</footer>
    </div>
  );
}
