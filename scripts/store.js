import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = itemId => {
    return items.find(item => item.id === itemId );
};

const addItem = itemName => {
    try{
        item.validateName(itemName);
        items.push(item.create(itemName));
    }catch(e){
        console.log(`Cannot add item: ${e.message}!`);
    }
};

const findAndToggleChecked = function(id) {
    this.findById(id).checked =  !this.findById(id).checked;
}

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    } catch(e) {
        console.log(`Cannot update name: ${e.message}!`);
    }
}

const findAndDelete = function(id) {
    // items.splice(i => items.findIndex(this.findById(id)), 1);
    items.splice(items.findIndex(item  => item === findById(id)), 1);
}

const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};