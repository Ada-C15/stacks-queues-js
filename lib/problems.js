

const balanced = (string) => {
    stack = []
    const bracketMap = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    index = 0

    for (let index = 0; index < string.length; index++) {
    if (string[index] in bracketMap) {
        stack.push(string[index]); 
        }
        // compare bracket to hash value
        // if pairs match, remove bracket from stack
        // if not return false (not all brackets match)
    } 
    // when done iterating return true or false based on if the array is empty or not
}

const evaluatePostfix = () => {
    // will complete if i finish the rest of cs fun :)
}

