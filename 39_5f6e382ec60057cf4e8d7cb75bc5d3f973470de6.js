webpackJsonp([39],{502:function(e,t){e.exports=[{type:"class",name:"Session",description:[{type:"paragraph",children:["This is a runtime which allows you to run computational graphs on different backends"]}],methods:[{description:[{type:"paragraph",children:["Intialize operations for session"]}],params:[{name:"node",description:"operation chain to be used in session",type:[{type:"Operation"}]}],name:"init",type:"method"},{description:[{type:"paragraph",children:["Run Operation"]}],params:[{name:"op",description:"operation to run",type:[{type:"Operation"}]},{name:"ctx",description:"context of a run, passing the same context twice in a raw\n   will use cached result",type:[]},{name:"output",description:"if passed, the output is put into it.",type:[{type:"Tensor"}],optional:!0}],name:"runOp",type:"method"},{description:[{type:"paragraph",children:["Destroy all initialized operations,\ntexture and outher data connected this session."]}],name:"destroy",params:[],type:"method"}]}]}});