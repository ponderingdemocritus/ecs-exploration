import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Realm } from "./components/Realm";

function App() {
  return (
    <div className="App bg-black h-screen w-screen">
      <Canvas>
        <Realm entity_id={1} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
