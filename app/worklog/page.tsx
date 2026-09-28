import Link from "next/link"

function WorkLogPage() {
    return (
      <main>
        <h1>WorkLog</h1>

        <p>
          WorkLog は kobayashi daiki が提供する勤務記録・勤務表管理アプリです。
          このページは WorkLog の公式ホームページです。
        </p>

        <section>
          <h2>WorkLog について</h2>
          <p>
            WorkLog は、常駐先や客先のPCの勤怠情報を外部に持ち出せない環境でも、
            自分のiPhoneで勤務実績を記録し、勤務表を管理できることを目的としたアプリです。
          </p>
          <p>
            勤務記録はすべて端末内に保存され、外部のサーバーへ送信されることはありません。
          </p>
        </section>

        <section>
          <h2>主な機能</h2>
          <ul>
            <li>出勤・退勤時刻、休憩時間、備考の記録</li>
            <li>日次・月次勤務時間の自動計算</li>
            <li>契約勤務時間（下限・上限）の設定と残り時間の表示</li>
            <li>土曜日・日曜日・祝日の表示</li>
            <li>月ごとの提出状態の管理と提出期限の通知</li>
            <li>請求書PDFの作成と共有</li>
          </ul>
        </section>

        <section>
          <h2>関連リンク</h2>
          <ul>
            <li>
              <Link href="/worklog/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/worklog/support">サポートページ</Link>
            </li>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default WorkLogPage
