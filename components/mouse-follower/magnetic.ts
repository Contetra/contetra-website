import $ from "jquery";
import gsap from "gsap";

interface MagneticOptions {
  y?: number;
  x?: number;
  s?: number;
  rs?: number;
}

export default class Magnetic {
  private el: JQuery<HTMLElement>;
  private options: Required<MagneticOptions>;
  private y = 0;
  private x = 0;
  private width = 0;
  private height = 0;

  constructor(el: HTMLElement, options: MagneticOptions = {}) {
    this.el = $(el);
    this.options = {
      y: 0.2,
      x: 0.2,
      s: 0.2,
      rs: 0.7,
      ...options,
    };

    if (this.el.data("magnetic-init")) return;
    this.el.data("magnetic-init", true);

    this.bind();
  }

  private bind() {
    this.el.on("mouseenter", () => {
      const offset = this.el.offset();
      if (!offset) return;
      this.y = offset.top - window.pageYOffset;
      this.x = offset.left - window.pageXOffset;
      this.width = this.el.outerWidth() ?? 0;
      this.height = this.el.outerHeight() ?? 0;
    });

    this.el.on("mousemove", (e) => {
      const y = (e.clientY - this.y - this.height / 2) * this.options.y;
      const x = (e.clientX - this.x - this.width / 2) * this.options.x;
      this.move(x, y, this.options.s);
    });

    this.el.on("mouseleave", () => {
      this.move(0, 0, this.options.rs);
    });
  }

  private move(x: number, y: number, speed: number) {
    gsap.to(this.el, {
      x,
      y,
      force3D: true,
      overwrite: true,
      duration: speed,
    });
  }
}
