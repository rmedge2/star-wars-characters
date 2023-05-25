import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Characters = () => {
    const loadCharacters = () => {
        // setIsLoading(true)
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(response => response.json())
            .then(data => {
                setCharacters(data)
                // setIsLoading(false)
            })
    }
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => { loadCharacters() }, [])
    console.log(characters)

    // if(isLoading){
    //     return(
    //         <p>Loading ...</p>
    //     )
    // }

    return (
        <div>
            {
                characters.map(character => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={character.image} width={286} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                    New Luke.
                                </Card.Text>
                                <Button variant="primary" href={character.wiki}>Character Wiki Page</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Characters