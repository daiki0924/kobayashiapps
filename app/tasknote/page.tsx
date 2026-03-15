import Link from "next/link"

function TaskNotePage() {
  return (
    <main>
      <h1>TaskNote</h1>

      <p>
        TaskNote は Kobayashi Apps が提供するタスク管理アプリです。
        このページは TaskNote の公式ホームページです。
      </p>

      <section>
        <h2>TaskNote について</h2>
        <p>
          TaskNote は、タスクや予定、メモなどを整理し、
          日々の作業や予定を管理しやすくすることを目的としたアプリです。
        </p>
        <p>
          シンプルで使いやすい体験を提供し、日常のタスク管理を
          より効率的に行えるように設計されています。
        </p>
      </section>

      <section>
        <h2>主な機能</h2>
        <ul>
          <li>タスクや予定の管理</li>
          <li>メモや情報の整理</li>
          <li>必要に応じた Google アカウント連携機能</li>
        </ul>
      </section>

      <section>
        <h2>Google アカウント連携について</h2>
        <p>
          TaskNote では、ユーザーが希望する場合に Google アカウントとの連携を
          利用することがあります。
        </p>
        <p>
          Google アカウントの情報は、ユーザー認証やアプリ機能の提供など、
          ユーザーが利用する機能の実現のためにのみ使用されます。
        </p>
        <p>
          取得した Google ユーザーデータは広告目的で使用されたり、
          ユーザーの同意なく第三者へ販売・提供されることはありません。
        </p>
      </section>

      <section>
        <h2>関連リンク</h2>
        <ul>
          <li>
            <Link href="/tasknote/privacy">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/tasknote/support">
              サポートページ
            </Link>
          </li>
          <li>
            <Link href="/">
              トップページへ戻る
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default TaskNotePage