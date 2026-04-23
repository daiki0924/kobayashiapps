import Link from "next/link"

function PlanlyPage() {
    return (
      <main>
        <h1>Planly</h1>

        <p>
          Planly は kobayashi daiki が提供するタスク・スケジュール管理アプリです。
          このページは Planly の公式ホームページです。
        </p>

        <section>
          <h2>Planly について</h2>
          <p>
            Planly は、ToDoやスケジュールをカテゴリで整理し、
            日々のタスク管理をシンプルに行えることを目的としたアプリです。
          </p>
          <p>
            直感的で使いやすい体験を提供し、やるべきことを漏れなく管理できるよう設計されています。
          </p>
        </section>

        <section>
          <h2>主な機能</h2>
          <ul>
            <li>ToDoの作成・管理・完了</li>
            <li>スケジュールの登録とカレンダー表示</li>
            <li>カテゴリによる整理</li>
            <li>期限・通知の設定</li>
          </ul>
        </section>

        <section>
          <h2>関連リンク</h2>
          <ul>
            <li>
              <Link href="/planly/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/planly/support">サポートページ</Link>
            </li>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default PlanlyPage