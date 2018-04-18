# ライフサイクルフックとリアクティブシステム

## この演習で学習する内容
- Vueインスタンスのライフサイクルフック
- リアクティブシステム

## 演習内容
[前の演習](./hello-world.md)で作成した`Hello World!`を表示するアプリケーションを、以下のように変更してみてください。

- Vueインスタンス生成時に呼び出される`created`フック内で、`$watch`のコールバック関数でデータ`messsage`を監視して、内容を`console.log`で出力する
- Vueインスタンスがマウントされた際に呼び出される`mounted`フックを使って、フック内で画面に表示された`Hello World!`適当なメッセージ(例:`こんにちは、世界！`)に変わるようにデータ`message`を変更する

Vue.jsのライフサイクルフックとリアクティブシステムの動作を確認しましょう。

## 参考: 公式ドキュメント
- [Vueインスタンス](https://jp.vuejs.org/v2/guide/instance.html)
- [API - オプション/ライフサイクルフック](https://jp.vuejs.org/v2/api/#%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF)
- [API - vm$watch](https://jp.vuejs.org/v2/api/#vm-watch)
