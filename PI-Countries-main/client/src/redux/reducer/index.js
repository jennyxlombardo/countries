import { ASCENDENTE } from '../../components/variables/sort.jsx'
import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER_CONTINENTS,
  FILTER_COUNTRIES,
  COUNTRY_DETAILS,
  GET_NAME_COUNTRY,
  FILTER_ACTIVITY,
  GET_ACTIVITY,
  CREATE_ACTIVITY,
  ORDER_POPULATION,
  POST_ACTIVITY,
  SORT
} from '../actions'

const initialState = {
  countries: [],
  filteredCountries: [],
  detail: [],
  activityFilter: [],
  allActivity: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
        detail: action.payload,
        activity: action.payload
      }

    case SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload
      }

    case FILTER_CONTINENTS:
      const continente = state.countries
      const statusFiltered =
        action.payload === 'ALL'
          ? continente
          : continente.filter(el => el.continents === action.payload)
      return {
        ...state,
        filteredCountries: statusFiltered
      }

    case FILTER_COUNTRIES:
      const pais = state.countries
      const paisFiltrado = pais.filter(el => el.name === action.payload)
      return {
        ...state,
        filteredCountries: paisFiltrado
      }

    case COUNTRY_DETAILS:
      return {
        ...state,
        detail: action.payload
      }

    // case GET_NAME_COUNTRY:
    //   return {
    //     ...state,
    //     filteredCountries: action.payload
    //   }

    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload
      }

    case FILTER_ACTIVITY:
      const allActivity = state.allActivity
      const activity = allActivity
        .filter(a => a.name === action.payload)[0]
        .countries.map(countryWithActivity => countryWithActivity)
      return {
        ...state,
        countries: activity
      }

    case CREATE_ACTIVITY:
      return {
        ...state,
        allActivity: action.payload
      }

    case POST_ACTIVITY:
      return {
        ...state,
      }

    case ORDER_POPULATION:
      let orderPopulationArray = 
        action.payload === 'asc'
          ? state.countries.sort(function (a, b) {
              if (Number(a.population) > Number(b.population)) {
                return 1
              }
              if (Number(b.population) > Number(a.population)) {
                return -1
              }
              return 0
            })
          : state.countries.sort(function (a, b) {
              if (Number(a.population) > Number(b.population)) {
                return -1
              }
              if (Number(b.population) > Number(a.population)) {
                return 1
              }
              return 0
            })
      return {
        ...state,
        countries: orderPopulationArray
      }

    case SORT:
      let orderedCountries = [...state.filteredCountries] //hacemos una copia en memoria, despues lo ordenamos
      orderedCountries = orderedCountries.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1
        }
        return 0
      })

      return {
        ...state,
        filteredCountries: [...orderedCountries]
      }

    default:
      return state
  }
}
