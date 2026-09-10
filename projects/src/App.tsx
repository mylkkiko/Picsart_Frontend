import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { OnlineShop } from './pages/OnlineShop'
import { NotFound } from './pages/NotFound'
import { Timer } from './pages/Timer'
import { TeamDirectory } from './pages/TeamDirectory'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-pink-950 px-6 py-16 text-slate-100">
      <header>
        <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent transition-opacity hover:opacity-70"
          >
            Homeworks
          </Link>
        </div>
      </header>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/shop'} element={<OnlineShop />} />
        <Route path={'/timer'} element={<Timer />} />
        <Route path={'/teamDirectory'} element={<TeamDirectory />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
