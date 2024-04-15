[ProtectedAudienceAPI(Fledge)開発始め方ガイド](https://developers.cyberagent.co.jp/blog/archives/42840/)で使われているコードのrepositoryです

参考（パクリ元）: https://developers.cyberagent.co.jp/blog/archives/42840/
ほぼここに貼ってあるリポジトリから落としてきたものそのまま持ってきただけです

- - -

ローカルで再現する方法について

1. chrome://flags/#privacy-sandbox-enrollment-overrides にアクセスし、 Privacy Sandbox Enrollment Overrides項の入力欄に `https://advertiser.paa-tips.com:44301,https://publisher.paa-tips.com:44302,https://dsp.paa-tips.com:44303,https://ssp.paa-tips.com:44304` の記述を追加する
2. このリポジトリをcloneしローカルに落とす
  1. パクリ元のGitHub https://github.com/k-o-ta/paa-tips/tree/6d0bf14efa9aaa1c085385ccb366f13a37bee468 からでもOK
3. https通信のためにmkcertでオレオレ証明書を作成するので、下記コマンドにてmkcertをインストールし、指定ドメインに対するオレオレ証明書を作成してcertfilesディレクトリに入れる

```
# 証明書作成
brew install mkcert
mkcert -install
mkcert "*.paa-tips.com" paa-tips.com
mkdir certfiles
mv _wildcard.paa-tips.com* certfiles
```

4. 下記コマンドで /etc/hosts を開き、デモ実行時のオリジンの名前解決のために（一時的に） `127.0.0.1` に対して設定を追加する
  1. `sudo vim /etc/hosts` で開ける
  2. `127.0.0.1 advertiser.paa-tips.com publisher.paa-tips.com dsp.paa-tips.com ssp.paa-tips.com` のような形で記入
  3. 必要ならデモ実行した後で元に戻しておいた方がいい
5. `sh caddy-run.sh` コマンドでcaddy-run.shを実行しCaddyを起動してリバースプロキシを立ち上げる
  1. このあたり（3.~5.）の「（オレオレ）証明書発行」「名前解決」「リバースプロキシ立ち上げ」については、慣れた別ツールの方がいいなど、別に対応できる方法があればそれでもいい（あったら教えてね）
  2. 場合によっては `npm run build:dev` した方がいいかも
6. 新規ウィンドウでもう1つターミナルを立ち上げ、ここのリポジトリのディレクトリに移動する
7. `npm start` を実行
8. https://advertiser.paa-tips.com:44301/advertiser/index.html にGoogle Chromeでアクセスする（シークレットウィンドウは使わない）
9. ページ内のリンクをクリックしてpublisherページを開く
10. タブ（もしくはウィンドウ）を切り替えてadvertiserページに戻り、開発者ツールの「アプリケーション」＞「インタレスト グループ」より、新規に指定のインタレストグループが現れている（自分がグループに追加されている）ことを確認する
11. タブ（もしくはウィンドウ）を切り替えてpublisherページに戻りリロードし、「広告」及び「アプリケーション」＞「インタレスト グループ」下にインタレストグループが表示されていることを確認する
