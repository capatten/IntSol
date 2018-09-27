#!/usr/bin/env node


var fs = require("fs");

//get provided arguments
const [,, ...args] = process.argv

function printBoom(){
	console.log("Boom")
}

//create componentfile
fs.writeFileSync(`./${args[0]}.jsx`, `import React from 'react'; 
\n\n
class ${args[1]} extends React.Component {
\nrender() {
\n\n}
\n}
` )

//create componentfile
fs.writeFileSync(`./${args[0]}.less`)

//output completed message
console.log(`Component Created`);