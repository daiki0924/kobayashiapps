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

        <h3>WorkLog</h3>
        <p>
          WorkLog は、勤務時間を記録して月ごとの勤務表を管理するためのアプリです。
        </p>
        <ul>
          <li>
            <Link href="/worklog">WorkLog の詳細</Link>
          </li>
          <li>
            <Link href="/worklog/privacy">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/worklog/support">サポート</Link>
          </li>
        </ul>

        <h3>ふるさと&国保ナビ</h3>
        <p>
          ふるさと&国保ナビ は、ふるさと納税の控除上限額と国民健康保険料を概算するためのアプリです。
        </p>
        <ul>
          <li>
            <Link href="/furusatonhi">ふるさと&国保ナビ の詳細</Link>
          </li>
          <li>
            <Link href="/furusatonhi/privacy">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/furusatonhi/support">サポート</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
