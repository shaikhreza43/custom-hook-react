import './App.css';
import useFetch from './custom-hook/useFetch';

function App() {

  const url = "https://inshortsapi.vercel.app/news?category=science";

  const { data, loading, error } = useFetch(url);

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>React Custom Hook Demo</h2>
      <h3><u>useFetch Hook to fetch data from Server:</u></h3>
      {loading && <h4>Loading...</h4>}
      <div>
        <pre>
          {JSON.stringify(data, undefined, 1)}
        </pre>
      </div>
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  );
}

export default App;
