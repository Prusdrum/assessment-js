/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

/**
 * 
 * @param {string[]} propertiesToExclude 
 * @param {any[]} objects 
 * @returns {any[]}
 */
exports.stripPrivateProperties = (propertiesToExclude, objects) => {
  if (!Array.isArray(objects) || !Array.isArray(propertiesToExclude)) {
    throw new Error('invalid argument. both arguments should be arrays');
  }

  return objects.map((object) => {
    return Object.entries(object)
      .filter(([key, value]) => !propertiesToExclude.includes(key))
      .reduce((object, [key, value]) => {
        return {
          ...object,
          [key]: value
        }
      }, {});
  });
};

/**
 * 
 * @param {string} property 
 * @param {any[]} objects 
 * @returns {any[]}
 */
exports.excludeByProperty = (property, objects) => {
  if (!Array.isArray(objects)) {
    throw new Error('invalid argument. objects should be an array');
  }

  return objects.filter((object) => typeof object[property] === 'undefined');
};

/**
 * 
 * @param {any[]} items 
 * @returns {any[]}
 */
exports.sumDeep = (items) => {
  if (!Array.isArray(items)) {
    throw new Error('the argument should be an array');
  }

  return items.map((item) => {
    if (
      item === null ||
      typeof item === 'undefined' ||
      typeof item.objects === 'undefined' || 
      !Array.isArray(item.objects)
    ) {
      throw new Error('passed argument is incorrect');
    }

    return {
      objects: item.objects.reduce((sum, object) => (
        sum + object.val
      ), 0)
    }
  });
};


exports.applyStatusColor = (colorMap, items) => {
  if (!Array.isArray(items)) {
    throw new Error('the second argument should be an array');
  }

  return items.map((item) => {
    const matchingItem = Object
      .entries(colorMap)
      .find(([color, statusValues]) => statusValues.includes(item.status));

    if (matchingItem === undefined || matchingItem.length === 0) {
      return item;
    }

    return {
      ...item,
      color: matchingItem[0],
    }
  }).filter((item) => typeof item.color !== 'undefined');
};

exports.createGreeting = (greetingFunction, firstArg) => {
  return (secondArg) => greetingFunction(firstArg, secondArg);
};

exports.setDefaults = () => {};
exports.fetchUserByNameAndUsersCompany = () => {};
