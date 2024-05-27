function linearSearch(target, array) {

   for(let index = 0; index < array.length; index++){
    if(array[index] === target ){
        return array.indexOf(array[index])
    }
   }
   return -1
  }

  module.exports = linearSearch