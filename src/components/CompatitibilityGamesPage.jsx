import './CompatitibilityGamesPage.css'
import { useState, useEffect } from 'react'
import './GamingButton.css'
import axios from 'axios'
import GameCard from './GameCard'
import GameInfoNavbar from './GameInfoNavbar';

function CompaitbilityGamesPage() {
    const [user, setUser] = useState(null)
    const [games, setGames] = useState(null)
    const [getFormData, setFormData] = useState({
        os: "",
        cpu: "",
        gpu: "",
        ram: "",
        sound_card: "",
        hdd: ""
    })
    const handleFormData = (event) => {
        setFormData(() => ({
            ...getFormData,
            [event.target.name]: event.target.value
        }))
    }
    const fetchGamesBySpecifications = async (event) => {
        event.preventDefault()
        const res = await axios.post("http://localhost:8000/api/get-compatible-games", {
            os: getFormData.os,
            cpu: getFormData.cpu,
            gpu: getFormData.gpu,
            ram: getFormData.ram,
            sound_card: getFormData.sound_card,
            hdd: getFormData.hdd
        })
        setGames(res.data)
    }
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("http://localhost:8000/user/" + localStorage.getItem("user"))
            setUser(res.data[0].username)
        }
        fetchUser()
    }, [])
    return (
        <>
            <GameInfoNavbar username={user} />
            <main className="cgp-parent-container">
                <section className='left-section'>
                    <form class="form" style={{ padding: '5%' }} className="specs-form">
                        <div class="group">
                            <input required="true" class="main-input" type="text" name="os" onChange={handleFormData} />
                            <span class="highlight-span"></span>
                            <label class="lebal-email">Operating System</label>
                        </div>
                        <div class="container-1">
                            <div class="group">
                                <input required="true" class="main-input" type="text" name="cpu" onChange={handleFormData} />
                                <span class="highlight-span"></span>
                                <label class="lebal-email">Processor</label>
                            </div>
                        </div>
                        <div class="container-1">
                            <div class="group">
                                <input required="true" class="main-input" type="text" name="gpu" onChange={handleFormData} />
                                <span class="highlight-span"></span>
                                <label class="lebal-email">Graphics Card</label>
                            </div>
                        </div>
                        <div class="container-1">
                            <div class="group">
                                <input required="true" class="main-input" type="text" name="ram" onChange={handleFormData} />
                                <span class="highlight-span"></span>
                                <label class="lebal-email">RAM</label>
                            </div>
                        </div>
                        <div class="container-1">
                            <div class="group">
                                <input required="true" class="main-input" type="text" name="sound_card" onChange={handleFormData} />
                                <span class="highlight-span"></span>
                                <label class="lebal-email">Sound card</label>
                            </div>
                        </div>
                        <div class="container-1">
                            <div class="group">
                                <input required="true" class="main-input" type="text" name="hdd" onChange={handleFormData} />
                                <span class="highlight-span"></span>
                                <label class="lebal-email">HDD</label>
                            </div>
                        </div>
                        <center>
                            <div className="button-borders" style={{ marginTop: 15 }}>
                                <button className="primary-button" type='submit' onClick={fetchGamesBySpecifications}> SEARCH
                                </button>
                            </div>
                        </center>
                    </form>
                </section>
                <section className='right-section'>
                    {games !== null ? games.map((game, index) => (
                        <div className="gamecard-container" style={{ width: 350 }} key={index}>
                            <GameCard
                                gameImage={require(`../images/${game.title.replaceAll(" ", "-")}.jpg`)}
                                gamePrice={game.price}
                                gameDiscount={game.discount}
                                gameTitle={game.title}
                            />
                        </div>
                    )) : ""}
                </section>
            </main>
        </>
    )
}

export default CompaitbilityGamesPage