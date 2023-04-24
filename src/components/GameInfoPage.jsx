import GameInfoNavbar from "./GameInfoNavbar"
import { FaWindows } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { IoCloudDownload } from 'react-icons/io5'
import './GameInfoPage.css'
import './GamingButton.css'
import ReactSearchBox from "react-search-box"

function GameInfoPage() {
    const [user, setUser] = useState("")
    const [getSearchBoxValue, setSearchBoxValue] = useState({ searchBox: "" })
    const handleSearchFieldChanges = (data) => {
        setSearchBoxValue(() => ({
            ...getSearchBoxValue,
            searchBox: data
        }))
        fetchSearchResults()
    }
    const [searchResults, setSearchResults] = useState([]);

    const fetchSearchResults = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/search', { searchQuery: getSearchBoxValue.searchBox });
            const results = res.data.map((element, index) => ({ key: index, value: element.title }));
            setSearchResults(results);
            // setLoading(false)
        } catch (err) {
            console.log(err)
            // setLoading(true)
        }
    }
    const fetchGameData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/gameinfopage/${document.URL.split('/')[4]}`)
            setGameData(res.data[0])
        } catch (error) { console.log(error) }
    }
    const navigate = useNavigate()
    const handleOnSelectSearchResult = (item) => {
        console.log(true)
        navigate(`/gameinfopage/${item.item.value.replaceAll(" ", "-")}`)
        fetchGameData()
    }
    const [getGameData, setGameData] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/user/${localStorage.getItem('user')}`)
                setUser(res.data[0].username)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
        fetchGameData()
    }, [])
    // useEffect(() => console.log(getGameData), [getGameData])
    return (
        <>
            <header>
                <GameInfoNavbar username={user}/>
            </header>
            <main>
            <div className="search-box-container">
                    <ReactSearchBox
                        placeholder="search games"
                        onChange={handleSearchFieldChanges}
                        name="searchBox"
                        data={searchResults}
                        inputBackgroundColor="#202124"
                        inputFontColor='white'
                        inputHeight='50px'
                        onSelect={handleOnSelectSearchResult}
                    />
                </div>

                <section className="game-overview">
                    <div className="game-preview-desc">
                        <h1 id="title" className="game-title" style={{ color: 'white', marginBottom: 10, fontFamily: 'sans-serif', fontWeight: 300 }}>{getGameData.title}</h1>
                        {getGameData.title && (
                            <img
                                src={require(`../images/${getGameData.title.replaceAll(" ", "-")}.jpg`)}
                                alt="img"
                            />
                        )}
                        <p className="game-desc" style={{ color: 'white', marginTop: 10, fontFamily: 'sans-serif', fontSize: 16 }}>
                            {getGameData.description}
                        </p>
                    </div>
                    <div className="game-purchase">
                        <div className="game-logo">
                            {getGameData.title && (
                                <img
                                    src={require(`../logos/${getGameData.title.replaceAll(" ", "-")}.png`)}
                                />
                            )}
                        </div>
                        <div className="discount-price-container">
                            <div className="discount-box">{getGameData.discount}%</div>
                            <span className="actual-game-price" style={{ textDecoration: 'line-through', color: 'gray', marginTop: 5 }}>₹{getGameData.price}</span>
                            <span className="discounted-price" style={{ marginTop: 5 }}>₹{Math.round(Number(getGameData.price) - (Number(getGameData.price) * (Number(getGameData.discount) / 100)))}</span>
                        </div>
                        <div className="button-borders">
                            <button className="primary-button" type='button' style={{ width: "350px" }}> {getGameData.discount === 100 ? <IoCloudDownload size={24} /> : "BUY NOW"}
                            </button>
                        </div>
                        <div className="platform">
                            <span className="left-side-text">Platform</span>
                            <span style={{ fontSize: 25 }}><FaWindows /></span>
                        </div>
                        <div className="divider"></div>
                        <div className="platform">
                            <span className="left-side-text">Release Date</span>
                            <span style={{ fontSize: 18 }}>{getGameData.release_date}</span>
                        </div>
                        <div className="divider"></div>
                        <div className="platform">
                            <span className="left-side-text">Developer</span>
                            <span style={{ fontSize: 18 }}>{getGameData.developer}</span>
                        </div>
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="specifications">
                    <h3 className="specifications-title" style={{ marginLeft: '5%' }}>Specifications</h3>
                    <ul className="specs-list">
                        <li className="list-item" style={{ color: 'gray' }}>Operating System
                            <p className="spec">{getGameData.os}</p></li>
                        <li className="list-item" style={{ color: 'gray' }}>Processor
                            <p className="spec">{getGameData.cpu}
                            </p>
                        </li>
                        <li className="list-item" style={{ color: 'gray' }}>Memory
                            <p className="spec">{getGameData.ram} GB</p>
                        </li>
                        <li className="list-item" style={{ color: 'gray' }}>Video Card
                            <p className="spec">{getGameData.gpu}</p>
                        </li>
                        <li className="list-item" style={{ color: 'gray' }}>Sound Card
                            <p className="spec">{getGameData.sound_card}</p>
                        </li>
                        <li className="list-item" style={{ color: 'gray' }}>HDD Space
                            <p className="spec">{getGameData.hdd} GB</p>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default GameInfoPage