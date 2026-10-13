import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { loadFont as loadPlexArabic } from "@remotion/google-fonts/IBMPlexSansArabic";

const jakarta = loadJakarta("normal", { weights: ["500", "700", "800"], subsets: ["latin"] });
const plexArabic = loadPlexArabic("normal", { weights: ["500", "700"], subsets: ["arabic", "latin"] });

const C = {
  bg: "#F8F4EC",
  ink: "#111113",
  soft: "rgba(17,17,19,0.58)",
  faint: "rgba(17,17,19,0.32)",
  gold: "#C9A25C",
  goldDeep: "#8A6424",
};

type Ring = { left: number; top: number; width: number; height: number };
type Module = {
  img: string;
  title: string;
  sub: string;
  zoom: number;
  origin: [number, number];
  ring?: Ring;
  scan?: [number, number];
  overlay?: string;
};

export type MatModulesCopy = {
  dir: "ltr" | "rtl";
  tag: string;
  modules: { title: string; sub: string }[];
  builtBy: string;
  cta: string;
};

export const MODULES_EN: MatModulesCopy = {
  dir: "ltr",
  tag: "The platform behind every project.",
  modules: [
    { title: "Dashboard", sub: "Every project, live." },
    { title: "Project pipeline", sub: "Each stage at a glance." },
    { title: "Finance", sub: "Cash in, cash out, in real time." },
    { title: "Expenses", sub: "Every riyal, categorized." },
    { title: "Financial statements", sub: "Generated for any period." },
  ],
  builtBy: "Built by V Group",
  cta: "Book a demo",
};

export const MODULES_AR: MatModulesCopy = {
  dir: "rtl",
  tag: "المنصة خلف كل مشروع.",
  modules: [
    { title: "لوحة التحكم", sub: "كل مشروع، مباشرة." },
    { title: "مسار المشاريع", sub: "كل مرحلة بنظرة واحدة." },
    { title: "المالية", sub: "النقد الداخل والخارج لحظة بلحظة." },
    { title: "المصروفات", sub: "كل ريال في مكانه." },
    { title: "القوائم المالية", sub: "جاهزة لأي فترة." },
  ],
  builtBy: "من تطوير V Group",
  cta: "احجز عرضاً",
};

const SCREENS: Omit<Module, "title" | "sub">[] = [
  { img: "mat/dashboard.jpg", zoom: 1.34, origin: [83, 32], ring: { left: 74, top: 27.5, width: 18.5, height: 10 } },
  { img: "mat/pipeline.jpg", zoom: 1.3, origin: [92, 46], ring: { left: 2, top: 42.5, width: 95, height: 7.5 } },
  { img: "mat/finance.jpg", zoom: 1.3, origin: [82, 62], ring: { left: 34, top: 57, width: 59, height: 18 } },
  { img: "mat/expenses.jpg", zoom: 1.25, origin: [72, 62], scan: [44, 86] },
  { img: "mat/statements.jpg", zoom: 1.28, origin: [84, 62], ring: { left: 33.5, top: 69.5, width: 60, height: 7 }, overlay: "mat/print-doc.jpg" },
];

// Global timeline (30fps). Scenes overlap by 6 frames so whips blend.
const INTRO = { from: 0, dur: 54 };
const MOD_START = 48;
const MOD_LEN = 72;
const MOD_STEP = 66;
const OUTRO_FROM = MOD_START + MOD_STEP * 5;
export const MAT_MODULES_DURATION = OUTRO_FROM + 54;

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const Background: React.FC = () => {
  const f = useCurrentFrame();
  const a = interpolate(f, [0, MAT_MODULES_DURATION], [0, 1]);
  return (
    <AbsoluteFill style={{ background: C.bg, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage: "radial-gradient(rgba(17,17,19,0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "34px 34px",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1300,
          height: 1300,
          borderRadius: "50%",
          left: interpolate(a, [0, 1], [-260, 380]),
          top: interpolate(a, [0, 1], [-620, -420]),
          background: "radial-gradient(circle, rgba(201,162,92,0.26), rgba(201,162,92,0) 62%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          left: interpolate(a, [0, 1], [1150, 760]),
          top: interpolate(a, [0, 1], [420, 300]),
          background: "radial-gradient(circle, rgba(201,162,92,0.16), rgba(201,162,92,0) 62%)",
        }}
      />
    </AbsoluteFill>
  );
};

const Intro: React.FC<{ copy: MatModulesCopy; font: string }> = ({ copy, font }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 13, stiffness: 140 } });
  const burst = interpolate(f, [4, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const exit = interpolate(f, [INTRO.dur - 12, INTRO.dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) });
  const letters = "MAT".split("");

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${1 + exit * 0.35})`,
        opacity: 1 - exit,
        filter: `blur(${exit * 14}px)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: `3px solid ${C.gold}`,
          transform: `scale(${0.4 + burst * 1.9})`,
          opacity: 0.55 * (1 - burst),
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 44, direction: "ltr" }}>
        <Img
          src={staticFile("mat/logo.png")}
          style={{ width: 230, height: 230, transform: `scale(${0.55 + pop * 0.45}) rotate(${(1 - pop) * -14}deg)`, opacity: Math.min(1, pop * 1.4) }}
        />
        <div style={{ display: "flex", fontFamily: jakarta.fontFamily, fontWeight: 800, fontSize: 210, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1 }}>
          {letters.map((ch, i) => {
            const s = spring({ frame: f - 6 - i * 4, fps, config: { damping: 16, stiffness: 160 } });
            return (
              <span key={i} style={{ display: "inline-block", transform: `translateY(${(1 - s) * 90}px)`, opacity: s }}>
                {ch}
              </span>
            );
          })}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 700,
          fontFamily: font,
          fontWeight: 500,
          fontSize: 40,
          color: C.soft,
          direction: copy.dir,
          opacity: interpolate(f, [18, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(f, [18, 32], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease })}px)`,
        }}
      >
        {copy.tag}
      </div>
    </AbsoluteFill>
  );
};

const Frame: React.FC<{ width: number; height: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ width, height, children, style }) => (
  <div
    style={{
      width,
      height,
      padding: 10,
      boxSizing: "border-box",
      borderRadius: 34,
      background: "rgba(255,255,255,0.75)",
      border: "1px solid rgba(17,17,19,0.07)",
      boxShadow: "0 50px 90px -30px rgba(90,64,20,0.35), 0 18px 30px -18px rgba(17,17,19,0.22)",
      ...style,
    }}
  >
    <div style={{ width: "100%", height: "100%", borderRadius: 24, overflow: "hidden", position: "relative", background: "#0c0c0e" }}>{children}</div>
  </div>
);

const ModuleScene: React.FC<{ mod: Module; dir: "ltr" | "rtl"; font: string }> = ({ mod, dir, font }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rtl = dir === "rtl";
  const side = rtl ? -1 : 1;

  const enter = interpolate(f, [0, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const exit = interpolate(f, [MOD_LEN - 10, MOD_LEN], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) });
  const push = interpolate(f, [14, MOD_LEN - 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const ringIn = spring({ frame: f - 30, fps, config: { damping: 14, stiffness: 150 } });

  const frameX = (1 - enter) * 320 * side - exit * 420 * side;
  const rotY = interpolate(enter, [0, 1], [-18, -7]) * side + push * 9 * side;
  const blur = (1 - enter) * 10 + exit * 12;
  const scale = 1 + (mod.zoom - 1) * push;

  const words = mod.title.split(" ");
  const titleExit = exit * -60;

  const frameW = 1330;
  const frameH = 690;

  return (
    <AbsoluteFill style={{ opacity: 1 - exit * 0.9, direction: dir }}>
      <div
        style={{
          position: "absolute",
          top: 150,
          [rtl ? "right" : "left"]: 510,
          perspective: 2200,
        }}
      >
        <div style={{ transform: `translateX(${frameX}px) rotateY(${rotY}deg)`, filter: `blur(${blur}px)`, opacity: enter }}>
          <Frame width={frameW} height={frameH}>
            <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: `${mod.origin[0]}% ${mod.origin[1]}%` }}>
              <Img src={staticFile(mod.img)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              {mod.ring && (
                <div
                  style={{
                    position: "absolute",
                    left: `${mod.ring.left}%`,
                    top: `${mod.ring.top}%`,
                    width: `${mod.ring.width}%`,
                    height: `${mod.ring.height}%`,
                    borderRadius: 18,
                    border: `3px solid ${C.gold}`,
                    boxShadow: `0 0 0 ${8 * (1 - ringIn) + 4}px rgba(201,162,92,${0.28 * ringIn})`,
                    transform: `scale(${1.25 - ringIn * 0.25})`,
                    opacity: ringIn,
                  }}
                />
              )}
              {mod.scan && (
                <div
                  style={{
                    position: "absolute",
                    left: "1%",
                    right: "1%",
                    top: `${interpolate(f, [18, MOD_LEN - 8], mod.scan, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) })}%`,
                    height: "8.5%",
                    borderRadius: 14,
                    border: `2px solid ${C.gold}`,
                    background: "rgba(201,162,92,0.16)",
                    opacity: interpolate(f, [14, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  }}
                />
              )}
            </div>
          </Frame>
        </div>
        {mod.overlay && (
          <OverlayCard src={mod.overlay} rtl={rtl} exit={exit} />
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: 300,
          [rtl ? "right" : "left"]: 96,
          width: 380,
          fontFamily: font,
          transform: `translateY(${titleExit}px)`,
          opacity: 1 - exit,
        }}
      >
        <div
          style={{
            height: 6,
            borderRadius: 6,
            background: C.gold,
            width: interpolate(f, [4, 22], [0, 72], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease }),
            marginBottom: 30,
          }}
        />
        <div style={{ fontWeight: rtl ? 700 : 800, fontSize: rtl ? 72 : 62, lineHeight: rtl ? 1.25 : 1.06, letterSpacing: rtl ? 0 : "-0.025em", color: C.ink }}>
          {words.map((w, i) => {
            const s = spring({ frame: f - 3 - i * 4, fps, config: { damping: 18, stiffness: 170 } });
            return (
              <span key={i} style={{ display: "inline-block", marginInlineEnd: rtl ? 16 : 18, transform: `translateY(${(1 - s) * 60}px)`, opacity: s }}>
                {w}
              </span>
            );
          })}
        </div>
        <div
          style={{
            marginTop: 22,
            fontWeight: 500,
            fontSize: 34,
            lineHeight: 1.35,
            color: C.soft,
            opacity: interpolate(f, [12, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(f, [12, 26], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease })}px)`,
          }}
        >
          {mod.sub}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OverlayCard: React.FC<{ src: string; rtl: boolean; exit: number }> = ({ src, rtl, exit }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f - 22, fps, config: { damping: 14, stiffness: 120 } });
  const side = rtl ? -1 : 1;
  return (
    <div
      style={{
        position: "absolute",
        top: 300,
        [rtl ? "right" : "left"]: -30,
        transform: `translateY(${(1 - s) * 260}px) rotate(${(-4 + (1 - s) * 10) * side}deg) translateX(${-exit * 380 * side}px)`,
        opacity: Math.min(1, s * 1.3) * (1 - exit),
      }}
    >
      <Frame width={470} height={430} style={{ background: "rgba(255,255,255,0.9)" }}>
        <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0%", background: "#fff" }} />
      </Frame>
    </div>
  );
};

const ChapterBar: React.FC<{ copy: MatModulesCopy; font: string }> = ({ copy, font }) => {
  const f = useCurrentFrame();
  const local = f - MOD_START;
  const show = interpolate(f, [MOD_START, MOD_START + 12, OUTRO_FROM - 4, OUTRO_FROM + 6], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const active = Math.min(4, Math.max(0, Math.floor(local / MOD_STEP)));
  return (
    <div
      style={{
        position: "absolute",
        bottom: 54,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 18,
        direction: copy.dir,
        fontFamily: font,
        opacity: show,
      }}
    >
      {copy.modules.map((m, i) => {
        const p = interpolate(local, [i * MOD_STEP, (i + 1) * MOD_STEP], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const on = i === active;
        return (
          <div key={i} style={{ width: 190, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ height: 4, borderRadius: 4, background: "rgba(17,17,19,0.1)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p * 100}%`, background: C.gold, borderRadius: 4, marginInlineStart: 0 }} />
            </div>
            <div style={{ fontSize: 19, fontWeight: on ? 700 : 500, color: on ? C.ink : C.faint, whiteSpace: "nowrap" }}>{m.title}</div>
          </div>
        );
      })}
    </div>
  );
};

const Outro: React.FC<{ copy: MatModulesCopy; font: string }> = ({ copy, font }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const a = spring({ frame: f, fps, config: { damping: 15, stiffness: 140 } });
  const b = spring({ frame: f - 8, fps, config: { damping: 18 } });
  const c = spring({ frame: f - 14, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 34 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 30, direction: "ltr", transform: `scale(${0.8 + a * 0.2})`, opacity: a }}>
        <Img src={staticFile("mat/logo.png")} style={{ width: 150, height: 150 }} />
        <div style={{ fontFamily: jakarta.fontFamily, fontWeight: 800, fontSize: 150, letterSpacing: "-0.03em", color: C.ink, lineHeight: 1 }}>MAT</div>
      </div>
      <div style={{ fontFamily: font, fontWeight: 500, fontSize: 38, color: C.soft, opacity: b, transform: `translateY(${(1 - b) * 24}px)`, direction: copy.dir }}>
        {copy.builtBy}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          opacity: c,
          transform: `translateY(${(1 - c) * 30}px)`,
          direction: copy.dir,
        }}
      >
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: 32, color: "#FAFAF9", background: C.ink, borderRadius: 999, padding: "20px 44px" }}>{copy.cta}</div>
        <div style={{ fontFamily: jakarta.fontFamily, fontWeight: 700, fontSize: 30, color: C.goldDeep, direction: "ltr" }}>vgroup-sa.co</div>
      </div>
    </AbsoluteFill>
  );
};

export const MatModules: React.FC<{ copy: MatModulesCopy }> = ({ copy }) => {
  const font = copy.dir === "rtl" ? `${plexArabic.fontFamily}, ${jakarta.fontFamily}` : jakarta.fontFamily;
  const mods: Module[] = SCREENS.map((s, i) => ({ ...s, ...copy.modules[i] }));
  return (
    <AbsoluteFill>
      <Background />
      <Sequence from={INTRO.from} durationInFrames={INTRO.dur}>
        <Intro copy={copy} font={font} />
      </Sequence>
      {mods.map((m, i) => (
        <Sequence key={i} from={MOD_START + i * MOD_STEP} durationInFrames={MOD_LEN}>
          <ModuleScene mod={m} dir={copy.dir} font={font} />
        </Sequence>
      ))}
      <ChapterBar copy={copy} font={font} />
      <Sequence from={OUTRO_FROM} durationInFrames={MAT_MODULES_DURATION - OUTRO_FROM}>
        <Outro copy={copy} font={font} />
      </Sequence>
    </AbsoluteFill>
  );
};
