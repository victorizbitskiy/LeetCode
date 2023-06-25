function toGoatLatin(sentence: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const words = sentence.split(' ');

    return words.map((word, index) => {
        if (!vowels.has(word[0].toLowerCase())) {
            word = word.substring(1) + word[0];
        }
        return  word + 'ma' + 'a'.repeat(index + 1);
    }).join(' ');
};