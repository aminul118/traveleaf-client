import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold"> This Page Not Found</h2>
        <p className="text-2xl"> Go Back to Home</p>
        <Link href="/" className="btn btn-outline  border-b-4 border-0 w-32">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
