import { useGLTF } from "@react-three/drei";

const Background = ({ path, ...props }: { path: string }) => {
  if (!path) return null;

  const bg = useGLTF(path);

  return (
    <mesh {...props}>
      <primitive object={bg.scene} />
    </mesh>
  );
};

export default Background;
