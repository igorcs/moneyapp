const INITIAL_STATE = {
    list: [],
    summary: { credit: 0, debt: 0 }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_CYCLES_DASHBOARD_FETCHED':
            return { ...state, list: action.payload.data }
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}