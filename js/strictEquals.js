const strictEquals = (a, b) => {
    const result = Object.is(a, b);

    if (Object.is(a, NaN)) {
        return false;
    }

    if (Object.is(a, 0) || Object.is(a, -0)) {
        return true;
    }

    if (Object.is(0, b) || Object.is(-0, b)) {
        return true;
    }

    return result;
};

export default strictEquals;
