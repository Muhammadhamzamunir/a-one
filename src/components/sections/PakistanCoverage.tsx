import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Navigation2 } from "lucide-react";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const PAKISTAN_PATH =
  "M992 97 L923 77 L903 33 L840 1 L778 15 L717 10 L616 49 L585 79 L601 109 L600 139 L549 183 L515 184 L483 209 L499 249 L479 257 L459 288 L455 354 L441 354 L428 324 L409 322 L367 360 L354 391 L305 393 L276 434 L278 487 L270 500 L188 523 L96 525 L30 507 L14 513 L43 575 L94 611 L88 669 L107 705 L50 731 L15 768 L1 841 L126 829 L169 838 L278 823 L315 904 L342 918 L375 898 L405 935 L437 951 L496 938 L504 906 L519 893 L564 899 L589 882 L625 885 L632 857 L612 798 L580 777 L576 732 L541 716 L536 701 L581 652 L593 694 L613 710 L657 706 L705 664 L711 607 L743 584 L751 541 L781 520 L795 476 L825 444 L832 394 L874 357 L862 335 L811 296 L816 253 L799 217 L827 202 L922 217 L992 182 L999 164 L983 138Z";

type City = { id: string; name: string; x: number; y: number; note: string; hq?: boolean };

// Coordinates are in the map's 1000-wide viewBox. Edit freely.
const cities: City[] = [
  { id: "lahore", name: "Lahore", x: 796, y: 394, note: "Head office and service base", hq: true },
  { id: "islamabad", name: "Islamabad", x: 719, y: 243, note: "Enquiries reviewed individually" },
  { id: "peshawar", name: "Peshawar", x: 632, y: 220, note: "Enquiries reviewed individually" },
  { id: "multan", name: "Multan", x: 624, y: 490, note: "Enquiries reviewed individually" },
  { id: "quetta", name: "Quetta", x: 361, y: 492, note: "Enquiries reviewed individually" },
  { id: "hyderabad", name: "Hyderabad", x: 442, y: 831, note: "Enquiries reviewed individually" },
  { id: "karachi", name: "Karachi", x: 361, y: 870, note: "Enquiries reviewed individually" },
];

const hq = cities[0];
const PIN = "M0 0 C-5 -14 -17 -22 -17 -37 A17 17 0 1 1 17 -37 C17 -22 5 -14 0 0Z";
const ease = [0.22, 1, 0.36, 1] as const;

function route(to: City) {
  const mx = (hq.x + to.x) / 2;
  const my = (hq.y + to.y) / 2;
  const dx = to.x - hq.x;
  const dy = to.y - hq.y;
  // bow the curve sideways so routes read as arcs
  return `M${hq.x} ${hq.y} Q${mx - dy * 0.18} ${my + dx * 0.18} ${to.x} ${to.y}`;
}

export function PakistanCoverage() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string>("lahore");
  const active = cities.find((c) => c.id === activeId) ?? hq;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-5 text-white shadow-[0_40px_80px_-30px_rgba(5,20,40,0.7)] sm:p-7">
      <div aria-hidden="true" className="technical-grid pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-brand-cyan/15 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-[520px]">
          <svg
            viewBox="-20 -20 1040 1000"
            className="h-auto w-full overflow-visible"
            role="img"
            aria-label="Map of Pakistan showing A-One's head office in Lahore and other cities"
          >
            <defs>
              <linearGradient id="pkFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a66c4" />
                <stop offset="0.55" stopColor="#174a9c" />
                <stop offset="1" stopColor="#0f2f63" />
              </linearGradient>
              <pattern id="pkDots" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="#ffffff" opacity="0.13" />
              </pattern>
              <clipPath id="pkClip">
                <path d={PAKISTAN_PATH} />
              </clipPath>
              <filter id="pkGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#05a9e8" floodOpacity="0.22" />
              </filter>
            </defs>

            <motion.path
              d={PAKISTAN_PATH}
              fill="url(#pkFill)"
              stroke="#05a9e8"
              strokeWidth={3}
              strokeLinejoin="round"
              filter="url(#pkGlow)"
              initial={reduceMotion ? false : { pathLength: 0, fillOpacity: 0 }}
              whileInView={{ pathLength: 1, fillOpacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ pathLength: { duration: 2.2, ease: "easeInOut" }, fillOpacity: { duration: 1, delay: 1.4 } }}
            />
            <rect x="0" y="0" width="1000" height="960" fill="url(#pkDots)" clipPath="url(#pkClip)" />

            {/* routes from Lahore */}
            {cities.slice(1).map((c, i) => (
              <motion.path
                key={c.id}
                d={route(c)}
                fill="none"
                stroke={c.id === activeId ? "#ffffff" : "#7fdcff"}
                strokeOpacity={c.id === activeId ? 0.95 : 0.5}
                strokeWidth={c.id === activeId ? 3.5 : 2}
                strokeDasharray="7 9"
                strokeLinecap="round"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 1.8 + i * 0.12, ease }}
              />
            ))}

            {/* pins */}
            {cities.map((c, i) => {
              const isActive = c.id === activeId;
              return (
                <g key={c.id} transform={`translate(${c.x} ${c.y})`}>
                  {c.hq && !reduceMotion && (
                    <>
                      <motion.circle r={14} fill="none" stroke="#ff4b52" strokeWidth={3}
                        animate={{ r: [14, 54], opacity: [0.9, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }} />
                      <motion.circle r={14} fill="none" stroke="#ff4b52" strokeWidth={3}
                        animate={{ r: [14, 54], opacity: [0.9, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }} />
                    </>
                  )}
                  <ellipse cx={0} cy={2} rx={11} ry={4} fill="#000" opacity={0.3} />
                  <motion.g
                    initial={reduceMotion ? false : { y: -90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.2 + i * 0.14 }}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                  >
                    <motion.g animate={{ scale: isActive ? 1.28 : c.hq ? 1.1 : 1 }} style={{ originX: "0px", originY: "0px" }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
                      <path d={PIN} fill={c.hq ? "#d71920" : "#e8454c"} stroke="#fff" strokeWidth={2.5} />
                      <circle cx={0} cy={-37} r={7.5} fill="#fff" />
                      <circle cx={0} cy={-37} r={3.2} fill="#0d1b2a" />
                    </motion.g>
                  </motion.g>
                </g>
              );
            })}

            {/* label for active city */}
            <g transform={`translate(${active.x} ${active.y - 86})`} pointerEvents="none">
              <motion.g key={active.id} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <rect x={-(active.name.length * 9 + 24)} y={-26} width={active.name.length * 18 + 48} height={40} rx={20} fill="#ffffff" />
                <text x={0} y={0} textAnchor="middle" fontSize={26} fontWeight={800} fill="#0d1b2a" fontFamily="Manrope, Inter, sans-serif">
                  {active.name}
                </text>
              </motion.g>
            </g>
          </svg>
        </div>

        <div className="relative">
          <p className="text-xs font-extrabold tracking-[0.14em] text-brand-cyan">WHERE WE WORK</p>
          <h3 className="mt-2 font-[Manrope] text-2xl font-bold leading-tight tracking-tight">Based in Lahore, open to enquiries nationwide.</h3>

          <ul className="mt-5 grid grid-cols-2 gap-2">
            {cities.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(c.id)}
                  onFocus={() => setActiveId(c.id)}
                  onClick={() => setActiveId(c.id)}
                  className={cn(
                    "focus-ring flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 text-left text-sm font-bold transition-colors",
                    c.id === activeId ? "border-brand-cyan bg-white/10 text-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white",
                  )}
                >
                  <span className={cn("size-2 shrink-0 rounded-full", c.hq ? "bg-brand-red" : "bg-brand-cyan")} />
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 min-h-[40px] text-sm leading-5 text-white/65">{active.note}. Service availability outside Lahore is confirmed on enquiry.</p>

          <div className="mt-5 rounded-2xl bg-white p-4 text-brand-navy">
            <p className="flex items-center gap-2 text-xs font-extrabold tracking-[0.1em] text-brand-blue">
              <MapPin aria-hidden="true" size={15} className="text-brand-red" /> A-ONE ADDRESS
            </p>
            <p className="mt-1.5 text-sm font-bold">9-B, Sanam Arcade</p>
            <p className="text-xs leading-5 text-slate-600">Mozang Chungi, near Qurtaba Chowk, Ferozpur Road, Lahore</p>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-3 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand-blue px-4 text-xs font-bold text-white transition-colors hover:bg-[#103b7c]"
            >
              <Navigation2 aria-hidden="true" size={15} />
              Get directions
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
