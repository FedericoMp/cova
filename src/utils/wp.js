import { tel } from '../data/contact.json'

function formatNum(num) {
    return num.replaceAll(" ","").replaceAll("-","")
}

export function linkMsg(msg) {
    const templateMsg = msg?.replaceAll(' ','%20');
    return `https://wa.me/${formatNum(tel)}?text=${templateMsg}`
}