import { useEffect } from "react";

export default function KlaviyoIdentify({ customer }) {
  useEffect(() => {
    if (customer?.email) {
      window._learnq = window._learnq || [];
      window._learnq.push([
        "identify",
        {
          $email: customer.email,
          $first_name: customer.firstName,
          $last_name: customer.lastName,
        },
      ]);
    }
  }, [customer]); // Re-run only if customer data changes

  return null;
}
