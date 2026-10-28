import { ToiletCard as ToiletCrad } from "./components/ToiletCard"
import { ToiletForm } from "./components/ToiletForm"
import "./App.css"

export default function App() {
    return (
        <div className="layout">
            <header className="top">
                <h1>Мои сущности</h1>
                <span className="pill">Количество</span>
            </header>

            <aside>
                <ToiletForm />
            </aside>

            <main>
                <p className="error">Ошибка: ошибка</p>
                <p className="hint">Загрузка…</p>
                <p className="hint">Добавьте сущность</p>
                <div className="grid">
                    <ToiletCrad />
                </div>
            </main>
        </div>
    )
}
