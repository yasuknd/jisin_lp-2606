# jisin-lp-project-template

女性自身プレミアムLP用のプロジェクト初期フォルダ構成テンプレートです。

## 開発

```bash
npm install
npm run dev
```

## GitHub Pages 公開

### 1. GitHub リポジトリ作成

リポジトリ名が `jisin_lp-2606` 以外の場合は、以下をリポジトリ名に合わせて更新してください。

- `.env.production` の `VITE_BASE_PATH`
- `.env.example` の `VITE_BASE_PATH`

例: リポジトリ名が `jisin-lp-premium` の場合

```txt
VITE_BASE_PATH=/jisin-lp-premium/
```

### 2. GitHub Pages 設定

1. GitHub リポジトリの **Settings → Pages**
2. **Build and deployment → Source** を `GitHub Actions` に設定
3. `main` ブランチへ push すると `.github/workflows/deploy-pages.yml` が自動デプロイします

公開 URL の例:

```txt
https://<username>.github.io/jisin_lp-2606/
```

### 3. 簡易パスワード（確認用）

GitHub Pages では Basic 認証が使えないため、JS + `sessionStorage` による簡易ゲートを入れています。

- コンポーネント: `src/components/PreviewGate/`
- 定数: `src/constants/previewGate.js`
- 本番ビルドでは有効（`VITE_ENABLE_PREVIEW_GATE=true`）
- ローカル開発では無効（`.env.development`）

#### 初期パスワード

```txt
JP!2026Lp#June
```

GitHub 側で変更する場合:

1. リポジトリの **Settings → Secrets and variables → Actions**
2. `PREVIEW_PASSWORD` を追加
3. 再デプロイ

ローカル確認:

```bash
cp .env.example .env.local
npm run build
npm run preview
```

### 4. 初回 push 手順

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yasuknd/jisin_lp-2606.git
git push -u origin main
```

## 配置ルール

```txt
project-root/
├── .cursor/
│   └── rules/
│       ├── global.mdc
│       ├── workflow.mdc
│       └── rules.mdc
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── docs/
│   ├── requirements.md
│   ├── contents.md
│   ├── seo.md
│   ├── design.md
│   ├── assets-policy.md
│   ├── component-plan.md
│   ├── tasks.md
│   └── checklist.md
└── src/
    └── assets/
        └── images/
            ├── brand/
            ├── hero/
            ├── benefits/
            ├── gifts/
            ├── events/
            └── ogp/
```

## 画像配置

- `brand/`: ロゴ画像
- `hero/`: Hero用画像
- `benefits/`: DigitalServiceなどBenefits内のデジタル・コンテンツ訴求画像
- `gifts/`: SeasonalGiftsの特典画像
- `events/`: MemberEvents用画像
- `ogp/`: OGP画像。現時点では空でもOK

## 注意

`.gitkeep` は空フォルダ保持用です。画像やmdを配置した後、不要なら削除して構いません。

簡易パスワードは完全なセキュリティではありません。社外秘の確認用途のみに使用してください。
