import { Logo } from "./style"
import img from "../../assets/logo.png"

export default function Header() {
    return (
        <Logo className="top">
            <img src={img} alt="logo" />
            <p>ZapRecall</p>
        </Logo>
    )
}