import { useState } from "react"
import ChildComponent from "..";

export default function ParentComponent(){

    const [triple, setTriple] = useState(0);

    return(
        <div style={{border: "1px solid red", padding: "10px"}}>
            {triple}
            <ChildComponent/>
        </div>
    ) 
}
