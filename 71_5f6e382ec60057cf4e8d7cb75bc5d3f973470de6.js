webpackJsonp([71],{508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(83);t.default={op:function(e){return a.o(e)},init:function(e,t,n){return{detector:new a.b(500,384,{from:n.FACEDETECTOR.from,stages:n.FACEDETECTOR.stages,scale:n.FACEDETECTOR.scale,winSize:10,downsample:n.FACEDETECTOR.downsample})}},tick:function(e,t){var n=t.context.detector.detect(t.input,e);a.n(t.canvas,t.input),a.l(t.canvas,n,"rgb(0, 255, 0)")},params:{FACEDETECTOR:{name:"FACE DETECTOR",from:{name:"From",type:"constant",min:1,max:20,step:1,default:8},stages:{name:"Stages",type:"constant",min:1,max:30,step:1,default:10},scale:{name:"Stage Scale",type:"constant",min:1,max:10,step:.5,default:1},downsample:{name:"Downsample Coeficient",type:"constant",min:1,max:4,step:.5,default:1.5}}}}}});