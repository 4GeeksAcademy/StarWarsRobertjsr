import { useEffect } from "react";
import { getPeoples, getPlanets, getVehicles } from "../Fetch";
import useGlobalReducer from "../hooks/useGlobalReducer"
import storeReducer from "../store";


export const Home = () => {

const { store, dispatch } = useGlobalReducer()
	

	return (
		<>
			<div className="text-center mt-5">
				<h1>StarWars Blog Robertjsr</h1>

				<h5>Este blog fue creado para todos los fans de StarWars!</h5>
			</div>
		</>
	);
}; 