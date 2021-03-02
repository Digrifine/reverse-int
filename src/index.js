module.exports = function reverse(n) {
    n = Math.abs(n);
    arr = n.toString().split("");
    str = "";
    arr = arr.reverse();
    arr.forEach((element) => {
        str = str + element;
    });
    num = Number(str);
    return num;
};
