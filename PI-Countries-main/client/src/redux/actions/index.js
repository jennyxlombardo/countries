import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const FILTER_CONTINENTS = 'FILTER_CONTINENTS'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const COUNTRY_DETAILS = 'COUNTRY_DETAILS'
export const GET_NAME_COUNTRY = 'GET_NAME_COUNTRY'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const ORDER_POPULATION = 'ORDER_POPULATION'
export const SORT = 'SORT'

export function getCountries () {
  return async function (dispatch) {
    try {
      await axios.get('http://localhost:3001/countries/').then(countries => {
        dispatch({
          type: GET_COUNTRIES,
          payload: countries.data
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function searchCountries (search) {
  return async function (dispatch) {
    try {
      await axios
        .get('http://localhost:3001/countries/?name=' + search)
        .then(countries => {
          dispatch({
            type: SEARCH_COUNTRIES,
            payload: countries.data
          })
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export function sort (payload) {
  return {
    type: SORT,
    payload
  }
}
export function filterContinents (payload) {
  return {
    type: FILTER_CONTINENTS,
    payload
  }
}

export function filterCountries (payload) {
  return {
    type: FILTER_COUNTRIES,
    payload
  }
}
export function countryDetails (id) {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/countries/' + id)
      return dispatch({
        type: COUNTRY_DETAILS,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getActivity () {
  return async function (dispatch) {
    try {
      var json = await axios('http://localhost:3001/activity/')
      return dispatch({
        type: 'GET_ACTIVITY',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postActivity (payload) {
  return async function (dispatch) {
    const response = await axios.post('http://localhost:3001/activity/', payload)
    dispatch({
      type: 'POST_ACTIVITY',
      payload: response.data
    })
  }
}

export function getNameCountry (name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        'http://localhost:3001/countries/?name=' + name
      )
      return dispatch({
        type: 'GET_NAME_COUNTRY',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByActivity () {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/activity/");
      return dispatch({
        type: "FILTER_ACTIVITY",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createActivity (payload) {
  return async function (dispatch) {
    var json = await axios.post('http://localhost:3001/activity', payload)

    return dispatch({
      type: 'CREATE_ACTIVITY',
      payload: json.data
    })
  }
}

export function orderByPopulation (payload) {
  return {
    type: 'ORDER_POPULATION',
    payload
  }
}
