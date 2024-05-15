import { Box } from "@mui/material";
import { styled } from "@mui/system";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`https://sociopedia-api-ten.vercel.app/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
