  
let date = new Date();
export let data = (date.getHours() + ':' + date.getMinutes())


export const getRandom = (num) => {
    return Math.ceil(Math.random() * num)
}