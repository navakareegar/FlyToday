import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const materialStyles = makeStyles({
  headerStyle: {
    boxShadow: "0 4px 4px 0 rgb(0, 0, 0, 0.1) !important",
    backgroundColor: "white !important",
    padding: "8px 0",
    marginBottom: "30px",
  },
  cardStyle: {
    backgroundColor: "rgba(241, 240, 240, 0.8) !important",
    borderRadius: "10px",
    boxShadow:
      "0 0px 0px 0 rgb(0 0 0 / 10%), 0 2px 10px 0 rgb(0 0 0 / 10%) !important",
  },
  deleteCardStyle: {
    opacity: "0.6",
    boxShadow:
      "0 0px 0px 0 rgb(0 0 0 / 10%), 0 2px 10px 0 rgb(0 0 0 / 10%) !important",
    backgroundColor: "rgba(241, 240, 240, 0.7) !important",
    borderRadius: "10px",
  },

  helperErrorText: {
    color: "#d32f2f!important",
    fontFamily: "vazir!important",
    fontWeight: "400!important",
    fontSize: "0.75rem!important",
    lineHeight: "1.66!important",
    textAlign: "left!important",
    marginTop: "3px!important",
    marginRight: "0!important",
    marginBottom: "0!important",
    marginLeft: "0!important",
  },
  pendingStyle: {
    backgroundColor: "green",
    padding: "8px 0",
    marginBottom: "30px",
    color: "#fff",
  },
});

//avatar badge
export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
