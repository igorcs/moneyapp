const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    console.log('dashboardReducer action.type: ' + action.type);
    switch (action.type) {
        
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}