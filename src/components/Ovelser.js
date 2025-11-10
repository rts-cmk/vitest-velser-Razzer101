export function inputTypes(types){
    let inputType = false
    if(typeof types === "string"){
        inputType = true
    } else if(typeof types === "number"){
        inputType = true
    } else if(types === null){
        inputType = true
    } else(
        inputType = false
    )
    return inputType
}