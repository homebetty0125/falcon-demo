import { Routes, Route } from 'react-router-dom';
import './App.css';
import Frame from './Frame';
import List from './List';

function App() {

    return (
        <Routes>
            <Route element={<Frame />}>
                <Route index element={<List />} />
                <Route path="news_taiwan" element={<List />} />
                <Route path="news_china" element={<List />} />
                <Route path="news_global" element={<List />} />
                <Route path="news_entertainment" element={<List />} />
                <Route path="news_business" element={<List />} />
                <Route path="news_sport" element={<List />} />
                <Route path="news_technology" element={<List />} />
            </Route>
        </Routes>
    );
}

export default App;
