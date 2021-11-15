export function isWritable(obj, key) {
  const desc = Object.getOwnPropertyDescriptor(obj, key) || {};
  return Boolean(desc.writable);
}
