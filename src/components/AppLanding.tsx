import { useNavigate } from 'react-router-dom'
import './AppLanding.css'

const APPS = [
  {
    route: '/home-asset-keeper',
    icon: '🏠',
    name: 'Home Asset Keeper',
    tagline: 'Home inventory & warranty tracker',
    badges: ['100% Offline', 'No Data Collected'],
    accent: 'hak',
  },
  {
    route: '/korean-coach',
    icon: '🇰🇷',
    name: 'Korean Coach',
    tagline: 'Spoken Korean learning app',
    badges: ['Local-First', 'No Analytics'],
    accent: 'kc',
  },
]

export default function AppLanding() {
  const navigate = useNavigate()
  return (
    <div className="landing">
      <header className="landing__hero">
        <p className="landing__dev">Sheldon Chang</p>
        <h1 className="landing__title">Privacy Policies</h1>
        <p className="landing__subtitle">Select an app to view its privacy policy.</p>
      </header>

      <div className="landing__grid">
        {APPS.map(app => (
          <button
            key={app.route}
            className={`landing__card landing__card--${app.accent}`}
            onClick={() => navigate(app.route)}
          >
            <span className="landing__card-icon">{app.icon}</span>
            <h2 className="landing__card-name">{app.name}</h2>
            <p className="landing__card-tagline">{app.tagline}</p>
            <div className="landing__card-badges">
              {app.badges.map(b => (
                <span key={b} className="landing__badge">{b}</span>
              ))}
            </div>
            <span className="landing__card-cta">View Privacy Policy →</span>
          </button>
        ))}
      </div>

      <footer className="landing__footer">
        <p>© {new Date().getFullYear()} Sheldon Chang · All apps store data locally on your device.</p>
      </footer>
    </div>
  )
}
