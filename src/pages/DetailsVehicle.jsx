import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVehicleID } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer' 

export const DetailsVehicle = () => {
    
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [vehicle, setVehicle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVehicleDetail = async () => {
            try {
                setLoading(true)
                const vehicleData = await getVehicleID(id)
                setVehicle(vehicleData)
                dispatch({ type: 'set_selected_vehicle', payload: vehicleData })
            } catch (error) {
                console.error('Error fetching vehicle details:', error)
            } finally {
                setLoading(false)
            }
        }
        
        if (id) {
            fetchVehicleDetail()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!vehicle) {
        return <div>Vehicle not found</div>
    }

    return (
        <>
            <div>
                <h1>Details Vehicle</h1>

                <div className="card">
                    <div className="card-tittle">
                        <h2>{vehicle.name}</h2>
                    </div>
                    <div className="card-body" >
                        <p className="card-text"><strong>Model:</strong> {vehicle.model}</p>
                        <p className="card-text"><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
                        <p className="card-text"><strong>Vehicle Class:</strong> {vehicle.vehicle_class}</p>
                        <p className="card-text"><strong>Length:</strong> {vehicle.length} meters</p>
                        <p className="card-text"><strong>Crew:</strong> {vehicle.crew}</p>
                        <p className="card-text"><strong>Passengers:</strong> {vehicle.passengers}</p>
                        <p className="card-text"><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed} km/h</p>
                        <p className="card-text"><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity} kg</p>
                        <p className="card-text"><strong>Consumables:</strong> {vehicle.consumables}</p>
                        <p className="card-text"><strong>Cost:</strong> {vehicle.cost_in_credits} credits</p>
                    </div>
                    <div className="card-footer"></div>

                </div>
            </div>
        </>
    )
}