import Header from "../../Components/Header";
import { abraGetFavorite } from "../../Services/AbraAPI";
const Layout = () => {
  return (
    <>
      <Header></Header>
      <button
        onClick={() => {
          abraGetFavorite("test");
        }}
      >
        test
      </button>
    </>
  );
};

export default Layout;
