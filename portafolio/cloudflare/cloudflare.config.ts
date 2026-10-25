import worker from "./worker.js" with { type: "cf-worker" };
import { bindings, defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    main: worker,
    name: "viewpulse",
    compatibilityDate: "2026-10-01",
    env: {
      DB: bindings.d1({
        name: "cv-views",
        id: "d87efa6c-9d59-42a9-a6ec-1e7145ef6248",
      }),
    },
  },
});
