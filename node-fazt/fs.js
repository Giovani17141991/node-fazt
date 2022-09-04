const fs= require('fs')
/*SYNCRONO
const first = fs.readFileSync('./data/first.txt','utf-8')

const second=(fs.readFileSync('./data/second.txt'))

console.log(first)
console.log(second.toString())

const tittle=' hola y adios txt nuevo'

fs.writeFileSync('./data/new.txt',tittle, {flag: 'a'})
*/

//ASYNCRONO
fs.readFile('./data/first.txt','utf-8',(error,data) => {
    //callback
    if(error){
        console.log(error)
    }
        console.log(data)
    
        fs.writeFile('./data/newFile.txt','archivo nuevo',(error,data) => {
            //callback
            if(error){
                console.log(error)
            }
                console.log(data)
            
                fs.readFile('./data/first.txt','utf-8',(error,data) => {
                    //callback
                    if(error){
                        console.log(error)
                    }
                        console.log(data)
                    
                })

        })

})