export function getRandomIndex(size, set){
    let index = Math.floor(Math.random() * size);
    
    if (set.size === size){
        set.clear();
    }

    while(set.has(index)){
        index = Math.floor(Math.random() * size);
    }

    set.add(index);

    return index;
}