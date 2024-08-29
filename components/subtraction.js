export default function sub(num1, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 - n2;
    } else {
        return NaN;
    }
}