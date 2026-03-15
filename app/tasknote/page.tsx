import Link from "next/link"

function TaskNotePage() {
  return (
    <main>
      <h1>TaskNote</h1>
      <p>
        TaskNote は、予定・タスク・メモなどを整理し、
        日々の行動を管理しやすくするためのアプリです。
      </p>

      <section>
        <h2>主な機能</h2>
        <ul>
          <li>タスクや予定の管理</li>
          <li>情報の整理と確認</li>
          <li>Google アカウント連携を利用した関連機能の提供</li>
        </ul>
      </section>

      <section>
        <h2>Google 連携について</h2>
        <p>
          TaskNote では、アプリ機能の提供のために Google アカウントとの
          連携を行う場合があります。取得した情報は、ユーザーが利用する機能の
          提供、表示、連携処理のためにのみ使用します。
        </p>
      </section>

      <section>
        <h2>Links</h2>
        <ul>
          <li>
            <Link href="/tasknote/privacy">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/tasknote/support">サポートページ</Link>
          </li>
          <li>
            <Link href="/">トップページへ戻る</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default TaskNotePage