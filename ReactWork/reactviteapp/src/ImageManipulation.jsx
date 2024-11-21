import React,{useState} from 'react'
import cat from './cat.webp';

function ImageManipulation() {
    const [height,setHeight]=useState(100);
    const [width,setWidth]=useState(100);
    const [rotate,setRotate]=useState(100);
    const [red,setred]=useState(255);
    const [green,setgreen]=useState(107);
    const [blue,setblue]=useState(200);
    



    

    function Enhanceheight()
    {
        setHeight(height+30);
    }
    function Enhancewidth()
    {
        setWidth(width+30);
    }
    function Rotate()
    {
        
        setRotate(rotate+30)


    }

    
    function ChangeColor()
    { 
        //    var bg = rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})

        // var bg=rgb(`${Math.floor(Math.random()*255)}`,`${Math.floor(Math.random()*255)}`,`${Math.floor(Math.random()*255)}`);
        
        // setcolor(bg);
        setred(Math.floor(Math.random()*255));
        setgreen(Math.floor(Math.random()*255));
        setblue(Math.floor(Math.random()*255));

    }

    
    
  return (
    
    <div style={{marginLeft:'450px',border:'5px solid brown',height:'500px',width:'500px',backgroundColor:'	 #4dff4d'}}>
    <div style={{backgroundColor:`rgb(${red},${green},${blue})`,margin:"80px 80px 80px 80px", border:'2px solid red',height:'200px',width:'200px'}}>
        <img style={{ margin:"30px 30px 30px 30px", rotate:`${rotate}deg`}} src={cat} height={height} width={width} alt="cat image" />
    </div>
    {/* <div>ImageManipulation</div> */}
    <div>
    <button onClick={Enhanceheight} >Enhanceheight</button>
    <button onClick={Enhancewidth}>Enhancewidth</button>
    <button onClick={Rotate}>Rotate</button>
    <button onClick={ChangeColor}>Color</button>
    <button>Click</button>

    </div>
    
    </div>
    
  );
}

export default ImageManipulation;