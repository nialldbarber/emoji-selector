# Emoji picker

## Rough guide to process

- A one-page emoji picker. You arrive on the home page and have a search bar along with a list of emojis below
- The search is based on keystroke, so there won't be a need for a submit button
- The search should be debounced as I want this to be very performant
- The list of emojis will be long, so I'll want to window them
- When you click on an emoji, you'll be able to copy it to the clipboard

## Pages needed

- Home page
  - This will be the only page we want to use
  - 404 just for the hell of it

## Components needed

- A title for the main title
- Search bar
- Emoji list
- Emoji row

## libs

- Filter function that takes the original array and returns a new array with the given parameters.
  - This will be where the heavy lifting happens!
- Format emojis
  - The format of the emoji list will need to be sorted and turned into an array essentially.
  - First things first, output the emoji list in the app.
  - One item will be the emoji, along with it's keywords.
  - Split the array, so that the first item is the emoji (anything before :).
  - Anything after will be the keywords.
- Copy to clipboard
- Debounce (might just use `lodash.debounce`)

## State

- The lifecycle of the emojis
  -> On first render, fetch the emojis from the `constants` file `emojis.ts`
  -> Store them in state
  -> Perhaps a `useMemo` to store the result of the new typed search?
  -> So the `useMemo` value is either state, or the new searched value

## Tooling

- React
- TypeScript
- Tailwind
- RTL, Jest, swc/jest for testing
- React window
- Eslint
- Prettier
