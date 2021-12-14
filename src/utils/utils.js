export const hideCardNumber = (cardNumber) => {
    const numbers = cardNumber.split(` `);
    const maxIndex = numbers.length - 1;
    const newNumber = numbers.reduce((sum, item, index) => {
        item = index === maxIndex ? item : `****`;
        return sum + ` ` + item; 
    }, ``);
    return(newNumber);
};

export const convertTime = (time) => {
    const h = pad(Math.floor(time / 60 / 60));
    const m = pad(Math.floor(time / 60) - (h * 60));
    const s = pad(time % 60);

    function pad(n) {
        if (n < 10) return "0" + String(n);
        return n;
    }

    return `${h}Ч : ${m}М : ${s}С`;
};