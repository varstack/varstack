import { format } from "util";
import { pc } from "@/lib/picocolors.js";

function tag(msgs: any[], prefix?: string) {
  let pre = "🍀 ";
  if (prefix) pre += `${prefix} `;
  return format(...msgs)
    .split("\n")
    .map((line) => pre + line)
    .join("\n");
}

export const logger = {
  log: (...args: any[]) => console.log(tag(args)),
  error: (...args: any[]) => console.error(tag(args, pc.red`error:`)),
  warn: (...args: any[]) => console.warn(tag(args, pc.yellow`warn:`)),
  info: (...args: any[]) => console.info(tag(args, pc.blue`info:`)),
  success: (...args: any[]) => console.info(tag(args, pc.green`success:`)),
};
