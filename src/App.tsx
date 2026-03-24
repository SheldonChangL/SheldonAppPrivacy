import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy'
import KoreanCoachPrivacyPolicy from './components/KoreanCoachPrivacyPolicy'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/korean-coach" element={<KoreanCoachPrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
