# requirements.md

## 目的

本ドキュメントは、女性自身プレミアムLPの実装要件を定義する。

`contents.md` / `integrated.md` / `design.md` / `seo.md` を前提に、実装時に守るべき仕様・制約・優先順位を整理する。

---

## Project

| item | value |
|---|---|
| Project | 女性自身プレミアム LP |
| Tech | Vite + React + SCSS |
| CSS Method | SCSS + BEM |
| Deploy | GitHub Pages |
| Primary Source | contents.md |
| Design Source | design.md |
| SEO Source | seo.md |

---

## 最優先ルール

以下は変更しない。

- セクション構成
- component名
- class名
- 確定済み文言
- DOM上の責務
- CTA文言
- 年額 / 月額の表示順
- Header / BottomCta の固定表示方針
- meta / OGP / canonical / robots の基本方針

不明点がある場合は、以下の順で判断する。

1. `contents.md`
2. `integrated.md`
3. `design.md`
4. `seo.md`
5. Cursorへの個別指示

---

## LPの目的

このLPの目的は、女性自身プレミアムの定期購読申し込みを促進すること。

主な訴求は以下。

- 雑誌が毎号送料無料で届く
- デジタルサービスが使える
- 会員限定特典がある
- 年額 / 月額の2コースから選べる
- 初回特典・ポイント還元がある
- 女性自身ブランドとして信頼できる

---

## 実装範囲

### 対象

- LP本体
- React component実装
- SCSSスタイリング
- PC / SPレスポンシブ対応
- CTAリンク設定
- BottomCta固定表示
- 仮ビジュアル配置
- GTM計測用 `data-gtm` 属性付与
- title / description / OGP / Twitter Card / canonical / robots / JSON-LD のhead設定

### 対象外

- CMS連携
- 決済機能
- 会員ログイン機能の実装
- 外部サービス側のUI変更
- 本番URL確定
- GTMタグ本体の設置
- 画像の最終加工
- OGP画像の本制作

---

## 技術要件

### Framework

- Vite
- React
- TypeScriptは必須ではない
- JavaScript / JSXで実装してよい

### CSS

- SCSSを使用
- BEM命名
- グローバルCSS変数を使用
- CSS Modulesは使用しない
- Tailwindは使用しない

### Directory方針

```txt
src/
├── assets/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Update/
│   ├── Pricing/
│   ├── Benefits/
│   ├── Future/
│   ├── Notice/
│   ├── Message/
│   ├── Entry/
│   └── BottomCta/
├── constants/
│   └── links.js
├── styles/
│   ├── global.scss
│   ├── variables.scss
│   ├── mixins.scss
│   └── reset.scss
├── App.jsx
└── main.jsx
```

---

## Component要件

| component | class | role |
|---|---|---|
| Header | `.header` | 固定ヘッダー |
| Hero | `.hero` | ファーストビュー |
| Update | `.update` | プラン刷新告知 |
| Pricing | `.pricing` | 年額 / 月額コース比較 |
| Benefits | `.benefits` | 会員限定特典 |
| DigitalService | `.digitalService` | デジタルサービス |
| PointRewards | `.pointRewards` | ポイント還元 |
| SeasonalGifts | `.seasonalGifts` | 季節のプレゼント |
| MemberEvents | `.memberEvents` | 会員限定イベント |
| FreeShipping | `.freeShipping` | 送料無料 |
| Future | `.future` | 今後の展望 |
| Notice | `.notice` | 旧コース終了告知 |
| Message | `.message` | 編集長コメント |
| Entry | `.entry` | 最終申し込み |
| BottomCta | `.bottomCta` | 下部固定CTA |

---

## CTA要件

### Primary CTA

- 年額コースに申し込む
- 月額コースに申し込む

### Secondary CTA

- 定期購読のご購入方法はこちら

### Utility CTA

- 所持ポイント
- ポイントを使う
- ログイン
- 新規会員登録

---

## URL要件

URLは直書きしない。  
`constants/links.js` で管理する。

```js
export const LINKS = {
  annual: "https://kokode-digital.jp/products/detail/5203?utm_source=ca&utm_medium=post&utm_campaign=ca_202509_jisin",
  monthly: "https://kokode-digital.jp/products/detail/5203?utm_source=ca&utm_medium=post&utm_campaign=ca_202509_jisin",
  guide: "https://kokode-digital.jp/",
  points: "https://kokode-digital.jp/",
  usePoints: "https://kokode-digital.jp/",
  login: "https://kokode-digital.jp/",
  signup: "https://kokode-digital.jp/",
};
```

年額 / 月額は現時点で同一仮URL。  
将来的に分岐する可能性があるため、必ず別定数で管理する。

---

## GTM要件

以下CTAには `data-gtm` を付与する。

| CTA | data-gtm |
|---|---|
| Pricing 年額 | `pricing_annual_click` |
| Pricing 月額 | `pricing_monthly_click` |
| Entry 年額 | `entry_annual_click` |
| Entry 月額 | `entry_monthly_click` |
| Entry 購入方法 | `entry_guide_click` |
| BottomCta 年額 | `bottom_annual_click` |
| BottomCta 月額 | `bottom_monthly_click` |
| Header 所持ポイント | `header_points_click` |
| Header ポイントを使う | `header_use_points_click` |
| Header ログイン | `header_login_click` |
| Header 新規会員登録 | `header_signup_click` |

---

## SEO要件

`seo.md` の内容を実装する。

必須項目。

- `<html lang="ja">`
- title
- meta description
- OGP
- Twitter Card
- canonical
- robots
- favicon

本番URL・OGP画像URLが未確定の場合は、TODOコメントを残し、仮URLをcanonicalにしない。

構造化データは最低限 `WebPage` を使用してよい。  
`Product` / `Offer` は初期実装では無理に入れない。

---

## デザイン要件

初期出力で優先すること。

- Heroの第一印象が成立している
- Pricingの年額 / 月額比較が明快
- Benefitsが単調なカード羅列になっていない
- BottomCtaが固定表示されている
- Message / Noticeが読みやすい
- 画像が未確定でも仮ビジュアルで成立する
- LP全体が古い定期購読ページに見えない

---

## Layout要件

1280pxをLP全体の固定上限にしない。

| 領域 | 方針 |
|---|---|
| 背景 | 100vw |
| Hero / Benefits | 最大1440px程度まで広く使う |
| Pricing | 1120〜1280px程度 |
| Entry | 960〜1120px程度 |
| BottomCta | 1120〜1280px程度 |
| Message | 720〜800px程度 |
| Notice | 760〜960px程度 |

---

## Responsive要件

### PC

- Header固定
- Hero 2カラム
- Pricing 2カラム
- Benefitsは各componentごとに最適化
- BottomCta固定

### SP

- Header / BottomCtaの画面占有率に注意
- Heroはコピー → ビジュアル
- Pricingは年額 → 月額
- Entryは年額 → 月額 → ガイド
- BottomCtaは2ボタン固定
- Message / Noticeは1カラムで読みやすく

---

## Accessibility要件

- 本文は最低15px以上
- 注釈でも12px未満にしない
- CTAタップ領域は最低44px以上
- `focus-visible` を設定する
- 淡色背景上の文字は必ず濃色
- ゴールド背景に白文字は避ける

---

## Animation要件

アニメーションは補助演出に限定する。

### 使用可

- Heroの軽いfade in
- Updateカードのfade up
- Benefitsブロックのfade up
- SeasonalGiftsのfade up
- CTA hover

### 使用不可

- CTAを見失わせる動き
- BottomCtaの強いアニメーション
- Notice / Message本文の派手なアニメーション
- 過度なパララックス
- ループする煽り演出

---

## 禁止事項

- 文言を勝手に変更しない
- セクション順を変更しない
- component名 / class名を変更しない
- Headerに価格や特典訴求を詰め込まない
- Pricingを簡素な表だけにしない
- Benefitsをただの箇条書きにしない
- BottomCtaをfooter扱いしない
- 画像未確定を理由にビジュアル領域を消さない
- 親サイト風に寄せすぎてLP感を弱めない
- SEO / OGP / canonical / robots を勝手に省略しない


---

## 画像・素材要件

画像運用は `assets-policy.md` を基準にする。

### 前提

- 画像素材は用途別フォルダに仮配置済み
- Cursorは画像選定を行わない
- Cursorはフォルダ用途に従って画像を使用する
- OGP画像は未配置でもよい
- 画像が不足・不一致の場合はCSS仮ビジュアルで補完する

### 画像配置

```txt
src/assets/images/
├── brand/
├── hero/
├── benefits/
├── gifts/
├── events/
└── ogp/
```

### 必須方針

- Hero / DigitalService / SeasonalGifts / MemberEvents のビジュアル領域は空にしない
- 画像がない場合でもCSS placeholderを表示する
- PDFをそのまま `img` タグで使わない
- 日本語ファイル名・スペース入りファイル名をそのままimportしない
- 画像は後から差し替えやすいDOM構造にする
- altを設定する
