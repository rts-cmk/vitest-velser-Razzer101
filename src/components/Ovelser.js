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

export async function testPromise(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export function failTest(a, b){
    return a + b
}

export function time() {
  const currentHour = new Date().getHours()

  if (currentHour > 9 && currentHour < 17) {
    return true
  } else {
    return false
  }

}