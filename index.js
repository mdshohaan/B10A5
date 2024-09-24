//   common function
  function getInputValueById (id){
    return parseFloat(document.getElementById(id).value)
  }
//  card-1

document.getElementById('card1_btn').addEventListener('click',function(){
    const inputValue1 = getInputValueById('inputValue1')
    const cardValue1 =parseFloat(document.getElementById('cardValue1').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue1 <= 0 || isNaN(inputValue1)){
    alert ('Invalid Input')
    return
    
 }
 else{
   const newEl =  navValue - inputValue1
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue1 + cardValue1
    document.getElementById('cardValue1').innerText= newCard1Value
    document.getElementById('inputValue1').value = ""



// history function1


    const div = document.createElement('div')
    div.classList.add('bg-slate-300', 'p-6','rounded-lg')
    div.innerHTML = `
    <h3 class="text-lg font-semibold ">${inputValue1} Taka is donated for famine-2024 at feni,Bangladesh
    </h3>
         <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
    `
   const historySection = document.getElementById('history_section')
   historySection.appendChild(div)
   

   
     
 }
 
})

//  card-2

document.getElementById('card2_btn').addEventListener('click',function(){
    const inputValue2 = parseFloat(document.getElementById('inputValue2').value)
    const cardValue2 =parseFloat(document.getElementById('cardValue2').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue2 <= 0 || isNaN(inputValue2)){
    alert ('Invalid Input')
    return

 }
 else{
   const newEl =  navValue - inputValue2
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue2 + cardValue2
    document.getElementById('cardValue2').innerText= newCard1Value
    document.getElementById('inputValue2').value = ""

    // history function2


    const div = document.createElement('div')
    div.classList.add('bg-slate-300', 'p-6','rounded-lg')
    div.innerHTML = `
    <h3 class="text-lg font-semibold ">${inputValue2} Taka Donate for Flood at Noakhali,Bangladesh
    </h3>
         <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
    `
   const historySection = document.getElementById('history_section')
   historySection.appendChild(div)
   
   
     
 }
 
})
//  card-3

document.getElementById('card3_btn').addEventListener('click',function(){
    const inputValue3 = parseFloat(document.getElementById('inputValue3').value)
    const cardValue3 =parseFloat(document.getElementById('cardValue3').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue3 <= 0 || isNaN(inputValue3)){
    alert ('Invalid Input')
    return
 }
 else{
   const newEl =  navValue - inputValue3
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue3 + cardValue3
    document.getElementById('cardValue3').innerText= newCard1Value
    document.getElementById('inputValue3').value = ""


     // history function3


     const div = document.createElement('div')
     div.classList.add('bg-slate-300', 'p-6','rounded-lg')
     div.innerHTML = `
     <h3 class="text-lg font-semibold ">${inputValue3} Taka Aid for Injured in the Quota Movement
     </h3>
         <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
     `
    const historySection = document.getElementById('history_section')
    historySection.appendChild(div)
    
   
     
 }
 
})
//  card-4

document.getElementById('card4_btn').addEventListener('click',function(){
    const inputValue4 = parseFloat(document.getElementById('inputValue4').value)
    const cardValue4 =parseFloat(document.getElementById('cardValue4').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue4 <= 0 || isNaN(inputValue4)){
    alert ('Invalid Input')
    return
 }
 else{
   const newEl =  navValue - inputValue4
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue4 + cardValue4
    document.getElementById('cardValue4').innerText= newCard1Value
    document.getElementById('inputValue4').value = ""
   

    // history function4


    const div = document.createElement('div')
    div.classList.add('bg-slate-300', 'p-6','rounded-lg')
    div.innerHTML = `
    <h3 class="text-lg font-semibold ">${inputValue4} Taka Aid for world flood fund
    </h3>
         <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
    `
   const historySection = document.getElementById('history_section')
   historySection.appendChild(div)
   
     
 }
 
})
//  card-5

document.getElementById('card5_btn').addEventListener('click',function(){
    const inputValue5 = parseFloat(document.getElementById('inputValue5').value)
    const cardValue5 =parseFloat(document.getElementById('cardValue5').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue5 <= 0 || isNaN(inputValue5)){
    alert ('Invalid Input')
    return
 }
 else{
   const newEl =  navValue - inputValue5
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue5 + cardValue5
    document.getElementById('cardValue5').innerText= newCard1Value
    document.getElementById('inputValue5').value = ""
   
     


    // history function5


    const div = document.createElement('div')
    div.classList.add('bg-slate-300', 'p-6','rounded-lg')
    div.innerHTML = `
    <h3 class="text-lg font-semibold ">${inputValue5} Taka Aid for Overview of the current situation
    </h3>
        <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
    `
   const historySection = document.getElementById('history_section')
   historySection.appendChild(div)
   
 }
 
})
//  card-6

document.getElementById('card6_btn').addEventListener('click',function(){
    const inputValue6 = parseFloat(document.getElementById('inputValue6').value)
    const cardValue6 =parseFloat(document.getElementById('cardValue6').innerText)
    const navValue = document.getElementById('nav_value').innerText

   
   
    

  

 if(inputValue6 <= 0 || isNaN(inputValue6)){
    alert ('Invalid Input')
    return
 }
 else{
   const newEl =  navValue - inputValue6
   document.getElementById('nav_value').innerText= newEl

    const newCard1Value= inputValue6 + cardValue6
    document.getElementById('cardValue6').innerText= newCard1Value
    document.getElementById('inputValue6').value = ""
   


    // history function6


    const div = document.createElement('div')
    div.className="bg-slate-300 border border-slate-300 p-6 rounded-lg "
    div.innerHTML = `
    <h3 class="text-lg font-semibold ">${inputValue6} Taka Integrated Flood Resilience Program (IFRP):
    </h3>
        <p> Date:${new Date('2024-08-25T12:00:00Z')} </p>
    `
   const historySection = document.getElementById('history_section')
    historySection.appendChild(div)
   // historySection.insertBefore(div,historySection,firstChild)
   
     
 }
 
})
// history section--------------------------------


const historyBtn = document.getElementById('history_btn')
const donationBtn = document.getElementById('donation_btn')
historyBtn.addEventListener('click',function(){
    historyBtn.classList.add(
       "text-black","bg-lime-300"
    );
    historyBtn.classList.remove(
        "hover:bg-slate-300","text-gray-900","border","border-slate-400" 
    )
    donationBtn.classList.remove(
       "bg-lime-300", "text-black"
    )
    donationBtn.classList.add(
         'hover:bg-slate-300','text-gray-900',"border","border-slate-400"
    )
    document.getElementById('main_form').classList.add('hidden')
    document.getElementById('history_section').classList.remove('hidden')

    //  const inputValue1 = parseFloat(document.getElementById('inputValue1').value)
    

 
})

// blog html page



function blogger(){
  window.location.href='/blog.html'
}



const donationBtn1 = document.getElementById('donation_btn')
const historyBtn1 = document.getElementById('history_btn')
donationBtn1.addEventListener('click',function(){
   donationBtn1.classList.add(
       "text-black","bg-lime-300"
    );
    donationBtn1.classList.add(
        "hover:bg-slate-300","text-gray-900","border","border-slate-400" 
    )
    historyBtn1.classList.remove(
       "bg-lime-300", "text-black"
    )
    historyBtn1.classList.add(
         'hover:bg-slate-300','text-gray-900',"border","border-slate-400"
    )
    document.getElementById('main_form').classList.remove('hidden')
    document.getElementById('history_section').classList.add('hidden')

    //  const inputValue1 = parseFloat(document.getElementById('inputValue1').value)
    

 
})