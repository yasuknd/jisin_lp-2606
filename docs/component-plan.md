# component-plan.md

## 目的

本ドキュメントは、女性自身プレミアムLPのReact component設計を定義する。

`contents.md` / `design.md` の**販促LPリニューアル**方針に沿い、**既存のセクション順・component名を維持**したまま、各ブロックのDOM責務・装飾・カード化方針を整理する。

参考ビジュアルにない**新規セクションcomponentは追加しない**。

---

## App Section Order（固定）

```txt
Header
→ Hero
→ Update
→ Pricing
→ Benefits
  → DigitalService
  → SeasonalGifts
  → MemberEvents
  → FreeShipping
  → PointRewards
→ Future
→ Notice
→ Entry
BottomCta（main外・固定）
```

---

## Component Tree

```txt
App
├── Header
├── main
│   ├── Hero
│   ├── Update
│   ├── Pricing
│   ├── Benefits
│   │   ├── DigitalService
│   │   ├── SeasonalGifts
│   │   ├── MemberEvents
│   │   ├── FreeShipping
│   │   └── PointRewards
│   ├── Future
│   ├── Notice
│   └── Entry
└── BottomCta
```

---

## Global Presentation

| 項目 | 方針 |
|---|---|
| 背景 | `body` に淡ピンク〜クリームの多層グラデ（白ベース禁止） |
| カード | 大角丸（32〜40px）・柔らかい影・薄ピンクborder |
| 装飾 | 花びら・光粒・金線は主にHero／必要箇所のみ |
| CTA | 年額 primary / 月額 secondary を全セクションで統一 |
| 画像 | 用途フォルダ遵守・独立`img`レイヤー |

---

## App

### Role

LP全体の親。セクション順は `contents.md` 固定。

### Structure

```jsx
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Update />
        <Pricing />
        <Benefits />
        <Future />
        <Notice />
        <Entry />
      </main>
      <BottomCta />
    </>
  );
}
```

---

## Header

### class

`.header`

### Role

固定ヘッダー。会員系導線。

### Elements

- `.header__inner`
- `.header__logo` / `.header__logoImage` / `.header__logoText`
- `.header__actions` / `.header__group`
- `.header__button`（points / login / signup）

### Presentation

- `background: rgb(255 253 254 / 0.92)` + `backdrop-filter: blur`
- 薄ピンク `border-bottom`

### GTM

- `header_points_click` / `header_use_points_click` / `header_login_click` / `header_signup_click`

---

## Hero

### class

`.hero`

### Role

**中央集中型の1枚広告**。雑誌・デジタル・特典・CTAを一画面で伝える。

### Structure

```txt
.hero
├── .hero__backdrop（装飾レイヤー群）
└── .hero__inner
    ├── .hero__intro（中央コピー）
    │   ├── .hero__halo / .hero__plate
    │   └── .hero__copy（pill / title / rule / description）
    ├── .hero__flanks（左右ビジュアル）
    │   ├── .hero__magFan → .hero__mag ×3
    │   └── .hero__phone → .hero__phoneStack → .hero__phoneCard ×3
    └── .hero__cv
        ├── .hero__actions（年額・月額CTA）
        └── .hero__highlights（5アイコン）
```

### Key Elements

| element | 責務 |
|---|---|
| `.hero__backdrop` | wash / glow / petals / bokeh / curve / vignette |
| `.hero__leadPill` | ラベル pill |
| `.hero__title` | 2行タイトル・グラデ文字 |
| `.hero__magFan` | 雑誌3枚・扇状・中央寄せ |
| `.hero__mockMagazine` | main表紙（front） |
| `.hero__phone` | スマホ枠＋縦スクロール風3画面 |
| `.hero__cta--annual` | 主役CTA |
| `.hero__cta--monthly` | サブCTA |
| `.hero__highlights` | CTA下・5つ横並び |

### Assets

- `hero-cover-main.jpg` / `hero-cover-accent.jpg` / `hero-cover-sub.jpg`
- `hero-digital-panda.jpg` / `hero-digital-food.jpg` / `hero-digital-lifestyle.jpg`

### Responsive

| breakpoint | order |
|---|---|
| SP | intro → flanks → cv |
| PC | grid 3列（中央 intro+cv / 左右 flanks） |

### GTM

- `hero_annual_click` / `hero_monthly_click`（要件外だが実装済みの場合は維持）

### Notes

- 6枚以上の壁コラージュは**採用しない**（参考の密度は3+3で表現）
- 画像は必ず独立レイヤー（合成1枚にしない）

---

## Update

### class

`.update`

### Role

刷新告知。**大きなピンクカード**。

### Elements

- `.update__inner`
- `.update__card`
- `.update__main`（label / title / list）
- `.update__visual`
- `.update__stack` / `.update__cover`（back / mid / front）
- `.update__deco--gold`（装飾のみ）

### Layout

| PC | SP |
|---|---|
| 文左・雑誌右 | 文上・雑誌下 |

### Data

```js
const updateItems = [ /* contents.md 3項目 */ ];
```

---

## Pricing

### class

`.pricing`

### Role

**選べる2コース**比較・強CV。

### Elements

- `.pricing__inner` / `.pricing__header`
- `.pricing__cards`
- `.pricing__card` / `.pricing__card--recommended`
- `.pricing__label` / `.pricing__course` / `.pricing__price` / `.pricing__description`
- `.pricing__button` / `--primary` / `--secondary`

### Presentation

- 年額：ゴールド縁・ピンクグラデ背景・primary button
- 月額：白カード・secondary button
- 見出し色：`--color-promo-pink`

### Data

`pricingPlans` 配列（annual `recommended: true`）

### GTM

- `pricing_annual_click` / `pricing_monthly_click`

---

## Benefits

### class

`.benefits`

### Role

特典セクション親。**5ブロック縦積み**。

### Elements

- `.benefits__inner` / `.benefits__header` / `.benefits__title`
- `.benefits__body`
- `.benefits__block` + `.benefits__blockLabel`（特典1〜5）

### Presentation

- 各 `.benefits__block` = 大角丸カード（ピンク／クリーム交互）
- 子componentはブロック内にネスト（共通カード化しすぎない）

### Children（順序固定）

1. DigitalService
2. SeasonalGifts
3. MemberEvents
4. FreeShipping
5. PointRewards

---

## DigitalService

### class

`.digitalService`

### Role

**デジタルサービス**訴求。クリーム大シェル。

### Elements

- `.digitalService__shell`
- `.digitalService__hero`（mock + intro）
- `.digitalService__phone` / `.digitalService__phoneFrame` / `.digitalService__phoneStack`
- `.digitalService__features` / `.digitalService__feature` / `.digitalService__featureFig`

### Layout

| PC | SP |
|---|---|
| モック＋見出し横並び / 下3カード横並び | 縦積み |

### Data

`digitalServiceItems`（3件・既存文言）

---

## PointRewards

### class

`.pointRewards`

### Role

ポイント還元。

### Elements

- `.pointRewards__panel`
- `.pointRewards__title` / `.pointRewards__description`
- `.pointRewards__list` / `.pointRewards__item`
- `.pointRewards__highlight`（`10％`・期間用・任意）

### Presentation

- 3項目をカードまたはリスト化
- 数字・期間を強調

---

## SeasonalGifts

### class

`.seasonalGifts`

### Role

**豪華特典**（季節プレゼント）。

### Elements

- `.seasonalGifts__panel`
- `.seasonalGifts__label`（全員プレゼント・ゴールドピル）
- `.seasonalGifts__title` / `.seasonalGifts__description`
- `.seasonalGifts__cards` / `.seasonalGifts__card`
- `.seasonalGifts__image` / `.seasonalGifts__imagePlaceholder`

### Layout

- PC：3カード横並び
- SP：縦積み

### Assets

- `src/assets/images/gifts/` 配下

---

## MemberEvents

### class

`.memberEvents`

### Role

会員限定イベント。

### Elements

- `.memberEvents__panel`
- `.memberEvents__visual`
- `.memberEvents__content` / `.memberEvents__title` / `.memberEvents__description` / `.memberEvents__list`

### Layout

- PC：画像 + テキスト
- SP：画像 → テキスト

---

## FreeShipping

### class

`.freeShipping`

### Role

**毎号送料無料**の実利確認。

### Elements

- `.freeShipping__panel`
- `.freeShipping__head` / `.freeShipping__icon`
- `.freeShipping__title` / `.freeShipping__list` or `.freeShipping__description`

### Presentation

- 横長コンパクトブロック

---

## Future

### class

`.future`

### Role

これからの充実・期待感（信頼の前段）。

### Elements

- `.future__inner` / `.future__ribbon`（任意）
- `.future__grid`
- `.future__copy`（label / body）
- `.future__stripWrap` / `.future__strip` / `.future__stripItem`
- `.future__emblem` / `.future__laurel`（SVG・文言なし）

### Presentation

- クリーム背景
- 表紙ストリップ（hero-cover流用可・装飾目的）

---

## Notice

### class

`.notice`

### Role

旧コース終了告知。

### Elements

- `.notice__box`
- `.notice__title` / `.notice__description`

### Presentation

- 控えめな角丸ボックス

---

## Entry

### class

`.entry`

### Role

最終申し込みパネル。

### Elements

- `.entry__inner` / `.entry__panel`
- `.entry__title`
- `.entry__buttons`
- `.entry__button--annual` / `.entry__button--monthly`
- `.entry__guide`

### Presentation

- 淡ピンク大パネル
- SP：年額 → 月額 → guide

### GTM

- `entry_annual_click` / `entry_monthly_click` / `entry_guide_click`

---

## BottomCta

### class

`.bottomCta`

### Role

下部固定CV。スクロール後も申し込み可能に。

### Elements

- `.bottomCta__bar`（グラデ背景）
- `.bottomCta__label`
- `.bottomCta__inner`
- `.bottomCta__button--annual` / `.bottomCta__button--monthly`

### Presentation

- ピンクグラデバー
- 年額：白ボタン（強調）/ 月額：半透明枠
- `padding-bottom: env(safe-area-inset-bottom)`

### Notes

- **footer扱いしない**
- z-index: 100（Headerと同層）

### GTM

- `bottom_annual_click` / `bottom_monthly_click`

---

## Shared Patterns（実装時参照）

### Promo Card

```scss
// 各セクションの .__card / .__panel / .__shell に共通概念
border-radius: var(--radius-card);
border: 1px solid var(--color-border);
box-shadow: var(--shadow-card);
background: linear-gradient(...); // ピンク or クリーム
```

### Promo CTA Primary

```scss
// .hero__cta--annual / .pricing__button--primary / .entry__button--annual 等
background: linear-gradient(180deg, promo-pink-light, promo-pink, brand-dark);
border-radius: 999px;
min-height: 48px; // SP
box-shadow: var(--shadow-cta);
```

### Gold Pill Label

```scss
// .benefits__blockLabel / .seasonalGifts__label / .update__label 等
background: linear-gradient(90deg, gold-light, gold);
border-radius: 999px;
```

---

## Non-goals（本リニューアルでやらないこと）

- セクションの追加・削除・並べ替え
- component名・BEM block名の変更
- 参考画像のみのコピー文言（例：2ヶ月お得、未掲載の5カテゴリ見出し）
- 画像の1枚化・AIによる再分類
