import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from "rollup-plugin-dts";
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import { readFileSync } from 'fs';

// 读取 package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

// 外部依赖，这些不会被打包进最终的构建文件中
const externalModules = [
  'diff',
  'unist-builder',
  'unist-util-visit',
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    external: externalModules,
    plugins: [
      cleaner({
        targets: ['./dist/']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      typescript({
        tsconfig: './tsconfig.json',
        outputToFilesystem: true
      }),
      json()
    ]
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types/index.d.ts", format: "es" }],
    plugins: [dts()],
  }
];