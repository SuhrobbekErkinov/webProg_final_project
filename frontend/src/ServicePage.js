import React from "react";
import { useParams } from "react-router-dom";

function ServicePage() {
  const { serviceId } = useParams(); // Get the serviceId from the URL

  return (
    <div>
      <h1>{serviceId} Service</h1>
      <p>Details about the {serviceId} service will go here.</p>
      {/* You can fetch and display specific data for the service */}
    </div>
  );
}

export default ServicePage;
