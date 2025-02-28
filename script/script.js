document.getElementById('btn-theme').addEventListener("click", function() {
    const randomColor = `#${Math.floor(Math.random()*11111111).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});



document.getElementById('btn-complete').addEventListener('click', function(){





    // adding history
    const historyBox = document.getElementById('history-item')
    const currentTime = new Date().toLocaleTimeString();

    const title = document.getElementById('title-text').innerText;

    const p = document.createElement('p');
    p.innerText = `
        You Have completed the task ${title} at: ${currentTime}
    `
    historyBox.appendChild(p)
})













// document.querySelectorAll('btn-complete').addEventListener('click',function(){
//     // const title = document.querySelectorAll('title-text');
//     // const p = document.createElement('p');
//     // p.innerText =`hello ${title} from shakib`
//     // console.log(p);
//     console.log('btn clidke')
// })