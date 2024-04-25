let inputs = []
function generateFormInputs(data, parentKey = "") {

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        const inputName = parentKey ? `${parentKey}.${key}` : key;
  
        if (typeof value === 'object' && !Array.isArray(value)) {
          // If the value is an object, recursively generate form inputs
            generateFormInputs(value, inputName)
        } else if (Array.isArray(value)) {
            if(value.length > 0 && typeof value[0] === 'object') {
                generateFormInputs(value[0], inputName)
            }
        } else {
            inputs.push(inputName)
        }
      }
  }
}

module.exports = {generateFormInputs, inputs}