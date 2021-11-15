export function pluck(obj, propertyNames) {
  return propertyNames.map(key => obj[key]);
}
