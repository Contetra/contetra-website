declare module "mouse-follower" {
  import type { GSAP } from "gsap";

  export interface MouseFollowerOptions {
    el?: Element | null;
    container?: Element | Document;
    className?: string;
    innerClassName?: string;
    textClassName?: string;
    mediaClassName?: string;
    mediaBoxClassName?: string;
    iconSvgClassName?: string;
    iconSvgNamePrefix?: string;
    iconSvgSrc?: string;
    dataAttr?: string;
    hiddenState?: string;
    textState?: string;
    iconState?: string;
    activeState?: string;
    mediaState?: string;
    stateDetection?: Record<string, string>;
    visible?: boolean;
    visibleOnState?: boolean;
    speed?: number;
    ease?: string;
    overwrite?: boolean;
    skewing?: number;
    skewingText?: number;
    skewingIcon?: number;
    skewingMedia?: number;
    skewingDelta?: number;
    skewingDeltaMax?: number;
    stickDelta?: number;
    showTimeout?: number;
    hideOnLeave?: boolean;
    hideTimeout?: number;
    hideMediaTimeout?: number;
  }

  export default class MouseFollower {
    static registerGSAP(gsap: GSAP): void;
    constructor(options?: MouseFollowerOptions);
    show(): void;
    hide(): void;
    destroy(): void;
    on(event: string, handler: (...args: unknown[]) => void): void;
    off(event: string, handler?: (...args: unknown[]) => void): void;
    addState(state: string): void;
    removeState(state: string): void;
    setText(text: string): void;
    removeText(): void;
    setIcon(name: string): void;
    removeIcon(): void;
    setImg(src: string): void;
    removeImg(): void;
    setVideo(src: string): void;
    removeVideo(): void;
    setStick(el: Element | string): void;
    removeStick(): void;
    setSkewing(value: number): void;
    removeSkewing(): void;
  }
}

