import { app } from "./app.mjs";

const { profile: { industryName, appName } } = app

const { expertise: {expertise1, expertise2, expertise3} } = app

console.log(`------------------------------`)
console.log(`Welcome to the ${appName}`)
console.log(`------------------------------`)
console.log(`The emerging leader in the ${industryName} industry`)
console.log(`------------------------------`)
console.log(`We provide expertise in the following areas:
${expertise1}, ${expertise2}, ${expertise3}`)

