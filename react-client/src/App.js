import Homepage from './Homepage';
import Profile from './Profile';
import Nav from './Nav';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<Homepage />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
