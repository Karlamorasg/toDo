import { BaseIcon } from "./BaseIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import AutorenewIcon from '@material-ui/icons/Autorenew';


const icons = {
	pen: CreateIcon,
	plus: AddIcon,
	trash: DeleteIcon,
	another : AutorenewIcon
};

const IconContainer = ({ icon, ...props }) => {
	const Icon = icons[icon];
	return (
		<BaseIcon {...props}>
			<Icon />
		</BaseIcon>
	);
};

export default IconContainer;
