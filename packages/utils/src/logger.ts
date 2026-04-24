import { format } from "node:util";
import { pc } from "./picocolors";

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
  error: (...args: any[]) => console.error(tag(args, pc.red`✖`)),
  warn: (...args: any[]) => console.warn(tag(args, pc.yellow`▲`)),
  info: (...args: any[]) => console.info(tag(args, pc.blue`✔`)),
  success: (...args: any[]) => console.info(tag(args, pc.green`✔`)),
};
