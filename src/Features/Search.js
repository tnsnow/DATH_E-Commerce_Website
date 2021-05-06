import React from "react";
import { useParams } from "react-router-dom";

export default function Search() {
    const { keyword } = useParams();
    return (
        <div className="middle-font">
            <div className="container">
                <h1>Your search term : {keyword}</h1>
            </div>
        </div>
    );
}
