function flattenDictionary(dict) {
  // your code goes here
  //base case: if the value is !== object
  //if it's not, then you can add the primitive value
  //otherwise, you concatenate the key value pair with a period, and then recurse
  let flattenedDict = {};
  recurseKeys(dict, flattenedDict);
  console.log(flattenedDict)
  return flattenedDict;
}

function recurseKeys(obj, flattenDict, key) {
  let keys = Object.keys(obj);//array of keys that belong to the dictionary

  for (var i = 0; i < keys.length; i++) {
    let concatKey = key || '';
    concatKey = concatKey.length ? concatKey + `.${keys[i]}` : keys[i];

    if (typeof (obj[keys[i]]) !== 'object') {
      flattenDict[concatKey] = obj[keys[i]];
    }
    else {
      recurseKeys(obj[keys[i]], flattenDict, concatKey);
    }
  }
}

let dict = {
            Key1: '1',
            Key2: {
                a: '2',
                b: '3',
                c: {
                    d: '3',
                    e: {
                        '': '1'
                    }
                }
            }
        };

//        https://stackoverflow.com/questions/22047140/flattening-a-javascript-dictionary-preserving-the-nested-keys

flattenDictionary(dict);
