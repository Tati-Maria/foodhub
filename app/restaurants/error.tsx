'use client'
//error display
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle  from "@mui/material/AlertTitle";
import Button  from "@mui/material/Button";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='
        flex
        justify-center
        items-center
        h-screen
        '>
            <div className='
            flex
            flex-col
            items-center
            gap-4
            '>
                <h2 className='
                text-4xl
                font-semibold
                text-gray-100
                '>
                    Oops! Something went wrong.
                </h2>
                <Alert
                action={
                    <Button
                    color="inherit"
                    size="small"
                    onClick={() => {
                        reset();
                    }
                    }>
                        Dismiss
                    </Button>
                }
                severity="error">
                    <AlertTitle>
                        Error
                    </AlertTitle>
                    {error.message}
                </Alert>
            </div>
        </div>
    )
}