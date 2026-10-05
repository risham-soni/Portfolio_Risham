import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Layout defaultSection="about" />} />
        <Route path="/work" element={<Layout defaultSection="work" />} />
        <Route path="/skills" element={<Layout defaultSection="skills" />} />
        <Route path="/contact" element={<Layout defaultSection="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
