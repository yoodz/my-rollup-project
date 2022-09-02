import json from 'rollup-plugin-json'
import packageJson from './package.json'
import typescript from '@rollup/plugin-typescript';
import { DateTime } from 'luxon'

// 增加到输出文件的头部信息
const banner = `/*\n * ${packageJson.name} v${packageJson.version} \n * build time: ${DateTime.now().toISO()}\n */`

export default {
    input: 'src/index.tsx',
    output: [
        {
            format: 'cjs',
            file: packageJson.main,
            sourcemap: true,
            banner: banner,
        },
        {
            format: 'esm',
            file: packageJson.module,
            sourcemap: true,
            banner: banner,
        },
    ],
    plugins: [
        json(),
        typescript()
    ]
}
