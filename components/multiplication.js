function multiply(d, no2) {
    const n1 = d;
    const n2 = no2;
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 * n2;
    } else {
        return NaN;
    }
}