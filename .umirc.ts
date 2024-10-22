import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/react-beta-ui/';
let publicPath = '/react-beta-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined;
}

export default defineConfig({
    title: 'React UI',
    mode: 'site',
    outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
});
