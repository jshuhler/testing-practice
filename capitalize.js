function capitalize(str) {
    let lowerArray = str.toLowerCase().split('');
    let capLetter = lowerArray[0].toUpperCase()
    let capString = capLetter + lowerArray.splice(1).join;
    console.log(capString)
}

capitalize('qWeRTy')