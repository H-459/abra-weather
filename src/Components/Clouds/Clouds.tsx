import { number } from "yup/lib/locale";
import cloudImage from "./Images/cloud.svg";
import * as S from "./styles";

interface CloudsProp {
  numClouds: number;
}
const Clouds: React.FC<CloudsProp> = ({ numClouds }) => {
  return (
    <>
      <S.Cloud src={cloudImage}></S.Cloud>
    </>
  );
};

export default Clouds;
