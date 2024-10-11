import { useApiStore } from "../store/apiCallStore";
export const respondedApiData = () => {
  return useApiStore.getState().data; // this is a type of getting the state management data out side of the functional component
};

// just for testing the branch pull request
//adding one more line for hte another pr to be raised
