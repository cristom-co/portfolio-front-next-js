import Link from "next/link";

const FreelanceLink = () => {

    return (
        <Link href="/freelance"  >
            <p className="mt-10 uppercase text-gray-400 text-xs text-center underline pb-5 text-green-600 font-bold cursor-pointer">
                Check out my freelance services here.
            </p>
        </Link>
    )
}

export default FreelanceLink;