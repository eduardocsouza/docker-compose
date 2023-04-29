const container = document.getElementById('container');
container.addEventListener('click', movimento);


for(let i = 0; i<3; i++){   
    let trDiv = document.createElement('div');
    trDiv.classList.add('torre');
    trDiv.setAttribute('id', `${i}`);
    container.appendChild(trDiv);    
};

let tr0 = document.getElementById('0');
for(let i = 0; i <= 3; i++){
    let d = document.createElement('div');
    d.classList.add('discos');
    d.setAttribute('id', `d${i}`);
    tr0.appendChild(d);    
}


function movimento(event){
    const tr0 = document.getElementById('0').querySelectorAll('.discos');
    const tr1 = document.getElementById('1').querySelectorAll('.discos');
    const tr2 = document.getElementById('2').querySelectorAll('.discos');

    const tE = tr0[tr0.length-1];
    const tC = tr1[tr1.length-1];
    const tD = tr2[tr2.length-1];
    
    const moviments = event.target;
           
        if(moviments.id !== 'container'){
            //const tamanhoDoDisco = moviments.clientWidth;
            const selecao = document.getElementById(moviments.id);            
            //const torrePai = document.getElementById(selecao.id).parentNode;
            //const discoSelecionado = document.defaultView.getComputedStyle(idtorre, null)['border-width']
            const arrayGeral = document.getElementById(selecao.id).querySelectorAll('.discos');
            
            
            if(selecao.className === 'discos'){
                selecao.classList.add('selecao')
                let cont = 0;                
                let id = [...tr0, ...tr1, ...tr2];
                id.forEach((valor) =>{
                   if(valor.classList[1] === 'selecao'){
                       
                        cont++
                                          
                   }if(cont > 1){
                       
                        selecao.classList.remove('selecao')
                        alert('Só pode escolher um disco de cada vez. Realize a jogada.')
                   }
                })

               
            }

            
            if(tr0.length>0 && tE !== undefined){
                
                //console.log(torrePai)               
                if(tE.classList[1] === 'selecao' && selecao.className === 'torre'){                    
                    if(arrayGeral.length === 0){
                        selecao.appendChild(tr0[tr0.length-1])
                        tE.classList.remove('selecao')
                    }else if(tE.clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                        selecao.appendChild(tr0[tr0.length-1]);
                        tE.classList.remove('selecao')                         
                    }else{
                        alert('Não é permitido um disco maior em cima do um menor!')
                        tE.classList.remove('selecao');
                    }
                }
            }
            if(tr1.length>0 && tC !== undefined){ 
                             
                if(tC.classList[1] === 'selecao' && selecao.className === 'torre'){                    
                    if(arrayGeral.length === 0){
                        selecao.appendChild(tr1[tr1.length-1])
                        tC.classList.remove('selecao')
                    }else if(tC.clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                        selecao.appendChild(tr1[tr1.length-1]);
                        tC.classList.remove('selecao')
                        
                    }else{
                        alert('Não é permitido um disco maior em cima do um menor!')
                        tC.classList.remove('selecao');
                        
                    }
                }
            }
            if(tr2.length>0 && tD !== undefined){ 
                              
                if(tD.classList[1] === 'selecao' && selecao.className === 'torre'){                    
                    if(arrayGeral.length === 0){
                        selecao.appendChild(tr2[tr2.length-1])
                        tD.classList.remove('selecao')
                    }else if(tD.clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                        selecao.appendChild(tr2[tr2.length-1]);
                        tD.classList.remove('selecao')
                        
                    }else{
                        alert('Não é permitido um disco maior em cima do um menor!')
                        tD.classList.remove('selecao');
                    }
                }
            };            
            
            if(arrayGeral.length +1 === 4){
                const body = document.getElementsByTagName('body')[0];
                const h1 = document.createElement('h1');
                h1.innerHTML = `CONGRATULATIONS!!!`;
                h1.style.textAlign ='center';
                h1.style.color = 'black';
                body.insertBefore(h1, container);

                setTimeout(()=>{
                    window.document.location.reload();
                }, 2000)
            }
    
        };

};


