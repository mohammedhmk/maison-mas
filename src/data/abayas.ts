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
    name: "The Midnight Veil",
    nameAr: "عباية حجاب الليل",
    fabric: "Premium Japanese Crepe",
    fabricAr: "كريب ياباني فاخر",
    price: "١٬٨٠٠ ر.س",
    description:
      "A masterpiece of understated elegance — crafted from the finest Japanese crepe with a refined mandarin collar that frames the face with quiet sophistication.",
    descriptionAr:
      "تحفة من الأناقة الهادئة — مصنوعة من أجود أنواع الكريب الياباني بياقة ماندرين راقية تمنحكِ حضوراً ملكياً لا يُنسى. قصّة انسيابية تحتضن القوام بنعومة وتمنحكِ إطلالة تليق بذوقكِ الرفيع.",
    image: "/abayas/abaya-1.jpeg.jpeg",
  },
  {
    id: 2,
    name: "The Emerald Grace",
    nameAr: "عباية السحر الزمردي",
    fabric: "Italian Linen Blend",
    fabricAr: "مزيج كتان إيطالي فاخر",
    price: "١٬٨٠٠ ر.س",
    description:
      "Draped in a deep emerald hue with a matching hijab, this belted masterpiece sculpts the silhouette with effortless grandeur.",
    descriptionAr:
      "بلون أخضر زمردي عميق وحجاب متناسق وحزام يرسم القوام بأناقة استثنائية. عباية صُمّمت للمرأة التي تعرف أن الفخامة تكمن في التفاصيل — قماش كتان إيطالي يتنفس مع بشرتكِ ويمنحكِ راحة لا تُضاهى.",
    image: "/abayas/abaya-2.jpeg.jpeg",
  },
  {
    id: 3,
    name: "The Obsidian Luxe",
    nameAr: "عباية الأوبسيديان",
    fabric: "Premium Shimmer Taffeta",
    fabricAr: "تافتا لامعة فاخرة",
    price: "١٬٨٠٠ ر.س",
    description:
      "A structured silhouette in shimmering black taffeta — bold, architectural, and unapologetically luxurious.",
    descriptionAr:
      "قطعة فنية من التافتا اللامعة بلمعة أخّاذة تأسر الأنظار. تصميم هندسي جريء بقصّة A-Line وأزرار معدنية فاخرة تمنحكِ حضوراً طاغياً. لمن تبحث عن عباية تتحدث عنها قبل أن تتحدث هي.",
    image: "/abayas/abaya-3.jpeg.jpeg",
  },
  {
    id: 4,
    name: "The Cloud Whisper",
    nameAr: "عباية همسة الغيم",
    fabric: "Hand-Dyed Silk Organza",
    fabricAr: "أورغنزا حريرية مصبوغة يدوياً",
    price: "١٬٨٠٠ ر.س",
    description:
      "Like watercolors on silk — each piece is uniquely hand-dyed, creating an ethereal cloud pattern that makes every abaya one of a kind.",
    descriptionAr:
      "كلوحة فنية رُسمت بعناية — كل قطعة مصبوغة يدوياً بتدرجات رمادية ساحرة تجعل عبايتكِ فريدة لا تتكرر. نسيج أورغنزا حريري يتراقص مع كل خطوة، لإطلالة تمزج بين الفن والأناقة بجرأة لا تُقلَّد.",
    image: "/abayas/abaya-4.jpeg.jpeg",
  },
  {
    id: 5,
    name: "The Golden Secret",
    nameAr: "عباية السر الذهبي",
    fabric: "Double-Faced Duchess Satin",
    fabricAr: "ساتان دوقي بوجهين",
    price: "٢٬٠٠٠ ر.س",
    description:
      "The crown jewel — black duchess satin reveals a hidden golden silk lining, a secret luxury visible only in motion.",
    descriptionAr:
      "جوهرة المجموعة — ساتان دوقي أسود فاخر يُخفي بداخله بطانة حريرية ذهبية تتراءى مع كل حركة كسرٍّ جميل. عباية صُنعت لمن تؤمن أن الفخامة الحقيقية ليست فيما يُرى، بل فيما يُكتشف.",
    image: "/abayas/abaya-5.jpeg.jpeg",
  },
];
