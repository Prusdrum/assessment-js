/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (propertiesToExclude, objects) => {
  if (!Array.isArray(objects) || !Array.isArray(propertiesToExclude)) {
    throw new Error('Invalid argument. Both arguments should be arrays');
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

exports.excludeByProperty = (property, objects) => {
  if (!Array.isArray(objects)) {
    throw new Error('Invalid argument. Objects should be an array');
  }

  return objects.filter((object) => typeof object[property] === 'undefined');
};

exports.sumDeep = (items) => {
  if (!Array.isArray(items)) {
    throw new Error('The argument should be an array');
  }

  const isItemValid = (item) => {
    return (
      item !== null &&
      typeof item !== 'undefined' &&
      typeof item.objects !== 'undefined' &&
      Array.isArray(item.objects) &&
      item.objects.every((object) => typeof object.val !== 'undefined')
    );
  }

  return items.map((item, index) => {
    if (!isItemValid(item)) {
      throw new Error(`Item with index: ${index} is incorrect`);
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

exports.createGreeting = (greetingFunction, ...firstArgs) => {
  return greetingFunction.bind(this, ...firstArgs);
};

exports.setDefaults = (defaultValues) => {
  return (object) => ({
    ...defaultValues,
    ...object
  });
};

exports.fetchUserByNameAndUsersCompany = (userName, services) => {
  if (!userName) {
    throw new Error('UserName is required')
  }

  const getUserByName = (users, userName) => users.find(({ name }) => name === userName);

  return Promise.all([
    services.fetchStatus(),
    services.fetchUsers(),
  ]).then(async ([status, users]) => {
    const user = getUserByName(users, userName)

    if (!user) {
      throw new Error('Could not find matching user');
    }

    const company = await services.fetchCompanyById(user.companyId)
    return {
      status,
      user,
      company
    }
  });
};
