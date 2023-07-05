function detectCapitalUse(word: string): boolean {
    const Bootcase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return (
        word === Bootcase ||
        word === word.toLocaleLowerCase() ||
        word === word.toLocaleUpperCase()
    );
};