# seo.md

## 目的

本ドキュメントは、女性自身プレミアムLPのSEO / OGP / head管理方針を定義する。

本LPは広告流入を主目的とするが、SNS共有・検索表示・公開時の基本品質を担保するため、最低限のSEO設定を行う。

---

## SEO方針

このLPは、SEO流入を主目的とした記事ページではなく、広告流入を受ける定期購読LPである。

そのため、SEOでは以下を重視する。

- 検索結果で内容が正しく伝わること
- SNS共有時に女性自身プレミアムLPとして見えること
- ページタイトル・descriptionがサービス内容と一致していること
- noindex / index の扱いを公開フェーズで判断できること
- GitHub Pages公開時にcanonicalやOGP URLを後から差し替えやすいこと

---

## Meta Title

### 推奨

```txt
女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読
```

### 方針

- サービス名を先頭に置く
- 「雑誌」「デジタルサービス」「特典」「定期購読」を含める
- 長すぎないようにする
- キャンペーン色を強くしすぎない

---

## Meta Description

### 推奨

```txt
女性自身プレミアムは、毎号送料無料で「女性自身」をご自宅・オフィスにお届けする定期購読サービスです。雑誌に加え、デジタルサービスや会員限定特典もお楽しみいただけます。
```

### 方針

- Heroの確定文言と整合させる
- 定期購読サービスであることを明記する
- 雑誌＋デジタル＋特典の価値を入れる
- 価格やキャンペーン条件を入れすぎない

---

## Meta Keywords

設定不要。

```txt
meta keywords は使用しない
```

---

## OGP

### og:title

```txt
女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読
```

### og:description

```txt
毎号送料無料で「女性自身」をご自宅・オフィスにお届け。雑誌、デジタルサービス、会員限定特典がセットになった新しい定期購読サービスです。
```

### og:type

```txt
website
```

### og:site_name

```txt
女性自身プレミアム
```

### og:url

```txt
本番URL確定後に設定
```

### og:image

```txt
本番OGP画像URL確定後に設定
```

### OGP画像方針

OGP画像は以下の内容が伝わるものにする。

- 女性自身プレミアム
- 雑誌表紙または雑誌らしいビジュアル
- 雑誌＋デジタル＋特典付き
- 明るく、古く見えないトーン

推奨サイズ。

```txt
1200px × 630px
```

---

## Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読" />
<meta name="twitter:description" content="毎号送料無料で「女性自身」をご自宅・オフィスにお届け。雑誌、デジタルサービス、会員限定特典がセットになった新しい定期購読サービスです。" />
<meta name="twitter:image" content="本番OGP画像URL確定後に設定" />
```

---

## Canonical

本番URL確定後、canonicalを設定する。

```html
<link rel="canonical" href="本番URL" />
```

GitHub Pagesの検証URLや仮URLをcanonicalにしない。

---

## Robots

公開フェーズに応じて切り替える。

### 開発・確認中

```html
<meta name="robots" content="noindex,nofollow" />
```

### 本番公開後

```html
<meta name="robots" content="index,follow" />
```

広告LPとして検索indexさせない方針の場合は、本番でも `noindex,follow` を検討する。

最終判断は公開前に行う。

---

## Structured Data

最低限、WebPage のJSON-LDを設定してよい。

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "女性自身プレミアム",
  "description": "女性自身プレミアムは、毎号送料無料で「女性自身」をご自宅・オフィスにお届けする定期購読サービスです。",
  "url": "本番URL"
}
</script>
```

商品価格やOffer構造化データは、価格・販売条件・URLが正式確定してから検討する。  
初期実装では無理に `Product` / `Offer` を入れない。

---

## Favicon / App Icon

最低限、以下を設定する。

```html
<link rel="icon" href="/favicon.ico" />
```

本番で必要に応じて以下を追加する。

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

---

## HTML Lang

```html
<html lang="ja">
```

日本語LPのため、`lang="ja"` を必ず設定する。

---

## Head Implementation Example

Viteの初期実装では `index.html` に設定する。

```html
<title>女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読</title>
<meta
  name="description"
  content="女性自身プレミアムは、毎号送料無料で「女性自身」をご自宅・オフィスにお届けする定期購読サービスです。雑誌に加え、デジタルサービスや会員限定特典もお楽しみいただけます。"
/>

<meta property="og:title" content="女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読" />
<meta property="og:description" content="毎号送料無料で「女性自身」をご自宅・オフィスにお届け。雑誌、デジタルサービス、会員限定特典がセットになった新しい定期購読サービスです。" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="女性自身プレミアム" />
<meta property="og:url" content="本番URL確定後に設定" />
<meta property="og:image" content="本番OGP画像URL確定後に設定" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="女性自身プレミアム｜雑誌＋デジタルサービス＋特典付き定期購読" />
<meta name="twitter:description" content="毎号送料無料で「女性自身」をご自宅・オフィスにお届け。雑誌、デジタルサービス、会員限定特典がセットになった新しい定期購読サービスです。" />
<meta name="twitter:image" content="本番OGP画像URL確定後に設定" />

<link rel="canonical" href="本番URL確定後に設定" />
```

---

## 注意点

- 仮URLをcanonicalにしない
- OGP画像未確定の場合は仮パスを使うか、TODOコメントを残す
- meta descriptionに未確定キャンペーン情報を入れすぎない
- Product構造化データは初期実装では無理に入れない
- 公開前に `robots` のindex方針を必ず確認する

---

## SEO Checklist

| item | check |
|---|---|
| titleが設定されている | [ ] |
| descriptionが設定されている | [ ] |
| og:titleが設定されている | [ ] |
| og:descriptionが設定されている | [ ] |
| og:typeが設定されている | [ ] |
| og:urlが本番URLになっている | [ ] |
| og:imageが設定されている | [ ] |
| twitter cardが設定されている | [ ] |
| canonicalが本番URLになっている | [ ] |
| robots方針が確認されている | [ ] |
| html langがjaになっている | [ ] |
| faviconが設定されている | [ ] |
| JSON-LDを入れる場合、本番URLになっている | [ ] |

---

## 最終判断

SEOはこのLPの主目的ではない。  
ただし、公開ページとして最低限のhead品質・SNS共有品質・検索表示品質は担保する。

```txt
広告LPとしてのCV優先
+
公開ページとしての基本SEO品質
```
