

document.querySelector('.GetCode').addEventListener('click',()=>{


if(document.querySelector('.containerMatch input').value == ''){

document.querySelector('.MSG').style.bottom ='20px';
setTimeout(()=>{document.querySelector('.MSG').style.bottom ='-200px';},2000);
  
}else{


let All=`<div class="containerMatch"><a href="${document.querySelector('input.Link').value}" title="${document.querySelector('input.asm2').value}vs${document.querySelector('input.asm1').value}">
    <div class="Match">
    
    <div class="fareq">
    <div class="Imagee">
    <img alt="${document.querySelector('input.asm1').value}" class="col-img lazy" height="70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="${document.querySelector('input.fareq1').value}" title="${document.querySelector('input.asm1').value}" width="70" />
    </div>
    <div class="asm">${document.querySelector('input.asm1').value}</div>
    
    </div>
    <div class="Nateja">
    <div id='matchHour'>${document.querySelector('input.Hour').value}</div>
    <div class="natej">${document.querySelector('input.Natejaa').value}</div>
    <div class="matchDate" data-start='${document.querySelector('input.datetimeS').value}:00+02:00' data-end='${document.querySelector('input.datetimeE').value}:00+02:00'></div>
    
    
    </div>
    
    <div class="fareq">
        <div class="Imagee">
        <img alt="${document.querySelector('input.asm2').value}" class="col-img lazy" height="70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="${document.querySelector('input.fareq2').value}" title="${document.querySelector('input.asm2').value}" width="70" />
        </div>
        <div class="asm">${document.querySelector('input.asm2').value}</div>
        
        </div>
    
    </div>
    <div class="Show"></div>
    <ul>
    <li><span></span>${document.querySelector('input.Alqnah').value}</li>
    <li><span></span>${document.querySelector('input.Almsia').value}</li>
    <li><span></span>${document.querySelector('input.Aldwry').value}</li>
    
    </ul></a></div>` 























document.querySelector('textarea.SetCode').innerText =All;
document.querySelector('.AllCodetextarea').style.opacity='1';
document.querySelector('.AllCodetextarea').style.position='fixed';
document.querySelector('.AllCodetextarea>div').style.bottom='30%';
document.querySelector('.AllCodetextarea').style.display='block';

}

});