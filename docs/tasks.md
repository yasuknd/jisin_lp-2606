# tasks.md

## 目的

本ドキュメントは、女性自身プレミアムLPの**販促LPリニューアル**実装タスクを定義する。

**前提**：`contents.md` / `design.md` / `component-plan.md` を先に更新済みであること。  
実装は上から順に進め、各フェーズ完了時に `npm run build` を通す。

---

## リニューアル方針（再掲）

| 項目 | 方針 |
|---|---|
| セクション順 | **変更しない**（新規セクション追加しない） |
| Hero | 中央集中型・雑誌3枚＋スマホモック |
| 全体 | カード型・淡ピンク〜クリーム・装飾は上品に |
| CTA | 年額主役 / 月額サブ |
| 訴求 | 雑誌・デジタル・特典・料金・信頼 |

---

# Phase 0: 設計MD確認（完了想定）

- [x] `contents.md` 更新（訴求整理・Hero構成・presentation追記）
- [x] `design.md` 更新（promo palette・Hero中央集中・装飾ルール）
- [x] `component-plan.md` 更新（各componentのカード化方針）
- [x] `tasks.md` 更新（本ファイル）

---

# Phase 1: Hero（最優先）

## 1.1 Hero 構造

- [ ] `Hero.jsx`：中央 intro / flanks（magFan + phone）/ cv の3ブロック
- [ ] 雑誌3枚：`hero-cover-accent` / `hero-cover-sub` / `hero-cover-main`
- [ ] デジタル3画面：`hero-digital-panda` / `food` / `lifestyle`
- [ ] `.hero__mockMagazine` を main 表紙に付与
- [ ] 文言は `contents.md` と一致

## 1.2 Hero 装飾・背景

- [ ] 多層グラデ wash（単色ピンク禁止）
- [ ] 中央 glow：`.hero__halo` / `.hero__coreGlow` / `.hero__plate`
- [ ] 花びら・光粒・金線カーブ・ビネット
- [ ] `prefers-reduced-motion` でアニメ停止

## 1.3 Hero タイポ・CTA

- [ ] pill ラベル（`.hero__leadPill`）
- [ ] タイトル2行・グラデ文字＋フォールバック
- [ ] 年額CTA：グラデ・shadow・hover
- [ ] 月額CTA：白＋枠
- [ ] highlights 5つ横並び（SPは折り返し）

## 1.4 Hero レスポンシブ

- [ ] SP：intro → flanks → cv
- [ ] PC：3列 grid（subgrid or fallback）
- [ ] 左右ビジュアルが中央コピーを圧迫しないこと

## 1.5 Hero QA

- [ ] 画像が独立レイヤーである
- [ ] CTA 44px以上
- [ ] `npm run build` 成功

---

# Phase 2: 全体背景・共通装飾・トークン

## 2.1 CSS Variables

- [ ] `--color-promo-*` を `variables.scss` に定義
- [ ] 既存 `--color-brand` との役割分担をコメントまたは design.md 参照

## 2.2 Global

- [ ] `body` 背景：淡ピンク〜クリーム多層グラデ
- [ ] 本文色：`--color-promo-ink`
- [ ] `main` の `padding-bottom`（BottomCta）確認

## 2.3 共通パターン（SCSS）

- [ ] 大角丸カード（32/40px）
- [ ] 薄ピンク border / soft shadow
- [ ] primary / secondary CTA スタイル共通化（各componentで再利用）
- [ ] ゴールドピル label パターン
- [ ] `focus-visible` 統一

## 2.4 Header

- [ ] 半透明＋blur＋薄ピンク border
- [ ] data-gtm 4種

---

# Phase 3: 各セクションのカード化

## 3.1 Update

- [ ] `.update__card` 大角丸ピンク
- [ ] 左文・右雑誌スタック（SPは縦）
- [ ] ゴールド装飾（文言なし）

## 3.2 Pricing

- [ ] 見出し promo-pink
- [ ] 年額カード：recommended・ゴールド縁・primary CTA
- [ ] 月額カード：secondary CTA
- [ ] data-gtm
- [ ] SP：年額 → 月額

## 3.3 Benefits（親＋子）

### Benefits 親

- [ ] セクション見出しスタイル
- [ ] `.benefits__block` ピンク／クリーム交互
- [ ] `.benefits__blockLabel` ゴールドピル

### DigitalService

- [ ] `.digitalService__shell` クリーム
- [ ] スマホモック + intro
- [ ] 3 feature カード（PC横並び）

### PointRewards

- [ ] 3項目カード化
- [ ] `10％`・期間強調

### SeasonalGifts

- [ ] `全員プレゼント` ピル
- [ ] 3ギフトカード横並び（SP縦）

### MemberEvents

- [ ] 2カラム + 画像

### FreeShipping

- [ ] 横長コンパクトブロック

## 3.4 Future

- [ ] クリーム背景
- [ ] 誌面ストリップ + 月桂SVG（文言追加なし）

## 3.5 Notice / Message

- [ ] Notice：控えめ角丸ボックス
- [ ] Message：狭カラム・半透明白カード・本文文言不変

## 3.6 Entry

- [ ] 淡ピンク大パネル
- [ ] 年額 → 月額 → guide（SP）
- [ ] data-gtm 3種

## 3.7 BottomCta

- [ ] ピンクグラデ `.bottomCta__bar`
- [ ] ラベル + 2ボタン
- [ ] 年額白ボタン強調
- [ ] safe-area
- [ ] data-gtm
- [ ] footer扱いでないこと

---

# Phase 4: SP調整・ビルド・QA

## 4.1 レスポンシブ総合

- [ ] Header / BottomCta が画面を圧迫しすぎない
- [ ] Hero SP 読み順
- [ ] Pricing / Entry SP CTA順
- [ ] Benefits 縦積み可読性
- [ ] Message 行長・行間

## 4.2 ビルド・Lint

- [ ] `npm run build` 成功
- [ ] 主要SCSSの記法エラーなし

## 4.3 文言QA

- [ ] 全セクション `contents.md` と一致
- [ ] 参考画像のみの文言を追加していない
- [ ] 金額・日付の誤りなし

## 4.4 デザインQA

- [ ] 白ベースLPに見えない
- [ ] Heroが「1枚広告」として成立
- [ ] 年額CTAが常に主役
- [ ] 装飾が子供っぽくない
- [ ] Benefitsが単調な箇条書きに見えない

## 4.5 技術QA

- [ ] URLは `links.js` 管理
- [ ] 年額・月額は別定数
- [ ] data-gtm 一覧（requirements.md）
- [ ] 画像は用途フォルダ遵守
- [ ] alt 設定
- [ ] SEO head 省略なし（`seo.md`）

## 4.6 checklist.md

- [ ] `docs/checklist.md` を上記完了後に照合

---

# 実装時の参照優先順位

```txt
1. contents.md（文言・セクション責務）
2. design.md（色・Hero・装飾・CTA）
3. component-plan.md（DOM・class）
4. seo.md（head）
5. requirements.md（GTM・技術）
6. assets-policy.md（画像）
```

---

# 完了定義（Definition of Done）

以下をすべて満たしたらリニューアル完了とする。

1. **Hero**が参考方向の「中央集中・雑誌3＋スマホ・華やかだが上品」に見える  
2. **全セクション**がカード／ブロック型で、ピンク〜クリーム基調が統一されている  
3. **雑誌・デジタル・特典・料金・信頼**がスクロールで伝わる（順序は既存のまま）  
4. **年額CTA**が Hero / Pricing / Entry / BottomCta で一貫して主役  
5. `npm run build` が通る  
6. SPで読みやすく、CTAが押しやすい  
