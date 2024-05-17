let userWord = prompt('Type a word').trim().toLowerCase();

while (userWord.length < 1){
    userWord = prompt('Type a word').trim().toLowerCase();
}

function isPalindrome(word){
    if( word.length === 1){
        return true;
    } else {
        let reversedWord = '';
        for (let index = word.length - 1; index >= 0; index--) {
            console.log(word[index], reversedWord);
            reversedWord += word[index];
        }

        if (reversedWord === word){
            return true;
        } else {
            return false 
        }
    }
}
console.log(`Is ${userWord} palindrome?`,  isPalindrome(userWord));



