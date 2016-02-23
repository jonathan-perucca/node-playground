var users = [
    { name: "Johan", age: 42 },
    { name: "Sirus", age: 52 },
    { name: "Badlor", age: 49 },
    { name: "Mina", age: 39 }
];

function findAll() {
    var promise = new Promise(handleFindAll);

    return promise;
}

function handleFindAll(resolve, reject) {
    if(users)
        resolve(users);
    else
        reject(new Error("Users not found"));
}

module.exports = {
    findAll: findAll
};