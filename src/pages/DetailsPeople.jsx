import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPeopleID } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer' 

export const DetailsPeople = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            try {
                setLoading(true)
                const characterData = await getPeopleID(id)
                setCharacter(characterData)
                dispatch({ type: 'set_selected_character', payload: characterData })
            } catch (error) {
                console.error('Error fetching character details:', error)
            } finally {
                setLoading(false)
            }
        }
        
        if (id) {
            fetchCharacterDetail()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!character) {
        return <div>Character not found</div>
    }

    return (
        <>
            <div>
                <h1>Details People</h1>
                <div className="card">
                    <div className="card-tittle">
                        <h2>{character.name}</h2>
                    </div>
                    <div className="card-body" >
                        <p className="card-text"><strong>Gender:</strong> {character.gender}</p>
                        <p className="card-text"><strong>Skin Color:</strong> {character.skin_color}</p>
                        <p className="card-text"><strong>Hair Color:</strong> {character.hair_color}</p>
                        <p className="card-text"><strong>Height:</strong> {character.height} cm</p>
                        <p className="card-text"><strong>Eye Color:</strong> {character.eye_color}</p>
                        <p className="card-text"><strong>Mass:</strong> {character.mass} kg</p>
                        <p className="card-text"><strong>Birth Year:</strong> {character.birth_year}</p>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </>
    )
}