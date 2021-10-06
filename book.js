//spinner add
 const spinnerToggle=(noneOrInline)=>{
     const spinner=document.getElementById('spinner').style.display=noneOrInline
 }

 document.getElementById('body').addEventListener('mouseout',function(){
     spinnerToggle('none')
 })

 

 const body=document.getElementById('body')
 const title=document.querySelector('#title')
 const athor=document.querySelector('#athor')
 const year=document.querySelector('#year')
 const store=document.querySelector('#store')
 const btn=document.querySelector('.btn')


 btn.addEventListener('click',function(e){
  e.preventDefault()

  if(title.value=='' || athor.value==''|| year.value==''){
      alert('Not Allowed Empty Frield')
  }  
else{
    const tr=document.createElement('tr')

    const tdTitle=document.createElement('td')
    tdTitle.innerHTML=title.value
    tdTitle.style.textAlign='center'
    tr.appendChild(tdTitle)
   
    const tdAthor=document.createElement('td')
    tdAthor.innerHTML=athor.value
    tdAthor.style.textAlign='center'
    tr.appendChild(tdAthor)
  
    const tdYear=document.createElement('td')
    tdYear.innerHTML=year.value
    tdYear.style.textAlign='center'
    tr.appendChild(tdYear)

    store.appendChild(tr)
    title.value=''
    athor.value=''
    year.value=''
}
})

btn.addEventListener('blur',function(){
    document.body.style.backgroundColor='red'
    document.body.style.color='blue'
})

btn.addEventListener('focus',function(){
    document.body.style.backgroundColor='black'
    document.body.style.color='red'
})

