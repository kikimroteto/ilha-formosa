import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useEffect, useState } from "react";

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
  body?: string;
  slug?: string;
};

type NewsResponse = {
  contents: NewsItem[];
};

function formatDateParts(date: string) {
  const dateObj = new Date(date);
  const year = String(dateObj.getFullYear());
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return {
    year,
    month,
    day,
  };
}

function isNewPost(date: string) {
  const postDate = new Date(date);
  const today = new Date();

  postDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - postDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= 30;
}

export function News() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
        const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

        const response = await fetch(
          `https://${serviceDomain}.microcms.io/api/v1/news?orders=-date`,
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
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#123646] overflow-x-hidden">
      {/* Hero Section：MVはそのまま */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt="ILHA FORMOSA News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl mb-6 text-white tracking-[0.3em] font-light">
              お知らせ
            </h1>

            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8"></div>

            <p className="text-base md:text-lg text-white/90 tracking-[0.2em] font-light">
              日々の出来事と、大切なお知らせ
            </p>
          </motion.div>
        </div>
      </section>

      {/* MV以降 */}
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="pointer-events-none absolute top-28 right-0 hidden md:block w-[280px] h-[280px] rounded-full bg-[#B08A6A]/8" />
        <div className="pointer-events-none absolute bottom-20 left-0 hidden md:block w-[240px] h-[240px] rounded-full bg-[#123646]/5" />

        <div className="relative max-w-6xl mx-auto">
          {/* タイトル */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20"
          >
            <p className="font-ja text-[12px] md:text-[14px] tracking-[0.28em] text-[#B08A6A] mb-5">
              最新消息
            </p>

            <h2 className="text-[34px] md:text-[52px] font-en-medium tracking-[0.08em] text-[#123646] leading-none">
              NEWS
            </h2>

            <p className="font-ja mt-4 text-[13px] md:text-[15px] tracking-[0.18em] text-[#B08A6A]">
              お知らせ
            </p>

            <div className="w-16 h-[1px] bg-[#123646]/25 mx-auto mt-8" />
          </motion.div>

          {/* カード一覧 */}
          <div className="bg-white/55 border border-[#123646]/8 px-5 py-8 md:px-10 md:py-12">
            {loading ? (
              <p className="font-ja text-center text-[13px] tracking-[0.08em] text-[#123646]/70">
                読み込み中です。
              </p>
            ) : newsList.length === 0 ? (
              <p className="font-ja text-center text-[13px] tracking-[0.08em] text-[#123646]/70">
                現在、お知らせはありません。
              </p>
            ) : (
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-9 md:gap-8">
                {newsList.map((item, index) => {
                  const { year, month, day } = formatDateParts(item.date);
                  const showNewPost = isNewPost(item.date);

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={`/news/${item.slug || item.id}`}
                        className="group block h-full bg-white/70 border border-[#123646]/10 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,54,70,0.08)]"
                      >
                        {/* 画像 */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9E3]">
                          {item.image?.url ? (
                            <ImageWithFallback
                              src={item.image.url}
                              alt={item.title}
                              className="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#EFE9E3] px-6">
                              <div className="text-center">
                                <div className="text-[#123646] font-en-medium text-[20px] md:text-[30px] leading-[1.05] tracking-[0.08em]">
                                  ILHA
                                  <br />
                                  FORMOSA
                                </div>
                                <div className="mt-5 text-[#B08A6A] text-[10px] md:text-[11px] tracking-[0.35em]">
                                  NEWS
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-[#123646]/45 via-transparent to-transparent opacity-70" />

                          <div className="absolute left-4 md:left-5 bottom-4 md:bottom-5 text-white">
                            <p className="font-en-medium text-[10px] md:text-[11px] tracking-[0.24em] text-white/80">
                              {year}
                            </p>
                            <p className="font-en-medium mt-1 text-[24px] md:text-[32px] tracking-[0.08em] leading-none">
                              {month}.{day}
                            </p>
                          </div>
                        </div>

                        {/* テキスト */}
                        <div className="px-3 py-4 md:px-7 md:py-7 min-h-[120px] md:min-h-[155px] flex flex-col">
                          <div className="mb-4 md:mb-5 min-h-[14px]">
                            {showNewPost && (
                              <p className="font-en-medium text-[9px] md:text-[11px] tracking-[0.18em] text-[#B08A6A]">
                                NEW POST
                              </p>
                            )}
                          </div>

                          <h3 className="font-ja text-[12px] md:text-[16px] leading-[1.8] md:leading-[1.9] tracking-[0.04em] text-[#123646] group-hover:text-[#B08A6A] transition duration-300">
                            {item.title}
                          </h3>

                          <div className="mt-auto pt-5 md:pt-6 flex items-center gap-3 text-[#123646]/70 group-hover:text-[#B08A6A] transition duration-300">
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
          </div>
        </div>
      </section>
    </div>
  );
}