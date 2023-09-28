import { atom, useRecoilState } from "recoil";



export const TextInput = () =>{
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
      setText(event.target.value);
    };
    return(
      <>
       <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        {text}
      </div>
      </>
    )
  }
 export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });