// Events bubble up to parent elements
// Event delegation is placing the event listener on the parent element and using logic to target elements inside we want the event for

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',
//     function(){
//         console.log('card title');
//     }
// );

// document.querySelector('.card').addEventListener('click',
//     function(){
//         console.log('card');
//     }
// );

// document.querySelector('.col').addEventListener('click',
//     function(){
//         console.log('col');
//     }
// );

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
// above working only for the first element without delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log(e.target);
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}