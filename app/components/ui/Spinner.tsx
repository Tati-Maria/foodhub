'use client'

import {FadeLoader} from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#f87d7d',
    fontSize: '16px'
}

export default function Spinner() {
    return (
        <div
        className="flex justify-center items-center"
        >
            <FadeLoader  color='#d71111' cssOverride={override}  />
        </div>
    )
}