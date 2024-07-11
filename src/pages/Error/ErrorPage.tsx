import { useRouteError } from "react-router-dom"


interface RouterError {
    statusText: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouterError;

    return (
        <main className="text-center">
            <h1 className=" text-black font-bold p-5 text-2xl">ErrorPage</h1>
            <p className=" text-red-500">
                {error.statusText}
            </p>
        </main>
    )
}