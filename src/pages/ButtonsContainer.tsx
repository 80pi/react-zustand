import { useState } from "react";
import { Button } from "../components/Buttons";
import {
  arthematicStoreProps,
  useArthematicStore,
} from "../store/arthematicStore";

const ButtonsContainer = () => {
  const [name, setName] = useState("");
  const count = useArthematicStore(
    (state: arthematicStoreProps) => state.count
  ); // here I am not defining all bzc it cost in renendering and also in fetching so defining in seperatly
  // if we destructure it by just stating state=> state then our app will listenn to all the changes which are going to change in state so be specific for best practise
  const addFunction = useArthematicStore(
    (state: arthematicStoreProps) => state.addCount
  );
  const minusFunction = useArthematicStore(
    (state: arthematicStoreProps) => state.subCount
  );
  const setNameFn = useArthematicStore(
    (state: arthematicStoreProps) => state.setName
  );
  const inputName = useArthematicStore(
    (state: arthematicStoreProps) => state.name
  );
  return (
    <>
      <h3>Count in store:{count} </h3>

      <Button clickFun={addFunction} label={"Add(+)"} />
      <Button clickFun={minusFunction} label={"Minus(-)"} />
      <div style={{ margin: "1rem 0rem" }}>
        <label htmlFor="input">Enter your Name:</label>
        <input
          type="text"
          placeholder="Please enter ur name to see it below"
          onChange={(e) => {
            setName(e?.currentTarget?.value);
          }}
        />
        <Button
          label="Enter"
          clickFun={() => setNameFn(name)}
          disable={!!inputName}
        />
        <h5>Enter ur name on above input to see below block.</h5>
      </div>

      <hr />
    </>
  );
};
export default ButtonsContainer;
