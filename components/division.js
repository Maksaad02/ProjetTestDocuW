const divid = (num1, num2) => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 / n2;
    } else {
        return NaN;
    }
};

export default divid;