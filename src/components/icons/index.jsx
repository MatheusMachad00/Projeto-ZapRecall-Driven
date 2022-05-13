import { ReactComponent as Right } from "./../../assets/checkmark-circle-icon.svg";
import { ReactComponent as Wrong } from "./../../assets/close-circle-icon.svg";
import { ReactComponent as Doubt } from "./../../assets/help-circle-icon.svg";
import { ReactComponent as Play } from "./../../assets/play-outline-icon.svg";

import Party from "./../../assets/party.png";
import Arrow from "./../../assets/setinha.png";
import Sad from "./../../assets/sad.png";

import "./style.css";

function Icon(props) {
    const icons = {
        right: <Right fill="#2FBE34" />,
        wrong: <Wrong fill="#FF3030" />,
        doubt: <Doubt fill="#FF922E" />,
        play: <Play />,
        arrow: <img src={Arrow} alt="virar" />,
        party: <img src={Party} alt="festinha" />,
        sad: <img src={Sad} alt="triste" />
    };

    const { icon } = props;
    const css = `Icon ${icon}`;
    return <span className={css}>{icons[icon]}</span>
}

export default Icon;
