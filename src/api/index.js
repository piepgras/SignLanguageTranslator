const API_KEY=process.env.REACT_APP_API_KEY

export const createHeader=()=>{
    return{
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json' 
    }
}