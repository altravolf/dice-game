function d6() {
    return Math.floor(Math.random() * 6 + 1);
}

function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}

function sum(nums) {
    return nums.reduce((prev, curr) => prev + curr, 0);
}

export { d6, getRolls, sum };