import { add } from "./utils/math";
import { shout } from "./utils/strings";

export function main(): string {
  return shout(`2 + 3 = ${add(2, 3)}`);
}
