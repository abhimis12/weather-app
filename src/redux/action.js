export const  ADDDATA= "ADDDATA";
export const  ADDTEMP="ADDTEMP";
export const  DAYTEMP="DAYTEMP";
export const  SUNRISE="SUNRISE";
export const adddata = (payload) =>{
    return {
        type:ADDDATA,
        payload
    }
}
export const addtemp = (payload) =>{
    return {
        type:ADDTEMP,
        payload
    }
}
export const daytemp = (payload) =>{
    return {
        type:DAYTEMP,
        payload
    }
}
export const sunrise= (payload) =>{
    return {
        type:SUNRISE,
        payload
    }
}

