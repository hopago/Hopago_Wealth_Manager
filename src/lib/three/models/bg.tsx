import { useGLTF } from "@react-three/drei";

const Background = ({ path, ...props }: { path: string }) => {
  const bg = useGLTF(path);

  if (!path) return null;

  return (
    <mesh {...props}>
      <primitive object={bg.scene} />
    </mesh>
  );
};

export default Background;
