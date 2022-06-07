//iteracion#6:Valores unicos.Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    let duplicated= false;
    list.forEach((itemToCheck)=>{
        list.forEach((otherItem)=>{
            if(itemToCheck==otherItem)duplicated=true;
        });
    });
    return duplicated;
  }
  console.log(duplicatedItems(duplicates));