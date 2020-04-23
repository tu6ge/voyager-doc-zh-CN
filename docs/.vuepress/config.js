module.exports = { 
    title:"voyager",
    base: process.env.NODE_ENV === 'production'  ? '/':'/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/introduction' },
            { text: '配置', link: '/getting-started/configurations' },
            {
                text: '了解更多',
                ariaLabel: '了解更多',
                items: [
                { text: 'BREAD', link: '/bread/introduction.md' },
                { text: '媒体管理器', link: '/core-concepts/media-manager.md' },
                { text: '菜单管理', link: '/core-concepts/menus-and-menu-builder.md' },
                { text: '数据库管理', link: '/core-concepts/database-manager.md' },
                { text: '角色和权限', link: '/core-concepts/roles-and-permissions.md' }
                ]
            }
        ],
        sidebarDepth:1,
        sidebar: [
            {
                title: '指南',   // 必要的
                path:'/introduction',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/introduction.md'
                ]
            },
            {
                title: '快速上手',   // 必要的
                path: '/getting-started/what-is-voyager',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/getting-started/what-is-voyager.md',
                    '/getting-started/prerequisites.md',
                    '/getting-started/installation.md',
                    '/getting-started/upgrading.md',
                    '/getting-started/configurations.md',
                ]
            },
            { 
                title: 'BREAD（增删改读查）',   // 必要的
                path: '/bread/introduction',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/bread/introduction.md',
                    '/bread/relationships.md',
                    { 
                        title: '表单域',   // 必要的
                        path: '/bread/formfields/introduction',      // 可选的, 应该是一个绝对路径
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            '/bread/formfields/checkbox.md',
                            '/bread/formfields/coordinates.md',
                            '/bread/formfields/date-time.md',
                            '/bread/formfields/dropdown.md',
                            '/bread/formfields/images.md',
                            '/bread/formfields/media-picker.md',
                            '/bread/formfields/number.md',
                            '/bread/formfields/tinymce.md'
                        ]
                    }
                ]
            },
            { 
                title: '基本概念',   // 必要的
                path: '/core-concepts/routing',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/core-concepts/routing.md',
                    '/core-concepts/media-manager.md',
                    '/core-concepts/menus-and-menu-builder.md',
                    '/core-concepts/database-manager.md',
                    '/core-concepts/settings.md',
                    '/core-concepts/compass.md',
                    '/core-concepts/roles-and-permissions.md',
                    '/core-concepts/helper-methods.md',
                    '/core-concepts/multilanguage.md',
                ]
            },
            { 
                title: '定制开发',   // 必要的
                path: '/customization/overriding-files',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/customization/overriding-files.md',
                    '/customization/overriding-routes.md',
                    '/customization/additional-css-js.md',
                    '/customization/enabling-soft-delete.md',
                    '/customization/custom-realtionship-attributes.md',
                    '/customization/tinymce.md',
                    '/customization/adding-custom-formfields.md',
                    '/customization/coordinates.md',
                    '/customization/bread-accessors.md',
                    '/customization/custom-guard.md',
                    '/customization/action-buttons.md',
                ]
            },
            { 
                title: '常见问题',
                path:'/troubleshooting/using-https',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/troubleshooting/using-https',
                    '/troubleshooting/missing-required-parameter.md'
                ]
            }
        ],
        displayAllHeaders: false,
        lastUpdated: '最后更新时间',
        repo:'the-control-group/voyager',
        docsRepo:'tu6ge/voyager-doc-zh-CN',
        docsDir: 'docs',
        docsBranch:'1.3',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们修复翻译错误！',
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-150939145-2' // UA-00000000-0
            }
        ]
    ]
}