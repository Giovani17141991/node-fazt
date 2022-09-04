

/*
const {writeFile}=require('fs/promises')

const createBigFile=async()=>{
    await writeFile('./data/bigfile.txt','hello wolrd'.repeat(1000000))
}
createBigFile()
*/

const {createReadStream}=require('fs')

const stream=createReadStream('./data/bigfile.txt','utf-8')

stream.on('data',(chunk)=>{
    console.log(chunk)
})

stream.on('end',()=>{
    console.log('ya acabo de leer el arhcivo')
})

stream.on('error',(error)=>{
    console.log(error)
})