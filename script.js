let imgBox=document.querySelector(".imgBox")
let whiteBox=document.querySelector(".whiteBox")
imgBox.addEventListener("dragstart",(e)=>{
    setTimeout(()=>{

        e.target.className+='hide'
    },0)

})
imgBox.addEventListener("dragend",(e)=>{
    console.log("End")
})
for(whiteBoxS of whiteBox){
    whiteBoxS.addEventListener("dragover",(e)=>{
        

    })

    whiteBoxS.addEventListener("dragenter",(e)=>{
        

    })


    whiteBoxS.addEventListener("dragleave",(e)=>{
        

    })


    whiteBoxS.addEventListener("drop",(e)=>{
        

    })


}