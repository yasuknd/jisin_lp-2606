# checklist.md

## 目的

本ドキュメントは、女性自身プレミアムLPの実装完了確認に使うチェックリスト。

---

# 1. 構成チェック

| item | check |
|---|---|
| Headerがある | [ ] |
| Heroがある | [ ] |
| Updateがある | [ ] |
| Pricingがある | [ ] |
| Benefitsがある | [ ] |
| DigitalServiceがある | [ ] |
| PointRewardsがある | [ ] |
| SeasonalGiftsがある | [ ] |
| MemberEventsがある | [ ] |
| FreeShippingがある | [ ] |
| Futureがある | [ ] |
| Noticeがある | [ ] |
| Messageがある | [ ] |
| Entryがある | [ ] |
| BottomCtaがある | [ ] |
| セクション順がcontents.mdと一致している | [ ] |

---

# 2. 文言チェック

| item | check |
|---|---|
| Hero文言が一致している | [ ] |
| Update文言が一致している | [ ] |
| Pricing文言が一致している | [ ] |
| 年額コース金額が一致している | [ ] |
| 月額コース金額が一致している | [ ] |
| Benefits見出しが一致している | [ ] |
| DigitalService文言が一致している | [ ] |
| PointRewards文言が一致している | [ ] |
| SeasonalGifts文言が一致している | [ ] |
| MemberEvents文言が一致している | [ ] |
| FreeShipping文言が一致している | [ ] |
| Future文言が一致している | [ ] |
| Notice文言が一致している | [ ] |
| Message本文が一致している | [ ] |
| Entry文言が一致している | [ ] |
| BottomCta文言が一致している | [ ] |

---

# 3. Componentチェック

| item | check |
|---|---|
| component名が指定通り | [ ] |
| class名が指定通り | [ ] |
| BEM命名になっている | [ ] |
| Benefits配下が独立component化されている | [ ] |
| Header / BottomCtaがfooter扱いされていない | [ ] |
| URLが定数管理されている | [ ] |
| CTAが共通設計になっている | [ ] |

---

# 4. デザインチェック

| item | check |
|---|---|
| Heroがテキストだけになっていない | [ ] |
| Heroに仮ビジュアルがある | [ ] |
| Pricingが2カード比較になっている | [ ] |
| 年額コースが強調されている | [ ] |
| 月額コースが始めやすく見える | [ ] |
| Benefitsが単調なカード羅列になっていない | [ ] |
| DigitalServiceにデバイス風ビジュアルがある | [ ] |
| SeasonalGiftsが3カードになっている | [ ] |
| Messageが読みやすい | [ ] |
| Noticeが小さすぎない | [ ] |
| BottomCtaが古い固定バナー風になっていない | [ ] |

---

# 5. レスポンシブチェック

| item | PC | SP |
|---|---:|---:|
| Headerが崩れていない | [ ] | [ ] |
| Heroが崩れていない | [ ] | [ ] |
| Updateが読みやすい | [ ] | [ ] |
| Pricingが比較しやすい | [ ] | [ ] |
| Benefitsが読みやすい | [ ] | [ ] |
| SeasonalGiftsが崩れていない | [ ] | [ ] |
| Messageが読みやすい | [ ] | [ ] |
| Noticeが読みやすい | [ ] | [ ] |
| Entry CTAが押しやすい | [ ] | [ ] |
| BottomCtaが邪魔すぎない | [ ] | [ ] |

---

# 6. CTAチェック

| CTA | check |
|---|---|
| Pricing 年額CTA | [ ] |
| Pricing 月額CTA | [ ] |
| Entry 年額CTA | [ ] |
| Entry 月額CTA | [ ] |
| Entry 購入方法ガイドCTA | [ ] |
| BottomCta 年額CTA | [ ] |
| BottomCta 月額CTA | [ ] |
| Header 所持ポイント | [ ] |
| Header ポイントを使う | [ ] |
| Header ログイン | [ ] |
| Header 新規会員登録 | [ ] |

---

# 7. GTMチェック

| data-gtm | check |
|---|---|
| `pricing_annual_click` | [ ] |
| `pricing_monthly_click` | [ ] |
| `entry_annual_click` | [ ] |
| `entry_monthly_click` | [ ] |
| `entry_guide_click` | [ ] |
| `bottom_annual_click` | [ ] |
| `bottom_monthly_click` | [ ] |
| `header_points_click` | [ ] |
| `header_use_points_click` | [ ] |
| `header_login_click` | [ ] |
| `header_signup_click` | [ ] |

---

# 8. Accessibilityチェック

| item | check |
|---|---|
| 本文が15px未満になっていない | [ ] |
| 注釈が12px未満になっていない | [ ] |
| CTAタップ領域が44px以上 | [ ] |
| focus-visibleがある | [ ] |
| 淡色背景上の文字が読める | [ ] |
| CTA文字のコントラストが十分 | [ ] |
| SPでボタンが押しやすい | [ ] |

---

# 9. SEOチェック

| item | check |
|---|---|
| `<html lang="ja">` になっている | [ ] |
| titleが設定されている | [ ] |
| descriptionが設定されている | [ ] |
| og:titleが設定されている | [ ] |
| og:descriptionが設定されている | [ ] |
| og:typeが設定されている | [ ] |
| og:urlが本番URLになっている | [ ] |
| og:imageが設定されている | [ ] |
| Twitter Cardが設定されている | [ ] |
| canonicalが本番URLになっている | [ ] |
| canonicalがGitHub Pagesの仮URLになっていない | [ ] |
| robots方針が確認されている | [ ] |
| faviconが設定されている | [ ] |
| JSON-LDを入れる場合、本番URLになっている | [ ] |

---

# 10. 最終判断

| item | check |
|---|---|
| LP単体でサービス価値が伝わる | [ ] |
| 申し込み導線が明快 | [ ] |
| 年額 / 月額の違いが分かる | [ ] |
| 女性自身らしさがある | [ ] |
| 古いLPに見えない | [ ] |
| キャンペーンLPに寄りすぎていない | [ ] |
| 親サイト風に寄りすぎていない | [ ] |
| SEO / OGPの最低限品質が担保されている | [ ] |
| 初期実装として次の調整に進める | [ ] |


---

# 10. 画像・素材チェック

| item | check |
|---|---|
| `assets-policy.md` がdocsにある | [ ] |
| `src/assets/images/brand/` がある | [ ] |
| `src/assets/images/hero/` がある | [ ] |
| `src/assets/images/benefits/` がある | [ ] |
| `src/assets/images/gifts/` がある | [ ] |
| `src/assets/images/events/` がある | [ ] |
| `src/assets/images/ogp/` がある | [ ] |
| Cursor側で画像選定・再分類をしていない | [ ] |
| Heroに画像またはCSS仮ビジュアルがある | [ ] |
| DigitalServiceに画像またはCSSデバイスモックがある | [ ] |
| SeasonalGiftsに3つの画像枠がある | [ ] |
| MemberEventsに画像枠またはCSSプレースホルダーがある | [ ] |
| OGPフォルダが空でも作業が止まっていない | [ ] |
| PDFをimgタグで使っていない | [ ] |
| 日本語ファイル名をそのままimportしていない | [ ] |
| altが設定されている | [ ] |
| 装飾画像は空altになっている | [ ] |
| SPで画像が大きすぎない | [ ] |
