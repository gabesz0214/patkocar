import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn, Facebook, Car, Bike, Disc } from "lucide-react";

interface GalleryImage {
  postId: string;
  text: string;
  url: string;
  time: string;
  category: "kocsik" | "motorok" | "felnik";
}

const GALLERY_IMAGES: GalleryImage[] = [
  // KOCSIK (Autószerelési és autókozmetikai munkák a műhelyben/emelőn)
  {
    postId: "MSW-72-Focus",
    text: "Ford Focus szerviz és prémium MSW 72 alufelni felszerelés.",
    url: "/assets/gallery/car-1.jpg",
    time: "2026-06-08T21:00:00.000Z",
    category: "kocsik"
  },
  {
    postId: "MSW-79-RAV4",
    text: "Toyota RAV4 gyorsszerviz és MSW 79 alufelni felszerelés.",
    url: "/assets/gallery/car-2.jpg",
    time: "2026-06-08T21:00:00.000Z",
    category: "kocsik"
  },
  {
    postId: "MSW-80-Van",
    text: "Kishaszonjármű gumiszerviz és MSW 80/5 alufelni felszerelés.",
    url: "/assets/gallery/car-3.jpg",
    time: "2026-06-08T21:00:00.000Z",
    category: "kocsik"
  },
  {
    postId: "VW-ID-Buzz",
    text: "Volkswagen ID. Buzz szervizelés és abroncscsere a Patkó Car műhelyében.",
    url: "/assets/gallery/car-4.jpg",
    time: "2026-06-08T21:00:00.000Z",
    category: "kocsik"
  },

  // MOTOROK (Motorkerékpár szerviz és gumizás)
  {
    postId: "1597813611870494-1",
    text: "Honda CBR motorkerékpár professzionális gumiabroncs cseréje.",
    url: "/assets/gallery/motor-1.jpg",
    time: "2026-03-29T09:24:55.000Z",
    category: "motorok"
  },
  {
    postId: "1597813611870494-2",
    text: "Honda CBR új gumiabroncs precíz szerelése és centírozása.",
    url: "/assets/gallery/motor-2.jpg",
    time: "2026-03-29T09:24:55.000Z",
    category: "motorok"
  },
  {
    postId: "1597813611870494-3",
    text: "Motorkerékpár abroncsszerviz, nyomásellenőrzés és fékvizsgálat.",
    url: "/assets/gallery/motor-3.jpg",
    time: "2026-03-29T09:24:55.000Z",
    category: "motorok"
  },

  // FELNIK (Alufelni javítás, görgőzés, gumik, szerelések)
  {
    postId: "Gumicsere-Poster",
    text: "Szezonális gumicsere és gyors szerviz Vásárosnaményban.",
    url: "/assets/gallery/felni-new-1.png",
    time: "2026-06-08T21:02:00.000Z",
    category: "felnik"
  },
  {
    postId: "Silver-Black-Spokes",
    text: "Prémium fekete-polír alufelni értékesítés és gumiszerelés.",
    url: "/assets/gallery/felni-new-2.png",
    time: "2026-06-08T21:02:00.000Z",
    category: "felnik"
  },
  {
    postId: "MAK-Display-Stand",
    text: "Széles alufelni választék: MAK Performance kerekek és Volkswagen felnik.",
    url: "/assets/gallery/felni-new-3.png",
    time: "2026-06-08T21:02:00.000Z",
    category: "felnik"
  },
  {
    postId: "Blue-Logo-Wheel",
    text: "Elegáns sport alufelni centírozása és felszerelése.",
    url: "/assets/gallery/felni-new-4.png",
    time: "2026-06-08T21:02:00.000Z",
    category: "felnik"
  },
  {
    postId: "OZ-Racing-Gold",
    text: "Exkluzív arany színű OZ Racing Ultraleggera HLT sport alufelni.",
    url: "/assets/gallery/felni-new-5.png",
    time: "2026-06-08T21:02:00.000Z",
    category: "felnik"
  }
];

const getThumbUrl = (url: string) => {
  const parts = url.split("/");
  const filename = parts.pop();
  return [...parts, "thumbs", filename].join("/");
};

export function Galeria() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    kocsik: false,
    motorok: false,
    felnik: false
  });

  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null || lightboxImages.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxImages.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : null));
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, lightboxImages]);

  const openLightbox = (imagesList: GalleryImage[], index: number) => {
    setLightboxImages(imagesList);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxImages([]);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxImages.length : null));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : null));
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    {
      id: "kocsik",
      title: "Kocsik",
      subtitle: "Autószerelési és autókozmetikai munkák",
      icon: Car,
      images: GALLERY_IMAGES.filter((img) => img.category === "kocsik")
    },
    {
      id: "motorok",
      title: "Motorok",
      subtitle: "Motorkerékpár szerviz és gumizás",
      icon: Bike,
      images: GALLERY_IMAGES.filter((img) => img.category === "motorok")
    },
    {
      id: "felnik",
      title: "Felnik",
      subtitle: "Alufelni javítás, görgőzés és szerelés",
      icon: Disc,
      images: GALLERY_IMAGES.filter((img) => img.category === "felnik")
    }
  ];

  return (
    <section id="galeria" className="bg-[#0b0c0f] border-t border-border/40 py-24 md:py-32 relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container-px mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
            Munkáink
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Referenciák a Műhelyből
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
            Válogatott, minőségi referenciaképek a legutóbbi professzionális munkáinkról kategóriákra bontva.
          </p>
          <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Render */}
        <div className="space-y-20">
          {categories.map((cat) => {
            const isExpanded = expandedCategories[cat.id];
            const displayedImages = isExpanded ? cat.images : cat.images.slice(0, 3);
            const CategoryIcon = cat.icon;

            return (
              <div key={cat.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border/30 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-900 text-primary border border-zinc-800">
                      <CategoryIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider mt-2 sm:mt-0">
                    Összesen: {cat.images.length} kép
                  </span>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedImages.map((img, idx) => (
                    <div
                      key={img.postId + idx}
                      onClick={() => openLightbox(cat.images, cat.images.indexOf(img))}
                      className="group relative h-64 md:h-72 w-full rounded-3xl overflow-hidden border border-border/20 bg-[#121318] cursor-pointer shadow-lg hover:shadow-glow/10 hover:border-primary/30 transition-all duration-300 ease-out"
                    >
                      <img
                        src={getThumbUrl(img.url)}
                        alt={img.text || "Patkó Car referenciamunka"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="absolute top-4 right-4 bg-primary/20 backdrop-blur text-primary p-2.5 rounded-full border border-primary/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="h-4 w-4" />
                        </span>
                        {img.text && (
                          <p className="text-sm text-white font-medium line-clamp-3 leading-relaxed mb-1.5">
                            {img.text}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-[10px] text-primary font-bold uppercase tracking-wider">
                          <span>Patkó-Car Kft.</span>
                          {img.time && <span>{new Date(img.time).toLocaleDateString("hu-HU")}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More / Show Less Button */}
                {cat.images.length > 3 && (
                  <div className="text-center pt-2">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary font-bold text-xs py-3.5 px-7 tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-glow/10"
                    >
                      {isExpanded ? "Kevesebb kép" : "További képek"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Premium Facebook CTA Button */}
        <div className="mt-24 text-center">
          <a
            href="https://www.facebook.com/patko.car"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl md:rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs py-4 px-8 tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm"
          >
            <Facebook className="h-4 w-4 text-[#1877F2]" />
            Kövess minket a Facebookon a friss posztokért
          </a>
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal */}
      {lightboxIndex !== null && lightboxImages.length > 0 && createPortal(
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[200] flex flex-col justify-between animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between p-4 md:p-6 bg-linear-to-b from-black/50 to-transparent relative z-50 shrink-0">
            <span className="text-white text-xs font-extrabold uppercase tracking-widest">
              Kép {lightboxIndex + 1} / {lightboxImages.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full border border-white/10 transition-colors"
              aria-label="Bezárás"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Lightbox Content Container */}
          <div className="flex-1 flex items-center justify-between relative px-4 md:px-12 min-h-0">
            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 z-50 bg-black/50 hover:bg-primary hover:text-primary-foreground text-white border border-white/10 hover:border-primary p-3 rounded-full transition-all"
              aria-label="Előző kép"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Centered Image */}
            <div 
              className="w-full h-full flex items-center justify-center p-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImages[lightboxIndex].url}
                alt={lightboxImages[lightboxIndex].text || "Galéria nagyított kép"}
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
                decoding="async"
              />
            </div>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 z-50 bg-black/50 hover:bg-primary hover:text-primary-foreground text-white border border-white/10 hover:border-primary p-3 rounded-full transition-all"
              aria-label="Következő kép"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="p-6 bg-linear-to-t from-black/80 to-transparent relative z-50 shrink-0 text-center max-w-4xl mx-auto w-full">
            {lightboxImages[lightboxIndex].text && (
              <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-2 text-balance">
                {lightboxImages[lightboxIndex].text}
              </p>
            )}
            <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
              Patkó-Car Kft. · {lightboxImages[lightboxIndex].time && new Date(lightboxImages[lightboxIndex].time).toLocaleDateString("hu-HU")}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
