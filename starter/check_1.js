// Run with:  node check_1.js     (needs Node 18 or newer)
const { getJSON } = require('./api.js');

async function expectRejects(label, promise, test) {
  try {
    await promise;
    console.log(`FAIL  ${label} - it did not throw`);
  } catch (error) {
    const ok = test(error);
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${ok ? '' : ' - got: ' + error}`);
  }
}

async function main() {
  try {
    const data = await getJSON('https://dummyjson.com/products/1');
    console.log(data && data.id === 1 ? 'PASS  returns parsed JSON' : 'FAIL  did not return the product');
  } catch (error) {
    console.log('FAIL  good URL threw: ' + error);
  }

  await expectRejects('404 throws with status 404', getJSON('https://dummyjson.com/products/99999'),
    e => e instanceof Error && e.status === 404 && e.message === 'Request failed with status 404');

  await expectRejects('network failure rejects (TypeError)', getJSON('http://localhost:1/nothing'),
    e => e instanceof TypeError);
}
main();
