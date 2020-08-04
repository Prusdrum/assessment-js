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
 */
exports.stripPrivateProperties = (propertiesToExclude, objects) => {
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

exports.excludeByProperty = () => {};
exports.sumDeep = () => {};
exports.applyStatusColor = () => {};
exports.createGreeting = () => {};
exports.setDefaults = () => {};
exports.fetchUserByNameAndUsersCompany = () => {};
