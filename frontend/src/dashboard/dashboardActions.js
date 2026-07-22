import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles/`)
   //const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_CYCLES_DASHBOARD_FETCHED',
        payload: request
    }
}
