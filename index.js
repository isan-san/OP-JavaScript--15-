const name = "isan";
const lastName = "franco";
const mySelf = {
    name,
    lastName
}

console.log(mySelf);

localStorage.setItem(name, JSON.stringify(mySelf));
sessionStorage.setItem(name, JSON.stringify(mySelf));
document.cookie = `${name}=${JSON.stringify(mySelf)};expires="${new Date(new Date().getTime()+120000).toUTCString()}"`