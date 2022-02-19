import "open-props/style";
import "open-props/normalize";

import confetti from "canvas-confetti";

confetti.create(null, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

console?.log("ready.");
