// arrow function to write html using template literals
const generatePage = (name, github) => {
    // use return when writing multi-line strings
    // BACK TICS (`) NOT QUOTES (' / ")!
    // string interpolation: ${variable}
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie-edge">
            <title>Portfolio Demo</title>
        </head>

        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
        </html>
    `;
};

module.exports = generatePage;