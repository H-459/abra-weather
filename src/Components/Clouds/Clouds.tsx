import { useEffect, useState } from "react";
import { number } from "yup/lib/locale";
import cloudImage from "./Images/cloud.svg";
import * as S from "./styles";

interface CloudsProp {
  numClouds: number;
}

interface Cloud {
  positionY: number;
  delayTime: number;
  speed: number;
}
const Clouds: React.FC<CloudsProp> = ({ numClouds }) => {
  const [clouds, setClouds] = useState<Cloud[] | undefined>(undefined);
  useEffect(() => {
    const newClouds: Cloud[] = [];
    for (let i = 0; i < numClouds; i++) {
      const cloud = {
        positionY: Math.random() * 100,
        delayTime: Math.random() * 10,
        speed: (Math.random() * 15 ) + 5,
      };
      newClouds.push(cloud);
    }
    setClouds(newClouds);
  }, [numClouds]);
  return (
    <>
      {clouds &&
        clouds.map((cloud) => {
          return (
            <S.Cloud
              src={cloudImage}
              positionY={cloud.positionY}
              delayTime={cloud.delayTime}
              speed={cloud.speed}
            ></S.Cloud>
          );
        })}
    </>
  );
};

export default Clouds;
