
export const logUser=(data)=>{
    console.log('log actions',data)
    return {
        type:'LOG_USER',
        data
    }
}

export const regUser=(data)=>{
    console.log('reg actions',data)
    return {
        type:'REG_USER',
        data
    }
}
export const logOut=(data)=>{
    console.log('log actions',data)
    return {
        type:'LOG_OUT',
    }
}
// export const loginStart=(data)=>{
//     console.log('reg actions',data)
//     return {
//         type:'LOG_START',
//     }
// }
// export const loginFailure=(data)=>{
//     console.log('reg actions',data)
//     return {
//         type:'LOG_FAILURE',
//     }
// }
// export const loginSuccess=(data)=>{
//     console.log('reg actions',data)
//     return {
//         type:'LOG_SUCCESS',
//     }
// }


