export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"


export const increment = (data)=>({
    type : INCREMENT,
    paylode : data
})

export const decrement = (data)=>({
    type : DECREMENT,
    paylode : data
})