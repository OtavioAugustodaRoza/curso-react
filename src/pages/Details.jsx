import { useLocation } from "react-router-dom";

function Details() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-screen h-screen bg-slate-500 p-6">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Details;