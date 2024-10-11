import { respondedApiData } from "./constants";

interface itemDataProps {
  id: string;
  firstName: string;
  age: string;
}

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
            {data?.users?.map(({ id, firstName, age }: itemDataProps) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td> {firstName}</td>
                  <td> {age}</td>
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
