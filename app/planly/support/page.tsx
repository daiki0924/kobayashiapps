import Link from "next/link"

function PlanlySuportPage() {
    return (
      <main>
        <h1>Planly サポート</h1>

        <p>
          Planly に関するご質問、不具合報告、その他のお問い合わせは、
          以下の窓口までご連絡ください。
        </p>

        <section>
          <h2>お問い合わせ先</h2>
          <p>メールアドレス: nissy.kobayashi@gmail.com</p>
        </section>

        <section>
          <h2>お問い合わせ時にご記載いただきたい内容</h2>
          <ul>
            <li>ご利用中の端末</li>
            <li>OSバージョン</li>
            <li>アプリの利用状況</li>
            <li>発生している問題の内容</li>
            <li>問題が発生した手順</li>
          </ul>
        </section>

        <section>
          <h2>よくある質問</h2>
          <ul>
            <li>
              <strong>Q. データはどこに保存されますか？</strong>
              <p>
                タスク・スケジュールのデータはすべてお使いのデバイス内に保存されます。
                クラウド同期や外部サーバーへの送信は行いません。
              </p>
            </li>
            <li>
              <strong>Q. アプリを削除するとデータはどうなりますか？</strong>
              <p>
                アンインストールするとすべてのデータが削除されます。
                事前にバックアップする機能は現在提供していません。
              </p>
            </li>
            <li>
              <strong>Q. 通知が届きません</strong>
              <p>
                設定アプリ → 通知 → Planly から通知が許可されているかご確認ください。
              </p>
            </li>
            <li>
              <strong>Q. 広告を非表示にできますか？</strong>
              <p>現在、広告非表示のオプションは提供していません。</p>
            </li>
          </ul>
        </section>

        <section>
          <p>
            内容を確認のうえ、順次対応いたします。お問い合わせ内容によっては、
            返信までお時間をいただく場合があります。
          </p>
        </section>

        <section>
          <ul>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default PlanlySuportPage