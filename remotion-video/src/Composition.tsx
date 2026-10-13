import { Composition } from "remotion";
import { MatAd, EN_COPY, AR_COPY } from "./MatAd";
import { MatModules, MODULES_EN, MODULES_AR, MAT_MODULES_DURATION } from "./MatModules";

export const MyComposition = () => {
  return (
    <>
      <Composition id="MatAd-EN" component={MatAd} durationInFrames={300} fps={30} width={1920} height={1080} defaultProps={{ copy: EN_COPY }} />
      <Composition id="MatAd-AR" component={MatAd} durationInFrames={300} fps={30} width={1920} height={1080} defaultProps={{ copy: AR_COPY }} />
      <Composition id="MatModules-EN" component={MatModules} durationInFrames={MAT_MODULES_DURATION} fps={30} width={1920} height={1080} defaultProps={{ copy: MODULES_EN }} />
      <Composition id="MatModules-AR" component={MatModules} durationInFrames={MAT_MODULES_DURATION} fps={30} width={1920} height={1080} defaultProps={{ copy: MODULES_AR }} />
    </>
  );
};
