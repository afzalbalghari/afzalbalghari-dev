import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};
export const blurUp: Variants = {
  hidden:  { opacity: 0, y: 30, filter: "blur(14px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",  transition: { duration: 0.75, ease } },
};
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.55, ease } },
};
export const scalePop: Variants = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1,   transition: { type: "spring", stiffness: 340, damping: 22 } },
};
export const rotateIn: Variants = {
  hidden:  { opacity: 0, rotate: -8, scale: 0.9 },
  visible: { opacity: 1, rotate:  0, scale: 1,   transition: { duration: 0.6, ease } },
};
export const flipY: Variants = {
  hidden:  { opacity: 0, rotateX: 30, y: 20 },
  visible: { opacity: 1, rotateX:  0, y:  0,  transition: { duration: 0.65, ease } },
};
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1,  delayChildren: 0.05 } },
};
export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};
export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1  } },
};
export const item: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y:  0,  transition: { duration: 0.5, ease } },
};
export const itemLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x:   0, transition: { duration: 0.5, ease } },
};

export const vp   = { once: true, margin: "-70px"  } as const;
export const vpLg = { once: true, margin: "-120px" } as const;
