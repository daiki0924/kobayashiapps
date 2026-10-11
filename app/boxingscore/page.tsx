import Link from "next/link"

function BoxingScorePage() {
    return (
      <main>
        <h1>Boxing Score</h1>

        <p>
          Boxing Score は kobayashi daiki が提供する、ボクシング観戦中に自分の採点を記録するアプリです。
          このページは Boxing Score の公式ホームページです。
        </p>

        <section>
          <h2>Boxing Score について</h2>
          <p>
            Boxing Score は、ボクシングを観ながらユーザー自身がラウンドごとにジャッジした採点を入力し、
            記録・集計・共有できることを目的としたアプリです。
          </p>
          <p>
            試合映像などから自動で採点するアプリではありません。
            採点データはすべて端末内に保存され、外部のサーバーへ送信されることはありません。
          </p>
        </section>

        <section>
          <h2>主な機能</h2>
          <ul>
            <li>選手名とラウンド数（4・6・8・10・12ラウンド）を設定して採点を開始</li>
            <li>10-9・10-8 などの候補からのワンタップ採点、任意スコアの入力</li>
            <li>反則減点・ダウン数・メモの記録</li>
            <li>採点途中の自動保存と採点の再開</li>
            <li>合計スコアと「あなたの採点結果」の表示</li>
            <li>採点完了後のラウンドの修正</li>
            <li>スコアカード画像の共有</li>
          </ul>
        </section>

        <section>
          <h2>関連リンク</h2>
          <ul>
            <li>
              <Link href="/boxingscore/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/boxingscore/support">サポートページ</Link>
            </li>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default BoxingScorePage
