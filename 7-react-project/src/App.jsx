
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked")
  }

  function handleMouseOver() {
    alert("Your mouse on para")
  }

  
  function handleInputChange(e) {
    //console.log("Changed value from the input");
    console.log("Value in input now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Successfull submitted your details");
  }

  return (

    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit' >Submit</button>
      </form>


      {/* <p onMouseOver ={handleMouseOver} style={{color: "red"}}>
        I am para
      </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}


    </div>

  )


  // return (
  //   <div>
  //     <button onClick={() => {alert ("I am Clicked")}}>
  //       Click Me
  //     </button>
  //   </div>
  // )

}

export default App
