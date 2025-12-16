import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name, itemName, theme) {
  return {
    fontWeight:
      itemName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelectBox = ({
  items,
  title,
  placeholder,
  itemName,
  setItemName,
  ...props
}) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(value);
  };

  return (
    <div>
      <FormControl
        sx={{
          ...props.sx,
          direction: "rtl",
          width: props.sx.width,
        }}
      >
        <Select
          displayEmpty
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#ABABAB",
                  }}
                >
                  {placeholder}
                </Typography>
              );
            }

            return selected;
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: props.sx.width,
              },
            },
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          {items.map((item) => (
            <MenuItem
              key={item.id}
              value={item.name}
              style={getStyles(item.name, itemName, theme)}
              sx={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "gray",
                }}
              >
                {item.name}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelectBox;
