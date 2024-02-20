import React, { useState } from 'react'

const Child = (props) => {
    let [text,setText]= useState("");
    let [jsx,setJsx]= useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.getText(text);
        // return <h1>{text}</h1>;
        // return text?<h1 className=' text-green-300'>You typed {text}</h1>:""
        jsx=text && <h1 className=' text-green-300'>Text rendered from Child component: {text}</h1>;
        setJsx(jsx);

    }

    // function headingFunction(){
    //     return 
    // }
  return (
    <div>
        <div className="">
            <h1 className="text-xl font-bold underline text-blue">
                Type your text here
            </h1>
            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }} className='p-2 m-3' />
            {/* {text?<h1>You typed {text}</h1>:""} */}
            {/* {text && <h2>You just typed: {text}</h2>} */}
            <button onClick={handleSubmit} className=' bg-green-500 p-2'>Submit</button>
            {/* {text && headingFunction()} */}

            {jsx}
            
        </div>


    </div>
  )
}

export default Child