"use strict";

/*
    Princess Pet Grooming Demo

    IMPORTANT:
    Replace every temporary WhatsApp number in index.html:
    13050000000

    Use the client's real number with country code and no:
    - plus sign
    - spaces
    - parentheses
    - hyphens
*/

const translations = {
    en: {
        demoNotice:
            "Demo website created to preview a possible design for Princess Pet Grooming.",

        navHome: "Home",
        navServices: "Services",
        navPackages: "Packages",
        navAbout: "About",
        navGallery: "Gallery",
        navTestimonials: "Testimonials",
        navFaq: "FAQ",
        navContact: "Book Now",

        heroEyebrow: "Mobile pet grooming in Miami-Dade",
        heroTitle: "Gentle grooming brought directly to your home",
        heroText:
            "Professional, patient and convenient grooming that helps your dog look and feel their best without leaving home.",
        heroWhatsapp: "Request an Appointment",
        heroGallery: "View Our Work",
        heroFeature1: "Gentle and patient care",
        heroFeature2: "Service at your home",
        heroFeature3: "Personalized attention",

        introLabel: "Care, comfort and convenience",
        introTitle: "A calmer grooming experience for your pet",
        introText:
            "Princess Pet Grooming brings professional grooming directly to families throughout Miami-Dade. Every appointment is handled with patience, attention and respect for your dog's individual needs.",
        introLink: "Learn more about our approach →",

        servicesLabel: "What we offer",
        servicesTitle: "Mobile grooming services",
        servicesIntro:
            "Services can be adjusted based on your dog's breed, size, coat and specific grooming needs.",

        service1Title: "Bath & Freshen Up",
        service1Text:
            "A refreshing maintenance service designed to keep your dog clean, comfortable and smelling great between full grooming appointments.",
        service1Feat1: "Shampoo and conditioning",
        service1Feat2: "Blow-dry and brushing",
        service1Feat3: "Nail trimming",
        service1Feat4: "Ear cleaning",

        popularBadge: "Most Popular",

        service2Title: "Complete Grooming",
        service2Text:
            "A complete grooming appointment with bathing, brushing and a customized haircut based on your preferences and your dog's coat.",
        service2Feat1: "Bath and conditioning",
        service2Feat2: "Customized haircut",
        service2Feat3: "Nail trimming",
        service2Feat4: "Ear cleaning and finishing spray",

        service3Title: "Princess Spa Experience",
        service3Text:
            "An upgraded grooming experience with added coat care and finishing details for dogs needing extra attention.",
        service3Feat1: "Complete grooming service",
        service3Feat2: "Deep-conditioning treatment",
        service3Feat3: "De-shedding or detangling treatment",
        service3Feat4: "Premium finishing details",

        packagesLabel: "Sample pricing",
        packagesTitle: "Grooming packages",
        packagesIntro:
            "Final pricing depends on size, breed, coat condition, temperament and requested services.",
        startingAt: "Starting at",

        package1Subtitle: "Essential Care",
        package1Title: "Bath & Fresh",
        package1Feat1: "Bath with quality shampoo",
        package1Feat2: "Conditioning treatment",
        package1Feat3: "Blow-dry and brushing",
        package1Feat4: "Nail and ear care",
        package1Button: "Ask About This Package",

        recommendedBadge: "Recommended",

        package2Subtitle: "Complete Care",
        package2Title: "Full Grooming",
        package2Feat1: "Everything in Bath & Fresh",
        package2Feat2: "Customized haircut",
        package2Feat3: "Paw and sanitary trimming",
        package2Feat4: "Finishing fragrance and accessory",
        package2Button: "Request Full Grooming",

        package3Subtitle: "Premium Care",
        package3Title: "Princess Spa",
        package3Feat1: "Everything in Full Grooming",
        package3Feat2: "Deep-conditioning treatment",
        package3Feat3: "De-shedding or detangling care",
        package3Feat4: "Premium finishing treatment",
        package3Button: "Ask About Princess Spa",

        pricingNote:
            "Demo pricing only. Additional charges may apply for large breeds, severe matting, excessive shedding or special handling.",

        aboutLabel: "About Princess Pet Grooming",
        aboutTitle:
            "Personal attention without the stressful salon visit",
        aboutText1:
            "Princess Pet Grooming was created to provide dogs and their families with a convenient and more personal grooming experience. By coming directly to your home, the process becomes easier for busy owners and more comfortable for many pets.",
        aboutText2:
            "Each dog is treated with patience and gentle care. Appointments are never approached as one-size-fits-all; the service is adjusted around the dog's coat, personality and individual needs.",

        aboutAccentTitle: "Grooming with patience",
        aboutAccentText: "Because every dog deserves to feel safe.",

        aboutPoint1Title: "Mobile convenience",
        aboutPoint1Text: "Serving homes throughout Miami-Dade.",
        aboutPoint2Title: "Gentle handling",
        aboutPoint2Text:
            "Patient care focused on your dog's comfort.",
        aboutPoint3Title: "Personal service",
        aboutPoint3Text:
            "Individual attention during every appointment.",

        galleryLabel: "Recent clients",
        galleryTitle: "Fresh cuts and happy pups",
        galleryIntro: "Select any photo to view it in full size.",

        testimonialLabel: "Client experience",
        testimonialTitle: "Trusted by local pet families",
        testimonialText:
            "“I can't recommend Princess Pet Grooming enough. The fact that she comes to my home makes everything so convenient, and she's always on time and very professional. She's incredibly patient and gentle with my dog, which gives me so much peace of mind. You can tell she truly loves what she does. Every time she's done, my dog looks amazing, smells great, and is so happy. We wouldn't trust anyone else with him!”",

        areaLabel: "Mobile service area",
        areaTitle: "Grooming throughout Miami-Dade",
        areaText:
            "Princess Pet Grooming travels directly to clients throughout Miami-Dade County. Send your ZIP code through WhatsApp to confirm availability in your neighborhood.",
        areaButton: "Check My Area",

        faqLabel: "Before your appointment",
        faqTitle: "Frequently asked questions",

        faqQ1: "Do you come directly to my home?",
        faqA1:
            "Yes. Princess Pet Grooming provides mobile service and travels directly to clients throughout Miami-Dade.",

        faqQ2: "How is the final price determined?",
        faqA2:
            "Pricing depends on your dog's breed, size, coat condition, temperament and the services requested. A final estimate can be provided after receiving basic information and a recent photo.",

        faqQ3: "What information should I send when booking?",
        faqA3:
            "Please provide your dog's breed, approximate weight, requested service, current coat condition, ZIP code and a recent photo.",

        faqQ4: "Do you work with nervous dogs?",
        faqA4:
            "Every dog is handled patiently and gently. Please mention any anxiety, sensitivity or behavioral concerns before the appointment so the groomer can determine the safest approach.",

        faqQ5: "How often should my dog be groomed?",
        faqA5:
            "The ideal schedule depends on breed, coat type, lifestyle and haircut preference. Many dogs benefit from professional grooming every four to eight weeks.",

        faqQ6: "How do I request an appointment?",
        faqA6:
            "Use any WhatsApp button on this website to send your information and request available dates.",

        ctaLabel: "Ready for a fresh look?",
        ctaTitle: "Give your dog the royal treatment",
        ctaText:
            "Send a message with your dog's information and request your next mobile grooming appointment.",
        ctaButton: "Message Us on WhatsApp",

        footerDescription:
            "Gentle and convenient mobile pet grooming throughout Miami-Dade, Florida.",
        footerExplore: "Explore",
        footerContact: "Contact",
        footerCopyright:
            "© 2026 Princess Pet Grooming. All rights reserved.",
        footerCredit: "Demo website by AV Digital Services."
    },

    es: {
        demoNotice:
            "Sitio web de demostración creado para mostrar un posible diseño para Princess Pet Grooming.",

        navHome: "Inicio",
        navServices: "Servicios",
        navPackages: "Paquetes",
        navAbout: "Nosotros",
        navGallery: "Galería",
        navTestimonials: "Testimonios",
        navFaq: "Preguntas",
        navContact: "Reservar",

        heroEyebrow: "Grooming móvil en Miami-Dade",
        heroTitle: "Cuidado y grooming directamente en la comodidad de tu hogar",
        heroText:
            "Un servicio profesional, paciente y conveniente para que tu perrito se vea y se sienta increíble sin tener que salir de casa.",
        heroWhatsapp: "Solicitar una Cita",
        heroGallery: "Ver Nuestro Trabajo",
        heroFeature1: "Cuidado paciente y delicado",
        heroFeature2: "Servicio en tu hogar",
        heroFeature3: "Atención personalizada",

        introLabel: "Cuidado, comodidad y conveniencia",
        introTitle: "Una experiencia más tranquila para tu mascota",
        introText:
            "Princess Pet Grooming lleva el servicio profesional directamente a familias en todo Miami-Dade. Cada cita se realiza con paciencia, atención y respeto por las necesidades individuales de tu perrito.",
        introLink: "Conoce más sobre nuestra atención →",

        servicesLabel: "Lo que ofrecemos",
        servicesTitle: "Servicios de grooming móvil",
        servicesIntro:
            "Los servicios se pueden adaptar según la raza, el tamaño, el tipo de pelo y las necesidades específicas de tu perrito.",

        service1Title: "Baño y Frescura",
        service1Text:
            "Un servicio de mantenimiento para mantener a tu perrito limpio, cómodo y con un olor agradable entre sus citas de grooming completo.",
        service1Feat1: "Champú y acondicionador",
        service1Feat2: "Secado y cepillado",
        service1Feat3: "Corte de uñas",
        service1Feat4: "Limpieza de oídos",

        popularBadge: "Más Popular",

        service2Title: "Grooming Completo",
        service2Text:
            "Una cita completa con baño, cepillado y un corte personalizado de acuerdo con tus preferencias y el tipo de pelo de tu perrito.",
        service2Feat1: "Baño y acondicionador",
        service2Feat2: "Corte personalizado",
        service2Feat3: "Corte de uñas",
        service2Feat4: "Limpieza de oídos y fragancia",

        service3Title: "Experiencia Princess Spa",
        service3Text:
            "Una experiencia mejorada con tratamientos adicionales para el pelo y detalles especiales para perritos que necesitan atención extra.",
        service3Feat1: "Servicio de grooming completo",
        service3Feat2: "Tratamiento de acondicionamiento profundo",
        service3Feat3: "Tratamiento para muda o nudos",
        service3Feat4: "Detalles finales premium",

        packagesLabel: "Precios de muestra",
        packagesTitle: "Paquetes de grooming",
        packagesIntro:
            "El precio final depende del tamaño, la raza, la condición del pelo, el temperamento y los servicios solicitados.",
        startingAt: "Desde",

        package1Subtitle: "Cuidado Esencial",
        package1Title: "Baño y Frescura",
        package1Feat1: "Baño con champú de calidad",
        package1Feat2: "Tratamiento acondicionador",
        package1Feat3: "Secado y cepillado",
        package1Feat4: "Cuidado de uñas y oídos",
        package1Button: "Consultar Este Paquete",

        recommendedBadge: "Recomendado",

        package2Subtitle: "Cuidado Completo",
        package2Title: "Grooming Completo",
        package2Feat1: "Todo lo incluido en Baño y Frescura",
        package2Feat2: "Corte personalizado",
        package2Feat3: "Recorte de patitas y área sanitaria",
        package2Feat4: "Fragancia y accesorio final",
        package2Button: "Solicitar Grooming Completo",

        package3Subtitle: "Cuidado Premium",
        package3Title: "Princess Spa",
        package3Feat1: "Todo lo incluido en Grooming Completo",
        package3Feat2: "Acondicionamiento profundo",
        package3Feat3: "Tratamiento para muda o nudos",
        package3Feat4: "Tratamiento final premium",
        package3Button: "Consultar Princess Spa",

        pricingNote:
            "Precios de demostración. Pueden aplicarse cargos adicionales por razas grandes, nudos severos, muda excesiva o manejo especial.",

        aboutLabel: "Sobre Princess Pet Grooming",
        aboutTitle:
            "Atención personal sin el estrés de visitar un salón",
        aboutText1:
            "Princess Pet Grooming fue creado para ofrecer a los perritos y sus familias una experiencia conveniente y más personal. Al ir directamente hasta tu hogar, el proceso es más fácil para las familias ocupadas y más cómodo para muchas mascotas.",
        aboutText2:
            "Cada perrito recibe atención paciente y delicada. El servicio nunca se trata como algo igual para todos; cada cita se adapta al tipo de pelo, personalidad y necesidades individuales del perrito.",

        aboutAccentTitle: "Grooming con paciencia",
        aboutAccentText:
            "Porque cada perrito merece sentirse seguro.",

        aboutPoint1Title: "Comodidad móvil",
        aboutPoint1Text: "Servicio en hogares de Miami-Dade.",
        aboutPoint2Title: "Trato delicado",
        aboutPoint2Text:
            "Atención paciente enfocada en la comodidad de tu perro.",
        aboutPoint3Title: "Servicio personal",
        aboutPoint3Text:
            "Atención individual durante cada cita.",

        galleryLabel: "Clientes recientes",
        galleryTitle: "Cortes frescos y perritos felices",
        galleryIntro:
            "Selecciona cualquier foto para verla en tamaño completo.",

        testimonialLabel: "Experiencia de clientes",
        testimonialTitle: "La confianza de familias locales",
        testimonialText:
            "“No puedo recomendar lo suficiente a Princess Pet Grooming. El hecho de que venga hasta mi casa hace todo mucho más conveniente, y siempre es puntual y muy profesional. Es increíblemente paciente y delicada con mi perro, lo que me da muchísima tranquilidad. Se nota que verdaderamente ama lo que hace. Cada vez que termina, mi perro se ve increíble, huele muy bien y está muy feliz. ¡No confiaríamos en nadie más para atenderlo!”",

        areaLabel: "Área de servicio móvil",
        areaTitle: "Grooming en todo Miami-Dade",
        areaText:
            "Princess Pet Grooming viaja directamente hasta sus clientes en Miami-Dade. Envía tu código postal por WhatsApp para confirmar disponibilidad en tu zona.",
        areaButton: "Confirmar Mi Área",

        faqLabel: "Antes de tu cita",
        faqTitle: "Preguntas frecuentes",

        faqQ1: "¿Vienen directamente hasta mi casa?",
        faqA1:
            "Sí. Princess Pet Grooming ofrece servicio móvil y viaja directamente hasta sus clientes en Miami-Dade.",

        faqQ2: "¿Cómo se determina el precio final?",
        faqA2:
            "El precio depende de la raza, tamaño, condición del pelo, temperamento y los servicios solicitados. Se puede proporcionar un estimado después de recibir información básica y una foto reciente.",

        faqQ3: "¿Qué información debo enviar para reservar?",
        faqA3:
            "Envía la raza, el peso aproximado, el servicio deseado, la condición actual del pelo, tu código postal y una foto reciente.",

        faqQ4: "¿Trabajan con perros nerviosos?",
        faqA4:
            "Cada perro se atiende con paciencia y delicadeza. Informa con anticipación sobre cualquier ansiedad, sensibilidad o comportamiento especial para determinar la forma más segura de atenderlo.",

        faqQ5: "¿Con qué frecuencia debo llevar a mi perro al grooming?",
        faqA5:
            "La frecuencia ideal depende de la raza, el tipo de pelo, el estilo de vida y el corte deseado. Muchos perros se benefician de una cita profesional cada cuatro a ocho semanas.",

        faqQ6: "¿Cómo solicito una cita?",
        faqA6:
            "Utiliza cualquiera de los botones de WhatsApp en esta página para enviar la información de tu perro y solicitar las fechas disponibles.",

        ctaLabel: "¿Listo para un nuevo look?",
        ctaTitle: "Dale a tu perrito un tratamiento de realeza",
        ctaText:
            "Envía la información de tu perrito y solicita tu próxima cita de grooming móvil.",
        ctaButton: "Escribir por WhatsApp",

        footerDescription:
            "Servicio móvil de grooming delicado y conveniente en Miami-Dade, Florida.",
        footerExplore: "Explorar",
        footerContact: "Contacto",
        footerCopyright:
            "© 2026 Princess Pet Grooming. Todos los derechos reservados.",
        footerCredit:
            "Sitio web de demostración creado por AV Digital Services."
    }
};

/* =========================================
   Mobile navigation
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const menuIsOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = menuIsOpen ? "×" : "☰";
        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen.toString()
        );
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        const clickedInsideNavigation =
            navLinks.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInsideNavigation) {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

/* =========================================
   Language selector
========================================= */

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const languageLinks = document.querySelectorAll(
    "[data-href-es][data-href-en]"
);

function setLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }

    translatableElements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        const translatedText = selectedTranslations[translationKey];

        if (typeof translatedText === "string") {
            element.textContent = translatedText;
        }
    });

    languageLinks.forEach((link) => {
        const translatedHref = link.getAttribute(
            `data-href-${language}`
        );

        if (translatedHref) {
            link.setAttribute("href", translatedHref);
        }
    });

    languageButtons.forEach((button) => {
        const buttonLanguage = button.getAttribute("data-lang");
        const isActiveLanguage = buttonLanguage === language;

        button.classList.toggle("active", isActiveLanguage);
        button.setAttribute(
            "aria-pressed",
            isActiveLanguage.toString()
        );
    });

    document.documentElement.lang = language;
    localStorage.setItem("princessPetGroomingLanguage", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedLanguage = button.getAttribute("data-lang");
        setLanguage(selectedLanguage);
    });
});

const savedLanguage =
    localStorage.getItem("princessPetGroomingLanguage") || "en";

setLanguage(savedLanguage);

/* =========================================
   Gallery lightbox
========================================= */

const galleryImages = Array.from(
    document.querySelectorAll(".gallery-card img")
);

let currentImageIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

if (galleryImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image gallery viewer");

    lightbox.innerHTML = `
        <button
            class="lightbox-close"
            type="button"
            aria-label="Close image viewer"
        >
            &times;
        </button>

        <button
            class="lightbox-arrow lightbox-prev"
            type="button"
            aria-label="View previous image"
        >
            &#10094;
        </button>

        <img
            class="lightbox-image"
            src=""
            alt="Enlarged grooming gallery image"
        >

        <button
            class="lightbox-arrow lightbox-next"
            type="button"
            aria-label="View next image"
        >
            &#10095;
        </button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const closeButton =
        lightbox.querySelector(".lightbox-close");

    const previousButton =
        lightbox.querySelector(".lightbox-prev");

    const nextButton =
        lightbox.querySelector(".lightbox-next");

    function updateLightboxImage() {
        const selectedImage = galleryImages[currentImageIndex];

        lightboxImage.src = selectedImage.src;
        lightboxImage.alt =
            selectedImage.alt || "Enlarged grooming image";
    }

    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    function showNextImage() {
        currentImageIndex =
            (currentImageIndex + 1) % galleryImages.length;

        updateLightboxImage();
    }

    function showPreviousImage() {
        currentImageIndex =
            (currentImageIndex - 1 + galleryImages.length) %
            galleryImages.length;

        updateLightboxImage();
    }

    galleryImages.forEach((image, index) => {
        image.setAttribute("tabindex", "0");

        image.addEventListener("click", () => {
            openLightbox(index);
        });

        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(index);
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    nextButton.addEventListener("click", showNextImage);
    previousButton.addEventListener("click", showPreviousImage);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            showNextImage();
        }

        if (event.key === "ArrowLeft") {
            showPreviousImage();
        }
    });

    lightbox.addEventListener(
        "touchstart",
        (event) => {
            touchStartX = event.changedTouches[0].screenX;
        },
        {
            passive: true
        }
    );

    lightbox.addEventListener(
        "touchend",
        (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        },
        {
            passive: true
        }
    );

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const minimumSwipeDistance = 50;

        if (swipeDistance > minimumSwipeDistance) {
            showPreviousImage();
        }

        if (swipeDistance < -minimumSwipeDistance) {
            showNextImage();
        }
    }
}

/* =========================================
   Scroll reveal effects
========================================= */

const revealItems = document.querySelectorAll(
    [
        ".section-heading",
        ".intro-heading",
        ".intro-copy",
        ".service-card",
        ".package-card",
        ".about-photo",
        ".about-image-accent",
        ".about-text > *",
        ".gallery-card",
        ".testimonial-card",
        ".service-area-content > *",
        ".faq-container details",
        ".final-cta-content > *"
    ].join(", ")
);

revealItems.forEach((item) => {
    item.classList.add("reveal-on-scroll");
});

const userPrefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (userPrefersReducedMotion) {
    revealItems.forEach((item) => {
        item.classList.add("visible");
    });
} else {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
}

/* =========================================
   Header shadow after scrolling
========================================= */

const siteHeader = document.querySelector(".site-header");

function updateHeaderShadow() {
    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 15) {
        siteHeader.style.boxShadow =
            "0 8px 30px rgba(104, 22, 56, 0.09)";
    } else {
        siteHeader.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", updateHeaderShadow, {
    passive: true
});

updateHeaderShadow();