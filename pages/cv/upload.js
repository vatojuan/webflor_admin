import dynamic from "next/dynamic";

// 1) Importa tu componente sin SSR
const UploadCVNoSSR = dynamic(() => import("../../components/UploadCV"), {
  ssr: false,
});

// 2) Exportas un simple wrapper que renderiza el componente dinámico
export default function UploadCVPage() {
  return <UploadCVNoSSR />;
}
