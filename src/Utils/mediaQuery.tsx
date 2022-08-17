import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "1920px",
    tablet: "1525px",
    mobile: "900px"
});

export default customMedia;