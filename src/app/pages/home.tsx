import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import heroImage1 from "../../imports/image-1.png";
import heroImage2 from "../../imports/image-2.png";
import heroImage3 from "../../imports/image-3.png";
import galleryImage1 from "../../imports/image-4.png";
import galleryImage2 from "../../imports/image-5.png";
import galleryImage3 from "../../imports/image-6.png";
import galleryImage4 from "../../imports/image-7.png";
import galleryImage5 from "../../imports/image-8.png";
import galleryImage6 from "../../imports/image-2.png";
import galleryImage7 from "../../imports/image-3.png";
import ruro from "../../imports/ruro.jpg";

type MicroCMSImage = {
  url: string;
  height?: number;
  width?: number;
};

type NewsItem = {
  id: string;
  title: string;
  date: string;
  image?: MicroCMSImage;
  slug?: string;
};

type NewsResponse = {
  contents: NewsItem[];
};

function formatDateParts(date: string) {
  const dateObj = new Date(date);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return {
    month,
    day,
  };
}

export function Home() {
  const heroImages = [heroImage1, heroImage2, heroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
        const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

        const response = await fetch(
          `https://${serviceDomain}.microcms.io/api/v1/news?orders=-date&limit=4`,
          {
            headers: {
              "X-MICROCMS-API-KEY": apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("ニュースの取得に失敗しました");
        }

        const data: NewsResponse = await response.json();
        setNewsList(data.contents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
  ];

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden text-[#123646]">
      {/* ================= HERO：MVはそのまま ================= */}
      <section className="relative h-screen mb-30">
        {/* 画像 */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* グラデ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl mb-8 text-white tracking-[0.3em] font-light">
              ILHA FORMOSA
            </h1>
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-10"></div>
            <p className="text-lg md:text-xl text-white tracking-[0.2em] font-light">
              本場台湾の味を楽しめる隠れ家的空間
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="relative px-6 md:px-10 py-20 md:py-28 overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 hidden md:block w-[300px] h-[300px] rounded-[70px] rotate-45 bg-[#B08A6A]/6" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
              <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.34em] text-[#B08A6A] mb-5">
                最新消息
              </p>

              <h2 className="font-en-medium text-[30px] md:text-[46px] text-[#123646] tracking-[0.16em] font-light">
                NEWS
              </h2>

              <p className="font-ja mt-4 text-[11px] md:text-[12px] text-[#B08A6A] tracking-[0.28em]">
                お知らせ
              </p>
          </motion.div>

          {newsList.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 max-w-6xl mx-auto">
              {newsList.map((item, index) => {
                const { month, day } = formatDateParts(item.date);
                const year = new Date(item.date).getFullYear();

                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/news/${item.slug || item.id}`}
                      className="group block h-full bg-white/70 border border-[#123646]/10 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,54,70,0.08)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9E3]">
                        {item.image?.url ? (
                          <ImageWithFallback
                            src={item.image.url}
                            alt={item.title}
                            className="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#EFE9E3] px-4">
                            <div className="text-center">
                              <div className="text-[#123646] font-en-medium text-[18px] md:text-[26px] leading-[1.05] tracking-[0.08em]">
                                ILHA
                                <br />
                                FORMOSA
                              </div>
                              <div className="mt-4 text-[#B08A6A] text-[10px] tracking-[0.28em]">
                                NEWS
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#123646]/55 via-transparent to-transparent opacity-75" />

                        <div className="absolute left-4 bottom-4 text-white">
                          <p className="font-en-medium text-[10px] md:text-[11px] tracking-[0.18em] leading-none">
                            {year}
                          </p>
                          <p className="font-en-medium mt-1 text-[24px] md:text-[30px] tracking-[0.06em] leading-none">
                            {month}.{day}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 py-5 md:px-5 md:py-6 min-h-[130px] md:min-h-[150px] flex flex-col">
                        <div className="mb-4">
                          <p className="font-en-medium text-[10px] md:text-[11px] tracking-[0.18em] text-[#B08A6A]">
                            NEW POST
                          </p>
                        </div>

                        <h3 className="font-ja text-[12px] md:text-[14px] leading-[1.8] md:leading-[1.9] tracking-[0.04em] text-[#123646] group-hover:text-[#B08A6A] transition duration-300">
                          {item.title}
                        </h3>

                        <div className="mt-auto pt-5 flex items-center gap-3 text-[#123646]/70 group-hover:text-[#B08A6A] transition duration-300">
                          <span className="font-en-medium text-[10px] md:text-[11px] tracking-[0.16em]">
                            READ MORE
                          </span>
                          <span className="w-7 h-[1px] bg-current transition duration-300 group-hover:w-10" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}

          <div className="mt-12 md:mt-16 text-center">
            <Link
              to="/news"
              className="font-ja mt-8 inline-flex items-center justify-center gap-4 rounded-full border border-[#123646] px-9 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
            >
              お知らせを見る
              <span className="font-en-medium ml-1">＞</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* ================= CONCEPT ================= */}
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
            >
              <p className="font-en-medium text-[12px] tracking-[0.45em] text-[#B08A6A]">
                CONCEPT
              </p>

              <h2 className="mt-6 text-[34px] md:text-[52px] leading-[1.65] tracking-[0.14em] text-[#123646] font-mincho">
                創作台湾料理を、<br />
                京都の隠れ家で。
              </h2>

              <div className="mt-10 font-ja text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646]/76 space-y-5">
                <p>
                  ILHA FORMOSAは、本格台湾料理をベースに、創作台湾料理の自由な発想とアメリカンチャイニーズのエッセンスを取り入れた台湾料理店です。
                </p>
                <p>
                  本場の薬膳素材や香辛料、台湾茶にもこだわり、香りや余韻まで楽しめる一皿を、京都烏丸の隠れ家でゆっくりお楽しみいただけます。
                </p>
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="font-ja inline-flex items-center justify-center gap-4 rounded-full border border-[#123646] px-9 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
                >
                  私たちについて
                  <span className="font-en-medium ml-1">＞</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden">
                <img
                  src={ruro}
                  alt="ILHA FORMOSAの料理"
                  className="w-full h-[360px] md:h-[560px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MENU GUIDE ================= */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-end mb-14 md:mb-18"
          >
            <div>
              <p className="font-en-medium text-[12px] tracking-[0.45em] text-[#B08A6A]">
                MENU
              </p>

              <h2 className="mt-5 text-[34px] md:text-[50px] tracking-[0.14em] text-[#123646] font-mincho">
                お料理
              </h2>
            </div>

            <p className="font-ja text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646]/76">
              昼は気軽に、夜はゆっくりと。台湾の味わいをシーンに合わせてお楽しみいただけます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 border-y border-[#123646]/14">
            {[
              {
                en: "LUNCH",
                ja: "ランチ",
                text: "ルーローハンや台湾鉄道弁当など、台湾の食卓を気軽に楽しめる昼の一皿。",
                image: galleryImage2,
                path: "/menu#lunch",
              },
              {
                en: "COURSE",
                ja: "コース",
                text: "前菜から主菜まで、香りと余韻をゆっくり味わえる夜のコース。",
                image: galleryImage1,
                path: "/menu#course",
              },
              {
                en: "TEA & DRINK",
                ja: "お茶とお酒",
                text: "台湾茶や紹興酒、ワインなど、料理に寄り添うドリンクをご用意しています。",
                image: galleryImage7,
                path: "/menu#drink",
              },
            ].map((item, index) => (
              <motion.div
                key={item.en}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group bg-white/35 ${
                  index !== 0 ? "md:border-l border-[#123646]/14" : ""
                }`}
              >
                <Link to={item.path} className="block h-full">
                  <div className="h-[230px] md:h-[270px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.ja}
                      className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 md:p-8">
                    <p className="font-en-medium text-[12px] tracking-[0.28em] text-[#B08A6A]">
                      {item.en}
                    </p>
                    <h3 className="mt-3 text-[25px] tracking-[0.1em] text-[#123646] font-light">
                      {item.ja}
                    </h3>
                    <p className="font-ja mt-5 text-[13px] leading-[2] tracking-[0.06em] text-[#123646]/72">
                      {item.text}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-14 text-center">
            <Link
              to="/menu"
              className="font-ja inline-flex items-center justify-center gap-4 rounded-full border border-[#123646] px-9 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
            >
              お料理を見る
              <span className="font-en-medium ml-1">＞</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="relative px-6 md:px-10 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#123646]" />
        <div className="absolute inset-0 opacity-18">
          <img
            src={galleryImage4}
            alt="台湾茶"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-en-medium text-[12px] tracking-[0.45em] text-white/60">
              EXPERIENCE
            </p>

            <h2 className="mt-6 text-[30px] md:text-[44px] leading-[1.7] tracking-[0.14em] font-mincho">
              食事の時間に、<br className="md:hidden" />
              小さな旅を。
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16 text-left">
              <p className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-white/82">
                香りが立ち上がる瞬間、料理を口に運ぶ瞬間に、台湾の街角を少し旅しているような気持ちになっていただけたらと考えています。
              </p>
              <p className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-white/82">
                友人との食事、家族との時間、大切な方との夜。料理と空間が自然に会話を生み、心地よい余韻が残るお店を目指しています。
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-12 md:mb-16"
          >
            <p className="font-en-medium text-[12px] tracking-[0.45em] text-[#B08A6A]">
              GALLERY
            </p>

            <h2 className="mt-5 text-[32px] md:text-[46px] tracking-[0.14em] text-[#123646] font-mincho">
              料理と空間
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...galleryImages, ...galleryImages].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] h-[220px] md:w-[460px] md:h-[320px] overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`ILHA FORMOSA gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ACCESS CTA ================= */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto border-y border-[#123646]/14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white/35 text-center"
          >
            <p className="font-en-medium text-[12px] tracking-[0.38em] text-[#B08A6A]">
              ACCESS
            </p>

            <h2 className="mt-4 text-[28px] tracking-[0.12em] text-[#123646] font-light">
              ご案内
            </h2>

            <p className="font-ja mt-5 text-[13px] leading-[2] tracking-[0.06em] text-[#123646]/70">
              京都の落ち着いた街並みの中で、台湾料理をゆっくりお楽しみください。
            </p>

            <Link
              to="/access"
              className="font-ja mt-8 inline-flex items-center justify-center gap-4 rounded-full border border-[#123646] px-9 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
            >
              店舗情報を見る
              <span className="font-en-medium ml-1">＞</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}