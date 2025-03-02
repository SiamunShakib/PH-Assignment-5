// blogs page
document.getElementById('btn-discover').addEventListener('click', function(){
    window.location.href="blogs.html";
});


// changing theme color
document.getElementById('btn-theme')
    .addEventListener("click", function() {
        const randomColor = `
        #${Math.floor(Math.random()*111111).toString(16)}
        `;
        document.body.style.backgroundColor = randomColor;
});




// complete button function
const btnComplete = document.querySelectorAll('.btn-complete');
const historyBox = document.getElementById('history-item');

for(let i=0; i<btnComplete.length; i++){

    
    const historyBox = document.getElementById('history-item')

    btnComplete[i].addEventListener('click', function(){
        alert('Board updated Successfully');
        const title = btnComplete[i].parentElement.parentElement.children[1].innerText;


        // adding history 
        
        const currentTime = new Date().toLocaleTimeString();
        const historyItem = document.createElement('p');
        historyItem.innerText = `
        You have completed the task ${title} at ${currentTime}
        `;
        historyItem.style.cssText = "background-color:#eff6ff; border-radius:10px; padding:0px 20px 20px 20px; font-weight:bold; margin-bottom: 5px;";
        historyBox.appendChild(historyItem);


        // button disabled
        btnComplete[i].disabled = true;
        btnComplete[i].style.backgroundColor ='DarkGray';
        btnComplete[i].style.color ='DimGray';

        // count add function
        let CheckCount = document.getElementById('check-count');
        console.log(CheckCount);
        let convertedCheckCount = parseInt(CheckCount.innerText);
        if(convertedCheckCount > 0){
            CheckCount.innerText = convertedCheckCount+1;
            
        }

        // count less function
        let countElement = document.getElementById('task-counter');
        let count = parseInt(countElement.innerText);
        if(count > 0){
            countElement.innerText = count -1;
           
        }
        if(count < 2){
            alert('congrates!!! You have completed all the current task');
        }
        
    
    })
}


 // clear history
 const clearHistory = document.getElementById('clear-history');
 const clearitem = document.getElementById('history-item')
 clearHistory.addEventListener('click',function(){
    clearitem.innerText="";
})



