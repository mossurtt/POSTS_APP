import { useRouteError } from 'react-router-dom';

interface ErrorProps {
  statusText: string;
  message: string;
}

function ErrorPage() {
  const error: ErrorProps = useRouteError() as ErrorProps;

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen bg-emerald-400"
    >
      <h1 className="font-sans font-bold text-5xl text-white mb-4">Oops!</h1>
      <p className="font-sans text-2xl text-white mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
