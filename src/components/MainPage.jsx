import './MainPage.css'
import NavbarComponent from './NavbarComponent'
import CarouselComponent from './CarouselComponent'
import GameCard from './GameCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactSearchBox from "react-search-box"
import BF5 from '../images/Battlefield-5.jpg'
import WWZ from '../images/World-War-Z.jpg'
import GTA5 from '../images/Grand-Theft-Auto-5.jpg'
import FH5 from '../images/Forza-Horizon-5.jpg'
import HL from '../images/Hogwarts-Legacy.jpg'
import GI from '../images/Genshin-Impact.jpg'
import GamingLoadingComponent from './GamingLoadingComponent'

function MainPage() {
    const [user, setUser] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [getSearchBoxValue, setSearchBoxValue] = useState({ searchBox: "" })
    const [getcategory, setCategory] = useState("")
    const [getCategoryResults, setCategoryResults] = useState([])
    const handleSearchFieldChanges = (data) => {
        setSearchBoxValue(() => ({
            ...getSearchBoxValue,
            searchBox: data
        }))
        fetchSearchResults()
        // console.log(getSearchBoxValue.searchBox)
    }

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true)
            let games = []
            try {
                if (getcategory.includes('Under')) {
                    const res = await axios.get('http://localhost:8000/api/get-games/category/under-18-games')
                    res.data.forEach(game => {
                        games.push(game)
                    });
                    setLoading(false)
                }
                else {
                    const res = await axios.post('http://localhost:8000/api/get-games/category', { category: getcategory.replaceAll(" ", "-") })
                    res.data.forEach(game => {
                        games.push(game)
                    });
                    setLoading(false)
                }
            } catch (err) { setLoading(true) }
            setCategoryResults(games)
        }

        fetchGames();
    }, [getcategory])

    const navigate = useNavigate()
    const handleOnSelectSearchResult = (item) => {
        navigate(`/gameinfopage/${item.item.value.replaceAll(" ", "-")}`)
    }

    const [searchResults, setSearchResults] = useState([]);

    const fetchSearchResults = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/search', { searchQuery: getSearchBoxValue.searchBox });
            const results = res.data.map((element, index) => ({ key: index, value: element.title }));
            setSearchResults(results);
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(true)
        }
    }

    useEffect(() => {
        let games = []
        const fetchAllGames = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/get-all-games")
                res.data.forEach(game => {
                    games.push(game)
                });
                setLoading(false)
                setCategoryResults(games)
            } catch (error) {
            }
        }
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/user/${localStorage.getItem('user')}`)
                setUser(res.data[0].username)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllGames()
        fetchUser()
    }, [])
    return (
        <>
            <NavbarComponent setCategory={setCategory} username={user}/>
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
                <center>
                    <CarouselComponent
                        width={"55%"}
                        gameImages={
                            [BF5, GTA5, GI, FH5, WWZ, HL]
                        }
                        gamesNames={
                            [
                                'Battlefield 5',
                                'Grand Theft Auto 5',
                                'Genshin Impact',
                                'Forza Horizon 5',
                                'World War Z',
                                'Hogwarts Legacy'
                            ]
                        }
                    />
                </center>
                {isLoading ?
                    <div className="loader-container" style={{ marginRight: '50px', marginBottom: '100px' }}>
                        <GamingLoadingComponent />
                    </div>
                    : <section className='games-view-panel'>
                        {getCategoryResults.map((game, index) => {
                            return (
                                <div className='card-container' key={index}>
                                    <GameCard
                                        gameImage={require(`../images/${game.title.replaceAll(" ", "-")}.jpg`)}
                                        gamePrice={game.price}
                                        gameTitle={game.title}
                                        gameDiscount={game.discount}
                                    />
                                </div>
                            )
                        })}
                    </section>}
            </main>
        </>
    )
}

export default MainPage