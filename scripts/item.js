

const validateName = function(name){
    if(name === ''){
        throw new Error("Name must not be blank");
    }
}

const create = function(itemName){
    return {
        id: cuid(),
        name: itemName,
        checked: false
    }
}

export default {
    validateName,
    create,
};