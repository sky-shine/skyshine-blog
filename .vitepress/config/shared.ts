import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import footnote from "markdown-it-footnote";

export const shared = defineConfig({
    title: 'Skyshine-blog',
    srcDir: 'src',

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        math: true,
        // @mdit-vue/plugin-toc 的选项
        // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
        toc: { level: [1, 2] },
        config: (md) => {
            md.use(footnote);
        },
        image: {
            // 图片懒加载
            lazyLoading: true
        }
    },
    vite: {
        ssr: {
            noExternal: ['monaco-editor']
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        // ['meta', { property: 'og:title', content: 'Markdown Can Do' }],
        // ['meta', { property: 'og:site_name', content: 'skyshine-blog' }],
        // ['meta', { property: 'og:url', content: 'https://skyshine-blog.com/' }],
        // [
        //     'script',
        //     { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0P7S4MY6FW' }
        // ],
        // [
        //     'script',
        //     {},
        //     "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-0P7S4MY6FW');"
        // ]
    ],

    themeConfig: {
        logo: '/favicon.ico',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sky-shine/' }
        ],

        search: {
            provider: 'local',
            options: {
                locales: { ...zhSearch, }
            }
        },

    }
})
