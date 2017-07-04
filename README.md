# Gemifunc

Gemifunc is a one-function module with which you can describe all gemini tests in the form of an array of data and run it.

### Todo:

- Nested tests

### Installation

Install [Gemini](https://github.com/gemini-testing/gemini) and all [the dependencies for gemini](https://github.com/gemini-testing/gemini#dependencies)

And install Gemifunc in your project

```sh
$ npm install gemifunc
```

### Usage and example
Add to test file data and our function 
```js
    const gemifunc = require('gemifunc');
    const testData = [
        {
            name: 'test',
            url: '/',
            capturedElements: '.button',
            states: [
                {
                    name: 'plain', 
                    callback: null
                },
                {
                    name: 'hovered',
                    callback: (actions, find) => {
                        actions.mouseMove('.button');
                    }
                }
            ]    
        }
    ];
```

Then run a test

```js
    gemifunc(testData);
```
