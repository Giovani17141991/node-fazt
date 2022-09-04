const EventEmitter=require('events')

const customEmitter=new EventEmitter()

customEmitter.on('x',(data,secondData)=>{
    console.log('received')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('x','hello response','hellooo',[1,2,2])
//customEmitter.emit('response',30)
//customEmitter.emit('response',[1,2,3])
//customEmitter.emit('response',{name:'ryan'})