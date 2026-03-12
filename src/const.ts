import { description, name, version } from "../package.json";

export const DESCRIPTION = description;
export const NAME = name;
export const VERSION = version;

export const CLI = {
  name: NAME,
  description: DESCRIPTION,
  version: VERSION,
};
