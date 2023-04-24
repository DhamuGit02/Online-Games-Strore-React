import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material'

function GameCard({ gameTitle, gameImage, gamePrice, gameDiscount }) {
    const discountedPrice = Math.round(Number(gamePrice) - (Number(gamePrice) * (Number(gameDiscount) / 100)))
    return (
        <Card style={
            {
                width: '90%',
                color: 'white',
                fontFamily: 'system-ui',
                borderRadius: '10px'
            }}
            bg="dark">
            <Card.Img variant="top" src={gameImage} height={200} />
            <Card.Body>
                <Card.Title>{gameTitle}</Card.Title>
                <div style={{ display: 'flex', gap: 10 }}>
                    <span>
                        {
                            (Number(gamePrice) === 0) ?
                                <Card.Text style={{ color: 'lightgreen' }}>{"100%"}</Card.Text>
                                : <Card.Text style={{ color: 'lightgreen' }}>{gameDiscount + "%"}</Card.Text>
                        }
                    </span>
                    <span>
                        {(Number(gamePrice) === 0) ?
                            <Card.Text style={{ color: 'gray' }}>{"Free"}</Card.Text>
                            : <Card.Text style={{ textDecoration: 'line-through', color: 'gray' }}>{"₹" + gamePrice}</Card.Text>
                        }
                    </span>
                </div>
                <center>
                    <Button variant="contained" color='primary'><a class="nav-link" href={`/gameinfopage/${gameTitle.replaceAll(" ", "-")}`} style={{ textDecoration: 'none', color: 'white' }}>{"₹" + discountedPrice}</a></Button>
                </center>
            </Card.Body>
        </Card>
    )
}

export default GameCard