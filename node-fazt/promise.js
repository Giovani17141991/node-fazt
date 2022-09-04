

const {readFile}=require("fs/promises")

//const { readFile } = require("fs");
//const {promisify}=require('util')
//const readFilePromise=promisify(readFile)



/*const getText = (path) => {
  return new Promise(function (resolve, reject) {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
*/

//clean code asyn
/*getText('./data/fouth.txt')
    .then((result)=>console.log(result))
    .then(()=>getText('./data/first.txt'))
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
*/

async function read() {
  try {
    //throw new Error('error no esperado')
    //const result = await getText("./data/first.txt");
    const result = await readFile("./data/first.txt",'utf-8');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

read();
