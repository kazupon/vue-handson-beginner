---
sidebar: auto
---
# セットアップ

ハンズオンに行く前に環境をセットアップしましょう。


## ハンズオン用の作業ディレクトリを作成する

自分の環境に、今回のハンズオン作業用に適当な場所にディレクトリを作成します。

以下は、ターミナルですが、お使いのPCでGUI上でも大丈夫です。

```sh
$ mkdir -p /path/to/vuejs-handson
```

## ハンズオン用のテンプレートHTMLファイルを作成する

ハンズオンではいくつか演習があるので、テンプレートを作成します。

作成した作業ディレクトリ直下に、`template.html`というファイル名で、ハンズオンのひな形的なHTMLファイルを作成します。

```sh
$ cd /path/to/vuejs-handson
$ touch template.html
```

## テンプレートHTMLファイルにscriptタグでVue.jsを読み込む

`template.html`を作成したら、ファイルの中身を以下のように編集します。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vue Hands-on</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      new Vue({}).$mount('#app')
    </script>
  </body>
</html>
```

このハンズオンでは、特にツールを使わずに`script`タグでVue.jsを読み込んだ素のHTMLファイル、使い慣れたエディタ、そしてブラウザ(Google Chrome)でのみで学習していきます。

Vue.js本体が正常に引き込めるかどうか、以下の`open`コマンド、または、ブラウザを開いてブラウザにこの`template.html`ファイルをドラッグ&ドロップして確認してみましょう。

```sh
$ open ./template.html
```

ブラウザに何も表示されませんが、Vue.js本体がロードされているかどうか、Chrome Devtoolsで以下の内容を確認しましょう。

- Vue.js本体が読み込まれているかどうか ![Vue.js本体がロードされているかどうか](/setup/vue-loading1.png)
- コンソールにVue.jsのメッセージが出力されているかどうか ![コンソールにVue.jsのメッセージが出力されているかどうか](/setup/vue-loading2.png)

## 準備できました？
ここまで準備できたら、後は`template.html`をハンズオンの演習ごとに、適切なファイル名でコピーして実習するだけです！
