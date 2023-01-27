const API_KEY=process.env.REACT_APP_API_KEY

// Creates a header with X-API-KEY and a JSON content
export const createHeader = () => {
    return{
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json' 
    }
}