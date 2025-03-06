// Impedimos la generación estática:
export async function getServerSideProps() {
  return { props: {} };
}

import dynamic from "next/dynamic";

const ConfirmEmailNoSSR = dynamic(() => import("../../components/ConfirmEmail"), {
  ssr: false,
});

export default function ConfirmEmailPage() {
  return <ConfirmEmailNoSSR />;
}
