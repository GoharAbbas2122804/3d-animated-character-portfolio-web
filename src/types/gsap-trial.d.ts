declare module "gsap/SplitText" {
  export default class SplitText {
    constructor(
      element: string | HTMLElement | HTMLElement[] | NodeList | string[],
      options?: {
        type?: string;
        linesClass?: string;
        charsClass?: string;
        wordsClass?: string;
        [key: string]: any;
      }
    );
    
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  import { gsap } from "gsap";
  
  export default class ScrollSmoother {
    constructor(options: {
      wrapper?: string | HTMLElement;
      content?: string | HTMLElement;
      smooth?: number;
      effects?: boolean;
      normalizeScroll?: boolean;
      ignoreMobileResize?: boolean;
      onUpdate?: (self: ScrollSmoother) => void;
      onStop?: () => void;
      [key: string]: any;
    });
    
    static create(options: any): ScrollSmoother;
    
    effects(): void;
    refresh(): void;
    scrollTo(target: string | number | HTMLElement, parameters?: any): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    progress(value?: number): number | ScrollSmoother;
    scrollTop(): number;
    
    scrollTrigger: any;
    vars: any;
  }
  
  export function refresh(value?: boolean): void;
}
