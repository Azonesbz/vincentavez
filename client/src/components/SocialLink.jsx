import { Link } from "react-router-dom"

const SocialLink = (props) => {
    return <Link className="border py-2 px-4 rounded-full flex items-end justify-start gap-2 font-medium" to={props.to}>{props.children}</Link>
}

export default SocialLink