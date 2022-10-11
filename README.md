# capitalize-word

## Installation
```
npm install @huyennbl/capitalize-word
```

## Usage
### capitalizeWord(`str`, `word`)

- 1st argument: input string
- 2nd argument: word to be capitalized in `str`
- Returns a new string with all the matched `word` (case-insensitive) in `str`, having first letter capitalized, and the remaining characters of each `word` are in lowercase.
- Partially matches are ignore, e.g.: `capitalizeWord('github', 'git')` will still return 'github')


```js
import { capitalizeWord } from '@huyennbl/capitalize-word'

capitalizeWord('frank talks about it frankly', 'frank');
// 'Frank talks about it frankly'
// => first 'frank' is fully match, so capitalized. 'frankly' is partially match, hence ignored.

capitalizeWord('Lorem ipsum...', 'ipsUM')
// 'Lorem Ipsum...'
```