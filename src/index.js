module.exports = function check(str, bracketsConfig) {

  let arr = str.split('');
  let arrLength = arr.length;

  return arrSearch(arr, bracketsConfig);

  function arrSearch(arr, bracketsConfig) {
      let done;
      for (let i = 0; i < bracketsConfig.length; i++) {
          done = findCloseBrackets(arr, bracketsConfig[i][0], bracketsConfig[i][1]);
      }
      if (
          typeof done !== "boolean"
          &&
          arrLength !== arr.length
      ) {
          arrLength = arr.length;
          return arrSearch(arr, bracketsConfig)
      }
      return done
  }

  function findCloseBrackets(arr, openBracket, closeBracket) {
      if (!arr.length) {
          return true
      }
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === openBracket && arr[i + 1] === closeBracket) {
              arr.splice(i, 2);
              return findCloseBrackets(arr, openBracket, closeBracket)
          }
      }
      if (
          Array.isArray(arr)
          &&
          arrLength !== arr.length
      ) {
          return arr
      }
      return false
  }
};
