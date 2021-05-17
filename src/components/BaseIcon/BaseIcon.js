import { SvgIcon } from "@material-ui/core";

export const BaseIcon = ({ children, color, size = "small", ...props }) => (
	<SvgIcon color={color} {...props} fontSize={size}>
		{children}
	</SvgIcon>
);


