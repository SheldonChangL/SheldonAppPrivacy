import './PrivacyPolicy.css'
import {
  APP_NAME,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  LAST_UPDATED,
  PACKAGE_NAME,
  PLAY_STORE_URL,
} from '../korean-coach-constants'

const TOC_ITEMS = [
  { id: 'overview',     label: 'Overview' },
  { id: 'data',         label: 'Information We Collect' },
  { id: 'local-data',   label: 'Locally Stored Data' },
  { id: 'permissions',  label: 'Device Permissions' },
  { id: 'speech',       label: 'Speech Recognition' },
  { id: 'security',     label: 'Data Security' },
  { id: 'third-party',  label: 'Third-Party Services' },
  { id: 'retention',    label: 'Data Retention' },
  { id: 'rights',       label: 'Your Rights' },
  { id: 'children',     label: "Children's Privacy" },
  { id: 'changes',      label: 'Policy Changes' },
  { id: 'contact',      label: 'Contact Us' },
]

function SectionCard({
  id,
  icon,
  title,
  children,
}: {
  id: string
  icon: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="pp-section" id={id}>
      <div className="pp-section__head">
        <span className="pp-section__icon">{icon}</span>
        <h2 className="pp-section__title">{title}</h2>
      </div>
      <div className="pp-section__body">{children}</div>
    </section>
  )
}

function Highlight({
  variant,
  icon,
  children,
}: {
  variant: 'success' | 'warning' | 'info'
  icon: string
  children: React.ReactNode
}) {
  return (
    <div className={`pp-highlight pp-highlight--${variant}`}>
      <span className="pp-highlight__icon">{icon}</span>
      <span className="pp-highlight__text">{children}</span>
    </div>
  )
}

export default function KoreanCoachPrivacyPolicy() {
  return (
    <div className="pp-page">
      {/* ── Hero ── */}
      <header className="pp-hero">
        <div className="pp-hero__icon">🇰🇷</div>
        <h1 className="pp-hero__title">Privacy Policy</h1>
        <p className="pp-hero__subtitle">{APP_NAME}</p>
        <div className="pp-hero__meta">
          <span>📅</span>
          <span>Last updated: {LAST_UPDATED}</span>
        </div>
      </header>

      {/* ── Badges ── */}
      <div className="pp-badge-row">
        <span className="pp-badge">💾 Local-First Storage</span>
        <span className="pp-badge">🚫 No Analytics</span>
        <span className="pp-badge">🔐 No Account Required</span>
        <span className="pp-badge">🎙️ Mic for Pronunciation Only</span>
      </div>

      {/* ── Body ── */}
      <div className="pp-body">

        {/* ── Sidebar TOC ── */}
        <nav className="pp-toc" aria-label="Table of contents">
          <div className="pp-toc__header">Contents</div>
          <ul className="pp-toc__list">
            {TOC_ITEMS.map(item => (
              <li key={item.id} className="pp-toc__item">
                <a href={`#${item.id}`} className="pp-toc__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Main content ── */}
        <main className="pp-content">

          {/* Intro card */}
          <div className="pp-intro-card">
            <p>
              This Privacy Policy describes how <strong>{DEVELOPER_NAME}</strong> ("we", "us",
              or "our") handles information in connection with the <strong>{APP_NAME}</strong>{' '}
              Android application (the "App").
            </p>
            <p>
              By using the App, you agree to the practices described in this policy. If you do
              not agree, please uninstall the App and discontinue use.
            </p>
          </div>

          {/* 1 — Overview */}
          <SectionCard id="overview" icon="🔒" title="Overview — Your Privacy First">
            <Highlight variant="success" icon="✅">
              <strong>{APP_NAME} stores all your learning progress locally on your device.</strong>{' '}
              We do not run our own servers, do not require an account, and do not transmit
              your personal information anywhere.
            </Highlight>
            <p>
              The only external communication the App makes is through Android's built-in
              speech recognition service for pronunciation practice — this is disclosed in
              full in the Speech Recognition section below.
            </p>
          </SectionCard>

          {/* 2 — Information We Collect */}
          <SectionCard id="data" icon="📋" title="Information We Collect">
            <Highlight variant="success" icon="✅">
              <strong>We do not collect any personal information.</strong> The App has no
              analytics SDK, no crash-reporting backend, no advertising network, and no
              telemetry of any kind.
            </Highlight>
            <p>The App does not collect, transmit, or share any of the following:</p>
            <ul className="pp-list">
              <li>Your name, email address, or contact information</li>
              <li>Device identifiers (IMEI, advertising ID, Android ID)</li>
              <li>Location data</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports or diagnostic logs</li>
            </ul>
            <p>
              The name you enter during onboarding is stored <strong>locally only</strong> and
              is used solely to personalise in-app greetings.
            </p>
          </SectionCard>

          {/* 3 — Locally Stored Data */}
          <SectionCard id="local-data" icon="💾" title="Locally Stored Data">
            <p>
              All data created within the App is stored <strong>locally on your device</strong>{' '}
              in a private database. This includes:
            </p>
            <ul className="pp-list">
              <li>Your display name and learning preferences (Hangul knowledge level, learning goal)</li>
              <li>Lesson completion and unlock status</li>
              <li>Quiz results and flashcard review history</li>
              <li>Study session records (date, duration)</li>
              <li>Daily challenge completion records</li>
              <li>Achievement unlock records</li>
              <li>Pronunciation attempt records (score and recognised text, no audio stored)</li>
            </ul>
            <Highlight variant="info" icon="📁">
              The database is stored in the App's private internal storage, accessible only
              to this App. It is removed automatically when you uninstall the App.
            </Highlight>
          </SectionCard>

          {/* 4 — Device Permissions */}
          <SectionCard id="permissions" icon="🔑" title="Device Permissions">
            <p>
              The App requests only the permissions required to function. All permissions
              serve a specific purpose and are used solely on-device except where disclosed.
            </p>

            <table className="pp-perm-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose</th>
                  <th>Optional?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="pp-perm-name">RECORD_AUDIO</span></td>
                  <td>
                    Capture your voice during dialogue role-play exercises so Android's
                    speech recognition can score your pronunciation. Audio is not stored
                    by the App.
                  </td>
                  <td>
                    Yes — pronunciation practice is unavailable if denied, but all other
                    lesson content remains fully accessible.
                  </td>
                </tr>
                <tr>
                  <td><span className="pp-perm-name">POST_NOTIFICATIONS</span></td>
                  <td>
                    Display local notifications for achievement unlocks and streak
                    reminders. All notifications are generated on-device; no notification
                    data is sent to external servers.
                  </td>
                  <td>Yes — notifications are disabled if denied.</td>
                </tr>
              </tbody>
            </table>

            <Highlight variant="info" icon="ℹ️">
              The App does <strong>not</strong> declare the <code>INTERNET</code> permission
              and therefore cannot make network requests directly. The only external data
              flow is audio sent to Android's speech recognition service (see below).
            </Highlight>
          </SectionCard>

          {/* 5 — Speech Recognition */}
          <SectionCard id="speech" icon="🎙️" title="Speech Recognition">
            <Highlight variant="warning" icon="⚠️">
              When you use pronunciation practice, your voice is processed by{' '}
              <strong>Android's built-in Speech Recognition service</strong> (typically Google
              Speech Recognition). This service is provided by Google, not by us, and may
              send audio to Google's servers for processing.
            </Highlight>
            <p>
              Specifically:
            </p>
            <ul className="pp-list">
              <li>
                The App uses Android's <code>SpeechRecognizer</code> API with the Korean
                language model (<code>ko-KR</code>).
              </li>
              <li>
                The recognised text result is used only to calculate a pronunciation score
                locally within the App. Neither the audio nor the recognised text is sent to
                our servers — we have none.
              </li>
              <li>
                Google's handling of speech data is governed by{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>No audio is ever stored</strong> by the App. Only the resulting
                pronunciation score and the recognised text string are saved locally.
              </li>
            </ul>
            <Highlight variant="info" icon="ℹ️">
              If speech recognition is unavailable on your device, the App automatically
              falls back to an on-device scoring method that requires no microphone access.
            </Highlight>
          </SectionCard>

          {/* 6 — Data Security */}
          <SectionCard id="security" icon="🛡️" title="Data Security">
            <p>
              Your learning data is protected by Android's standard application sandboxing:
            </p>
            <ul className="pp-list">
              <li>
                <strong>Private storage</strong> — the Room database is stored in the App's
                private internal storage directory, inaccessible to other apps without root
                access.
              </li>
              <li>
                <strong>No network attack surface</strong> — without the <code>INTERNET</code>{' '}
                permission, your data cannot be exfiltrated remotely by the App itself.
              </li>
              <li>
                <strong>No cloud backup</strong> — the App does not opt in to Android's
                automatic cloud backup for its database, so your progress data is not
                uploaded to Google's backup servers.
              </li>
            </ul>
          </SectionCard>

          {/* 7 — Third-Party Services */}
          <SectionCard id="third-party" icon="🔗" title="Third-Party Services">
            <Highlight variant="success" icon="✅">
              <strong>{APP_NAME} uses no third-party analytics, advertising, or crash-reporting SDKs.</strong>
            </Highlight>
            <p>
              The open-source libraries used in the App operate entirely on-device:
            </p>
            <ul className="pp-list">
              <li><strong>Room</strong> (Google / Apache 2.0) — local database ORM</li>
              <li><strong>Hilt</strong> (Google / Apache 2.0) — dependency injection</li>
              <li><strong>WorkManager</strong> (Google / Apache 2.0) — local notification scheduling</li>
              <li><strong>Jetpack Compose</strong> (Google / Apache 2.0) — UI framework</li>
            </ul>
            <p>
              <strong>Android Speech Recognition (Google)</strong> is used for pronunciation
              scoring as described in the Speech Recognition section above. This is the only
              external service the App interacts with, and only when you actively use
              pronunciation practice.
            </p>
            <p>
              This App is distributed through the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Google Play Store
              </a>
              . Google Play's own privacy policy governs data collected by the Play Store
              platform itself.
            </p>
          </SectionCard>

          {/* 8 — Data Retention */}
          <SectionCard id="retention" icon="🗂️" title="Data Retention">
            <p>
              All data is retained <strong>solely on your device</strong> for as long as you
              use the App. We have no access to your data.
            </p>
            <p>Your data is automatically deleted when you:</p>
            <ul className="pp-list">
              <li>Uninstall the App</li>
              <li>Use "Clear app data" in Android Settings</li>
              <li>Perform a factory reset</li>
            </ul>
          </SectionCard>

          {/* 9 — Your Rights */}
          <SectionCard id="rights" icon="⚖️" title="Your Rights &amp; Data Deletion">
            <p>
              Because all data is stored exclusively on your device,{' '}
              <strong>you have full control</strong> over your data at all times.
            </p>

            <h3>To delete all your data:</h3>
            <ol className="pp-steps">
              <li>Open your device's <strong>Settings</strong> app</li>
              <li>Navigate to <strong>Apps</strong></li>
              <li>Find and tap <strong>{APP_NAME}</strong></li>
              <li>Tap <strong>Storage &amp; cache</strong> → <strong>Clear storage</strong></li>
              <li>Or simply <strong>Uninstall</strong> the App</li>
            </ol>

            <Highlight variant="info" icon="ℹ️">
              You can also use the "Request app data deletion" feature on the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Google Play Store listing
              </a>
              . Since all data is local, uninstalling the App fully satisfies any deletion
              request.
            </Highlight>
          </SectionCard>

          {/* 10 — Children's Privacy */}
          <SectionCard id="children" icon="👶" title="Children's Privacy">
            <p>
              {APP_NAME} is a language learning application intended for general audiences.
              It is <strong>not directed at children under the age of 13</strong>.
            </p>
            <p>
              We do not knowingly collect personal information from children. Because the App
              collects no personal information from any user, no special handling is required.
            </p>
          </SectionCard>

          {/* 11 — Policy Changes */}
          <SectionCard id="changes" icon="📝" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted
              on this page with an updated "Last updated" date.
            </p>
            <p>
              Continued use of the App after changes are posted constitutes your acceptance
              of the updated policy.
            </p>
          </SectionCard>

          {/* 12 — Contact Us */}
          <SectionCard id="contact" icon="✉️" title="Contact Us">
            <p>
              For questions or concerns regarding this Privacy Policy, please contact us:
            </p>

            <div className="pp-contact-card">
              <span className="pp-contact-card__icon">📧</span>
              <div>
                <div className="pp-contact-card__label">Privacy Inquiries</div>
                <div className="pp-contact-card__email">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '16px' }}>
              <strong>Developer:</strong> {DEVELOPER_NAME}
              <br />
              <strong>App Package:</strong> <code>{PACKAGE_NAME}</code>
            </p>

            <p>We aim to respond to all legitimate privacy inquiries within <strong>30 days</strong>.</p>
          </SectionCard>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="pp-footer">
        <p><strong>{APP_NAME}</strong> — Privacy Policy</p>
        <p>Last updated: {LAST_UPDATED} · Developer: {DEVELOPER_NAME}</p>
        <p style={{ marginTop: '8px', fontSize: '0.78rem' }}>
          Your learning progress is stored locally on your device. We do not collect personal data.
        </p>
      </footer>
    </div>
  )
}
