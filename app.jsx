// DASAT MOBILE — Servicio técnico de electrónica
// Tono: editorial-industrial. Anti-tropos: asimetría, densidad, ficha de taller,
// sin gradientes, sin "glassmorphism", sin tarjetas redondeadas con emojis.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "ficha",
  "redHue": 25,
  "dark": true,
  "titleFont": "narrow",
  "density": "regular"
}/*EDITMODE-END*/;

// ───────────── Logo: recreación del glifo (caja roja + figura blanca)
// El glifo del PDF/imagen es una figura tipo "中": dos ventanas cuadradas
// unidas por una barra vertical que sobresale por arriba.
function DasatMark({ size = 64, soft = false }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" aria-label="DASAT" style={soft ? {filter:'drop-shadow(0 0 18px var(--red-soft))'} : null}>
      <rect x="4" y="4" width="92" height="92" fill="var(--red)" />
      <rect x="11" y="11" width="78" height="78" fill="none" stroke="#fff" strokeWidth="5" />
      {/* glifo */}
      <g fill="#fff">
        {/* barra vertical central que sobresale arriba y abajo del marco interno */}
        <rect x="46" y="22" width="8" height="56" />
        {/* marco interno (las dos ventanas) */}
        <rect x="28" y="38" width="44" height="6" />
        <rect x="28" y="56" width="44" height="6" />
        <rect x="28" y="38" width="6" height="24" />
        <rect x="66" y="38" width="6" height="24" />
      </g>
    </svg>
  );
}

// ───────────── Iconos de línea, trazos finos, sin redondeo blando
const I = {
  tv: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <rect x="3" y="8" width="42" height="28" />
      <rect x="7" y="12" width="34" height="20" opacity=".35" />
      <path d="M14 42h20M24 36v6" />
      <path d="M7 12h6M7 16h4M7 20h4" opacity=".5" />
      <path d="m38 28 3-3" opacity=".5" />
    </svg>
  ),
  solder: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <path d="m4 44 18-18" />
      <path d="m22 26 6-6 10 10-6 6z" />
      <path d="m28 20 6-6" />
      <path d="m22 26-3 3 7 7 3-3" />
      <circle cx="6" cy="42" r="1.5" fill="currentColor" />
      <path d="M40 4v6M37 7h6" opacity=".5" />
    </svg>
  ),
  chip: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <rect x="13" y="13" width="22" height="22" />
      <rect x="19" y="19" width="10" height="10" />
      <path d="M13 19H7M13 24H7M13 29H7M41 19h-6M41 24h-6M41 29h-6M19 13V7M24 13V7M29 13V7M19 41v-6M24 41v-6M29 41v-6" />
    </svg>
  ),
  console: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <path d="M14 14h20a8 8 0 0 1 8 8v5a5 5 0 0 1-9.5 2.2L31 27H17l-1.5 2.2A5 5 0 0 1 6 27v-5a8 8 0 0 1 8-8z" />
      <path d="M12 19v6M9 22h6" />
      <circle cx="33" cy="22" r="1.6" fill="currentColor" />
      <circle cx="37" cy="25" r="1.6" fill="currentColor" />
    </svg>
  ),
  laptop: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <rect x="9" y="10" width="30" height="20" />
      <path d="M3 36h42l-3 5H6z" />
      <path d="M13 14h22M13 18h16" opacity=".5" />
    </svg>
  ),
  tablet: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <rect x="11" y="4" width="26" height="40" />
      <rect x="15" y="8" width="18" height="28" opacity=".35" />
      <path d="M21 40h6" />
    </svg>
  ),
  code: (p) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" {...p}>
      <path d="m17 14-9 10 9 10M31 14l9 10-9 10M28 10l-8 28" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...p}>
      <path d="M12 22s-7-7-7-13a7 7 0 0 1 14 0c0 6-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.3.1.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.4-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  cross: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4" />
    </svg>
  ),
};

// ───────────── Datos
const TV_FAILS = [
  { c: 'F-01', t: 'No enciende', d: 'Fuente, condensadores hinchados, MOSFET en corto.' },
  { c: 'F-02', t: 'Imagen con líneas', d: 'T-CON, flexes COF, panel parcialmente recuperable.' },
  { c: 'F-03', t: 'Pantalla negra con sonido', d: 'Retroiluminación: tiras LED, driver y barras.' },
  { c: 'F-04', t: 'Se reinicia sola', d: 'Main board: capacitores secundarios, eMMC con bad blocks.' },
  { c: 'F-05', t: 'Sin imagen HDMI', d: 'Puertos quemados, IC HDMI, reflujo BGA del SoC.' },
  { c: 'F-06', t: 'No coge WiFi', d: 'Módulo wireless, pista cortada, antena descalibrada.' },
];

const SECONDARY = [
  { code: 'S-01', icon: 'solder', title: 'Microsoldadura', body: 'Reballing, sustitución de IC, reparación a nivel componente. Estación de aire caliente y microscopio trinocular.' },
  { code: 'S-02', icon: 'chip', title: 'Reparación de placas', body: 'Diagnóstico de placas electrónicas: cortocircuitos, líneas de alimentación, reflujo BGA, reescritura de eMMC.' },
];

const TERTIARY = [
  { code: 'T-01', icon: 'console', title: 'Consolas', body: 'PlayStation · Xbox · Switch. HDMI, lectores, joystick con drift.' },
  { code: 'T-02', icon: 'laptop', title: 'Portátiles', body: 'Conector DC, teclado, batería, refrigeración y placa.' },
  { code: 'T-03', icon: 'tablet', title: 'Tablets', body: 'iPad y Android: pantalla, batería, conector de carga.' },
  { code: 'T-04', icon: 'code', title: 'Software', body: 'Firmware, recuperación de bricks, ajustes de fábrica.' },
];

const BRANDS = ['Samsung', 'Apple', 'Hisense', 'LG', 'Sony', 'Hitachi', 'Toshiba', 'Telefunken', 'Philips', 'Grundig'];

const PROCESS = [
  { n: '01', t: 'Cita previa', d: 'El taller abre L–V de 17 a 21h. Si te viene mejor otra franja, agendamos cita fuera de ese horario.' },
  { n: '02', t: 'Diagnóstico', d: 'Banco de pruebas. Te llamamos con presupuesto cerrado.' },
  { n: '03', t: 'Reparación', d: 'Microsoldadura cuando hace falta. Repuestos originales.' },
  { n: '04', t: 'Entrega', d: 'Equipo probado, factura y garantía incluida en mano de obra y repuesto de la avería realizada.' },
];

// ───────────── App
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const cssVars = {
    '--red': t.dark ? `oklch(67% 0.21 ${t.redHue})` : `oklch(56% 0.22 ${t.redHue})`,
    '--red-soft': t.dark ? `oklch(67% 0.21 ${t.redHue} / 0.22)` : `oklch(56% 0.22 ${t.redHue} / 0.18)`,
    '--red-deep': t.dark ? `oklch(48% 0.20 ${t.redHue})` : `oklch(38% 0.18 ${t.redHue})`,
    '--bg': t.dark ? '#0a0a0b' : '#f4f3ee',
    '--bg-2': t.dark ? '#101012' : '#fbfaf6',
    '--bg-3': t.dark ? '#16161a' : '#e9e7e1',
    '--ink': t.dark ? '#ededea' : '#0a0a0b',
    '--ink-2': t.dark ? 'rgba(237,237,234,.82)' : 'rgba(10,10,11,.72)',
    '--ink-3': t.dark ? 'rgba(237,237,234,.62)' : 'rgba(10,10,11,.5)',
    '--rule': t.dark ? 'rgba(237,237,234,.24)' : 'rgba(10,10,11,.18)',
    '--rule-2': t.dark ? 'rgba(237,237,234,.12)' : 'rgba(10,10,11,.08)',
    '--title-font': {
      narrow: '"Archivo Narrow", "Bebas Neue", "Oswald", sans-serif',
      mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
      heavy: '"Archivo", "Inter", system-ui, sans-serif',
    }[t.titleFont],
    '--title-weight': t.titleFont === 'narrow' ? 700 : t.titleFont === 'mono' ? 700 : 900,
    '--title-tracking': t.titleFont === 'narrow' ? '-0.01em' : t.titleFont === 'mono' ? '-0.04em' : '-0.045em',
    '--gap-y': { compact: '64px', regular: '96px', comfy: '128px' }[t.density],
    '--pad-x': { compact: '24px', regular: '40px', comfy: '56px' }[t.density],
  };

  return (
    <div className={`app ${t.dark ? 'dark' : 'light'} d-${t.density}`} style={cssVars}>
      <Header />
      <Hero />
      <TickerBand />
      <TVFocus />
      <RepairVsBuy />
      <Capabilities />
      <Process />
      <Brands />
      <Coverage />
      <Contact />
      <Footer />

      <TweaksUI t={t} setTweak={setTweak} />
    </div>
  );
}

// ───────────── Header
function Header() {
  return (
    <header className="hd">
      <div className="hd-row">
        <a className="hd-brand" href="#top">
          <DasatMark size={36} />
          <div className="hd-brand-txt">
            <b>DASAT</b>
            <em>MOBILE · servicio técnico</em>
          </div>
        </a>
        <nav className="hd-nav">
          <a href="#tv"><span>01</span>Reparación TV</a>
          <a href="#capacidades"><span>02</span>Capacidades</a>
          <a href="#proceso"><span>03</span>Proceso</a>
          <a href="#cobertura"><span>04</span>Cobertura</a>
          <a href="#contacto"><span>05</span>Contacto</a>
        </nav>
        <a className="hd-cta" href="#contacto">
          <span className="hd-cta-dot" />Agendar cita
        </a>
      </div>
    </header>
  );
}

// ───────────── Hero — ficha de taller asimétrica
function Hero() {
  return (
    <section className="hero" id="top">
      {/* leyenda lateral */}
      <aside className="hero-side">
        <div className="hero-side-top">
          <span>Sección</span><b>00 / Inicio</b>
        </div>
        <div className="hero-side-bot">
          <span>● Taller abierto</span>
        </div>
      </aside>

      <div className="hero-main">
        <div className="hero-eyebrow">
          <span className="dash">———</span>
          <span>Servicio técnico de electrónica · Villena, Alicante</span>
        </div>

        <h1 className="display hero-title">
          <span className="t-line t-l1">Reparamos tu</span>
          <span className="t-line t-l2"><em>televisor.</em></span>
        </h1>

        <div className="hero-foot">
          <div className="hero-foot-l">
            <p className="lede">
              Diagnóstico honesto y presupuesto cerrado antes de tocar la placa.
              Microsoldadura y reparación a nivel componente cuando hace falta.
              <strong> No enviamos a ningún sitio: reparamos nosotros, en nuestro taller.</strong>
              <br/>
              Presupuesto sin coste si reparamos.
            </p>
            <div className="hero-cta">
              <a className="btn-solid" href="#contacto">
                Pedir presupuesto <I.arrow width="14" height="14" />
              </a>
              <a className="btn-line" href="https://wa.me/34000000000" target="_blank" rel="noreferrer">
                <I.whatsapp width="14" height="14" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-foot-r">
            <dl className="hero-stats">
              <div><dt>+5</dt><dd>años en el sector</dd></div>
              <div><dt>3+6</dt><dd>meses de garantía</dd></div>
              <div><dt>0 €</dt><dd>presupuesto si reparas</dd></div>
            </dl>
          </div>
        </div>
      </div>

      {/* gran TV ASCII-ish dibujado a la derecha */}
      <div className="hero-art" aria-hidden="true">
        <TVDrawing />
      </div>

      {/* esquina inferior: marcadores */}
      <div className="hero-marks">
        <span className="mk">A · 01</span>
        <span className="mk">REV · 03</span>
        <span className="mk">SC · 1:1</span>
        <span className="mk mk-down"><I.arrowDown width="11" height="11" /> SCROLL</span>
      </div>
    </section>
  );
}

// TV dibujado — ortográfico, técnico, con anotaciones
function TVDrawing() {
  return (
    <svg viewBox="0 0 640 480" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--red)" strokeWidth="0.5" opacity=".5" />
        </pattern>
      </defs>
      {/* marco TV */}
      <rect x="40" y="40" width="520" height="320" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <rect x="56" y="56" width="488" height="288" fill="var(--bg-2)" stroke="var(--ink)" strokeWidth="0.8" />
      {/* "señal" - lineas hechas y rotas */}
      <g stroke="var(--ink)" strokeWidth="0.8" opacity=".55">
        <line x1="80" y1="100" x2="510" y2="100" />
        <line x1="80" y1="130" x2="380" y2="130" />
        <line x1="400" y1="130" x2="510" y2="130" />
        <line x1="80" y1="160" x2="510" y2="160" />
        <line x1="80" y1="190" x2="260" y2="190" strokeDasharray="3 3" />
        <line x1="280" y1="190" x2="510" y2="190" />
        <line x1="80" y1="220" x2="510" y2="220" />
        <line x1="80" y1="250" x2="200" y2="250" />
        <line x1="220" y1="250" x2="350" y2="250" />
        <line x1="370" y1="250" x2="510" y2="250" />
        <line x1="80" y1="280" x2="510" y2="280" />
        <line x1="80" y1="310" x2="510" y2="310" />
      </g>
      {/* glitch rojo */}
      <rect x="180" y="125" width="120" height="14" fill="var(--red)" opacity=".9" />
      <rect x="320" y="180" width="60" height="6" fill="var(--red)" />
      <rect x="80" y="245" width="40" height="10" fill="url(#hatch)" />
      {/* base */}
      <path d="M260 360 L340 360 L360 392 L240 392 Z" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
      <line x1="200" y1="392" x2="400" y2="392" stroke="var(--ink)" strokeWidth="1.6" />

      {/* anotaciones técnicas */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-2)">
        {/* leader 1 - panel */}
        <line x1="56" y1="56" x2="20" y2="20" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="20" y1="20" x2="170" y2="20" stroke="var(--ink-2)" strokeWidth="0.5" />
        <text x="22" y="14">PANEL · LCD/LED · COF flex</text>

        {/* leader 2 - retroilum (bracket fuera del TV, derecha) */}
        <line x1="544" y1="180" x2="572" y2="180" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="572" y1="180" x2="572" y2="220" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="544" y1="220" x2="572" y2="220" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="572" y1="200" x2="582" y2="200" stroke="var(--ink-2)" strokeWidth="0.5" />
        <text x="586" y="196" fontSize="9">RETRO-</text>
        <text x="586" y="208" fontSize="9">ILUM.</text>

        {/* leader 3 - main board */}
        <line x1="280" y1="392" x2="280" y2="430" stroke="var(--ink-2)" strokeWidth="0.5" />
        <text x="200" y="448">MAIN · T-CON · FUENTE</text>

        {/* dimensions */}
        <line x1="40" y1="380" x2="40" y2="396" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="380" y1="380" x2="380" y2="396" stroke="var(--ink-2)" strokeWidth="0.5" />
        <line x1="40" y1="392" x2="380" y2="392" stroke="var(--ink-2)" strokeWidth="0.5" markerStart="url(#a)" markerEnd="url(#a)" />
        <text x="210" y="408" textAnchor="middle">REPARABLE</text>
      </g>
      {/* sello rojo — esquina inferior derecha */}
      <g transform="translate(430 405) rotate(-5)">
        <rect x="0" y="0" width="124" height="46" fill="var(--red)" stroke="var(--red)" strokeWidth="1.4" />
        <rect x="4" y="4" width="116" height="38" fill="none" stroke="#fff" strokeWidth="1.2" />
        <text x="62" y="20" textAnchor="middle" fontFamily="Archivo Narrow, sans-serif" fontWeight="800" fontSize="14" fill="#fff" letterSpacing="1">SE REPARA</text>
        <text x="62" y="35" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#fff" letterSpacing="0.5">DASAT · VLN-001</text>
      </g>
    </svg>
  );
}

// ───────────── Screamer / segundo hero
function Screamer() {
  return (
    <section className="screamer" aria-label="Tu tele no está muerta, está de parranda">
      <div className="scr-grid">
        <div className="scr-meta">
          <span className="sec-num">§ INTERMEZZO</span>
          <span className="scr-tag">— mensaje del taller</span>
        </div>
        <h2 className="scr-title">
          <span className="scr-l1">Tu tele</span>
          <span className="scr-l2">no está muerta,</span>
          <span className="scr-l3">está <em>de parranda.</em></span>
        </h2>
        <p className="scr-foot">
          Antes de comprar otra, pásala por el banco de pruebas.
          Casi siempre vuelve a casa.
        </p>
      </div>
    </section>
  );
}

// ───────────── Banda ticker
function TickerBand() {
  const items = ['REPARACIÓN DE TV', '◆', 'MICROSOLDADURA', '◆', 'PLACAS ELECTRÓNICAS', '◆', 'CONSOLAS · PORTÁTILES · TABLETS', '◆', 'VILLENA · ALICANTE', '◆'];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} className={x === '◆' ? 'tk-d' : ''}>{x}</span>
        ))}
      </div>
    </div>
  );
}

// ───────────── TV — protagonista
function TVFocus() {
  return (
    <section className="tv-focus" id="tv">
      <div className="tv-head">
        <div className="tv-num">§ 01 / Reparación de televisores</div>
        <h2 className="display">
          <span className="hl">Tu tele no está muerta.</span><br/>
          Está <em>de parranda.</em>
        </h2>
        <p className="lede">
          Antes de tirarla, déjanos abrirla. La mayoría de averías son fuente, retroiluminación
          o T-CON: piezas que se cambian. Lo demás —placas, BGA, eMMC— lo resolvemos con
          microsoldadura en taller.
        </p>
      </div>

      <div className="tv-grid">
        <div className="tv-list-head">
          <span>CÓDIGO</span>
          <span>SÍNTOMA</span>
          <span>CAUSA HABITUAL · DIAGNÓSTICO</span>
        </div>
        {TV_FAILS.map((f, i) => (
          <div key={f.c} className="tv-row">
            <span className="tv-row-c">{f.c}</span>
            <span className="tv-row-t">{f.t}</span>
            <span className="tv-row-d">{f.d}</span>
            <span className="tv-row-i">{String(i + 1).padStart(2, '0')}/{TV_FAILS.length}</span>
          </div>
        ))}
      </div>

      <div className="tv-foot">
        <div className="tv-foot-l">
          <span className="kicker"><span className="dot" /> Marcas más frecuentes en taller</span>
          <p className="brands-inline">Samsung · Apple · Hisense · LG · Sony · Hitachi · Toshiba · Telefunken · Philips · Grundig</p>
        </div>
        <a className="btn-solid lg" href="#contacto">
          ¿Tu avería no está aquí? Pregúntanos <I.arrow width="14" height="14" />
        </a>
      </div>
    </section>
  );
}

// ───────────── Reparar vs comprar — TV de alta gama y obsolescencia programada
function RepairVsBuy() {
  const rows = [
    { tier: 'OLED 55″ 4K', model: 'p.ej. Sony A80L · LG C3', nuevo: '1.490 €', repara: 'desde 180 €', save: '−88%' },
    { tier: 'QLED 65″ 4K', model: 'p.ej. Samsung Q70C',     nuevo: '1.290 €', repara: 'desde 160 €', save: '−87%' },
    { tier: 'LED 50″ 4K',  model: 'p.ej. Hisense · TCL',     nuevo: '   590 €', repara: 'desde 120 €', save: '−79%' },
    { tier: 'OLED 77″ 4K', model: 'gama alta',               nuevo: '2.890 €', repara: 'desde 240 €', save: '−91%' },
  ];
  return (
    <section className="rvb">
      <div className="rvb-head">
        <span className="sec-num">§ 01·b</span>
        <h2 className="display sm">
          La obsolescencia programada<br/>
          <span className="hl">no es una opinión.</span>
        </h2>
        <p className="lede">
          Una TV de alta gama de hace tres años cuesta entre 1.500 y 3.000 €. Cuando se le acaba
          la garantía y falla un componente de 4 €, el fabricante te dice que «no compensa
          repararla». A nosotros sí nos compensa.
        </p>
      </div>

      <div className="rvb-grid">
        <div className="rvb-table">
          <div className="rvb-th">
            <span>GAMA</span>
            <span>EJEMPLO</span>
            <span>NUEVA</span>
            <span>REPARAR</span>
            <span>AHORRO</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="rvb-tr">
              <span className="rvb-tier">{r.tier}</span>
              <span className="rvb-model">{r.model}</span>
              <span className="rvb-new"><s>{r.nuevo}</s></span>
              <span className="rvb-rep">{r.repara}</span>
              <span className="rvb-save">{r.save}</span>
            </div>
          ))}
          <p className="rvb-fine">
            Precios de referencia. El presupuesto exacto depende del diagnóstico y la pieza.
            Todas las reparaciones incluyen garantía en mano de obra y repuesto de la avería realizada.
          </p>
        </div>

        <aside className="rvb-side">
          <h3>¿Por qué se rompen tan pronto?</h3>
          <ul>
            <li>
              <span>01</span>
              <p><b>Condensadores baratos</b> en la fuente: un componente de céntimos hace caer un televisor de 2.000 €.</p>
            </li>
            <li>
              <span>02</span>
              <p><b>Tiras LED subdimensionadas</b>: la retroiluminación se apaga a los pocos años de uso normal.</p>
            </li>
            <li>
              <span>03</span>
              <p><b>Soldaduras BGA frágiles</b>: el SoC se despega con los ciclos térmicos. Reflujo + reballing y vuelve a la vida.</p>
            </li>
            <li>
              <span>04</span>
              <p><b>Software sin actualizar</b>: forzando la obsolescencia. A veces es solo firmware.</p>
            </li>
          </ul>
          <div className="rvb-cta">
            <span className="kicker"><span className="dot" /> Antes de tirarla</span>
            <a className="btn-solid w" href="#contacto">Pídenos diagnóstico <I.arrow width="14" height="14" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ───────────── Capacidades — micro/placa secundario, otros terciario
function Capabilities() {
  return (
    <section className="caps" id="capacidades">
      <div className="caps-head">
        <span className="sec-num">§ 02</span>
        <h2 className="display sm">
          Microsoldadura y placas.<br/>
          <span className="hl">Lo que casi nadie hace.</span>
        </h2>
      </div>

      <div className="caps-secondary">
        {SECONDARY.map((s) => (
          <article key={s.code} className="cap-card">
            <header>
              <span className="cap-code">{s.code}</span>
              <span className="cap-tag">CAPACIDAD ESPECIAL</span>
            </header>
            <div className="cap-icon">{I[s.icon]({ width: 84, height: 84 })}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <footer>
              <span className="cap-bullet">— Estación de aire caliente</span>
              <span className="cap-bullet">— Microscopio trinocular</span>
              <span className="cap-bullet">— Programador de eMMC</span>
            </footer>
          </article>
        ))}
      </div>

      <div className="caps-tertiary">
        <header className="caps-t-head">
          <span className="sec-num">§ 02·b</span>
          <h3>Y también reparamos</h3>
        </header>
        <div className="caps-t-grid">
          {TERTIARY.map((c) => (
            <div key={c.code} className="cap-mini">
              <span className="cap-code">{c.code}</span>
              <div className="cap-mini-icon">{I[c.icon]({ width: 32, height: 32 })}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────── Proceso
function Process() {
  return (
    <section className="proc" id="proceso">
      <div className="proc-head">
        <span className="sec-num">§ 03</span>
        <h2 className="display sm">
          Cuatro pasos.<br/>Cero sorpresas.
        </h2>
      </div>
      <ol className="proc-list">
        {PROCESS.map((p, i) => (
          <li key={p.n} className="proc-item">
            <span className="proc-n">{p.n}</span>
            <h4>{p.t}</h4>
            <p>{p.d}</p>
            {i < PROCESS.length - 1 && <span className="proc-arrow"><I.arrow width="14" height="14" /></span>}
          </li>
        ))}
      </ol>

      <div className="guarantee-bar">
        <div className="gb-l">
          <span className="kicker"><span className="dot" /> Garantía DASAT</span>
          <h3>3 meses incluidos. <span className="hl">+6 meses</span> ampliables.</h3>
          <p className="gb-sub">Garantía incluida en <b>mano de obra y repuesto de la avería realizada</b>. Si te interesa, puedes contratar una ampliación de 6 meses adicionales — hasta 9 en total.</p>
        </div>
        <ul className="gb-list">
          <li><I.check width="14" height="14" /> Garantía en mano de obra y repuesto de la avería realizada</li>
          <li><I.check width="14" height="14" /> Repuestos originales o A+</li>
          <li><I.check width="14" height="14" /> Factura y resguardo firmados</li>
          <li><I.cross width="14" height="14" className="x" /> Presupuesto sin coste si reparamos</li>
        </ul>
      </div>
    </section>
  );
}

// ───────────── Brands — fila densa, monoespaciada
function Brands() {
  return (
    <section className="brands">
      <div className="brands-head">
        <span className="sec-num">§ ·</span>
        <span className="kicker"><span className="dot" /> Marcas que cruzan el banco de trabajo</span>
      </div>
      <ul className="brands-row">
        {BRANDS.map((b, i) => (
          <li key={b}>
            <span className="b-i">{String(i + 1).padStart(2, '0')}</span>
            <span className="b-n">{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ───────────── Cobertura
function Coverage() {
  return (
    <section className="cov" id="cobertura">
      <div className="cov-head">
        <span className="sec-num">§ 04</span>
        <h2 className="display sm">
          Atención en taller.<br/>
          <span className="hl">Villena, Alicante.</span>
        </h2>
        <p className="lede">
          Recibimos los equipos en nuestro local. Trae tu televisor, placa o consola y
          te damos resguardo firmado. Comarca del Alto Vinalopó.
        </p>
      </div>

      <div className="cov-grid">
        <div className="cov-map">
          <iframe
            title="Mapa DASAT MOBILE — Villena"
            src="https://www.google.com/maps?q=Escultor+Navarro+Santafe+64+Villena&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="cov-map-tag">
            <span className="dot" />
            <b>DASAT MOBILE</b>
            <em>L–V · 17–21h · citas a convenir</em>
          </div>
        </div>

        <div className="cov-photo">
          <div className="cov-photo-frame">
            <ShopFront />
            <div className="cov-photo-cap">
              <span>FACHADA · ESCULTOR NAVARRO SANTAFÉ, 64</span>
              <em>VILLENA · 03400</em>
            </div>
          </div>
        </div>

        <aside className="cov-card">
          <header>
            <DasatMark size={36} />
            <div>
              <b>DASAT MOBILE</b>
              <em>Servicio técnico · Villena</em>
            </div>
          </header>
          <div className="cov-row">
            <span>Dirección</span>
            <p>C/ Escultor Navarro Santafé, 64<br/>03400 Villena · Alicante</p>
          </div>
          <div className="cov-row">
            <span>Horario</span>
            <p>
              <b>Apertura al público</b><br/>
              Lunes a viernes · 17:00–21:00<br/>
              <em>Citas también fuera de ese horario, previa solicitud.</em><br/>
              Sábado y domingo · cerrado
            </p>
          </div>
          <div className="cov-row">
            <span>Contacto</span>
            <p>+34 000 000 000<br/>david@dasat.es</p>
          </div>
          <div className="cov-actions">
            <a className="btn-solid w" href="https://www.google.com/maps/dir/?api=1&destination=Escultor+Navarro+Santafe+64+Villena" target="_blank" rel="noreferrer">
              <I.arrow width="14" height="14" /> Cómo llegar
            </a>
            <a className="btn-line w" href="https://www.google.com/maps?q=Escultor+Navarro+Santafe+64+Villena" target="_blank" rel="noreferrer">
              <I.pin width="14" height="14" /> Abrir en Maps
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ───────────── Contacto / formulario de cita
function Contact() {
  const [form, setForm] = React.useState({
    name: '', phone: '', device: 'TV', brand: '', issue: '', when: 'L–V 17–21h',
  });
  const [status, setStatus] = React.useState('idle'); // idle · sending · sent · error
  const [errorMsg, setErrorMsg] = React.useState('');
  const sent = status === 'sent';
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/david@dasat.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[DASAT MOBILE] Solicitud de presupuesto · ${form.device} ${form.brand || ''}`.trim(),
          _template: 'table',
          _captcha: 'false',
          Nombre: form.name,
          Teléfono: form.phone,
          'Tipo de equipo': form.device,
          'Marca / modelo': form.brand,
          'Descripción de la avería': form.issue,
          'Franja preferida': form.when,
          Origen: 'dasatmobile.es · formulario web',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent');
      } else {
        throw new Error(data.message || 'No se pudo enviar el formulario.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Error de red. Revisa tu conexión e inténtalo de nuevo.');
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-head">
        <span className="sec-num">§ 05</span>
        <h2 className="display sm">
          Cuéntanos qué le pasa.<br/>
          <span className="hl">Presupuesto sin coste si reparamos.</span>
        </h2>
      </div>

      <div className="contact-grid">
        <form className="form" onSubmit={submit}>
          <div className="form-bar">
            <span>SOLICITUD DE PRESUPUESTO</span>
            <span>REQ-{String(Date.now()).slice(-6)}</span>
            <span className={sent ? 'st on' : (status === 'sending' ? 'st sending' : (status === 'error' ? 'st err' : 'st'))}>
              {sent ? '● ENVIADO' : status === 'sending' ? '● ENVIANDO…' : status === 'error' ? '● ERROR' : '○ NUEVO'}
            </span>
          </div>
          <p className="form-intro">
            <b>Presupuesto sin coste si aceptas la reparación.</b> Te lo damos por escrito antes de tocar el equipo.
            Si solo quieres una valoración orientativa (sin compromiso de reparar), aplicamos una pequeña tasa de diagnóstico que se descuenta si finalmente reparas.
          </p>

          {sent ? (
            <div className="form-sent">
              <I.check width="56" height="56" />
              <h3>Solicitud registrada</h3>
              <p>David te contactará por WhatsApp o por correo en menos de 24h hábiles.</p>
              <button type="button" className="btn-line"
                onClick={() => { setStatus('idle'); setForm({ name:'', phone:'', device:'TV', brand:'', issue:'', when:'L–V 17–21h' }); }}>
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <>
              {status === 'error' && (
                <div className="form-err" role="alert">
                  <b>No se pudo enviar.</b> {errorMsg} <br/>
                  Si el problema persiste, escríbenos directamente a <a href="mailto:david@dasat.es">david@dasat.es</a> o por <a href="https://wa.me/34000000000" target="_blank" rel="noreferrer">WhatsApp</a>.
                </div>
              )}
              <FormField n="01" label="Nombre y apellidos">
                <input required type="text" value={form.name} onChange={set('name')} placeholder="Juan García" />
              </FormField>
              <FormField n="02" label="Teléfono / WhatsApp">
                <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+34 ___ ___ ___" />
              </FormField>
              <div className="form-2">
                <FormField n="03" label="Tipo de equipo">
                  <select value={form.device} onChange={set('device')}>
                    <option>TV</option>
                    <option>Placa electrónica</option>
                    <option>Consola</option>
                    <option>Portátil</option>
                    <option>Tablet</option>
                    <option>Otro</option>
                  </select>
                </FormField>
                <FormField n="04" label="Marca / modelo">
                  <input type="text" value={form.brand} onChange={set('brand')} placeholder="Samsung QE55Q70A" />
                </FormField>
              </div>
              <FormField n="05" label="Descripción de la avería">
                <textarea required rows="4" value={form.issue} onChange={set('issue')} placeholder="¿Cuándo empezó? ¿Hace ruido, no enciende, imagen rota…?" />
              </FormField>
              <FormField n="06" label="Franja preferida">
                <div className="radio-row">
                  {['L–V 10–14h','L–V 17–21h','indiferente'].map((v) => (
                    <label key={v} className={form.when === v ? 'on' : ''}>
                      <input type="radio" name="when" value={v} checked={form.when === v} onChange={set('when')} />
                      <span>{v}</span>
                    </label>
                  ))}
                </div>
              </FormField>
              <button type="submit" className="btn-solid lg w" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : <>Enviar solicitud <I.arrow width="14" height="14" /></>}
              </button>
              <p className="form-fine">
                Al enviar aceptas que te contactemos para coordinar la cita. No spam.
              </p>
            </>
          )}
        </form>

        <aside className="contact-side">
          <div className="side-block">
            <span className="kicker"><I.whatsapp width="14" height="14" /> Vía rápida</span>
            <h3>WhatsApp directo</h3>
            <p>El técnico responde en horario laboral. Adjunta una foto del equipo.</p>
            <a className="btn-solid w" href="https://wa.me/34000000000" target="_blank" rel="noreferrer">
              Abrir WhatsApp <I.arrow width="14" height="14" />
            </a>
          </div>
          <div className="side-block">
            <span className="kicker"><I.spark width="14" height="14" /> Sin compromiso</span>
            <ul className="check-list">
              <li><I.check width="14" height="14" /> Diagnóstico previo a la reparación</li>
              <li><I.check width="14" height="14" /> Presupuesto cerrado por escrito</li>
              <li><I.check width="14" height="14" /> Sin coste si aceptas la reparación*</li>
            </ul>
            <em className="fine">* La valoración meramente orientativa lleva una pequeña tasa de diagnóstico, descontable de la factura final si reparas.</em>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FormField({ n, label, children }) {
  return (
    <label className="ff">
      <span className="ff-lbl"><em>{n}</em>{label}</span>
      {children}
    </label>
  );
}

// ───────────── ShopFront — ilustración del local (placeholder estilizado)
function ShopFront() {
  return (
    <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid meet" aria-label="Fachada DASAT MOBILE">
      {/* cielo / fondo */}
      <rect width="800" height="520" fill="var(--bg-3)" />
      {/* edificio adyacente izquierdo */}
      <rect x="0" y="60" width="160" height="460" fill="var(--bg-2)" stroke="var(--rule)" />
      <g stroke="var(--rule)" strokeWidth="1">
        <rect x="20" y="100" width="50" height="70" fill="none" />
        <rect x="90" y="100" width="50" height="70" fill="none" />
        <rect x="20" y="200" width="50" height="70" fill="none" />
        <rect x="90" y="200" width="50" height="70" fill="none" />
        <rect x="20" y="300" width="50" height="70" fill="none" />
        <rect x="90" y="300" width="50" height="70" fill="none" />
      </g>
      {/* edificio principal — DASAT */}
      <rect x="160" y="20" width="480" height="500" fill="var(--bg-2)" stroke="var(--ink)" strokeWidth="1.4" />
      {/* balcones piso 1 */}
      <g stroke="var(--rule)" strokeWidth="1" fill="none">
        <rect x="200" y="80" width="100" height="80" />
        <rect x="350" y="80" width="100" height="80" />
        <rect x="500" y="80" width="100" height="80" />
        <rect x="200" y="200" width="100" height="80" />
        <rect x="350" y="200" width="100" height="80" />
        <rect x="500" y="200" width="100" height="80" />
      </g>
      {/* franja roja del local */}
      <rect x="170" y="320" width="460" height="80" fill="var(--red)" />
      <rect x="178" y="328" width="444" height="64" fill="none" stroke="#fff" strokeWidth="2" />
      {/* logo + texto */}
      <g transform="translate(200 332)">
        <rect x="0" y="0" width="56" height="56" fill="#fff" />
        <rect x="6" y="6" width="44" height="44" fill="var(--red)" />
        <rect x="11" y="11" width="34" height="34" fill="none" stroke="#fff" strokeWidth="2.4" />
        <g fill="#fff">
          <rect x="26" y="16" width="4" height="24" />
          <rect x="16" y="22" width="24" height="3" />
          <rect x="16" y="31" width="24" height="3" />
          <rect x="16" y="22" width="3" height="12" />
          <rect x="37" y="22" width="3" height="12" />
        </g>
      </g>
      <text x="280" y="368" fill="#fff" fontFamily="Archivo Narrow, sans-serif" fontWeight="800" fontSize="36" letterSpacing="2">DASAT MOBILE</text>
      <text x="280" y="386" fill="#fff" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" opacity=".9">SERVICIO TÉCNICO · ELECTRÓNICA</text>
      {/* escaparate */}
      <rect x="190" y="410" width="200" height="100" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      <line x1="290" y1="410" x2="290" y2="510" stroke="var(--ink)" strokeWidth="1" />
      <line x1="190" y1="460" x2="390" y2="460" stroke="var(--rule)" strokeWidth="1" />
      {/* TVs en escaparate */}
      <g stroke="var(--ink)" strokeWidth="0.8" fill="var(--bg-2)">
        <rect x="208" y="425" width="64" height="38" />
        <rect x="308" y="425" width="64" height="38" />
        <rect x="208" y="475" width="64" height="28" />
        <rect x="308" y="475" width="64" height="28" />
      </g>
      {/* puerta */}
      <rect x="410" y="410" width="100" height="100" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      <line x1="460" y1="410" x2="460" y2="510" stroke="var(--rule)" strokeWidth="1" />
      <circle cx="450" cy="460" r="2" fill="var(--ink)" />
      <circle cx="470" cy="460" r="2" fill="var(--ink)" />
      {/* horarios */}
      <rect x="530" y="410" width="90" height="100" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="575" y="432" textAnchor="middle" fill="var(--ink)" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700">ABIERTO</text>
      <line x1="540" y1="438" x2="610" y2="438" stroke="var(--rule)" />
      <text x="545" y="455" fill="var(--ink-2)" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700">L–V</text>
      <text x="545" y="468" fill="var(--ink)" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700">17–21h</text>
      <text x="545" y="484" fill="var(--ink-2)" fontFamily="JetBrains Mono, monospace" fontSize="6.5">citas también</text>
      <text x="545" y="494" fill="var(--ink-2)" fontFamily="JetBrains Mono, monospace" fontSize="6.5">fuera de</text>
      <text x="545" y="504" fill="var(--red)" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="700">ESE HORARIO</text>
      {/* edificio derecho */}
      <rect x="640" y="40" width="160" height="480" fill="var(--bg-2)" stroke="var(--rule)" />
      <g stroke="var(--rule)" strokeWidth="1" fill="none">
        <rect x="660" y="90" width="50" height="70" />
        <rect x="730" y="90" width="50" height="70" />
        <rect x="660" y="190" width="50" height="70" />
        <rect x="730" y="190" width="50" height="70" />
      </g>
      {/* acera */}
      <rect x="0" y="510" width="800" height="10" fill="var(--bg)" />
      {/* sombras de pasaje */}
      <rect x="160" y="510" width="480" height="6" fill="var(--ink)" opacity=".15" />
      {/* sello "AQUÍ" */}
      <g transform="translate(70 410) rotate(-8)">
        <rect x="-2" y="-2" width="80" height="38" fill="none" stroke="var(--red)" strokeWidth="1.4" />
        <rect x="0" y="0" width="76" height="34" fill="none" stroke="var(--red)" strokeWidth="1.4" />
        <text x="38" y="16" textAnchor="middle" fontFamily="Archivo Narrow, sans-serif" fontWeight="800" fontSize="14" fill="var(--red)">AQUÍ</text>
        <text x="38" y="28" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--red)">ENTRADA</text>
      </g>
    </svg>
  );
}

// ───────────── Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="ft-top">
        <div className="ft-brand">
          <DasatMark size={56} />
          <div>
            <b>DASAT MOBILE SL</b>
            <em>Servicio técnico de electrónica</em>
          </div>
        </div>
        <div className="ft-nav">
          <div>
            <h5>Servicio principal</h5>
            <a href="#tv">Reparación de TV</a>
          </div>
          <div>
            <h5>Capacidades</h5>
            <a href="#capacidades">Microsoldadura</a>
            <a href="#capacidades">Placas electrónicas</a>
          </div>
          <div>
            <h5>También</h5>
            <a href="#capacidades">Consolas</a>
            <a href="#capacidades">Portátiles</a>
            <a href="#capacidades">Tablets</a>
            <a href="#capacidades">Software</a>
          </div>
          <div>
            <h5>Contacto</h5>
            <a href="#contacto">Agendar cita</a>
            <a href="https://wa.me/34000000000">WhatsApp</a>
            <a href="#cobertura">Villena</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="aviso-legal.html">Aviso legal</a>
            <a href="privacidad.html">Política de privacidad</a>
            <a href="cookies.html">Política de cookies</a>
          </div>
        </div>
      </div>
      <div className="ft-rule" />
      <div className="ft-bot">
        <span>© 2026 DASAT MOBILE SL · CIF B-XXXXXXXX</span>
        <span className="d">·</span>
        <span>Escultor Navarro Santafé, 64 — 03400 Villena, Alicante</span>
      </div>
    </footer>
  );
}

// ───────────── Tweaks
function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="DASAT · Tweaks">
      <TweakSection label="Color" />
      <TweakToggle label="Modo oscuro" value={t.dark} onChange={(v) => setTweak('dark', v)} />
      <TweakSlider label="Tono de rojo" value={t.redHue} min={-10} max={45} step={1} unit="°"
        onChange={(v) => setTweak('redHue', v)} />

      <TweakSection label="Tipografía" />
      <TweakRadio label="Título"
        value={t.titleFont}
        options={[
          { value: 'narrow', label: 'Condensada' },
          { value: 'mono', label: 'Mono' },
          { value: 'heavy', label: 'Pesada' },
        ]}
        onChange={(v) => setTweak('titleFont', v)} />

      <TweakSection label="Densidad" />
      <TweakRadio label="Espaciado"
        value={t.density}
        options={[
          { value: 'compact', label: 'Compacta' },
          { value: 'regular', label: 'Regular' },
          { value: 'comfy', label: 'Amplia' },
        ]}
        onChange={(v) => setTweak('density', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
