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

exports.sumDeep = () => {};
exports.applyStatusColor = () => {};
exports.createGreeting = () => {};
exports.setDefaults = () => {};
exports.fetchUserByNameAndUsersCompany = () => {};
