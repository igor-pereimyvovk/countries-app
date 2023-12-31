import { Typography } from "@mui/material";

const InfoText = ({ title, info }) => {
    return (
        <Typography variant="body2" mb="0.7rem">
            <Typography variant="span" fontWeight={600}>
                {title}:{" "}
            </Typography>
            {info}
        </Typography>
    );
};

export default InfoText;
