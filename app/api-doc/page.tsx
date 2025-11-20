"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiDoc() {
  return (
    <div className="min-h-screen bg-white p-8">
      <SwaggerUI url="/api/swagger" />
    </div>
  );
}
