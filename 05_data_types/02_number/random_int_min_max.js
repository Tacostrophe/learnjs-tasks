function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

for(let i = 0; i < 15; i++) {
    console.log(random(1, 5));
}