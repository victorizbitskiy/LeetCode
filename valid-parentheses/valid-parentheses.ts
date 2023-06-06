function isValid(s: string): boolean {
    let openedBracketsFromStringStack = [];
    let bracketsMap = new Map();
    bracketsMap
        .set("(", ")")
        .set("{", "}")
        .set("[", "]");
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (bracketsMap.has(char)) {
            openedBracketsFromStringStack.push(char);
        }
        else {
            let openedBracket = openedBracketsFromStringStack.pop();
            if (bracketsMap.get(openedBracket) !== char) {
                return false;
            }
            ;
        }
    }
    if (openedBracketsFromStringStack.length === 0) {
        return true;
    }
    else {
        return false;
    }
};