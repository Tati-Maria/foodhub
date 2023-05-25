'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body
      className="h-screen flex flex-col justify-center items-center"
      >
        <h2>Something went wrong!</h2>
        <button className="btn-secondary" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}