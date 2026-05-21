# design.md

## 目的

本ドキュメントは、女性自身プレミアムLPの**販促ビジュアル**としてのデザイン方針を定義する。

`contents.md` を正とし、React + SCSS 実装時に迷わないよう、トーン、カラー、タイポ、レイアウト、セクション別の見せ方、Hero構図、装飾ルールを整理する。

参考ビジュアルは**模倣しない**。既存セクション順・component名・class名は維持する。

---

## Design Concept

```txt
読む楽しみが、毎号届く。
雑誌とデジタルと特典がつながる、女性自身の新しい定期購読体験。
```

このLPは、**「女性誌の販促1枚」**として第一印象を作りつつ、スクロールで**雑誌 → デジタル → 特典 → 料金 → 信頼**が順に伝わる構成とする。

「整ったコーポレートサイト」ではなく、**華やかで上品な女性誌LP**を目指す。

---

## Design Keywords

| keyword | 方針 |
|---|---|
| 華やか | 密度のある装飾（花びら・光・金線）だが子供っぽくしない |
| 上品 | 彩度を抑え、ゴールドは細く・薄く |
| プレミアム | 光のグラデ・立体感CTA・大きな角丸カード |
| 女性誌らしい | 明朝見出し・ピンク〜クリーム・編集感 |
| 申し込みやすい | 年額CTAを常に主役、タップ領域44px以上 |
| 読みやすい | 本文コラム幅は抑え、淡色背景上の文字は濃色 |

---

# Color Design

## Promo Palette（優先）

| role | hex | 用途 |
|---|---|---|
| Main pink | `#d94b7f` | CTA・見出しアクセント |
| Main pink light | `#e7548b` | グラデ上端 |
| Background pink | `#fff7f9` | LPベース |
| Background cream | `#fff3e6` | 交互ブロック |
| Background blush | `#ffe8ef` | カード・Hero下地 |
| Text primary | `#352a2a` | 本文 |
| Text soft | `#5a3a42` | リード・補足 |
| Gold accent | `#d8a84f` | 細線・ピル・装飾 |
| Gold light | `#f0d18a` | グラデハイライト |

## CSS Variables（実装推奨）

```scss
:root {
  /* 既存ブランド（CTA濃色など） */
  --color-brand: #d84f7a;
  --color-brand-dark: #b8325f;
  --color-brand-light: #fde8ef;

  /* 販促LP用（本リニューアルで優先） */
  --color-promo-pink: #d94b7f;
  --color-promo-pink-light: #e7548b;
  --color-promo-bg: #fff7f9;
  --color-promo-cream: #fff3e6;
  --color-promo-blush: #ffe8ef;
  --color-promo-ink: #352a2a;
  --color-promo-ink-soft: #5a3a42;
  --color-promo-gold: #d8a84f;
  --color-promo-gold-light: #f0d18a;

  --color-surface: #ffffff;
  --color-border: rgb(217 75 127 / 0.12);
}
```

## Color Usage Rules

### Do

- LP全体背景は**白単色ではなく**、淡ピンク〜クリームの多層グラデ
- Heroは**中央が明るい**放射グラデ（タイトル可読性）
- 年額CTA・おすすめラベルに**ゴールド系**を補助的に使用
- セクションカードはピンク／クリームを**交互**にしてリズム
- DigitalServiceは**クリーム系シェル**（ブルーは補助のみ・主役にしない）

### Don't

- 全面ベタピンク
- キラキラ・高彩度のポップ装飾
- 子供向けイラスト調
- CTAを淡すぎて埋もれさせる
- 参考画像にだけある色・コピーを無断追加

---

# Decoration System

## 使用してよい装飾

| 要素 | 実装例 | 強度 |
|---|---|---|
| 花びら | `.hero__petals` / SVG pattern / mask | 薄い（opacity 0.06〜0.14） |
| 光粒 | `.hero__bokeh` / `.hero__sparkle` | 控えめ・中央寄せ |
| ゴールド細線 | SVG curve / `.hero__goldRule` | 1px前後 |
| 淡いグラデ | `radial-gradient` 多層 | Hero・背景・CTA |
| 角丸フレーム | `.hero__plate` / カード二重線 | 上品に |
| 月桂・円形装飾 | Future SVG（文言なし） | 信頼補助 |

## 避ける装飾

- ループするキラキラアニメ
- 強いパララックス
- ネオン・原色
- 過剰なbadge（未確定コピー）

---

# Typography

## Font Family

```scss
--font-base: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
--font-serif: "Noto Serif JP", "Yu Mincho", serif;
--font-en: "Montserrat", "Helvetica Neue", Arial, sans-serif;
```

## Type Scale（販促LP調）

### PC

| role | size | line-height | weight | font |
|---|---:|---:|---:|---|
| Hero label (pill) | 12〜13px | 1.45 | 800 | base |
| Hero title | 48〜68px | 1.05 | 700 | serif |
| Hero description | 18〜22px | 1.62 | 800 | base |
| Section title | 34〜36px | 1.4 | 700 | serif |
| Section title accent | — | — | — | promo-pink |
| Card title | 20〜22px | 1.45 | 700 | serif |
| Body | 16px | 1.85〜1.9 | 400〜600 | base |
| Price | 34〜36px | 1.2 | 800 | base |
| CTA | 16〜17px | 1.35 | 800 | base |

### SP

| role | size | line-height | weight |
|---|---:|---:|---:|
| Hero title | 32〜42px | 1.05 | 700 |
| Hero description | 15〜17px | 1.62 | 800 |
| Section title | 24〜26px | 1.45 | 700 |
| Body | 15px | 1.85 | 400 |
| CTA | 15〜16px | 1.35 | 800 |

## Title Treatment（Hero）

- 明朝・広めの `letter-spacing`
- **グラデーション文字**（白〜ピンク〜濃ピンク）＋ `drop-shadow`
- `@supports not (background-clip: text)` 時は白文字＋shadowにフォールバック

---

# Layout System

## Width Policy

- `1280px` をLP全体の固定上限に**しない**
- Hero・Benefitsのビジュアルは画面幅を広く使う
- 本文・価格・Messageは可読幅で制御

```txt
section background = 100vw
readable content = tokenに応じた max-width
visual collage = fluid（中央寄せ）
```

## Width Tokens

既存トークンを維持。セクションごとの目安は以下。

| section | inner max-width |
|---|---|
| Hero | min(1220px, 100%) / ビジュアルはfluid |
| Update / Pricing | `--content-lg` |
| Benefits | `--content-wide` |
| Message | `--content-sm` |
| Entry | `--content-md` |
| BottomCta | `--content-lg` |

---

# Spacing / Radius / Shadow（販促LP）

```scss
--radius-card: 32px;      /* SP */
--radius-card-pc: 40px; /* PC */
--radius-pill: 999px;

--shadow-card: 0 16px 40px rgb(60 28 40 / 0.07);
--shadow-card-inset: 0 1px 0 rgb(255 255 255 / 0.65) inset;
--shadow-cta: 0 12px 36px rgb(72 12 38 / 0.38);
--shadow-cta-inset: 0 4px 0 rgb(120 30 55 / 0.32) inset;
```

- **角丸は大きめ**（カード・パネル）
- **影は柔らかく**（濃いドロップのみ避ける）
- **境界線は薄いピンク**（`rgb(217 75 127 / 0.12)` 前後）

---

# CTA Visual Hierarchy

| priority | CTA | visual |
|---:|---|---|
| 1 | 年額コースに申し込む | ピンクグラデ・pill・内側ハイライト・shadow・hoverで軽く浮く |
| 2 | 月額コースに申し込む | 白背景・ピンク枠・shadow弱め |
| 3 | 定期購読のご購入方法はこちら | テキストリンク・下線 |
| 4 | Header会員ボタン | 小さめユーティリティ |

全CTA：最小高さ **SP 48px / PC 52px**、タップ領域 **44px以上**。

---

# Section Design（カード型・ブロック型）

## Header

- fixed / 半透明淡ピンク / blur
- ロゴ左・アクション右

## Hero（最重要）

### 構図：中央集中型広告

```txt
        [ 光・花びら・金線・粒子 ]
    [雑誌3枚]     中央コピー＋CTA     [スマホモック]
        [ 特典アイコン5つ横並び ]
```

### PC

- `grid` 3列：左flanks（雑誌）/ 中央intro+cv / 右flanks（phone）
- または subgrid で中央とflanksを重ね配置
- タイトル周辺：`.hero__halo` + `.hero__coreGlow` + `.hero__plate`

### SP

- order：intro → flanks → cv
- 雑誌・スマホはコンパクトに横並び

### 画像レイヤー

| layer | class | asset |
|---|---|---|
| 雑誌後方 | `.hero__mag--back` | hero-cover-accent |
| 雑誌中間 | `.hero__mag--mid` | hero-cover-sub |
| 雑誌前面 | `.hero__mag--front.hero__mockMagazine` | hero-cover-main |
| デジタル | `.hero__phoneCard` ×3 | panda / food / lifestyle |

### 背景

- 単色ピンク禁止
- 上：白〜淡ピンクのスポット / 下：ローズ〜濃ピンクの縦グラデ
- `.hero__petals` / `.hero__dots` / `.hero__curve`（金線）

---

## Update

- **大きな角丸ピンクカード**（32〜40px radius）
- 左：UPDATEピル＋見出し＋3項目（各項目も小カード可）
- 右：雑誌3枚スタック＋ゴールド円装飾

---

## Pricing

- 見出し：明朝・**promo-pink**
- 2カード比較、**年額を主役**
  - ゴールド縁・淡ピンクグラデ背景・内側の淡い二重線
- 月額：白＋ピンク枠
- SP：年額 → 月額

---

## Benefits（親）

- セクション見出し：中央・ピンク明朝
- 子5ブロック：それぞれ**独立した大カード**
- 奇数：ピンク系 / 偶数：クリーム系
- `特典n` ラベル：ゴールドピル

### DigitalService

- クリーム大シェル
- スマホモック（Hero同系）＋見出し
- 下：3特記を横並びカード（PC）

### PointRewards

- 3項目＋ `10％` / 期間の強調

### SeasonalGifts

- `全員プレゼント` ゴールドピル
- 3ギフト横並びカード

### MemberEvents

- 画像＋テキスト2カラム

### FreeShipping

- 横長コンパクトブロック・アイコン

---

## Future

- クリーム背景
- 中央テキスト + 誌面ストリップ + 金の円／月桂SVG（文言なし）

## Notice

- コンパクト角丸ボックス・控えめ

## Message

- 約760pxカラム・半透明白カード・ピンク見出し

## Entry

- 淡ピンク大パネル・年額主役CTA

## BottomCta

- **ピンクグラデ固定バー**
- ラベル + 年額（白ボタン）/ 月額（枠線）
- footer扱い禁止・safe-area

---

# Initial Visual Output Spec

`design.md` は最終デザイン固定ではない。  
大きな方向修正は本ファイルを更新し、細部は個別指示で調整する。

## Section Layout Matrix（現行）

| section | layout |
|---|---|
| Header | ロゴ左 / アクション右 / 半透明 |
| Hero | **中央集中** / 左雑誌3枚 / 右スマホ / 中央CTA |
| Update | **大カード** / 文左・雑誌右 |
| Pricing | **2比較カード** / 年額強調 |
| Benefits | **5ブロック縦積み** / 各カード化 |
| DigitalService | クリームシェル / モック + 3カード |
| PointRewards | 3項目 |
| SeasonalGifts | 3ギフトカード |
| MemberEvents | 2カラム |
| FreeShipping | 横長ミニ |
| Future | クリーム + ストリップ + 装飾 |
| Notice | コンパクト |
| Message | 狭カラム |
| Entry | 中央CTAパネル |
| BottomCta | **グラデ固定バー** |

---

# Placeholder Visual Policy

画像未確定でも**レイアウトを空にしない**。

| area | fallback |
|---|---|
| Hero 雑誌 | 必須画像 or CSS矩形 |
| Hero スマホ | フレーム + 画像 or グレー画面 |
| DigitalService | Hero同様のphone frame |
| SeasonalGifts | 3枠・淡背景＋alt |
| MemberEvents | 画像 or 淡プレースホルダー |

---

# Responsive Design

## PC

- Hero：3列または重ねグリッド・**1画面広告密度**
- Pricing：2列
- DigitalService features：3列
- SeasonalGifts：3列
- BottomCta：ラベル + 2ボタン横並び

## SP

- Hero：intro → flanks → cv
- Pricing / Entry：年額 → 月額
- Benefits：縦積み
- Header / BottomCta が本文を圧迫しない高さ

---

# Animation

## Allowed

- Hero：fade / 軽いtranslate
- 装飾：ごく弱いtwinkle（`prefers-reduced-motion` で停止）
- CTA hover：軽い浮き

## Avoid

- BottomCtaの強い動き
- Notice / Message の派手な動き
- ループ煽り

---

# Accessibility

- 本文 **15px以上**
- 注釈 **12px以上**
- CTA **44px以上**
- `focus-visible` 必須
- 淡色背景上の文字は **#352a2a 系**で十分なコントラスト

---

# Final Design Rule

```txt
女性誌の販促ビジュアルとして魅力的であること
+
雑誌・デジタル・特典・料金・信頼が伝わること
+
年額申し込みが迷わず選べること
```

装飾はすべて上記を補助する。主役は**中央のコピー・価値・CTA**。
