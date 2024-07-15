import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import { defineConfig } from "rollup";
import postcss from "rollup-plugin-postcss";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true, // Extract CSS into a separate file
        minimize: true, // Minify the CSS
        sourceMap: true, // Generate source maps
      }),
    ],
  },
]);
