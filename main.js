function names(your) {
    let c = 0;
    let d = your;
    let e = [];
    for (i=0;i<your.length;i++){
    if (!(d[i] === "a" || d[i] === "e" || d[i] === "i" || d[i] === "o" || d[i] === "u" || d[i] === "A" || d[i] === "E" || d[i] === "I" || d[i] === "O" || d[i] === "U")) {
        c++;
        e += d[i];
    }
}
console.log(e,":",c);
}
names("selvakumar");