function add(array, element) {
    if (!array.includes(element)) {
        array.unshift(element);
        while (array.length > 4) {
            array.pop();
        }
    }
    return array;
}

export default add;