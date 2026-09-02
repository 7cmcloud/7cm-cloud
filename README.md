# 7CM Cloud — 用户面板（GitHub Pages）

与 [Gou-Tech](https://github.com/gougoute/Gou-Tech) 相同结构：`docs/` 目录存放静态站点，由 GitHub Pages 发布。

站点内容由 [nova-panel](https://github.com/7cm-cloud/nova-panel) 构建产物同步而来。

## 更新部署内容

在 `nova-panel` 目录执行：

```bash
npm run build
```

然后将 `dist/` 同步到本仓库 `docs/`：

```powershell
Remove-Item docs -Recurse -Force
robocopy ..\nova-panel\dist docs /E
New-Item docs\.nojekyll -ItemType File -Force
```

## 本地预览

```bash
cd docs
npx serve .
```

## GitHub Pages

Settings → Pages → Branch: `main`，Directory: `/docs`

## 配置

运行时配置位于 `docs/config.js`，修改后刷新即可生效，无需重新打包（但若改了 React 源码仍需重新 build）。
