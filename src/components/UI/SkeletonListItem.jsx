import { Box, Skeleton } from "@mui/material";

const SkeletonListItem = () => {
    return (
        <Box borderRadius="10px" overflow="hidden" height="334px">
            <Skeleton variant="rectangular" height="158px" />
            <Box
                p="18px 8px 13px"
                display="flex"
                flexDirection="column"
                height="176px"
                justifyContent="space-around"
            >
                <Skeleton variant="rectangular" />
                <Skeleton variant="rectangular" />
                <Skeleton variant="rectangular" />
                <Skeleton variant="rectangular" />
            </Box>
        </Box>
    );
};

export default SkeletonListItem;
