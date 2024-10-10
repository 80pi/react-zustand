/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../components/Buttons";
import { useApiStore, apiStoreProps } from "../store/apiCallStore";
import { useArthematicStore } from "../store/arthematicStore";
import ResultsPage from "./ResultsPage";

const ApiCallContainer = () => {
  const apiCallHandler = useApiStore(
    (state: apiStoreProps) => state.callDataAsync
  );
  const apiData = useApiStore((state: apiStoreProps) => state.data); // here it was one way of getting data inside the functional component we can do it in other way check in results page
  const enteredName = useArthematicStore((state: any) => state.name);
  const apiLoading = useApiStore((state: apiStoreProps) => state.loading);
  return (
    <>
      {enteredName?.length > 0 && (
        <>
          <h3>Hello {enteredName}</h3>
          <h5>Api call</h5>
          <Button label="Click to make ApiCall" clickFun={apiCallHandler} />
          {apiLoading && <p>Loading...</p>}
          {!apiLoading && apiData?.total > 0 && <ResultsPage />}
        </>
      )}
    </>
  );
};
export default ApiCallContainer;
