import Link from "next/link"

function PlanlyPrivacyPolicyPage() {
    return (
      <main>
        <h1>Planly プライバシーポリシー</h1>

        <p>
          Planly（以下、「本アプリ」といいます。）は、ユーザーのプライバシーを尊重し、
          個人情報および関連情報を適切に取り扱います。本ポリシーでは、
          本アプリにおける情報の取得、利用、管理について説明します。
        </p>

        <section>
          <h2>1. 取得する情報</h2>
          <ul>
            <li>クラッシュ情報・診断データ（端末情報、OSバージョン、スタックトレース）</li>
            <li>アプリの利用状況に関する匿名化された統計情報</li>
            <li>ATTへの同意を得た場合に限り、広告識別子（IDFA）</li>
            <li>ユーザーが入力したタスク名・スケジュール名・カテゴリ名（デバイス内にのみ保存）</li>
          </ul>
        </section>

        <section>
          <h2>2. 利用目的</h2>
          <ul>
            <li>本アプリの機能提供のため</li>
            <li>バグの検知・修正のため</li>
            <li>機能改善・UX向上のため</li>
            <li>広告配信のパーソナライズのため（同意を得た場合のみ）</li>
          </ul>
        </section>

        <section>
          <h2>3. 第三者提供</h2>
          <p>
            本アプリは以下のサードパーティSDKを使用しており、
            各社のプライバシーポリシーに基づいてデータが処理されます。
          </p>
          <ul>
            <li>
              Firebase Crashlytics / Analytics（Google LLC）
              https://firebase.google.com/support/privacy
            </li>
            <li>
              Google AdMob（Google LLC）
              https://policies.google.com/privacy
            </li>
            <li>
              Realm（MongoDB, Inc.）
              ※データはデバイス内のみに保存され、外部送信はありません。
            </li>
          </ul>
          <p>
            上記以外に、法令に基づく場合を除き、ユーザーの同意なく取得した情報を
            第三者に提供しません。
          </p>
        </section>

        <section>
          <h2>4. 広告について</h2>
          <p>
            本アプリはGoogle AdMobによるバナー広告を表示します。
            iOS 14.5以降では、広告配信前にATT（App Tracking Transparency）ダイアログで
            追跡の許可を求めます。許可しない場合でも本アプリの全機能をご利用いただけますが、
            広告がパーソナライズされない場合があります。
          </p>
        </section>

        <section>
          <h2>5. 情報の管理</h2>
          <p>
            ユーザーが入力したタスク・スケジュールのデータはすべてデバイス内に保存され、
            外部サーバーへの送信は行いません。アプリをアンインストールすることで、
            デバイス内に保存された全データが削除されます。
          </p>
        </section>

        <section>
          <h2>6. プライバシーポリシーの変更</h2>
          <p>
            本ポリシーは、必要に応じて内容を変更することがあります。変更後の内容は、
            本ページに掲載した時点から適用されます。
          </p>
        </section>

        <section>
          <h2>7. お問い合わせ</h2>
          <p>メールアドレス: nissy.kobayashi@gmail.com</p>
        </section>

        <section>
          <p>制定日: 2026年4月23日</p>
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

  export default PlanlyPrivacyPolicyPage