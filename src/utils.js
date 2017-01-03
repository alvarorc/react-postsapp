export function classNames(className, objectClass) {
  let classes = [];
  if(className)
    classes.push(className)
  for (var key in objectClass) {
    if (objectClass.hasOwnProperty(key) && objectClass[key]) {
      classes.push(key);
    }
  }
  return classes.join(' ')
}
