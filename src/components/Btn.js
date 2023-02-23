// function Btn() {
//     const clickHandler = () =>
//     console.log('clicked')
//     return (
//         <button onclick={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

function Btn() {
    const clickHandler = () =>
    console.log('clicked')
   
    return (
        <div> 
            <button onClick ={clickHandler}>
             Click me
            </button>
        </div>
       
    );
 
}
export default Btn;