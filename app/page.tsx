import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Kobayashi Apps</h1>
      <p>
        Kobayashi Apps は、個人開発アプリの紹介・サポート情報・プライバシーポリシーを掲載するサイトです。
      </p>

      <section>
        <h2>Apps</h2>
        <h3>Planly</h3>
        <p>
          Planly は、予定やタスクを管理するためのアプリです。
          Google アカウント連携を利用した機能を提供する場合があります。
        </p>
        <ul>
          <li>
            <Link href="/planly">Planly の詳細</Link>
          </li>
          <li>
            <Link href="/planly/privacy">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/planly/support">サポート</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
