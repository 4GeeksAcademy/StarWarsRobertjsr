export const initialStore = () => {
  return {
    peoples: [],
    planets: [],
    vehicles: [],
    favorites: [],
    selectedCharacter: null,
    selectedPlanet: null,
    selectedVehicle: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_peoples':

      return {
        ...store,
        peoples: action.payload
      };

    case 'get_planets':

      return {
        ...store,
        planets: action.payload
      }

    case 'get_vehicles':

      return {
        ...store,
        vehicles: action.payload
      }

    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

    case 'delete_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload)
      }

    case 'set_selected_character':
      return {
        ...store,
        selectedCharacter: action.payload
      }

    case 'set_selected_planet':
      return {
        ...store,
        selectedPlanet: action.payload
      }

    case 'set_selected_vehicle':
      return {
        ...store,
        selectedVehicle: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
