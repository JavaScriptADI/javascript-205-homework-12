// EXERCISE 1 - build this helper. Every other exercise uses it.
//
// getJSON(url) must:
//   1. fetch the url
//   2. if the response is NOT ok (404, 500, ...), throw an Error
//      - message: "Request failed with status 404"  (use the real status number)
//      - also attach the number to it:  error.status = response.status
//   3. otherwise return the parsed JSON
//
// Remember: fetch() only rejects when the network itself fails.
// A 404 is a *successful* fetch - you have to check response.ok yourself.

async function getJSON(url) {
  // TODO
}

// lets `node check_1.js` load this file (the browser ignores it)
if (typeof module !== 'undefined') module.exports = { getJSON };
