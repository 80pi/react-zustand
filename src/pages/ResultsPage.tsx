import { respondedApiData } from "./constants";

const ResultsPage = () => {
  const data = respondedApiData(); // here I am calling the func in constansts file where I am getting data fro store to there and I am using it here
  return (
    <>
      <h3>Results</h3>
      <p>Listed down</p>
      {data && (
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((item: any) => {
              return (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td> {item?.firstName}</td>
                  <td> {item?.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default ResultsPage;
