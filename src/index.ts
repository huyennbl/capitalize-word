import capitalize  from 'lodash.capitalize'
function asWord(word: string): string {
  return `\\b${word}\\b`
}

export const capitalizeWord = (string: string, word: string): string => {
  const matchWordRegex = new RegExp(asWord(word), 'ig')
  const matchWord = string.match(matchWordRegex)
  if (!matchWord) {
    return string
  }

  const replaceWord = capitalize(matchWord[0])
  return string.replace(new RegExp(matchWordRegex), replaceWord)
};
