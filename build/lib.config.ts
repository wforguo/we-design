/**
 * @Author: forguo
 * @Date: 2022/7/2 12:16
 * @Description: lib.config
 */
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
//  提取ts文件
import dts from 'vite-plugin-dts';

// 文档: https://vitejs.dev/config/
export default (configEnv: any) => {
    const { mode } = configEnv;
    const env = loadEnv(mode, process.cwd());
    // 增加环境变量
    env.APP_VERSION = require('../package.json').version;
    env.APP_BUILD_TIME = require('dayjs')().format('YYYY-MM-DD HH:mm:ss');
    return defineConfig({
        server: {
            open: true,
            port: 3003,
            host: '0.0.0.0',
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '@/packages': resolve(__dirname, './packages'),
            },
        },
        define: {
            'process.env': JSON.stringify(env),
        },
        build: {
            outDir: 'lib',
            lib: {
                entry: resolve(__dirname, '../packages/index.ts'),
                name: 'WeiDesign',
                fileName: (format) => `wei-design.${format}.js`,
            },
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
        plugins: [
            vue({ include: [/\.vue$/, /\.md$/] }),
            vueJsx(),
            Markdown(),
            dts(),
        ],
    });
};
