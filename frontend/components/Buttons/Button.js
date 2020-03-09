import Link from "next/link";

function Button(props) {
    return (
        <>
            <Link href="/user">
                <a className="button blue sm">
                    {props.text}
                </a>
            </Link>

            <Link href="/user">
                <a className="button black md">
                    {props.text}
                </a>
            </Link>

            <Link href="/user">
                <a className="button blue lg">
                    {props.text}
                </a>
            </Link>
        </>
    );
};

export default Button;