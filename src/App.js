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
      <DefaultXRControllers />
      {/* <HitTestExample /> */}
    </ARCanvas>
  );
}

export default App;
