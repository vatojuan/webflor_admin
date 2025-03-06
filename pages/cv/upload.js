// Impedimos la generación estática:
export async function getServerSideProps() {
  return { props: {} };
}

import dynamic from "next/dynamic";

// Importa tu componente "UploadCV" con ssr: false
const UploadCVNoSSR = dynamic(() => import("../../components/UploadCV"), { ssr: false });

export default function UploadPage() {
  return <UploadCVNoSSR />;
}
