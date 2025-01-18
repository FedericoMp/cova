function notifyEl(el) {
    el.style.backgroundColor = "#ff000087";
    console.log('⚠️ Check this!', el)
}

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
        : bigElements.forEach(el => notifyEl(el));
}