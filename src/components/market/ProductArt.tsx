import { useId } from "react";
import type { ArtKind } from "@/data/listings";

/**
 * Original flat-vector product illustrations (no stock photos, no brand marks).
 * Used whenever a listing has no real photo. Everything lives in a 400x300 viewBox.
 */
export function ProductArt({ kind, className }: { kind: ArtKind; className?: string }) {
  const uid = useId().replace(/:/g, "");
  const g = (name: string) => `${uid}-${name}`;
  const ref = (name: string) => `url(#${g(name)})`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={g("body")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfe7f1" />
        </linearGradient>
        <linearGradient id={g("side")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e9eff6" />
          <stop offset="1" stopColor="#cfd9e6" />
        </linearGradient>
        <linearGradient id={g("dark")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2d44" />
          <stop offset="1" stopColor="#0d1b2a" />
        </linearGradient>
        <linearGradient id={g("screen")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#174a9c" />
          <stop offset="0.6" stopColor="#05a9e8" />
          <stop offset="1" stopColor="#7fdcff" />
        </linearGradient>
        <linearGradient id={g("glass")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a4a73" />
          <stop offset="1" stopColor="#0d1b2a" />
        </linearGradient>
        <linearGradient id={g("water")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#4cc3f5" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id={g("glow")} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#05a9e8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#05a9e8" stopOpacity="0" />
        </radialGradient>
        <filter id={g("soft")} x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <circle cx="200" cy="140" r="120" fill={ref("glow")} />
      <ellipse cx="200" cy="268" rx="130" ry="11" fill="#0d1b2a" opacity="0.16" filter={`url(#${g("soft")})`} />

      {kind === "split-ac" && (
        <g>
          <rect x="62" y="78" width="276" height="96" rx="20" fill={ref("body")} stroke="#c3cfdd" />
          <rect x="62" y="150" width="276" height="26" rx="13" fill={ref("side")} />
          <path d="M80 158h240" stroke="#9fb0c4" strokeWidth="3" strokeLinecap="round" />
          <path d="M84 168h232" stroke="#b7c5d6" strokeWidth="2" strokeLinecap="round" />
          <rect x="86" y="100" width="150" height="6" rx="3" fill="#d4dde9" />
          <rect x="86" y="114" width="110" height="6" rx="3" fill="#dfe6ef" />
          <rect x="262" y="98" width="52" height="24" rx="7" fill={ref("dark")} />
          <circle cx="276" cy="110" r="3.5" fill="#05a9e8" />
          <circle cx="290" cy="110" r="3.5" fill="#d71920" />
          <path d="M96 196c14 14 32 14 46 0M168 200c14 14 32 14 46 0M240 196c14 14 32 14 46 0" stroke="#05a9e8" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
          <path d="M120 222c14 12 28 12 42 0M200 226c14 12 28 12 42 0" stroke="#05a9e8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.3" />
        </g>
      )}

      {kind === "fridge" && (
        <g>
          <rect x="132" y="28" width="136" height="236" rx="16" fill={ref("body")} stroke="#c3cfdd" />
          <path d="M132 104h136" stroke="#b5c3d4" strokeWidth="3" />
          <rect x="248" y="52" width="6" height="40" rx="3" fill="#8ea1b8" />
          <rect x="248" y="124" width="6" height="64" rx="3" fill="#8ea1b8" />
          <rect x="146" y="42" width="40" height="8" rx="4" fill="#d4dde9" />
          <circle cx="160" cy="68" r="3.5" fill="#05a9e8" />
          <path d="M146 262v10M254 262v10" stroke="#8ea1b8" strokeWidth="6" strokeLinecap="round" />
          <rect x="140" y="38" width="10" height="218" rx="5" fill="#fff" opacity="0.55" />
        </g>
      )}

      {kind === "freezer" && (
        <g>
          <rect x="62" y="126" width="276" height="130" rx="16" fill={ref("body")} stroke="#c3cfdd" />
          <path d="M62 150h276" stroke="#b5c3d4" strokeWidth="3" />
          <rect x="54" y="102" width="292" height="36" rx="14" fill={ref("side")} stroke="#c3cfdd" />
          <rect x="176" y="112" width="48" height="10" rx="5" fill="#8ea1b8" />
          <rect x="84" y="176" width="68" height="34" rx="8" fill={ref("dark")} />
          <circle cx="104" cy="193" r="4" fill="#05a9e8" />
          <rect x="116" y="188" width="26" height="4" rx="2" fill="#7e93ab" />
          <circle cx="302" cy="194" r="13" fill="#e2e9f2" stroke="#b5c3d4" strokeWidth="2" />
          <path d="M302 194l6-6" stroke="#d71920" strokeWidth="3" strokeLinecap="round" />
          <path d="M84 262v8M316 262v8" stroke="#8ea1b8" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      {kind === "water-cooler" && (
        <g>
          <path d="M170 18h60v10c14 8 22 20 22 34v18h-104V62c0-14 8-26 22-34z" fill={ref("water")} stroke="#8fd6f5" />
          <path d="M182 34c8-4 22-4 32 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" fill="none" />
          <rect x="146" y="80" width="108" height="184" rx="14" fill={ref("body")} stroke="#c3cfdd" />
          <rect x="146" y="80" width="108" height="46" rx="14" fill={ref("side")} />
          <circle cx="176" cy="104" r="9" fill="#d71920" />
          <circle cx="224" cy="104" r="9" fill="#05a9e8" />
          <rect x="168" y="150" width="64" height="44" rx="8" fill="#e4ebf4" stroke="#c3cfdd" />
          <rect x="176" y="162" width="48" height="6" rx="3" fill="#b5c3d4" />
          <path d="M200 196v14" stroke="#05a9e8" strokeWidth="3" strokeLinecap="round" />
          <rect x="164" y="218" width="72" height="12" rx="6" fill="#b5c3d4" />
          <rect x="160" y="244" width="80" height="6" rx="3" fill="#d4dde9" />
        </g>
      )}

      {kind === "chiller" && (
        <g>
          <rect x="44" y="104" width="312" height="150" rx="14" fill={ref("body")} stroke="#c3cfdd" />
          <rect x="44" y="94" width="312" height="22" rx="10" fill={ref("side")} stroke="#c3cfdd" />
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x={60 + i * 11} y="130" width="5" height="106" rx="2.5" fill="#b9c7d8" />
          ))}
          {[250, 312].map((cx) => (
            <g key={cx}>
              <circle cx={cx - 8} cy="184" r="28" fill={ref("dark")} />
              <circle cx={cx - 8} cy="184" r="22" fill="none" stroke="#2f4a6b" strokeWidth="2" />
              <g transform={`translate(${cx - 8} 184)`} fill="#05a9e8" opacity="0.9">
                <path d="M0 0c-4-14 4-20 8-18 6 6 0 14-8 18z" />
                <path d="M0 0c14-4 20 4 18 8-6 6-14 0-18-8z" />
                <path d="M0 0c4 14-4 20-8 18-6-6 0-14 8-18z" />
                <path d="M0 0c-14 4-20-4-18-8 6-6 14 0 18 8z" />
              </g>
              <circle cx={cx - 8} cy="184" r="4" fill="#e9eff6" />
            </g>
          ))}
          <rect x="52" y="244" width="296" height="12" rx="6" fill="#8ea1b8" />
          <path d="M356 150h20v70h-20" stroke="#8ea1b8" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
      )}

      {kind === "washer" && (
        <g>
          <rect x="108" y="30" width="184" height="232" rx="18" fill={ref("body")} stroke="#c3cfdd" />
          <path d="M108 80h184" stroke="#c3cfdd" strokeWidth="2" />
          <rect x="124" y="46" width="52" height="22" rx="6" fill={ref("dark")} />
          <rect x="132" y="54" width="22" height="6" rx="3" fill="#05a9e8" />
          <circle cx="246" cy="57" r="12" fill="#e2e9f2" stroke="#b5c3d4" strokeWidth="2" />
          <path d="M246 57l5-5" stroke="#174a9c" strokeWidth="3" strokeLinecap="round" />
          <circle cx="278" cy="57" r="4" fill="#d71920" />
          <circle cx="200" cy="170" r="66" fill="#cfd9e6" stroke="#b5c3d4" strokeWidth="2" />
          <circle cx="200" cy="170" r="54" fill={ref("glass")} />
          <path d="M160 180c10-16 24-16 40 0s30 16 40 0" stroke="#05a9e8" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M166 150c10-8 22-12 34-12" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.35" fill="none" />
          <path d="M122 262v8M278 262v8" stroke="#8ea1b8" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      {kind === "tv" && (
        <g>
          <rect x="46" y="44" width="308" height="190" rx="12" fill={ref("dark")} />
          <rect x="56" y="54" width="288" height="170" rx="6" fill={ref("screen")} />
          <path d="M56 170c50-40 90 20 150-14s90-22 138-4v72H56z" fill="#0d1b2a" opacity="0.28" />
          <path d="M56 190c60-30 100 14 160-8s80-14 128 0v42H56z" fill="#fff" opacity="0.16" />
          <circle cx="294" cy="98" r="16" fill="#fff" opacity="0.4" />
          <path d="M60 58l120 0-70 166H60z" fill="#fff" opacity="0.08" />
          <rect x="178" y="234" width="44" height="14" fill="#8ea1b8" />
          <rect x="130" y="246" width="140" height="10" rx="5" fill="#b5c3d4" />
        </g>
      )}

      {kind === "laptop" && (
        <g>
          <rect x="88" y="52" width="224" height="150" rx="12" fill={ref("dark")} />
          <rect x="97" y="61" width="206" height="132" rx="5" fill={ref("screen")} />
          <path d="M97 150c40-26 70 12 110-6s60-10 96 2v47H97z" fill="#fff" opacity="0.16" />
          <rect x="130" y="82" width="68" height="8" rx="4" fill="#fff" opacity="0.55" />
          <rect x="130" y="98" width="46" height="8" rx="4" fill="#fff" opacity="0.32" />
          <path d="M52 214h296l-18 28H70z" fill={ref("side")} stroke="#c3cfdd" />
          <rect x="52" y="206" width="296" height="12" rx="6" fill={ref("body")} stroke="#c3cfdd" />
          <rect x="168" y="208" width="64" height="6" rx="3" fill="#b5c3d4" />
        </g>
      )}

      {kind === "phone" && (
        <g>
          <g transform="rotate(-9 150 150)" opacity="0.5">
            <rect x="96" y="40" width="96" height="206" rx="18" fill="#cfd9e6" />
            <rect x="104" y="50" width="80" height="186" rx="12" fill="#174a9c" opacity="0.5" />
          </g>
          <rect x="150" y="28" width="104" height="236" rx="20" fill={ref("dark")} />
          <rect x="158" y="38" width="88" height="216" rx="14" fill={ref("screen")} />
          <rect x="188" y="44" width="28" height="7" rx="3.5" fill="#0d1b2a" />
          <path d="M158 190c26-22 44 8 88-6v70H158z" fill="#fff" opacity="0.16" />
          <rect x="174" y="76" width="56" height="8" rx="4" fill="#fff" opacity="0.6" />
          <rect x="174" y="92" width="38" height="7" rx="3.5" fill="#fff" opacity="0.35" />
          <rect x="188" y="244" width="28" height="4" rx="2" fill="#fff" opacity="0.6" />
        </g>
      )}

      {kind === "ups" && (
        <g>
          <rect x="96" y="82" width="208" height="170" rx="16" fill={ref("dark")} />
          <rect x="106" y="92" width="188" height="150" rx="10" fill="#14263b" />
          <rect x="122" y="106" width="86" height="42" rx="6" fill="#06101b" stroke="#2f4a6b" />
          <text x="165" y="136" textAnchor="middle" fontFamily="Manrope, Inter, sans-serif" fontSize="22" fontWeight="800" fill="#4cf0a6">100%</text>
          <circle cx="248" cy="127" r="16" fill="#1b3350" stroke="#2f4a6b" strokeWidth="2" />
          <path d="M248 118v9" stroke="#05a9e8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="278" cy="112" r="4" fill="#4cf0a6" />
          <circle cx="278" cy="126" r="4" fill="#d71920" opacity="0.8" />
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x={122 + i * 18} y="172" width="10" height="52" rx="5" fill="#0a1522" />
          ))}
          <path d="M304 150h26c14 0 14 34 0 34h-8" stroke="#33465d" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="110" y="252" width="22" height="8" rx="4" fill="#33465d" />
          <rect x="268" y="252" width="22" height="8" rx="4" fill="#33465d" />
        </g>
      )}

      {kind === "microwave" && (
        <g>
          <rect x="52" y="86" width="296" height="164" rx="16" fill={ref("body")} stroke="#c3cfdd" />
          <rect x="68" y="102" width="188" height="132" rx="10" fill="#cfd9e6" />
          <rect x="76" y="110" width="172" height="116" rx="6" fill={ref("glass")} />
          {Array.from({ length: 6 }).map((_, i) => (
            <path key={i} d={`M${86 + i * 28} 112v112`} stroke="#fff" strokeWidth="1" opacity="0.07" />
          ))}
          <path d="M84 118l60 0-40 104H84z" fill="#fff" opacity="0.1" />
          <circle cx="250" cy="170" r="3" fill="#8ea1b8" />
          <rect x="270" y="104" width="64" height="30" rx="6" fill={ref("dark")} />
          <text x="302" y="125" textAnchor="middle" fontFamily="Manrope, Inter, sans-serif" fontSize="15" fontWeight="800" fill="#05a9e8">0:00</text>
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={272 + c * 22} y={146 + r * 22} width="18" height="16" rx="4" fill="#e2e9f2" stroke="#c3cfdd" />
            )),
          )}
          <path d="M70 252v8M330 252v8" stroke="#8ea1b8" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      {kind === "fan" && (
        <g>
          <circle cx="200" cy="108" r="76" fill="#fff" opacity="0.55" stroke="#b5c3d4" strokeWidth="3" />
          <circle cx="200" cy="108" r="58" fill="none" stroke="#c3cfdd" strokeWidth="2" />
          <circle cx="200" cy="108" r="38" fill="none" stroke="#c3cfdd" strokeWidth="2" />
          <path d="M200 32v152M124 108h152M146 54l108 108M254 54L146 162" stroke="#c3cfdd" strokeWidth="1.6" />
          <g transform="translate(200 108)" fill="#05a9e8" opacity="0.88">
            <path d="M0 0C-8-30 6-52 20-46 30-30 16-8 0 0z" />
            <path d="M0 0C28-10 52 4 46 18 30 30 8 16 0 0z" transform="rotate(0)" />
            <path d="M0 0C-20 24-46 24-50 8-40-8-16-10 0 0z" />
          </g>
          <circle cx="200" cy="108" r="12" fill={ref("dark")} />
          <circle cx="200" cy="108" r="5" fill="#9fb0c4" />
          <rect x="195" y="184" width="10" height="64" rx="5" fill="#8ea1b8" />
          <rect x="188" y="196" width="24" height="12" rx="6" fill="#b5c3d4" />
          <ellipse cx="200" cy="254" rx="62" ry="12" fill={ref("side")} stroke="#c3cfdd" />
        </g>
      )}
    </svg>
  );
}
