export function elSizeCheck() {
    // retrieve all elements
    const allElements = document.querySelectorAll('*');
    
    // use the filter function to filter get only elements you need
    // compares occupied width with window width
    const bigElements = Array.prototype.filter.call(
        allElements,
        element => element.getBoundingClientRect().width > window.innerWidth
    );

    // print resulting elements
    (!bigElements.length)
        ? console.log('Yaay! All elements fit. 🙌')
        : bigElements.forEach(el => console.log('⚠️ Check this!', el));
}