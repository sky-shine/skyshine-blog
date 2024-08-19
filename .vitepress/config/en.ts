import { defineConfig, type DefaultTheme } from 'vitepress'


export const en = defineConfig({
    lang: 'en-US',
    // title: "Skyshine",
    // description: "Skyshine's Blog: software, and psychology",

    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/sky-shine/skyshine-blog/edit/master/src/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            copyright: 'Copyright © 2024-present Skyshine'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        // {
        //     text: 'Software',
        //     link: '/en/software/',
        //     activeMatch: '/en/software/'
        // }
        {
            text: 'Playground',
            link:  "/en/CS/examples",
        },
        {
            text: 'Tools',
            items: [
                {text: "MarkdownCanDo", link:  "https://www.markdowncando.com/"},
                {text: "Cyberchef", link:  "https://gchq.github.io/CyberChef"},
            ]
        },
    ]
}


function sidebar(): DefaultTheme.Sidebar {
    return {
        '/en': {base: '', items: sidebarAll()},
    }
}

function sidebarAll(): DefaultTheme.SidebarItem[] {
    return [
        sidebarSoftware(),
        sidebarCS(),
        // sidebarStartup(),
    ]

}

function sidebarCS(): DefaultTheme.SidebarItem {
    return {
        text: 'Computer Science',
        base: '/en/CS/',
        // link: '/',
        collapsed: false,
        items: [
            {text: 'Playground', link: 'examples'},
        ]
    }
}

function sidebarSoftware(): DefaultTheme.SidebarItem {
    return {
        text: 'Software',
        collapsed: false,
        items: [
            {
                text: 'Tools',
                items: [
                    {text: "MarkdownCanDo", link:  "https://www.markdowncando.com/"},
                    {text: "Cyberchef", link:  "https://gchq.github.io/CyberChef"},
                ]
            },
        ]
    }
}
