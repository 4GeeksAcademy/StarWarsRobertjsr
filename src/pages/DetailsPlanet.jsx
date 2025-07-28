import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlanetID } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer' 

export const DetailsPlanet = () => {
    
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [planet, setPlanet] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPlanetDetail = async () => {
            try {
                setLoading(true)
                const planetData = await getPlanetID(id)
                setPlanet(planetData)
                dispatch({ type: 'set_selected_planet', payload: planetData })
            } catch (error) {
                console.error('Error fetching planet details:', error)
            } finally {
                setLoading(false)
            }
        }
        
        if (id) {
            fetchPlanetDetail()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!planet) {
        return <div>Planet not found</div>
    }

    return (
        <>
            <div>
                <h1>Details Planet</h1>
                <div className="card">
                    <div className="card-tittle">
                        <h2>{planet.name}</h2>
                    </div>
                    <div className="card-body" >
                        <p className="card-text"><strong>Diameter:</strong> {planet.diameter} km</p>
                        <p className="card-text"><strong>Terrain:</strong> {planet.terrain}</p>
                        <p className="card-text"><strong>Climate:</strong> {planet.climate}</p>
                        <p className="card-text"><strong>Gravity:</strong> {planet.gravity}</p>
                        <p className="card-text"><strong>Surface Water:</strong> {planet.surface_water}%</p>
                        <p className="card-text"><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
                        <p className="card-text"><strong>Rotation Period:</strong> {planet.rotation_period} hours</p>
                        <p className="card-text"><strong>Population:</strong> {planet.population}</p>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </>
    )
}
