import $ from "jquery";
import gsap from "gsap";

interface CursorOptions {
  container?: string;
  speed?: number;
  ease?: string;
  visibleTimeout?: number;
}

export default class Cursor {
  private options: Required<CursorOptions>;
  private body: JQuery<HTMLElement>;
  private el: JQuery<HTMLElement>;
  private text: JQuery<HTMLElement>;
  private visible = false;
  private visibleInt?: ReturnType<typeof setTimeout>;
  private stick?: { x: number; y: number };
  private pos = { x: 0, y: 0 };

  constructor(options: CursorOptions = {}) {
    this.options = {
      container: "body",
      speed: 0.7,
      ease: "expo.out",
      visibleTimeout: 300,
      ...options,
    };
    this.body = $(this.options.container);
    this.el = $('<div class="cb-cursor"></div>');
    this.text = $('<div class="cb-cursor-text"></div>');
    this.init();
  }

  private init() {
    this.el.append(this.text);
    this.body.append(this.el);
    this.bind();
    this.move(-window.innerWidth, -window.innerHeight, 0);
  }

  private bind() {
    this.body
      .on("mouseleave", () => this.hide())
      .on("mouseenter", () => this.show())
      .on("mousemove", (e) => {
        const { clientX, clientY } = e;
        this.pos = {
          x: this.stick
            ? this.stick.x - (this.stick.x - clientX) * 0.15
            : clientX,
          y: this.stick
            ? this.stick.y - (this.stick.y - clientY) * 0.15
            : clientY,
        };
        this.update();
      })
      .on("mousedown", () => this.setState("-active"))
      .on("mouseup", () => this.removeState("-active"))
      .on("mouseenter", "a,input,textarea,button", () =>
        this.setState("-pointer")
      )
      .on("mouseleave", "a,input,textarea,button", () =>
        this.removeState("-pointer")
      )
      .on("mouseenter", "iframe", () => this.hide())
      .on("mouseleave", "iframe", () => this.show())
      .on("mouseenter", "[data-cursor]", (e) => {
        const target = e.currentTarget as HTMLElement;
        this.setState(target.dataset.cursor || "");
      })
      .on("mouseleave", "[data-cursor]", (e) => {
        const target = e.currentTarget as HTMLElement;
        this.removeState(target.dataset.cursor || "");
      })
      .on("mouseenter", "[data-cursor-text]", (e) => {
        const target = e.currentTarget as HTMLElement;
        this.setText(target.dataset.cursorText || "");
      })
      .on("mouseleave", "[data-cursor-text]", () => this.removeText())
      .on("mouseenter", "[data-cursor-stick]", (e) => {
        const target = e.currentTarget as HTMLElement;
        this.setStick(target.dataset.cursorStick || "");
      })
      .on("mouseleave", () => this.removeStick());
  }

  private setState(state: string) {
    this.el.addClass(state);
  }

  private removeState(state: string) {
    this.el.removeClass(state);
  }

  private setText(text: string) {
    this.text.html(text);
    this.el.addClass("-text");
  }

  private removeText() {
    this.el.removeClass("-text");
  }

  private setStick(selector: string) {
    const target = $(selector);
    const bound = target.get(0)?.getBoundingClientRect();
    if (!bound) return;

    this.stick = {
      y: bound.top + target.height()! / 2,
      x: bound.left + target.width()! / 2,
    };
    this.move(this.stick.x, this.stick.y, 5);
  }

  private removeStick() {
    this.stick = undefined;
  }

  private update() {
    this.move();
    this.show();
  }

  private move(x?: number, y?: number, duration?: number) {
    gsap.to(this.el, {
      x: x ?? this.pos.x,
      y: y ?? this.pos.y,
      force3D: true,
      overwrite: true,
      ease: this.options.ease,
      duration: this.visible ? duration ?? this.options.speed : 0,
    });
  }

  private show() {
    if (this.visible) return;
    clearInterval(this.visibleInt);
    this.el.addClass("-visible");
    this.visibleInt = setTimeout(() => (this.visible = true));
  }

  private hide() {
    clearInterval(this.visibleInt);
    this.el.removeClass("-visible");
    this.visibleInt = setTimeout(
      () => (this.visible = false),
      this.options.visibleTimeout
    );
  }
}
