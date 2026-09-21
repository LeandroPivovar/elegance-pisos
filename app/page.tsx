import Image from "next/image";
import { brands, galleryImages, reviews } from "./catalog-data";
import { BrandCatalog } from "@/components/site/brand-catalog";
import { ServiceGallery } from "@/components/site/service-gallery";
import { ReviewsCarousel } from "@/components/site/reviews-carousel";
import {
  ArrowDownRight, ArrowRight, Check, ChevronRight, Hammer, Layers3,
  Menu, MessageCircle, Phone, Ruler, ShieldCheck, Sparkles,
} from "lucide-react";

const whatsappUrl = "https://wa.me/554784981555?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20ambiente.";

const collections = [
  { number: "01", title: "Madeira", copy: "Calor natural, veios marcantes e acabamento que atravessa o tempo.", className: "sample-walnut" },
  { number: "02", title: "Laminados", copy: "Praticidade para a rotina com visual preciso e instalação limpa.", className: "sample-oak" },
  { number: "03", title: "Vinílicos", copy: "Conforto acústico e toque agradável para espaços contemporâneos.", className: "sample-smoke" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Elegance Pisos — início">
          <span className="brand-mark" aria-hidden="true"><span>E</span><span>P</span></span>
          <span className="brand-name">Elegance <i>Pisos</i></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#colecoes">Coleções</a><a href="#catalogo">Catálogo</a><a href="#galeria">Galeria</a><a href="#processo">Como funciona</a><a href="#depoimentos">Avaliações</a>
        </nav>
        <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          Falar com especialista <ArrowDownRight size={17} />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu size={22} /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#colecoes">Coleções</a><a href="#catalogo">Catálogo</a><a href="#galeria">Galeria</a><a href="#processo">Como funciona</a><a href="#depoimentos">Avaliações</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <Image src="/hero-elegance.png" alt="Sala sofisticada com piso de madeira em paginação chevron" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" /><div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Venda e instalação especializada</p>
          <h1>O piso muda.<br /><em>O ambiente acontece.</em></h1>
          <p className="hero-copy">Curadoria de materiais, medição e instalação sob medida para transformar seu projeto do primeiro detalhe ao último acabamento.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18} /></a>
            <a className="text-link" href="#colecoes">Conheça os acabamentos <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="hero-proof" aria-label="Diferenciais">
          <div><strong>01</strong><span>Escolha<br />assistida</span></div>
          <div><strong>02</strong><span>Medição<br />precisa</span></div>
          <div><strong>03</strong><span>Instalação<br />especializada</span></div>
        </div>
        <a className="scroll-cue" href="#colecoes" aria-label="Rolar para coleções"><span>Explore</span><ArrowDownRight size={18} /></a>
      </section>

      <section className="collections section-shell" id="colecoes">
        <div className="section-intro">
          <p className="section-index">[ 01 — MATERIAIS ]</p>
          <div><h2>Texturas que dão<br /><em>personalidade ao espaço.</em></h2><p>Selecionamos o acabamento certo para o seu estilo, rotina e orçamento.</p></div>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.number}>
              <div className={`material-sample ${item.className}`}><span>{item.number}</span><ArrowDownRight size={24} /></div>
              <div className="collection-copy"><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section catalog-section" id="catalogo">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Catálogo</p>
            <h2>Linhas, formatos e cores de cada marca.</h2>
            <p>Escolha uma marca para ver as linhas disponíveis, as especificações técnicas e as opções de cor. Na dúvida, a equipe ajuda a comparar.</p>
          </div>
          <BrandCatalog brands={brands} />
        </div>
      </section>

      <section className="section page-shell gallery-section" id="galeria">
        <div className="section-heading">
          <p className="section-kicker">Serviços realizados</p>
          <h2>Obras entregues pela nossa equipe.</h2>
          <p>Registros de instalações de pisos, rodapés e escadas em casas, apartamentos e espaços comerciais da região.</p>
        </div>
        <ServiceGallery images={galleryImages} />
      </section>

      <section className="precision-section" id="servicos">
        <div className="precision-visual" aria-hidden="true"><div className="floor-lines" /><div className="precision-badge"><Ruler size={27} /><span>Detalhe é<br />tudo.</span></div></div>
        <div className="precision-copy">
          <p className="section-index">[ 02 — SERVIÇO COMPLETO ]</p>
          <h2>Da escolha ao encaixe.<br /><em>Sem improviso.</em></h2>
          <p className="lead">Um bom piso começa antes da instalação. Entendemos o ambiente, orientamos a melhor solução e cuidamos de cada etapa da execução.</p>
          <ul className="service-list">
            <li><Layers3 size={21} /><span><strong>Curadoria de materiais</strong> para estética, uso e manutenção.</span></li>
            <li><Ruler size={21} /><span><strong>Medição técnica</strong> para reduzir perdas e surpresas.</span></li>
            <li><Hammer size={21} /><span><strong>Instalação profissional</strong> com acabamento criterioso.</span></li>
            <li><ShieldCheck size={21} /><span><strong>Acompanhamento próximo</strong> do orçamento à entrega.</span></li>
          </ul>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre meu projeto <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <div className="section-intro compact"><p className="section-index">[ 03 — PROCESSO ]</p><div><h2>Simples para você.<br /><em>Preciso em cada etapa.</em></h2></div></div>
        <div className="process-grid">
          <article><span>01</span><MessageCircle /><h3>Conte seu projeto</h3><p>Envie medidas, fotos ou apenas a sua ideia inicial pelo WhatsApp.</p></article>
          <article><span>02</span><Sparkles /><h3>Escolha o acabamento</h3><p>Comparamos opções coerentes com o ambiente e com a sua rotina.</p></article>
          <article><span>03</span><Check /><h3>Aprove e transforme</h3><p>Alinhamos os detalhes e executamos a instalação com cuidado.</p></article>
        </div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="page-shell">
          <p className="section-kicker">Avaliações reais</p>
          <div className="testimonials-heading">
            <h2>A confiança aparece no resultado.</h2>
            <p>Avaliações 5 estrelas deixadas no Google por clientes que já transformaram seus ambientes com a nossa equipe.</p>
          </div>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      <section className="contact-band">
        <div><p className="section-index">[ FALE COM A ELEGANCE ]</p><h2>Seu próximo ambiente<br /><em>começa pelo chão.</em></h2></div>
        <div className="contact-actions">
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento no WhatsApp <ArrowRight size={18} /></a>
          <a className="phone-link" href="tel:+554784981555"><Phone size={18} /> +55 47 8498-1555</a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><span>E</span><span>P</span></span><span className="brand-name">Elegance <i>Pisos</i></span></div>
        <p>Venda e instalação de pisos com atendimento personalizado.</p>
        <a href="#inicio">Voltar ao topo <ChevronRight size={16} /></a>
      </footer>
    </main>
  );
}
