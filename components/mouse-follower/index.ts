import $ from "jquery";
import Cursor from "./cursor";
import Magnetic from "./magnetic";

export function initCubertoCursor() {
  if (typeof window === "undefined") return;

  const cursor = new Cursor();
  $("[data-magnetic]").each(function () {
    new Magnetic(this as HTMLElement);
  });

  return cursor;
}
