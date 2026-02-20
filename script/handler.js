// this is for the text updation   
document.getElementById('btn-update-text')
    .addEventListener('click',
        function () {
            const newPageTitle = document.getElementById('page-title');
            newPageTitle.innerText = 'Updated Text.'

        }
    )

// 1-stepup addEventListener
document.getElementById('update-btn')
    .addEventListener('click',
        function (){
            // step 2 get text from the input field
            // we firstly get the input field 
            const inputName=document.getElementById('input-name');
            //  step-3 then get the value and store it on name id 
            // console.log(inputtedNamevalue);
            const storingValue =inputName.value;
            // console.log(name);
            //step 4 we store it on name variable now we have to set the name
             const setName=document.getElementById('name');
            //  step 5 update the input value with it
            setName.innerText=storingValue;
        }
    )