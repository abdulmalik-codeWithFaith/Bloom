import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

import bottleCucumber from "@/assets/hero.jpg";
import bottlePineapple from "@/assets/splash.jpg";
import bottleFura from "@/assets/spec.jpg";
import life1 from "@/assets/hand-zobo.jpg";
import life2 from "@/assets/pack.jpg";
import life3 from "@/assets/zobo.jpg";
import life4 from "@/assets/hand-picture.jpg";
import life5 from "@/assets/splash.jpg";
import life6 from "@/assets/hero.jpg";
import logo from "@/assets/white-logo.jpg";
import darkLogo from "@/assets/dark-logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/2348039383260";

function Index() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <BackgroundDecor />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Pricing />
      <Benefits />
      <Products />
      <WhyBloom />
      <Gallery />
      <Testimonials />
      <Delivery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------------------------- DECOR --------------------------------- */

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* floating bubbles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-bubble"
          style={{
            left: `${(i * 73) % 100}%`,
            bottom: `-40px`,
            width: `${8 + (i % 5) * 4}px`,
            height: `${8 + (i % 5) * 4}px`,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(191,227,242,.35))",
            animationDelay: `${(i % 7) * 0.8}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}

/* --------------------------------- NAVBAR --------------------------------- */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="bloom-container">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <img src={logo} alt="logo" width={100} />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-0.5 after:bg-[color:var(--bloom-green)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary text-sm !py-2.5 !px-4">
              Order Now
            </a>
            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              <span className="i-menu block w-4 h-[2px] bg-current relative before:content-[''] before:absolute before:left-0 before:-top-1.5 before:w-4 before:h-[2px] before:bg-current after:content-[''] after:absolute after:left-0 after:top-1.5 after:w-4 after:h-[2px] after:bg-current" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-black/5 text-sm font-medium"
                >
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function BloomLogo() {
  return (
    <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-[color:var(--bloom-green)]">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c3 4 3 8 0 12-3-4-3-8 0-12z" />
        <path d="M4 13c4 0 8 3 8 8-4 0-8-3-8-8z" />
        <path d="M20 13c-4 0-8 3-8 8 4 0 8-3 8-8z" />
      </svg>
    </span>
  );
}

/* ---------------------------------- HERO ---------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 24]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [0, 220]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 15 });
  const smy = useSpring(my, { stiffness: 60, damping: 15 });

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
      }}
      className="relative min-h-screen pt-32 pb-16 flex items-center"
    >
      <div className="bloom-container relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--bloom-green)]" />
            Premium Natural Beverages
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-display font-extrabold text-[42px] sm:text-6xl lg:text-[76px] leading-[1.02] tracking-[-0.03em] text-balance"
          >
            You Deserve <br />
            <span className="italic font-medium text-[color:var(--bloom-wine)]">Quality</span>{" "}
            <span className="relative">
              Natural
              <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full text-[color:var(--bloom-green)]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M4 8 C 60 2, 140 2, 216 6" />
              </svg>
            </span>{" "}
            Drinks.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Premium handcrafted natural beverages made with fresh ingredients, packed with nutrients,
            and delivered nationwide across Nigeria.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              Order Now
              <ArrowRight />
            </a>
            <a href="#products" className="btn-ghost">
              Explore Flavors
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: "100%", v: "Natural" },
              { k: "24H", v: "Fresh Batch" },
              { k: "36+", v: "Cities Served" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-[color:var(--bloom-wine)]">
                  <Counter value={s.k} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative aspect-[3/4] max-w-[520px] mx-auto">
            {/* Halo */}
            <motion.div
              style={{ x: smx, y: smy }}
              className="absolute inset-6 rounded-full blur-3xl opacity-70"
              aria-hidden
            >
              <div className="w-full h-full rounded-full" style={{
                background: "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--bloom-green-light) 90%, transparent), transparent 60%)"
              }} />
            </motion.div>
            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              aria-hidden
            >
              <svg viewBox="0 0 400 400" className="w-full h-full text-[color:var(--bloom-green)]/40">
                <defs>
                  <path id="circle" d="M 200,200 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0" />
                </defs>
                <text fontSize="14" fill="currentColor" letterSpacing="6">
                  <textPath href="#circle">
                    NATURAL • FRESH • HANDCRAFTED • PREMIUM • NATURAL • FRESH • HANDCRAFTED • PREMIUM •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Floating fruits */}
            <FloatingFruit style={{ top: "6%", left: "4%" }} delay="0s">
              <Cucumber />
            </FloatingFruit>
            <FloatingFruit style={{ top: "12%", right: "2%" }} delay="1.2s">
              <Pineapple />
            </FloatingFruit>
            <FloatingFruit style={{ bottom: "18%", left: "0%" }} delay="0.6s">
              <Mint />
            </FloatingFruit>
            <FloatingFruit style={{ bottom: "8%", right: "6%" }} delay="1.8s">
              <Hibiscus />
            </FloatingFruit>

            {/* Bottle */}
            <motion.img
              src={bottleCucumber}
              alt="Bloom Zobo bottle floating with fresh ingredients"
              width={1024}
              height={1536}
              style={{ rotate, scale, y: yBottle, x: smx, translateY: smy }}
              className="relative z-10 w-full h-full object-contain animate-floaty drop-shadow-[0_40px_60px_rgba(91,30,45,0.35)]"
              draggable={false}
            />

            {/* Floating chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 -left-2 sm:left-2 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-[color:var(--bloom-green)] text-white flex items-center justify-center">
                <Leaf />
              </div>
              <div className="text-xs">
                <div className="font-semibold">Zero Preservatives</div>
                <div className="text-muted-foreground">Just nature, in a bottle</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-8 -right-2 sm:right-4 glass rounded-2xl px-3 py-2 shadow-[var(--shadow-soft)] flex items-center gap-2"
            >
              <span className="flex -space-x-2">
                <span className="w-6 h-6 rounded-full bg-[color:var(--bloom-wine)] border-2 border-white" />
                <span className="w-6 h-6 rounded-full bg-[color:var(--bloom-green)] border-2 border-white" />
                <span className="w-6 h-6 rounded-full bg-[color:var(--bloom-yellow)] border-2 border-white" />
              </span>
              <div className="text-xs font-medium">2,500+ happy sippers</div>
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function FloatingFruit({ children, style, delay }: { children: React.ReactNode; style?: React.CSSProperties; delay?: string }) {
  return (
    <div
      className="absolute w-16 sm:w-20 h-16 sm:h-20 animate-drift"
      style={{ ...style, animationDelay: delay }}
      aria-hidden
    >
      {children}
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <span className="block w-[1px] h-8 bg-current animate-bob" />
    </div>
  );
}

function Counter({ value }: { value: string }) {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (isNaN(num)) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(num * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [num]);
  if (isNaN(num)) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* -------------------------------- MARQUEE --------------------------------- */

function MarqueeStrip() {
  const items = ["Hibiscus", "Cucumber", "Pineapple", "Mint", "Ginger", "Zero Preservatives", "Handcrafted", "Delivered Nationwide"];
  return (
    <div className="border-y border-black/5 bg-[color:var(--bloom-wine)] text-white overflow-hidden">
      <div className="flex gap-16 py-4 whitespace-nowrap animate-[marquee_28s_linear_infinite]" style={{ animationName: "shimmer" }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="text-sm font-medium tracking-wider uppercase flex items-center gap-4">
            <Sparkle /> {it}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.33%);} }
      .animate-\\[marquee_28s_linear_infinite\\]{animation: marquee 28s linear infinite;}`}</style>
    </div>
  );
}

/* ---------------------------------- ABOUT --------------------------------- */

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="bloom-container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative grid grid-cols-2 gap-4">
            <img src={life2} alt="Fresh natural ingredients" loading="lazy" width={1024} height={1024}
              className="rounded-3xl aspect-[4/5] object-cover shadow-[var(--shadow-soft)] hover:scale-[1.02] transition-transform duration-500" />
            <img src={life3} alt="Bloom drink being poured" loading="lazy" width={1024} height={1400}
              className="rounded-3xl aspect-[4/5] object-cover mt-10 shadow-[var(--shadow-soft)] hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Since</div>
            <div className="font-display font-bold text-2xl">Est. Bloom</div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <FadeUp><span className="eyebrow">About Bloom</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Rooted in nature. <br />
              <span className="text-[color:var(--bloom-green)]">Crafted for you.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bloom is a premium Nigerian beverage company reimagining traditional drinks with clean,
              natural ingredients. Every bottle is freshly produced in small batches.
            </p>
          </FadeUp>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Natural Ingredients", d: "Fresh hibiscus, cucumber, pineapple & mint." },
              { t: "Freshly Produced", d: "Small batches, weekly production runs." },
              { t: "Healthy Lifestyle", d: "Antioxidant-rich, immunity-boosting." },
              { t: "Nationwide Delivery", d: "From Lagos to Kano, at your door." },
            ].map((f, i) => (
              <FadeUp key={f.t} delay={0.15 + i * 0.06}>
                <div className="p-5 rounded-2xl border border-black/5 bg-white hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--bloom-green)]/10 text-[color:var(--bloom-green)] flex items-center justify-center">
                    <Leaf />
                  </div>
                  <div className="mt-3 font-semibold">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- PRODUCTS -------------------------------- */

const PRODUCTS = [
  {
    name: "Bloom Zobo Fresh",
    variant: "Cucumber",
    desc: "Refreshing blend of hibiscus and cool cucumber. Crisp, hydrating and lightly floral.",
    img: bottleCucumber,
    tint: "var(--bloom-green)",
    tag: "Bestseller",
  },
  {
    name: "Bloom Zobo Fresh",
    variant: "Exotic Pineapple",
    desc: "Tropical pineapple-infused hibiscus. Sweet, tangy, unmistakably bold.",
    img: bottlePineapple,
    tint: "var(--bloom-yellow)",
    tag: "New",
  },
  {
    name: "Fura de Nunu",
    variant: "Traditional",
    desc: "Creamy millet & yogurt drink, reimagined with premium care.",
    img: bottleFura,
    tint: "var(--bloom-wine)",
    tag: "Coming Soon",
  },
];

function Products() {
  const [active, setActive] = useState(0);
  const p = PRODUCTS[active];
  return (
    <section id="products" className="py-24 sm:py-32 relative">
      <div className="bloom-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <FadeUp><span className="eyebrow">Our Products</span></FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                A flavor for <em className="not-italic text-[color:var(--bloom-wine)]">every moment.</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              Hover a card to preview the bottle. Every drink is bottled fresh at our facility and
              designed to feel as premium as it tastes.
            </p>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[460px] mx-auto">
              <div
                className="absolute inset-8 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: `radial-gradient(circle, ${p.tint}, transparent 65%)`, opacity: 0.35 }}
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={p.img}
                  src={p.img}
                  alt={`${p.name} ${p.variant}`}
                  loading="lazy"
                  width={1024}
                  height={1536}
                  initial={{ opacity: 0, y: 40, rotate: -8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
                  exit={{ opacity: 0, y: -40, rotate: 8, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                  className="relative w-full h-full object-contain animate-floaty drop-shadow-[0_40px_50px_rgba(91,30,45,0.3)]"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid gap-4">
            {PRODUCTS.map((prod, i) => (
              <button
                type="button"
                key={prod.variant}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group text-left rounded-3xl border p-6 sm:p-8 transition-all duration-500 flex items-center gap-6 ${
                  active === i
                    ? "border-transparent bg-[color:var(--bloom-ink)] text-white shadow-[var(--shadow-glow)] -translate-y-1"
                    : "border-black/5 bg-white hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <div
                  className="w-16 h-24 sm:w-20 sm:h-28 rounded-2xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: `color-mix(in oklab, ${prod.tint} 15%, white)` }}
                >
                  <img src={prod.img} alt="" loading="lazy" className="h-24 sm:h-28 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${active === i ? "text-[color:var(--bloom-green-light)]" : "text-[color:var(--bloom-green)]"}`}>
                      {prod.tag}
                    </span>
                    <span className={`h-1 w-1 rounded-full ${active === i ? "bg-white/40" : "bg-black/20"}`} />
                    <span className={`text-xs ${active === i ? "text-white/60" : "text-muted-foreground"}`}>50CL · 35CL</span>
                  </div>
                  <div className="mt-1 font-display font-bold text-xl sm:text-2xl">
                    {prod.name} <span className={active === i ? "text-white/70" : "text-muted-foreground"}>· {prod.variant}</span>
                  </div>
                  <p className={`mt-1 text-sm line-clamp-2 ${active === i ? "text-white/70" : "text-muted-foreground"}`}>
                    {prod.desc}
                  </p>
                </div>
                <ArrowRight className={`shrink-0 transition-transform group-hover:translate-x-1 ${active === i ? "text-white" : "text-foreground"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- BENEFITS -------------------------------- */

const BENEFITS = [
  { t: "Boosts Immunity", d: "Loaded with vitamin C and antioxidants from fresh hibiscus.", icon: <Shield /> },
  { t: "Supports Heart Health", d: "Hibiscus helps maintain healthy blood pressure levels.", icon: <Heart /> },
  { t: "Brain Boosting", d: "Natural nutrients that keep you sharp and focused.", icon: <Brain /> },
  { t: "Rich in Antioxidants", d: "Fights free radicals — great for glowing skin.", icon: <Sparkle /> },
  { t: "Refreshing & Hydrating", d: "Cool, crisp, and delightfully quenching.", icon: <Drop /> },
  { t: "Natural Ingredients", d: "Nothing artificial. Ever. Just real food.", icon: <Leaf /> },
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 relative">
      <div className="bloom-container">
        <div className="max-w-2xl">
          <FadeUp><span className="eyebrow">Health Benefits</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Delicious by design. <br />
              <span className="text-[color:var(--bloom-green)]">Good for you by nature.</span>
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <FadeUp key={b.t} delay={i * 0.05}>
              <div className="group relative p-7 rounded-3xl bg-white border border-black/5 hover:border-transparent hover:shadow-[var(--shadow-glow)] transition-all duration-500 overflow-hidden hover:-translate-y-1">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[color:var(--bloom-green-light)] opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-[color:var(--bloom-green)] text-white flex items-center justify-center shadow-[0_10px_25px_-10px_var(--bloom-green)] group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <div className="mt-5 font-display font-bold text-xl">{b.t}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WHY BLOOM ------------------------------- */

const WHY = [
  "100% Natural Ingredients",
  "Freshly Produced",
  "Premium Quality",
  "No Artificial Preservatives",
  "Great Taste",
  "Affordable",
  "Nationwide Delivery",
];

function WhyBloom() {
  return (
    <section className="py-24 sm:py-32 bg-[color:var(--bloom-ink)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full" style={{
          background: "radial-gradient(circle, var(--bloom-wine), transparent 70%)"
        }} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full" style={{
          background: "radial-gradient(circle, var(--bloom-green), transparent 70%)"
        }} />
      </div>
      <div className="bloom-container relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <span className="eyebrow !bg-white/10 !text-[color:var(--bloom-green-light)] !border-white/10">Why Bloom</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-2xl">
              Seven reasons Nigeria is falling for Bloom.
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            We started Bloom because we couldn't find a natural drink that felt as premium as it tasted.
            So we made one.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map((w, i) => (
            <FadeUp key={w} delay={i * 0.05}>
              <div className="group p-6 rounded-2xl border border-white/10 hover:border-[color:var(--bloom-green-light)] hover:bg-white/5 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[color:var(--bloom-green)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Check />
                </div>
                <div>
                  <div className="font-display font-semibold text-lg">{w}</div>
                  <div className="text-sm text-white/50 mt-1">Promised in every single bottle.</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- PRICING -------------------------------- */

const PRICING = [
  {
    size: "50CL",
    highlight: true,
    tiers: [
      { label: "Single Bottle", price: 1000 },
      { label: "Pack of 6", price: 5000, save: "Save ₦1,000" },
      { label: "Pack of 12", price: 10000, save: "Save ₦2,000" },
    ],
  },
  {
    size: "35CL",
    highlight: false,
    tiers: [
      { label: "Single Bottle", price: 700 },
      { label: "Pack of 6", price: 3500, save: "Save ₦700" },
      { label: "Pack of 12", price: 7000, save: "Save ₦1,400" },
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="bloom-container">
        <div className="text-center max-w-2xl mx-auto">
          <FadeUp><span className="eyebrow">Pricing</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Premium quality. <span className="text-[color:var(--bloom-green)]">Fair prices.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4 text-muted-foreground">Choose your size. Order singles or stock up with packs.</p>
          </FadeUp>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {PRICING.map((p) => (
            <FadeUp key={p.size}>
              <div
                className={`relative rounded-[28px] p-8 sm:p-10 h-full transition-all duration-500 hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-[color:var(--bloom-wine)] text-white shadow-[var(--shadow-glow)]"
                    : "bg-white border border-black/5 shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-xs uppercase tracking-widest ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>Size</div>
                    <div className="mt-1 font-display font-bold text-5xl sm:text-6xl">{p.size}</div>
                  </div>
                  {p.highlight && (
                    <span className="rounded-full bg-[color:var(--bloom-yellow)] text-[color:var(--bloom-ink)] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Most Loved
                    </span>
                  )}
                </div>
                <div className={`mt-8 divide-y ${p.highlight ? "divide-white/10" : "divide-black/5"}`}>
                  {p.tiers.map((t) => (
                    <div key={t.label} className="flex items-center justify-between py-4 group">
                      <div>
                        <div className="font-semibold">{t.label}</div>
                        {t.save && (
                          <div className={`text-xs mt-0.5 ${p.highlight ? "text-[color:var(--bloom-green-light)]" : "text-[color:var(--bloom-green)]"}`}>
                            {t.save}
                          </div>
                        )}
                      </div>
                      <div className="font-display font-bold text-2xl sm:text-3xl">
                        ₦{t.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-semibold transition-all hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-white text-[color:var(--bloom-wine)] hover:bg-[color:var(--bloom-yellow)]"
                      : "bg-[color:var(--bloom-green)] text-white hover:bg-[color:var(--bloom-wine)]"
                  }`}
                >
                  Order via WhatsApp <ArrowRight />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Bulk orders welcome for events, offices & retailers — contact us for custom pricing.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- GALLERY -------------------------------- */

const GALLERY = [
  { src: life1, h: "row-span-2" },
  { src: life5, h: "" },
  { src: life3, h: "row-span-2" },
  { src: life2, h: "" },
  { src: life6, h: "" },
  { src: life4, h: "row-span-2" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[color:var(--bloom-green-light)]/25">
      <div className="bloom-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <FadeUp><span className="eyebrow">Gallery</span></FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Bloom, in the wild.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              Real moments with our community — brunches, road trips, parties and quiet afternoons.
            </p>
          </FadeUp>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <FadeUp key={i} delay={i * 0.04} className={g.h}>
              <div className="group relative w-full h-full overflow-hidden rounded-3xl">
                <img
                  src={g.src}
                  alt="Bloom lifestyle"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 glass rounded-xl px-3 py-2 text-xs font-semibold text-foreground">
                  #BloomMoment
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */

const TESTIS = [
  { name: "Amara O.", city: "Lagos", quote: "The pineapple zobo is unreal. It genuinely tastes like a premium drink — I've stopped buying anything else.", rating: 5 },
  { name: "Ifeanyi K.", city: "Abuja", quote: "Bloom feels like a whole vibe. Beautiful bottles, incredible taste, and always cold on delivery.", rating: 5 },
  { name: "Halima B.", city: "Kano", quote: "You can taste the freshness. This is what natural is supposed to be — no chemical aftertaste.", rating: 5 },
];

function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="bloom-container">
        <div className="max-w-2xl">
          <FadeUp><span className="eyebrow">Testimonials</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Loved across Nigeria.
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div className="h-full p-7 rounded-3xl bg-white border border-black/5 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
                <div className="flex gap-1 text-[color:var(--bloom-yellow)]">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} />)}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-balance">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white"
                    style={{ background: i === 0 ? "var(--bloom-wine)" : i === 1 ? "var(--bloom-green)" : "var(--bloom-ink)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}, Nigeria</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- DELIVERY ------------------------------- */

function Delivery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="bloom-container">
        <div className="relative rounded-[36px] overflow-hidden bg-[color:var(--bloom-green)] text-white p-10 sm:p-16">
          <div aria-hidden className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <path d="M0,300 Q200,220 400,280 T800,260 L800,400 L0,400 Z" fill="rgba(255,255,255,0.15)" />
              <path d="M0,320 Q200,260 400,320 T800,300 L800,400 L0,400 Z" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow !bg-white/15 !text-white !border-white/20">Nationwide Delivery</span>
              <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-2xl">
                Order from anywhere in Nigeria — we'll bring the freshness to you.
              </h2>
              <p className="mt-4 text-white/80 max-w-xl">
                Lagos, Abuja, Port Harcourt, Kano, Ibadan and every state in between. Same-week delivery,
                chilled and carefully handled.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-[color:var(--bloom-ink)] px-6 py-4 font-semibold shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition"
              >
                <WhatsAppIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="text-base">Order Now →</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const FAQS = [
  { q: "How long does delivery take?", a: "Within Lagos & Abuja, most orders arrive in 24–48 hours. Nationwide orders arrive in 3–5 business days, chilled and carefully packaged." },
  { q: "What flavors do you currently offer?", a: "Bloom Zobo Fresh — Cucumber and Bloom Zobo Fresh — Exotic Pineapple. Fura de Nunu is coming soon." },
  { q: "What ingredients do you use?", a: "Only fresh, natural ingredients: dried hibiscus (zobo leaves), cucumber, pineapple, ginger, mint and natural sweeteners. Zero artificial preservatives." },
  { q: "How long does a bottle stay fresh?", a: "Refrigerated, our drinks stay fresh for up to 7 days. Best enjoyed chilled within 5 days of opening." },
  { q: "What sizes are available?", a: "Two sizes: 50CL and 35CL. Both are available as single bottles or as packs of 6 and 12." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="bloom-container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <FadeUp><span className="eyebrow">FAQ</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
              Questions? <br />
              <span className="text-[color:var(--bloom-green)]">We've got answers.</span>
            </h2>
          </FadeUp>
          <p className="mt-4 text-muted-foreground">
            Still curious? Chat with us on WhatsApp — we usually reply within minutes.
          </p>
        </div>
        <div className="lg:col-span-8 divide-y divide-black/5 border-y border-black/5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                >
                  <span className="font-display font-semibold text-lg sm:text-xl group-hover:text-[color:var(--bloom-green)] transition-colors">
                    {f.q}
                  </span>
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center border border-black/10 transition-transform ${isOpen ? "rotate-45 bg-[color:var(--bloom-green)] text-white border-transparent" : ""}`}>
                    <Plus />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CONTACT -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="bloom-container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <FadeUp><span className="eyebrow">Contact</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Let's put a bottle <br className="hidden sm:block" />
              <span className="text-[color:var(--bloom-wine)]">in your hand.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4 text-muted-foreground max-w-lg text-lg">
              Message us on WhatsApp for orders, custom bulk requests, retail partnerships or just to say hi.
            </p>
          </FadeUp>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
            <ContactCard label="Business" value="Bloom Sips & Beverages" />
            <ContactCard label="Phone" value="+234 803 938 3260" href="tel:+2348039383260" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsAppIcon /> Order via WhatsApp
            </a>
            <a href="tel:+2348039383260" className="btn-ghost">
              <Phone /> Call us
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-[var(--shadow-glow)]">
            <img src={life1} alt="Enjoying Bloom" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-70">Bloom Sips & Beverages</div>
              <div className="mt-1 font-display font-bold text-2xl">You Deserve Quality.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="p-5 rounded-2xl border border-black/5 bg-white hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-display font-semibold text-lg">{value}</div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

/* ---------------------------------- FOOTER -------------------------------- */

function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-[color:var(--bloom-ink)] text-white">
      <div className="bloom-container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <img src={darkLogo} alt="logo" width={100} />
            </div>
            <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
              Premium handcrafted natural beverages made with fresh ingredients — from Nigeria, with love.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/40">Quick Links</div>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/80 hover:text-[color:var(--bloom-green-light)] transition">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-white/40">Products</div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Zobo Cucumber</li>
              <li>Zobo Pineapple</li>
              <li>Fura de Nunu</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-white/40">Social</div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li><a target="_blank" href="https://www.instagram.com/bloombeverages1?igsh=YW4xYmFiYm5wMGZt" className="hover:text-[color:var(--bloom-green-light)]">Instagram</a></li>
              <li><a target="_blank"  href="https://www.tiktok.com/@bloombeverages1?_r=1&_t=ZS-97vEDw8e57C" className="hover:text-[color:var(--bloom-green-light)]">TikTok</a></li>
              <li><a target="_blank"  href="https://x.com/BloomZobo" className="hover:text-[color:var(--bloom-green-light)]">X (Twiter)</a></li>
              <li><a target="_blank"  href={WHATSAPP} className="hover:text-[color:var(--bloom-green-light)]">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Bloom Sips & Beverages. All rights reserved.</div>
          <div className="italic">"You Deserve Quality Natural Drinks."</div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- HELPERS / ICONS ---------------------------- */

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${className}`}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
function Leaf() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.8 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>;
}
function Shield() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>; }
function Heart() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>; }
function Brain() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22 2.5 2.5 0 0 1 7 19.5V17"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V17"/><path d="M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/><path d="M17 17h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/></svg>; }
function Sparkle() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2L12 3z"/></svg>; }
function Drop() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z"/></svg>; }
function Check() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"/></svg>; }
function Plus() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 5v14M5 12h14"/></svg>; }
function Star() { return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
function Phone() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>; }
function WhatsAppIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>; }

/* Fruit illustrations */
function Cucumber() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md">
      <ellipse cx="40" cy="40" rx="32" ry="16" fill="#5FA85A" transform="rotate(-25 40 40)"/>
      <ellipse cx="40" cy="40" rx="28" ry="12" fill="#B9E4C9" transform="rotate(-25 40 40)"/>
      <circle cx="35" cy="40" r="2" fill="#5FA85A"/><circle cx="42" cy="42" r="2" fill="#5FA85A"/><circle cx="48" cy="38" r="2" fill="#5FA85A"/>
    </svg>
  );
}
function Pineapple() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md">
      <path d="M40 10 L34 26 L46 26 Z" fill="#2E7D32"/>
      <path d="M40 14 L30 30 L50 30 Z" fill="#4CAF50"/>
      <rect x="24" y="28" width="32" height="42" rx="14" fill="#F5D547"/>
      <g stroke="#C9A227" strokeWidth="1" fill="none">
        <path d="M28 36 L52 36 M28 46 L52 46 M28 56 L52 56"/>
        <path d="M36 30 L36 68 M44 30 L44 68"/>
      </g>
    </svg>
  );
}
function Mint() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md">
      <path d="M40 12 C 25 20 20 40 30 60 C 40 55 55 40 40 12Z" fill="#4CAF50"/>
      <path d="M40 12 C 55 20 60 40 50 60 C 40 55 25 40 40 12Z" fill="#66BB6A"/>
      <line x1="40" y1="12" x2="40" y2="62" stroke="#2E7D32" strokeWidth="1.5"/>
    </svg>
  );
}
function Hibiscus() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="40" cy="26" rx="10" ry="16" fill="#B23B4A" transform={`rotate(${r} 40 40)`}/>
      ))}
      <circle cx="40" cy="40" r="6" fill="#F5D547"/>
    </svg>
  );
}
