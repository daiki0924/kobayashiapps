import Link from "next/link"

function TaskNoteSupportPage() {
  return (
    <main>
      <h1>TaskNote サポート</h1>

      <p>
        TaskNote に関するご質問、不具合報告、その他のお問い合わせは、
        以下の窓口までご連絡ください。
      </p>

      <section>
        <h2>お問い合わせ先</h2>
        <p>メールアドレス: support@kobayashiapps.com</p>
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
        <p>
          内容を確認のうえ、順次対応いたします。お問い合わせ内容によっては、
          返信までお時間をいただく場合があります。
        </p>
      </section>

      <section>
        <ul>
          <li>
            <Link href="/tasknote">TaskNote へ戻る</Link>
          </li>
          <li>
            <Link href="/">トップページへ戻る</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default TaskNoteSupportPage