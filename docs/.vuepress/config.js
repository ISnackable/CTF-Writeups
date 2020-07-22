module.exports = {
    title: 'ISnackable',
    description: 'A place to share my writeups',
    base: '/Writeups/',
    theme: 'yuu',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'CTF', link: '/CTF/' },
        ],
        logo: '/images/logo.png',
        sidebar: 'auto',
        smoothScroll: true,
        yuu: {
            defaultColorTheme: 'blue',
            defaultDarkTheme: true,
            disableThemeIgnore: true,
        },
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'ISnackable/#',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'GitHub',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
    },
};