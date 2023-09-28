import React from "react";
import { selector, useRecoilValue } from "recoil";
import { textState } from "./TextInput";

function Count() {

    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}

export default Count;
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});