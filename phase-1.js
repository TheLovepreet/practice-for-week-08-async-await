function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done stretching");
      resolve();
    }, 1000);
  });
}

async function runOnTreadmill() {
  const stretchRes = await stretch();
    setTimeout(() => {
      console.log("done runnning");
      return stretchRes;
    }, 500);
}

async function liftWeights() {
  const runRes = await runOnTreadmill();
    setTimeout(() => {
      console.log("done lifting weights");
      console.log("done workout");
      return runRes;
    }, 2000);

}

// refactor this function to handle Promises using async/await instead of
  // .then and .catch
async function workout() {
  const final = await liftWeights();
  console.log(final);
  
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out