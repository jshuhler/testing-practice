export function reverseString(str) {
    let charArray = str.split('');
    let reverseArr = charArray.reverse();
    return reverseArr.join('');
}