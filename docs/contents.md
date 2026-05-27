# contents.md

## Project Overview

- Project: 女性自身プレミアム LP
- Tech: Vite + React + SCSS(BEM)
- Deploy: GitHub Pages
- Purpose: React component実装・文言・DOM構造の参照元
- Rule:
  - **本ファイルに記載した文言を実装の正とする**
  - section単位で整理
  - React component化前提
  - セクション順・component名・class名は変更しない
  - 参考ビジュアルにない**新規セクションは追加しない**

---

## LP Redesign Direction（2026）

### ゴール

参考ビジュアルを**完全コピーしない**。  
既存セクション構成のまま、**「女性自身プレミアムらしい、華やかで上品な販促LP」**として、次が一目で伝わるようにする。

```txt
雑誌が毎号届く（送料無料）
→ デジタルも読める
→ 豪華な会員特典がある
→ 年額 / 月額から選べる
→ 女性自身ブランドの信頼感
```

### 訴求の流れ（セクション順は維持）

| 順 | section | 伝えること |
|---|---|---|
| 1 | Hero | 雑誌＋デジタル＋特典の**プレミアムサービス全体像** |
| 2 | Update | サービス刷新・新コース・初回特典 |
| 3 | Pricing | **選べる2コース**・毎号送料無料・年額おすすめ |
| 4 | Benefits | **デジタル**・ポイント・**豪華特典**・イベント・送料無料 |
| 5 | Future | これからの充実（期待感） |
| 6 | Notice | 旧コース終了（補足） |
| 7 | Entry | 最終申し込み |
| 8 | BottomCta | スクロール後も申し込み導線 |

### 全体トーン

- 「整ったWebサイト」ではなく**女性誌の販促ビジュアル**
- 可読性・押しやすさ・レスポンシブは必須
- CTAは**年額を主役**、月額をサブ
- 画像は1枚化せず**独立レイヤー**で配置

---

# Naming Rules

## React Component

- PascalCase

```txt
Hero
Pricing
BottomCta
```

## BEM Block

- lowerCamelCase
- BEM element は `__`
- modifier は `--`

```txt
.bottomCta
.bottomCta__button
.bottomCta__button--primary
```

---

# Section Structure

| section | component | class | 訴求役割 |
|---|---|---|---|
| 固定ヘッダー | Header | `.header` | 会員導線 |
| ファーストビュー | Hero | `.hero` | 雑誌＋デジタル＋特典の第一印象 |
| プラン刷新告知 | Update | `.update` | 刷新・新コース・初回特典 |
| 定期購入比較 | Pricing | `.pricing` | 選べる2コース・年額強調 |
| 会員限定特典 | Benefits | `.benefits` | デジタル・特典・実利 |
| 今後の展望 | Future | `.future` | これからの充実 |
| 旧コース終了告知 | Notice | `.notice` | 既存ユーザー向け補足 |
| 定期購読申し込み | Entry | `.entry` | 最終CV |
| 下部固定CTA | BottomCta | `.bottomCta` | 常時CV |

---

# Header

## component

```txt
Header
```

## class

```txt
.header
```

## elements

- logo
- navigation
- action buttons

## text

### logo

- 女性自身定期購読 女性自身プレミアム

### buttons

- 所持ポイント
- ポイントを使う
- ログイン
- 新規会員登録

## presentation

- 背景：半透明の淡ピンク／白（すりガラス風）
- 親サイト完全踏襲ではなく、LPトーンに馴染む程度

## notes

- 常時表示ヘッダー
- PC/SP固定表示

---

# Hero

## component

```txt
Hero
```

## class

```txt
.hero
```

## role

LPの**1枚広告**。中央に視線を集め、「雑誌＋デジタル＋特典」のプレミアム感を一瞬で伝える。

## composition（PC）

```txt
[ 雑誌3枚コラージュ ]  ← 中央 →  [ スマホ風デジタルモック ]
         ↑ ラベル・タイトル・リード・CTA・特典アイコン ↑
```

## composition（SP）

```txt
ラベル → タイトル → リード
→ 左右ビジュアル（雑誌＋スマホ）
→ CTA（年額 → 月額）
→ 特典アイコン横並び
```

## elements

- `.hero__backdrop`（グラデ・花びら・光粒・金線・ビネット）
- `.hero__intro`（中央コピー）
- `.hero__leadPill` / `.hero__lead`
- `.hero__title`
- `.hero__description`
- `.hero__flanks`（左右ビジュアル）
- `.hero__magFan` / `.hero__mag`（雑誌3枚・独立レイヤー）
- `.hero__phone` / `.hero__phoneStack`（デジタル3画面・独立レイヤー）
- `.hero__cv` / `.hero__actions` / `.hero__highlights`

## text（確定）

### label（pill）

- 雑誌 ＋ デジタルサービス ＋ 各種特典付き

### title

- 女性自身
- プレミアム  
  （表示上2行。文言は「女性自身プレミアム」）

### description

- 皇室・芸能ニュースから健康、マネー、グルメまで
- 驚きと発見のスクープ情報が満載！
- 『女性自身』を毎号送料無料で
- ご自宅・オフィスにお届けします

### CTA

- 年額コースに申し込む（**主役**）
- 月額コースに申し込む（サブ）

### highlights（CTA下・横並び）

| label | 訴求 |
|---|---|
| 毎号送料無料 | 実利・配送 |
| 最新号をお届け | 雑誌 |
| 豪華特典付き | 特典 |
| デジタルサービス付き | デジタル |
| いつでも解約OK | 安心 |

## assets（Hero専用）

| 用途 | ファイル |
|---|---|
| 雑誌・前面 | `hero-cover-main.jpg` |
| 雑誌・背面 | `hero-cover-accent.jpg` |
| 雑誌・中間 | `hero-cover-sub.jpg` |
| デジタル1 | `hero-digital-panda.jpg` |
| デジタル2 | `hero-digital-food.jpg` |
| デジタル3 | `hero-digital-lifestyle.jpg` |

## notes

- タイトル周辺に**明るい光のグラデ**（text-shadowのみに依存しない）
- 左右ビジュアルは**中央へ向かう角度**で配置
- `.hero__mockMagazine` は main 表紙に付与
- 参考画像の「2ヶ月お得」等、**本ファイルに無い文言は追加しない**

---

# Update

## component

```txt
Update
```

## class

```txt
.update
```

## role

サービス刷新を、**淡いピンクの大きな角丸カード**で伝える。雑誌届くイメージを右（SPは下）で補強。

## elements

- `.update__card`
- `.update__label`
- `.update__title`
- `.update__list`
- `.update__visual` / `.update__stack`（雑誌3枚重ね・装飾）

## text

### label

- UPDATE

### heading

- 6月2日（火）より女性自身定期購読
- 「女性自身プレミアム」がアップデート！

### updates

- 定期購読を新規・継続購入するとポイントを付与
- より気軽に始められる月額コースがスタート
- 定期購読会員限定のプレゼントをお届け

## presentation

- 左：告知文＋3項目リスト
- 右：雑誌表紙コラージュ（Hero素材の流用可）
- 小さなゴールド装飾で密度を補う

## notes

- ニュースではなくサービス刷新告知
- 新規セクションは追加しない

---

# Pricing

## component

```txt
Pricing
```

## class

```txt
.pricing
```

## role

**選べる2つの定期購読コース**を比較し、申し込みへ誘導する**強CVセクション**。

## elements

- `.pricing__inner`
- `.pricing__header`
- `.pricing__cards`
- `.pricing__card` / `.pricing__card--recommended`
- `.pricing__label` / `.pricing__course` / `.pricing__price` / `.pricing__description`
- `.pricing__button`

## text

### heading

- 選べる2つの定期購読コース

### description（リード）

- 女性自身プレミアムの定期購読なら、毎号送料無料で雑誌をご自宅・オフィスにお届けします

### sub-message（見た目で補強・文言追加なし）

- 上記description内の「毎号送料無料」を視覚的に強調する

---

## annual course

### texts

- 1番お得！おすすめ
- 年額コース
- 16,920円（税込）/ 36冊
- 「雑誌1年分」通常購入よりも
- 2,460円安い！
- 年額コースに申し込む

### presentation

- ゴールド縁・淡いピンク背景で**主役カード**
- CTA：ピンクグラデ・立体感・shadow

---

## monthly course

### texts

- まずはお試し！
- 月額コース
- 1,500円（税込）/ 3冊
- お試しにぴったり！
- 気軽にスタートできるコース
- 月額コースに申し込む

### presentation

- 白ベース・ピンク枠の**サブカード**
- SP表示順：年額 → 月額

## notes

- 比較2カードUI
- data-gtm：`pricing_annual_click` / `pricing_monthly_click`

---

# Benefits

## component

```txt
Benefits
```

## class

```txt
.benefits
```

## section heading

- 女性自身プレミアム会員なら限定特典が盛り沢山！

## structure（順序固定）

```txt
Benefits
├── DigitalService   … デジタルサービス
├── PointRewards     … ポイント
├── SeasonalGifts    … 豪華特典（季節プレゼント）
├── MemberEvents     … イベント
└── FreeShipping     … 毎号送料無料
```

## presentation

- セクション見出しの下、各特典を**大きな角丸カード（ブロック）**で縦積み
- 奇数ブロック：淡ピンク系 / 偶数ブロック：淡クリーム系でリズム
- 「特典1」などのラベルは**ゴールド系ピル**
- 完全な同一カード化はしない（情報量差を尊重）

## notes

- LP内重要セクション
- 参考の5カテゴリ見出しは、**既存3項目＋構造で表現**（新規文言ブロックは増やさない）

---

# DigitalService

## component

```txt
DigitalService
```

## class

```txt
.digitalService
```

## role

**デジタルサービス**の価値。スマホモック＋特記3項目。

## text

### heading

- デジタルサービス『女性自身Premium』

### description

- たくさんのコンテンツがスマホでも楽しめる！

### item 1

#### title

- 過去2年分の『女性自身』がすべて読み放題

#### description

- 見逃したニュース、振り返りたい健康記事、何度でも読み返したいレシピページなど。「ワード検索」で過去2年分がいつでも読めます！

### item 2

#### title

- ムック、マンガも読み放題

#### description

- 愛くるしいパンダの軌跡をたどれる『パンダ自身』、スマホで見やすいレシピ集『女性自身お料理コレクション』など注目コンテンツが目白押し！

### item 3

#### title

- 会員限定のオリジナル動画も続々アップ

#### description

- なお妻さん、ガバちゃんによる「懸賞女王2人が指南！年末の豪華懸賞必勝術」や、ごぼう先生の"ごぼう体操"で季節の「なんとなく不調」を解消する動画など、本誌人気企画と連動したオリジナル動画も配信中！

## presentation

- クリーム調の大きな角丸シェル
- PC：左（または上）スマホモック / 右（または下）見出し＋リード
- 下段：3項目を**横並びカード**（SPは縦積み）
- Heroデジタル画像の流用可

---

# PointRewards

## component

```txt
PointRewards
```

## class

```txt
.pointRewards
```

## text

### heading

- ポイントが貯まる

### description

- たくさんのコンテンツがスマホでも楽しめる！

### item 1

#### title

- 定期購読の新規・継続購入でポイントを付与

#### description

- 次回の定期購読購入にも利用できます。

### item 2

#### title

- キャンペーン期間中は購入金額の10％をポイント還元

#### description

- キャンペーン期間：2026年6月2日～2027年5月31日

### item 3

#### title

- kokodeクーポンのプレゼントや抽選プレゼントも！

## presentation

- `10％` とキャンペーン期間を**数字・期間として強調**
- 3項目をカードまたはリストで整理

---

# SeasonalGifts

## component

```txt
SeasonalGifts
```

## class

```txt
.seasonalGifts
```

## text

### label

- 全員プレゼント

### heading

- 季節のプレゼント

### description

- 季節ごとにうれしいプレゼントをお届け！

### item 1

#### image

- お料理コレクションポストカード画像

#### title

- 「お料理コレクション」ポストカード

#### description

- 4号ごとに、編集部おすすめレシピをポストカードにしてお届け

### item 2

#### image

- 皇室報道ダイジェスト画像

#### title

- 皇室報道ダイジェスト（約32ページ予定）

#### description

- 1年分の皇室報道をまとめた特別冊子を、12月発売号に同梱予定

### item 3

#### image

- 皇室カレンダー画像

#### title

- 2027年「皇室ご予定」丸わかりカレンダー

#### description

- 皇室のご予定がひと目でわかるカレンダーを、3月発売号に同梱予定

## presentation

- `全員プレゼント` をゴールド系ピルで強調
- 3ギフトを**横並びカード**（image → title → description）
- 明るく・上品に・プレミアム感

---

# MemberEvents

## component

```txt
MemberEvents
```

## class

```txt
.memberEvents
```

## text

### heading

- 会員限定イベント

### description

- 会員限定イベントを続々企画中！

### contents

- イベントやセミナーへのご招待
- ここでしか体験できない特典をご用意

## assets

- イベント画像

## presentation

- 画像＋テキストの2カラム（SP：画像→テキスト）
- 角丸カード内に収める

---

# FreeShipping

## component

```txt
FreeShipping
```

## class

```txt
.freeShipping
```

## text

### heading

- 送料無料

### description

- 送料は光文社が負担！
- さらに特大号の差額も光文社が負担いたします。

## presentation

- 横長のコンパクト訴求ブロック
- アイコン＋見出し＋本文
- **毎号送料無料**の実利を Benefits 内で再確認させる

---

# Future

## component

```txt
Future
```

## class

```txt
.future
```

## text

### label

- and MORE...

### description

- 女性自身Premiumは、これからがもっと充実。
- 人気占い師の連載（湊きよひろさん、蝦名里香さんなど）や
- 皇室、動画など、新コンテンツが続々登場予定です。

## presentation

- クリーム背景の横長ブロック
- 過去誌面風ストリップ（表紙画像・装飾のみ・新文言なし）
- ゴールドの円形／月桂風SVG装飾（文言は入れない）

## notes

- 将来コンテンツ訴求
- 信頼・期待の補助

---

# Notice

## component

```txt
Notice
```

## class

```txt
.notice
```

## text

### heading

- 「女性自身シンプル」の定期購読コースは終了いたしました。

### description

- 現在ご契約中のお客様には、更新時期が近づきましたら、あらためてご案内をお送りいたします。

## presentation

- コンパクトな角丸ボックス
- 淡い背景・控えめな装飾（煽らない）

## notes

- 既存ユーザー向け補足

---

# Entry

## component

```txt
Entry
```

## class

```txt
.entry
```

## text

### heading

- 女性自身プレミアムに申し込む

### purchase guide button

- 定期購読のご購入方法はこちら

### course buttons

- 年額コース（**主役CTA**）
- 月額コース（サブCTA）

## presentation

- 淡ピンクの大きな角丸パネル
- SP：年額 → 月額 → ガイド
- data-gtm：`entry_annual_click` / `entry_monthly_click` / `entry_guide_click`

## notes

- 最終CV導線

---

# BottomCta

## component

```txt
BottomCta
```

## class

```txt
.bottomCta
```

## text

### label

- お申し込みはこちらから

### buttons

- 女性自身プレミアム［年額コース］
- 女性自身プレミアム［月額コース］

## presentation

- **ピンクグラデーション**の固定バー
- ラベル＋年額／月額を横並び（SPも2ボタン維持）
- 年額ボタンを白背景で強調、月額は枠線系

## notes

- ウィンドウ下部固定
- footer扱いしない
- data-gtm：`bottom_annual_click` / `bottom_monthly_click`
- z-index：Headerと同等層で管理

---

# Link Management

## header links

ヘッダーボタンリンクは仮URLを使用。

### temporary url

```txt
https://kokode-digital.jp/
```

### buttons

- 所持ポイント
- ポイントを使う
- ログイン
- 新規会員登録

## notes

- 後日正式URLへ差し替え予定
- 直書きせず `src/constants/links.js` で管理

---

## temporary subscription url

### annual course

```txt
https://kokode-digital.jp/products/detail/5203?utm_source=ca&utm_medium=post&utm_campaign=ca_202509_jisin
```

### monthly course

```txt
https://kokode-digital.jp/products/detail/5203?utm_source=ca&utm_medium=post&utm_campaign=ca_202509_jisin
```

## notes

- 年額・月額は**別定数**で管理（URL同一でも分ける）
- GTM計測対象

---

# CTA Priority（全LP共通）

| 優先 | CTA | 扱い |
|---:|---|---|
| 1 | 年額コースに申し込む | 主役・ピンクグラデ・大きめ・shadow |
| 2 | 月額コースに申し込む | サブ・白＋ピンク枠 |
| 3 | 定期購読のご購入方法はこちら | ガイド・控えめ |
| 4 | Header会員ボタン | ユーティリティ |
