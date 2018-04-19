# ディレクティブ

## この演習で学習する内容
- ディレクティブを使ったテキストレンダリング
- ディレクティブを使ったイベントハンドリング
- ディレクティブを使ったデータバインディング

## 演習内容
`<input type="text">`タグの入力イベント`input`をハンドリングして、入力の都度`<p>`タグに入力内容が表示されるようにしてみましょう。

その際、入力値の`<p>`タグへのレンダリングは、Mustache構文ではなく、Vue.jsが提供するディレクティブを利用してください。

また、`<input type="text">`タグの`value`属性には、入力値を保持したデータを反映させるようにしてください。

Chrome DevToolsのコンソールで`vm.message = '...'`にようしてVueインスタンスのデータに何らかしら文字列を設定してみてください。`<input type="text">`タグの入力内容はどうなるでしょう？

## 参考: 公式ドキュメント
- [ディレクティブ](https://jp.vuejs.org/v2/guide/syntax.html#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96)
- [イベントハンドリング](https://jp.vuejs.org/v2/guide/events.html)
- [API - ディレクティブ](https://jp.vuejs.org/v2/api/#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96)

## 解答例
- <answer-link url="/examples/directive.html">こちらを参照</answer-link>
