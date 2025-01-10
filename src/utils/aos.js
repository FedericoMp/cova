import AOS from 'aos';
export function myAosInit() {
    AOS.init({
        debounceDelay: 50,
        throttleDelay: 99,
        duration: 400,
        once: true,
    });
}