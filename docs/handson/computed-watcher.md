# 算出プロパティとウォッチャ

## この演習で学習する内容
- 算出プロパティ
- ウォッチャ

## 演習内容

### 最初のステップ
苗字と名前を`<input typ="text">`タグで入力して、氏名を表示するアプリケーションを作成してみましょう。

`data`オプションは以下のようにデータを持ち、それぞれ対応する`<input type="text">`タグの`value`属性と同期するよう双方向データバインディングしてください。

- `firstName`: 苗字
- `lastName`: 名前

### 最初のステップが終わったら
作成したらこれをベースに、以下のケースで、氏名(フルネーム:fullName)を`<p>`タグに表示できる、`<input type="text">`タグの入力でリアルタイムに氏名が変わるアプリケーションを作成してみましょう。

- メソッド (`methods`)
- 算出プロパティ (`computed`)
- 監視プロパティ (`watch`)
- ウォッチャ (`$watch`)

完成したら、これらがどう違うのか比較してみましょう。

## 参考: 公式ドキュメント
- [算出プロパティとウォッチャ](https://jp.vuejs.org/v2/guide/computed.html)

## 解答例
- 最初のステップ
  - <answer-link url="/examples/computed-watcher-first-step.html">こちらを参照</answer-link>
- いくつかのケース
  - <answer-link url="/examples/computed-watcher-by-method.html">メソッド</answer-link>
  - <answer-link url="/examples/computed-watcher-by-computed.html">算出プロパティ</answer-link>
  - <answer-link url="/examples/computed-watcher-by-watch.html">監視プロパティ</answer-link>
  - <answer-link url="/examples/computed-watcher-by-watcher.html">ウォッチャ</answer-link>
