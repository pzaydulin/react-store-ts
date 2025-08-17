import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import { SvgIconProps } from "@mui/material";

export const categoryIcons: Record<
  string,
  React.ComponentType<SvgIconProps>
> = {
  electronics: DesktopWindowsOutlinedIcon,
  jewelery: DiamondOutlinedIcon,
  "men's clothing": Man2OutlinedIcon,
  "women's clothing": Woman2OutlinedIcon,
};
