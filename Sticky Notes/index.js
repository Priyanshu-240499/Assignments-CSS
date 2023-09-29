(function Data() {
    let data=[];
    function AddData() {
        let input=document.querySelector("#notes").value
        console.log(input);
    }
    document.querySelector(".submit").addEventListener("click",AddData)
})()
