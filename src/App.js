import './App.css';
import {Button} from './Button';
import {
  ARCanvas,
  DefaultXRControllers,
} from '@react-three/xr';


function App() {
  return (
    <ARCanvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, -2,3]} />

      <Button position={[0, 0.8, -1]} />
      <Button position={[-2, -2.5, 1]} />
      <Button position={[3, -2.5, 2]} />
      <DefaultXRControllers />
      {/* <HitTestExample /> */}
    </ARCanvas>
  );
}

export default App;
