/* document.querySelector('.clear-tasks').addEventListener('click',
function(e){
    console.log('Hello world');
    // Prevents default behavious (redirect)
    e.preventDefault();
}
);
*/

document.querySelector('.clear-tasks').addEventListener('click', clickHandler);

function clickHandler(e){
    // console.log('Clicked');

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    // Get class collection
    val = e.target.classList;

    // e.target.innerText = 'Hello';

    //Event type
    val = e.type;

    // Timestamp

    val = e.timeStamp;

    // Coordinates of event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coordinates of event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);

}


