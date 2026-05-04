import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Nosotros

Novedades Corrientes es tu fuente confiable de información sobre todo lo que sucede en la provincia de Corrientes. Nos dedicamos a brindar noticias actualizadas, relevantes y verificadas, manteniéndote al tanto de los acontecimientos más importantes en política, economía, sociedad, cultura, deportes y más.

Nuestro compromiso es ofrecer contenido de calidad con un enfoque local, resaltando la identidad, tradiciones y el desarrollo de nuestra provincia.

¡Sumate a nuestra comunidad y mantenete siempre informado con Novedades Corrientes!`;

export async function generateMetadata() {
  return {
    title: "Acerca de",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "Acerca de",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "Acerca de",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
