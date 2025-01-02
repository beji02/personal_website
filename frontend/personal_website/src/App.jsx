import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import PortFolioPage from './portfolio/PortfolioPage'
import PageLayout from './PageLayout'
import BlogPage from './blog/BlogPage'


function App() {
  // let navigate = useNavigate();
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(BACKEND_URL + "/api/users")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => { console.error("Error fetching data:", error); setData("no data") });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Navigate to="portfolio" />} />
            <Route path="portfolio" element={<PortFolioPage />} />
            <Route path="blog" element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <NavigationBar></NavigationBar> */}
      {/* <div style={{ width: '50vw', height: '90vh', margin: '0 auto' }}>
        <PDFViewer pdfUrl={BACKEND_URL + '/resume'}></PDFViewer>
      </div>

      <Divider sx={{ mb: 4 }} />

      <div style={{ width: '50vw', height: '90vh', margin: '0 auto' }}>
        <PDFViewer pdfUrl={BACKEND_URL + '/resume'}></PDFViewer>
      </div> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <PDFViewer pdfUrl='http://localhost:8000/resume'></PDFViewer>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          bunaEdit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
