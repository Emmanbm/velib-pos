import { 
    Box,
    Typography, 
    Divider, 
    Stack
} from "@mui/material";

function NotFound(){
    return(
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            bgcolor: theme => theme.palette.info.main,
            display: "flex",
            flex: 1,
        }}>
            <Stack
                color="white"
                direction="row"
            >
                <Typography
                    sx={{mr:1}}
                >
                    Page introuvable
                </Typography>
                <Divider 
                    orientation="vertical"
                    flexItem
                />
                <Typography
                    sx={{ml:1}}
                >
                    404
                </Typography>
            </Stack>
        </Box>
    );
}
export default NotFound;