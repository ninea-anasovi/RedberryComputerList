import React from 'react'
import axios from 'axios'

function AxiosBootstrap() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_REDBERRY_API_TOKEN
    axios.defaults.baseURL = process.env.REACT_APP_REDBERRY_API_URL
    
    return (<></>)
}

export default AxiosBootstrap