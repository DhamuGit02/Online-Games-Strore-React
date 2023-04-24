import GameVaultLogo from './GameVaultLogo'
import './Home.css'
import Login from './Login'

function Home() {
    return (
        <div className="App">
            <main className="parent-container">
                <section className="image-section"></section>
                <Login />
            </main>
        </div>
    )
}

export default Home