// rollup.config.js
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import { terser } from "rollup-plugin-terser";

export default defineConfig([
  {
    input: "src/index.tsx", // Entry point of your application
    output: {
      file: "dist/bundle.js", // Output file
      format: "cjs",
      sourcemap: true, // Name for your global variable
    },
    plugins: [
      resolve(), // Allows Rollup to find modules in node_modules
      commonjs(), // Converts CommonJS modules to ES6,
      typescript(), // Transpile TypeScript
      babel({
        exclude: "node_modules/**", // Only transpile our source code
        babelHelpers: "bundled",
      }),
      terser(), // Minify the bundle
    ],
  },
]);

// export default {
//   input: "src/index.tsx", // Entry point of your application
//   output: {
//     file: "dist/bundle.js", // Output file
//     format: "cjs",
//     sourcemap: true, // Name for your global variable
//   },
//   plugins: [
//     resolve(), // Allows Rollup to find modules in node_modules
//     commonjs(), // Converts CommonJS modules to ES6
//     babel({
//       exclude: "node_modules/**", // Only transpile our source code
//       babelHelpers: "bundled",
//     }),
//     terser(), // Minify the bundle
//   ],
// };
