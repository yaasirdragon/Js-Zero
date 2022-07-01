const dscore1 = Number(prompt("Dolphins Score 1?"));
const dscore2 = Number(prompt("Dolphins Score 2?"));
const dscore3 = Number(prompt("Dolphins Score 3?"));

const kscore1 = Number(prompt("Koalas Score 1 ?"));
const kscore2 = Number(prompt("Koalas Score 2 ?"));
const kscore3 = Number(prompt("Koalas Score 3 ?"));

const daverage = ((dscore1 + dscore2 + dscore3) / 3);
const kaverage = ((kscore1 + kscore2 + kscore3) / 3);

if (daverage >= kaverage && daverage >= 100) {
    console.log("Dolphins Win");
} else if (kaverage >= daverage && kaverage >= 100) {
    console.log("Koalas Win");
} else if (daverage === kaverage && kaverage >= 100 && daverage >= 100) {
    console.log("Both win the trophy!");
} else {
    console.log("No one wins the trophy!");
}