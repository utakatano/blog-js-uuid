export const getUniqueStr = (strong = 1000) => {
  return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}