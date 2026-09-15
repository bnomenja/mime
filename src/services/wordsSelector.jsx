import {facile} from './easyWords'
import {moyen} from './mediumWords'
import {difficile} from './hardWords'

export function getSomeWords(difficulty){
   switch(difficulty){
    case "easy":
        return facile;
    case "medium":
        return moyen;
    case "hard":
        return difficile;
    default:
        return moyen;
   }
}
