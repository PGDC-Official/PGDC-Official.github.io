import React, { Suspense } from "react";
import Fallback from "../../components/Fallback";

function PartnershipInfoPage() {
  return (
    <Suspense fallback={<Fallback />}>
      <div className="partnership-info-page py-4 text-center">
        <section className="section contact">
          <h1 className="text-3xl font-bold text-dark-blue mb-4">
            Partnership Infomation
          </h1>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTT72TzBirHZ9URhoSEs1p3Elsru4pJNIH4cbthBbdKy-6ZtR6yqeBxY5WDJYJ_ASo3VaasAg-zCo8v/embed?start=false&loop=false&delayms=3000"
            width="945"
            height="569"
            className="m-auto"
            allowFullScreen={true}
            autoPlay={true}
          ></iframe>
        </section>
      </div>
    </Suspense>
  );
}

export default PartnershipInfoPage;
