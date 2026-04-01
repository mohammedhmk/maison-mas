export interface Abaya {
  id: number;
  name: string;
  nameAr: string;
  fabric: string;
  fabricAr: string;
  price: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export const abayas: Abaya[] = [
  {
    id: 1,
    name: "THE MOIRE ALLURE",
    nameAr: "سِحر المواريه",
    fabric: "Premium Jacquard Moiré",
    fabricAr: "جاكار مواريه فاخر",
    price: "١٬٥٠٠ ر.س",
    description:
      "A masterpiece of understated elegance — crafted from luxurious Jacquard Moiré fabric with captivating water-like ripples. A refined mandarin collar grants you an unforgettable regal presence.",
    descriptionAr:
      "تحفة من الأناقة الهادئة — مصنوعة من نسيج الجاكار \"مواريه\" الفاخر بتموجاته الساحرة التي تشبه انسياب الماء. بياقة ماندارين راقية تمنحك حضوراً ملكياً لا يُنسى. قصة انسيابية تحتضن القوام بنعومة وتمنحك إطلالة تليق بذوقك الرفيع.",
    image: "/abayas/abaya-1.jpeg.jpeg",
  },
  {
    id: 2,
    name: "THE EMERALD GRACE",
    nameAr: "النسيم الزمردي",
    fabric: "Linen-Cupro-Tencel Blend",
    fabricAr: "مزيج فاخر من الكتان والكوبرو والتنسل",
    price: "١٬٨٠٠ ر.س",
    description:
      "A design that reflects comfort and natural luxury — a rich fabric with a soft, breathable composition that gives you effortless flow all day long. A practical cut with a belt that highlights the silhouette in a calm and elegant style.",
    descriptionAr:
      "تصميم يعكس الراحة والفخامة الطبيعية — قماش غني بتركيبة ناعمة ومتنفسة يمنحكِ انسيابية مريحة طوال اليوم. قصة عملية مع حزام يبرز القوام بأسلوب هادئ وأنيق",
    image: "/abayas/abaya-2.jpeg.jpeg",
  },
  {
    id: 3,
    name: "THE WOVEN GLEAM",
    nameAr: "الوميض الفاخر",
    fabric: "Premium Metallic Weave",
    fabricAr: "نسيج معدني فاخر",
    price: "١٬٨٠٠ ر.س",
    description:
      "An artistic piece in luxurious metallic weave with a dazzling gleam. Bold geometric A-Line cut with premium metallic buttons for a commanding presence.",
    descriptionAr:
      "قطعة فنية من النسيج المعدني الفاخر بلمعة أخاذة تأسر الأنظار. تصميم هندسي جريء بقصة A-Line وأزرار معدنية فاخرة تمنحك حضوراً طاغياً. لمن تبحث عن عباية تتحدث عنها قبل أن تتحدث هي.",
    image: "/abayas/abaya-3.jpeg.jpeg",
  },
  {
    id: 4,
    name: "THE CLOUD CANVAS",
    nameAr: "لوحة الغيم",
    fabric: "Linen-Viscose with Digital Print",
    fabricAr: "كتان وفيسكوز بطباعة رقمية",
    price: "١٬٥٠٠ ر.س",
    description:
      "Like a carefully painted canvas — premium linen-viscose fabric adorned with precise digital prints of captivating grey gradients, making your abaya unique and distinctive.",
    descriptionAr:
      "كلوحة فنية رُسمت بعناية — قماش فاخر يمزج بين الكتان والفيسكوز، مزين بطباعة رقمية دقيقة لتدرجات رمادية ساحرة تجعل عبايتك فريدة ومميزة. نسيج غني بالتفاصيل يتراقص مع كل خطوة، لإطلالة تمزج بين الفن والأناقة بجرأة لا تُقلّد.",
    image: "/abayas/abaya-4.jpeg.jpeg",
  },
  {
    id: 5,
    name: "THE JACQUARD SECRET",
    nameAr: "خبايا الجاكار",
    fabric: "Black Fabric with Golden Metallic Jacquard Lining",
    fabricAr: "نسيج أسود فاخر ببطانة جاكار معدني ذهبي",
    price: "٢٬٠٠٠ ر.س",
    description:
      "The crown jewel — luxurious black fabric conceals a golden metallic jacquard lining that reveals itself with every movement, a beautiful secret. For those who believe true luxury is not just what is seen, but what is discovered.",
    descriptionAr:
      "جوهرة المجموعة — نسيج أسود فاخر يُخفي بداخله بطانة من الجاكار المعدني الذهبي تتراءى مع كل حركة كسرّ جميل. عباية صُممت لمن تؤمن أن الفخامة الحقيقية ليست فقط فيما يُرى، بل فيما يُكتشف.",
    image: "/abayas/abaya-5.jpeg.jpeg",
  },
];
