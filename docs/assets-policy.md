# assets-policy.md

## 目的

本ドキュメントは、女性自身プレミアムLPにおける画像・PDF・ビジュアル素材の扱い方を定義する。

現時点では、提供画像は用途別フォルダに仮配置済みだが、最終選定・最終リネーム・最終altは未確定。  
そのため、本ドキュメントでは個別画像の最終指定ではなく、初期実装時の画像運用方針を定義する。

---

## 現段階の前提

- 画像素材は用途別フォルダに仮配置済み
- 各フォルダの画像はユーザー側で仮選定済み
- Cursorは画像選定を行わない
- Cursorはフォルダ用途に従って画像を使用する
- OGP画像は未配置でもよい
- 画像が合わない場合はCSS仮ビジュアルで補完する
- PDF素材はそのまま`img`タグでは使用しない
- 初期実装では、画像選定の精度より画面構図の成立を優先する

---

## 画像配置

画像は以下に配置する。

```txt
src/assets/images/
├── brand/
├── hero/
├── benefits/
├── gifts/
├── events/
└── ogp/
```

---

## フォルダ別の役割

| folder | role | usage |
|---|---|---|
| `brand/` | ロゴ画像 | Header / Hero / 必要に応じたブランド表示 |
| `hero/` | ファーストビュー画像 | Heroの雑誌表紙・デジタル・特典ビジュアル |
| `benefits/` | デジタル・コンテンツ系画像 | DigitalService / Benefits内のコンテンツ訴求 |
| `gifts/` | 特典画像 | SeasonalGiftsの3カード |
| `events/` | 会員イベント画像 | MemberEvents |
| `ogp/` | OGP画像 | SNS共有画像。空でもよい |

---

## Cursorへの指示

Cursorは、初期実装時に画像の良し悪しを判断しない。  
フォルダに入っている画像を、そのフォルダ用途の画像として使用する。

### Do

- CSS仮ビジュアルで初期画面を成立させる
- 用途別フォルダにある画像を、用途通りに使う
- 画像差し替えしやすいDOM構造にする
- `src/assets/images/` の構成を維持する
- 画像import箇所を後から差し替えやすくする
- alt属性を設定できる構造にする
- 画像がない場合のfallbackを用意する

### Don't

- Cursor側で画像を選定し直さない
- 画像を別カテゴリに移動しない
- 用途と違うフォルダの画像を勝手に流用しない
- 提供画像をすべて使おうとしない
- 日本語ファイル名・スペース入りファイル名をそのままimportしない
- PDFをそのまま`img`タグで使わない
- OGPフォルダが空でも作業を止めない
- 画像がないことを理由にビジュアル領域を消さない
- 画像の都合でレイアウトを変えない

---

## 初期実装で仮ビジュアル必須の箇所

| section | fallback visual |
|---|---|
| Hero | 雑誌表紙風カード / スマホ画面風カード / 特典カード / 背景blob |
| DigitalService | デバイスモック風CSSビジュアル |
| SeasonalGifts | 3つの画像プレースホルダー付きカード |
| MemberEvents | イベント画像枠のプレースホルダー |
| OGP | TODOまたは仮パス |

---

## ロゴ画像

`brand/` には以下のロゴを配置する想定。

```txt
brand/
├── logo-main-pink.*
├── logo-main-black.*
└── logo-main-white.*
```

| logo | usage |
|---|---|
| `logo-main-pink.*` | 通常表示のメイン。Header / Heroで優先使用 |
| `logo-main-black.*` | 白背景で落ち着かせたい箇所、代替表示 |
| `logo-main-white.*` | 濃色背景・ブランドカラー背景上で使用 |

通常表示は `logo-main-pink` を優先する。  
白背景で視認性が悪い場合は `logo-main-black`、濃色背景では `logo-main-white` を使う。

---

## Hero画像

`hero/` には、ファーストビューで「女性自身プレミアム＝雑誌＋デジタル＋特典」が一目で伝わる画像を入れる。

```txt
hero/
├── hero-magazine-cover-01.*
├── hero-digital-01.*
└── hero-gift-01.*
```

| file | role |
|---|---|
| `hero-magazine-cover-01.*` | メインの雑誌表紙。Heroで最も大きく使う |
| `hero-digital-01.*` | デジタルサービス感の補助画像 |
| `hero-gift-01.*` | 特典感の補助画像 |

雑誌表紙を主役にし、他の画像は補助カードとして使う。  
画像が不足する場合はCSS仮カードで補完する。

---

## Benefits画像

`benefits/` は、DigitalServiceなどのデジタル・コンテンツ訴求に使う。

```txt
benefits/
├── digital-content-01.*
├── digital-content-02.*
├── digital-content-03.*
└── member-event-01.*
```

| file | role |
|---|---|
| `digital-content-01.*` | デジタル読み放題コンテンツ例 |
| `digital-content-02.*` | ムック・マンガ読み放題の例 |
| `digital-content-03.*` | 動画・追加コンテンツの補助画像 |

`member-event-01.*` をここに入れている場合でも、イベント専用画像は原則 `events/` に移してよい。  
ただしCursorは勝手に移動せず、配置済みのフォルダ用途に従う。

---

## Gifts画像

`gifts/` は SeasonalGifts の特典カードに使う。

```txt
gifts/
├── gift-cooking-01.*
├── gift-imperial-digest-01.*
└── gift-imperial-calendar-01.*
```

| file | role |
|---|---|
| `gift-cooking-01.*` | お料理コレクションポストカード |
| `gift-imperial-digest-01.*` | 皇室報道ダイジェスト |
| `gift-imperial-calendar-01.*` | 皇室カレンダー |

3カードで表示する。  
画像が不足する場合は画像プレースホルダーを使う。

---

## Events画像

`events/` は MemberEvents に使う。

```txt
events/
├── event-member-01.*
├── event-member-02.*
└── event-placeholder-01.*
```

| file | role |
|---|---|
| `event-member-01.*` | 会員限定イベントのメイン画像 |
| `event-member-02.*` | イベント・セミナー・交流感の補助画像 |
| `event-placeholder-01.*` | 仮・抽象的なイベントイメージ |

合う画像がなければ `events/` は空でよい。  
その場合、MemberEventsはCSSプレースホルダーで構成する。

---

## OGP画像

`ogp/` は空でもよい。  
空の場合、`seo.md` に従って `index.html` にはTODOコメントまたは仮パスを残す。

推奨サイズは以下。

```txt
1200px × 630px
```

---

## 画像ファイル名ルール

画像を実装で使う段階では、英数字・小文字・ハイフン区切りを基本にする。

### OK

```txt
logo-main-pink.svg
hero-magazine-cover-01.jpg
digital-content-01.jpg
gift-cooking-01.jpg
event-member-01.jpg
```

### NG

```txt
LO3112-25.2.4号.jpg
パンダ自身 4頭め.jpeg
皇室ダイジェスト.pdf
IMG_8621.jpeg
```

日本語ファイル名やスペース入りファイル名をそのままimportしない。

---

## PDF素材の扱い

PDFはそのまま`img`タグで使わない。

使用する場合は以下のいずれかにする。

1. PDFの表紙を画像化する
2. PDFから必要ページを書き出して画像化する
3. 初期実装ではCSSプレースホルダーを使用する

PDF画像化は初期実装の必須作業ではない。

---

## Alt Text方針

画像差し替え時は、altを必ず設定する。

| type | alt方針 |
|---|---|
| ロゴ | 女性自身プレミアム |
| 雑誌表紙 | 女性自身プレミアムの雑誌表紙イメージ |
| 特典画像 | 特典名 + のイメージ |
| デジタルコンテンツ | 女性自身Premiumで読めるコンテンツのイメージ |
| イベント画像 | 女性自身プレミアム会員限定イベントのイメージ |
| 装飾画像 | `alt=""` |

装飾目的だけの画像は `alt=""` にする。

---

## CSS Placeholder方針

仮ビジュアルは、後から画像に差し替えやすいように、実画像と同じDOM階層に置く。

```jsx
<div className="hero__visual">
  {magazineImage ? (
    <img
      src={magazineImage}
      alt="女性自身プレミアムの雑誌表紙イメージ"
      className="hero__magazineImage"
    />
  ) : (
    <div className="hero__mockMagazine">女性自身</div>
  )}
</div>
```

初期実装では、画像importがなくても成立する構造にする。

---

## Object-fit / Aspect-ratio方針

画像差し替えを想定して、仮ビジュアルにも比率を設定する。

| usage | ratio |
|---|---:|
| Hero magazine | 3 / 4 |
| Hero phone | 9 / 16 |
| Hero gift | 4 / 3 |
| SeasonalGifts image | 4 / 3 |
| DigitalService content | 4 / 3 |
| MemberEvents visual | 16 / 10 |

---

## 初期実装完了条件

画像に関しては、初期実装時点で以下を満たせばよい。

| item | check |
|---|---|
| `src/assets/images/` が存在する | [ ] |
| 用途別フォルダが存在する | [ ] |
| Cursorが画像選定をしていない | [ ] |
| Heroに画像またはCSS仮ビジュアルがある | [ ] |
| DigitalServiceに画像またはCSSデバイスモックがある | [ ] |
| SeasonalGiftsに3つの画像枠がある | [ ] |
| MemberEventsに画像枠プレースホルダーがある | [ ] |
| PDFをimgタグで使っていない | [ ] |
| 画像未選定でも画面が破綻しない | [ ] |
| 後から画像差し替えしやすいDOMになっている | [ ] |

---

## 画像選定後の作業

画像選定後、必要に応じて別途 `image-assets.md` を作成する。

`image-assets.md` では以下を確定する。

- original file name
- renamed file name
- 使用セクション
- 使用component
- alt文言
- object-fit
- aspect-ratio
- priority
- fallback要否

```txt
画像選定前 = assets-policy.md
画像選定後 = image-assets.md
```
