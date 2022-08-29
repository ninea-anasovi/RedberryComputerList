import React from 'react'
import axios from 'axios'

function AxiosBootstrap() {
    axios.defaults.params = {
        token: process.env.REACT_APP_REDBERRY_API_TOKEN 
    }
    axios.defaults.baseURL = process.env.REACT_APP_REDBERRY_API_URL
    
    return (<></>)
}

export default AxiosBootstrap