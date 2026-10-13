import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin", "arabic"],
});

// Darker, glassier take on MAT's own product UI (gold-on-near-black),
// rebuilt as an abstract motion graphic rather than a literal screenshot.
const COLORS = {
  bg0: "#07070a",
  bg1: "#0c0d12",
  ink: "#f4efe3",
  inkSoft: "rgba(244,239,227,0.62)",
  gold: "#c9a25c",
  goldBright: "#e7c687",
  goldDeep: "#8a6a30",
  glassBorder: "rgba(201,162,92,0.28)",
  glassFill: "rgba(255,255,255,0.045)",
};

type Copy = {
  brand: string;
  tagline: string;
  stat1Label: string;
  stat1Value: number;
  stat1Prefix: string;
  stat2Label: string;
  stat2Value: number;
  stat2Suffix: string;
  stat3Label: string;
  stat3Value: number;
  chips: string[];
  closingLine: string;
  cta: string;
  dir: "ltr" | "rtl";
};

export const EN_COPY: Copy = {
  brand: "MAT",
  tagline: "Sales, projects and pricing — one platform.",
  stat1Label: "Pipeline value",
  stat1Value: 2874310,
  stat1Prefix: "SAR ",
  stat2Label: "Open projects",
  stat2Value: 11,
  stat2Suffix: "",
  stat3Label: "New clients",
  stat3Value: 3,
  chips: ["Quotations", "Project tracking", "Reports", "Client CRM"],
  closingLine: "Built by V Group.",
  cta: "vgroup-sa.co",
  dir: "ltr",
};

export const AR_COPY: Copy = {
  brand: "MAT",
  tagline: "المبيعات والمشاريع والتسعير — في منصة واحدة.",
  stat1Label: "قيمة المشاريع",
  stat1Value: 2874310,
  stat1Prefix: "",
  stat2Label: "مشاريع مفتوحة",
  stat2Value: 11,
  stat2Suffix: "",
  stat3Label: "عملاء جدد",
  stat3Value: 3,
  chips: ["عروض الأسعار", "متابعة المشاريع", "التقارير", "إدارة العملاء"],
  closingLine: "من تطوير V Group.",
  cta: "vgroup-sa.co",
  dir: "rtl",
};

const GlassPanel: React.FC<{
  style?: React.CSSProperties;
  children?: React.ReactNode;
}> = ({ style, children }) => (
  <div
    style={{
      background: COLORS.glassFill,
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: `1px solid ${COLORS.glassBorder}`,
      borderRadius: 28,
      boxShadow:
        "0 1px 0 rgba(255,255,255,0.08) inset, 0 24px 60px rgba(0,0,0,0.55)",
      ...style,
    }}
  >
    {children}
  </div>
);

const GoldDivider: React.FC<{ width: number }> = ({ width }) => (
  <div
    style={{
      width,
      height: 3,
      borderRadius: 3,
      background: `linear-gradient(90deg, ${COLORS.goldDeep}, ${COLORS.goldBright}, ${COLORS.goldDeep})`,
    }}
  />
);

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

const fmtNumber = (n: number) => Math.round(n).toLocaleString("en-US");

const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const drift = interpolate(frame, [0, durationInFrames], [0, 40]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% -10%, #171208 0%, ${COLORS.bg1} 42%, ${COLORS.bg0} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          left: -250 + drift * 0.4,
          top: -300,
          background:
            "radial-gradient(circle, rgba(201,162,92,0.16) 0%, rgba(201,162,92,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          right: -300 - drift * 0.3,
          bottom: -350,
          background:
            "radial-gradient(circle, rgba(201,162,92,0.10) 0%, rgba(201,162,92,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
};

const Logo: React.FC<{ brand: string; scale?: number }> = ({
  brand,
  scale = 1,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14 * scale,
      direction: "ltr",
    }}
  >
    <svg width={34 * scale} height={34 * scale} viewBox="0 0 34 34">
      <polygon
        points="17,1 33,17 17,33 1,17"
        fill="none"
        stroke={`url(#g${scale})`}
        strokeWidth={2.4}
      />
      <polygon points="17,9 25,17 17,25 9,17" fill={COLORS.gold} opacity={0.85} />
      <defs>
        <linearGradient id={`g${scale}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.goldBright} />
          <stop offset="100%" stopColor={COLORS.goldDeep} />
        </linearGradient>
      </defs>
    </svg>
    <span
      style={{
        fontFamily,
        fontWeight: 700,
        fontSize: 40 * scale,
        letterSpacing: 2 * scale,
        background: `linear-gradient(180deg, ${COLORS.goldBright}, ${COLORS.gold})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {brand}
    </span>
  </div>
);

const IntroScene: React.FC<{ copy: Copy }> = ({ copy }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame, fps, config: { damping: 18, mass: 0.7 } });
  const panelScale = interpolate(logoIn, [0, 1], [0.86, 1]);
  const panelOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [22, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const taglineY = interpolate(frame, [22, 40], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const dividerW = interpolate(frame, [12, 32], [0, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        direction: copy.dir,
      }}
    >
      <GlassPanel
        style={{
          padding: "64px 96px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          transform: `scale(${panelScale})`,
          opacity: panelOpacity,
        }}
      >
        <Logo brand={copy.brand} scale={1.6} />
        <GoldDivider width={dividerW} />
        <div
          style={{
            fontFamily,
            fontSize: 26,
            fontWeight: 400,
            color: COLORS.inkSoft,
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            textAlign: "center",
            maxWidth: 560,
          }}
        >
          {copy.tagline}
        </div>
      </GlassPanel>
    </AbsoluteFill>
  );
};

const StatCard: React.FC<{
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delay: number;
  dir: "ltr" | "rtl";
}> = ({ label, value, prefix = "", suffix = "", delay, dir }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delay);

  const enter = spring({
    frame: local,
    fps,
    config: { damping: 16, mass: 0.6 },
  });
  const opacity = interpolate(local, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });
  const y = interpolate(enter, [0, 1], [26, 0]);

  const count = interpolate(local, [6, 42], [0, value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const barW = interpolate(local, [10, 46], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <GlassPanel
      style={{
        padding: "26px 30px",
        minWidth: 300,
        opacity,
        transform: `translateY(${y}px)`,
        direction: dir,
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: 16,
          color: COLORS.inkSoft,
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily,
          fontSize: 38,
          fontWeight: 700,
          color: COLORS.ink,
          marginBottom: 16,
          direction: "ltr",
          textAlign: dir === "rtl" ? "right" : "left",
        }}
      >
        {prefix}
        {fmtNumber(count)}
        {suffix}
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 6,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${barW}%`,
            borderRadius: 6,
            background: `linear-gradient(90deg, ${COLORS.goldDeep}, ${COLORS.goldBright})`,
          }}
        />
      </div>
    </GlassPanel>
  );
};

const DashboardScene: React.FC<{ copy: Copy }> = ({ copy }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headIn = spring({ frame, fps, config: { damping: 18 } });
  const headOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 44,
        direction: copy.dir,
      }}
    >
      <div
        style={{
          opacity: headOpacity,
          transform: `translateY(${interpolate(headIn, [0, 1], [-14, 0])}px)`,
        }}
      >
        <Logo brand={copy.brand} scale={0.85} />
      </div>
      <div style={{ display: "flex", gap: 28, direction: copy.dir }}>
        <StatCard
          label={copy.stat1Label}
          value={copy.stat1Value}
          prefix={copy.stat1Prefix}
          delay={6}
          dir={copy.dir}
        />
        <StatCard
          label={copy.stat2Label}
          value={copy.stat2Value}
          suffix={copy.stat2Suffix}
          delay={16}
          dir={copy.dir}
        />
        <StatCard
          label={copy.stat3Label}
          value={copy.stat3Value}
          delay={26}
          dir={copy.dir}
        />
      </div>
    </AbsoluteFill>
  );
};

const Chip: React.FC<{ label: string; delay: number; dir: "ltr" | "rtl" }> = ({
  label,
  delay,
  dir,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delay);
  const enter = spring({ frame: local, fps, config: { damping: 15, mass: 0.5 } });
  const opacity = interpolate(local, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });
  const x = interpolate(enter, [0, 1], [dir === "rtl" ? 30 : -30, 0]);

  return (
    <GlassPanel
      style={{
        padding: "16px 30px",
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: COLORS.goldBright,
          boxShadow: `0 0 10px ${COLORS.goldBright}`,
        }}
      />
      <span style={{ fontFamily, fontSize: 22, color: COLORS.ink, fontWeight: 500 }}>
        {label}
      </span>
    </GlassPanel>
  );
};

const FeatureScene: React.FC<{ copy: Copy }> = ({ copy }) => {
  const frame = useCurrentFrame();
  const headOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 40,
        direction: copy.dir,
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: 30,
          fontWeight: 400,
          color: COLORS.inkSoft,
          opacity: headOpacity,
        }}
      >
        {copy.tagline}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          maxWidth: 1100,
          direction: copy.dir,
        }}
      >
        {copy.chips.map((c, i) => (
          <Chip key={c} label={c} delay={10 + i * 8} dir={copy.dir} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const OutroScene: React.FC<{ copy: Copy }> = ({ copy }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 18, mass: 0.7 } });
  const scale = interpolate(enter, [0, 1], [0.9, 1]);
  const opacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [16, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        direction: copy.dir,
      }}
    >
      <GlassPanel
        style={{
          padding: "56px 110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <Logo brand={copy.brand} scale={1.4} />
        <div
          style={{
            fontFamily,
            fontSize: 20,
            color: COLORS.inkSoft,
            opacity: subOpacity,
          }}
        >
          {copy.closingLine}
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 24,
            fontWeight: 600,
            color: COLORS.goldBright,
            opacity: subOpacity,
            letterSpacing: 1,
            direction: "ltr",
          }}
        >
          {copy.cta}
        </div>
      </GlassPanel>
    </AbsoluteFill>
  );
};

const FadeWrap: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
  fadeIn?: number;
  fadeOut?: number;
}> = ({ children, durationInFrames, fadeIn = 10, fadeOut = 10 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, fadeIn, durationInFrames - fadeOut, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const MatAd: React.FC<{ copy: Copy }> = ({ copy }) => {
  return (
    <AbsoluteFill style={{ fontFamily }}>
      <Background />
      <Sequence from={0} durationInFrames={75}>
        <FadeWrap durationInFrames={75} fadeOut={14}>
          <IntroScene copy={copy} />
        </FadeWrap>
      </Sequence>
      <Sequence from={70} durationInFrames={95}>
        <FadeWrap durationInFrames={95}>
          <DashboardScene copy={copy} />
        </FadeWrap>
      </Sequence>
      <Sequence from={160} durationInFrames={85}>
        <FadeWrap durationInFrames={85}>
          <FeatureScene copy={copy} />
        </FadeWrap>
      </Sequence>
      <Sequence from={240} durationInFrames={60}>
        <FadeWrap durationInFrames={60} fadeIn={12} fadeOut={14}>
          <OutroScene copy={copy} />
        </FadeWrap>
      </Sequence>
    </AbsoluteFill>
  );
};
