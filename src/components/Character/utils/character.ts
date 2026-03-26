import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const finalizeCharacter = async (gltf: GLTF) => {
    const character = gltf.scene;
    await renderer.compileAsync(character, camera, scene);
    character.traverse((child: any) => {
      if (child.isMesh) {
        const mesh = child as THREE.Mesh;

        if (mesh.material) {
          if (mesh.name === "BODY.SHIRT") {
            const newMat =
              (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
            newMat.color = new THREE.Color("#8B4513");
            mesh.material = newMat;
          } else if (mesh.name === "Pant") {
            const newMat =
              (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
            newMat.color = new THREE.Color("#000000");
            mesh.material = newMat;
          }
        }

        child.castShadow = true;
        child.receiveShadow = true;
        mesh.frustumCulled = true;
      }
    });

    setCharTimeline(character, camera);
    setAllTimeline();

    const footR = character.getObjectByName("footR");
    const footL = character.getObjectByName("footL");
    if (footR) {
      footR.position.y = 3.36;
    }
    if (footL) {
      footL.position.y = 3.36;
    }
  };

  const loadFromUrl = (url: string) =>
    new Promise<GLTF>((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      let blobUrl: string | null = null;
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
        const gltf = await loadFromUrl(blobUrl);
        await finalizeCharacter(gltf);
        resolve(gltf);
      } catch (err) {
        console.warn("Encrypted character failed, falling back to direct GLB.", err);
        try {
          const gltf = await loadFromUrl("/models/character.glb?v=2");
          await finalizeCharacter(gltf);
          resolve(gltf);
        } catch (fallbackError) {
          reject(fallbackError);
          console.error(fallbackError);
        }
      } finally {
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
        }
        dracoLoader.dispose();
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
