import { useFetcher } from "@remix-run/react";

export default function ContactPage() {
  const fetcher = useFetcher();

  return (
    <div>
      <h1>Contact Us</h1>
      <fetcher.Form method="post" action="/contact">
        <div className="globo-formbuilder" data-id="NzY2NTU="></div>
        <button type="submit">Submit</button>
      </fetcher.Form>
    </div>
  );
}
