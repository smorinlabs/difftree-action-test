import { main } from "../src/app";

// Placeholder test — this repo exists to exercise difftree-action, not to ship.
export function testMain(): boolean {
  return main() === "2 + 3 = 5!";
}
