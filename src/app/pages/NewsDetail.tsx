import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

function formatDate(date: string) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

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

export function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
        const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

        const listResponse = await fetch(
          `https://${serviceDomain}.microcms.io/api/v1/news?filters=slug[equals]${id}`,
          {
            headers: {
              "X-MICROCMS-API-KEY": apiKey,
            },
          }
        );

        if (!listResponse.ok) {
          throw new Error("ニュースの取得に失敗しました");
        }

        const listData: NewsResponse = await listResponse.json();

        if (listData.contents.length > 0) {
          setNews(listData.contents[0]);
        } else {
          const detailResponse = await fetch(
            `https://${serviceDomain}.microcms.io/api/v1/news/${id}`,
            {
              headers: {
                "X-MICROCMS-API-KEY": apiKey,
              },
            }
          );

          if (!detailResponse.ok) {
            throw new Error("ニュース詳細の取得に失敗しました");
          }

          const detailData: NewsItem = await detailResponse.json();
          setNews(detailData);
        }

        const relatedResponse = await fetch(
          `https://${serviceDomain}.microcms.io/api/v1/news?orders=-date&limit=7`,
          {
            headers: {
              "X-MICROCMS-API-KEY": apiKey,
            },
          }
        );

        if (!relatedResponse.ok) {
          throw new Error("関連ニュースの取得に失敗しました");
        }

        const relatedData: NewsResponse = await relatedResponse.json();
        setRelatedNews(relatedData.contents);
      } catch (error) {
        console.error(error);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsDetail();
    }
  }, [id]);

  const otherNews = news
    ? relatedNews.filter((item) => item.id !== news.id).slice(0, 6)
    : [];

  return (
    <div className="min-h-screen bg-transparent text-[#123646] overflow-x-hidden">
      <section className="relative h-[45vh] min-h-[420px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt="ILHA FORMOSA News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-en-medium text-[12px] tracking-[0.35em] text-white/80 mb-5">
              NEWS
            </p>

            <h1 className="text-4xl md:text-5xl text-white tracking-[0.26em] font-light">
              お知らせ
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <p className="font-ja text-center text-[13px] tracking-[0.08em] text-[#123646]/70">
              読み込み中です。
            </p>
          ) : !news ? (
            <div className="text-center">
              <p className="font-ja text-[14px] tracking-[0.08em] text-[#123646]/70">
                お知らせが見つかりませんでした。
              </p>

              <Link
                to="/news"
                className="font-ja mt-10 inline-flex items-center justify-center border border-[#123646] px-8 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
              >
                お知らせ一覧へ戻る
                <span className="font-en-medium ml-4">→</span>
              </Link>
            </div>
          ) : (
            <>
              <motion.article
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="bg-white/60 border border-[#123646]/10 px-6 md:px-12 py-10 md:py-14"
              >
                <div className="mb-10 md:mb-12 text-center">
                  <p className="font-en-medium text-[12px] tracking-[0.22em] text-[#B08A6A] mb-4">
                    {formatDate(news.date)}
                  </p>

                  <h2 className="font-ja text-[26px] md:text-[36px] leading-[1.7] tracking-[0.08em] text-[#123646] font-light">
                    {news.title}
                  </h2>
                </div>

                {news.image?.url && (
                  <div className="mb-10 md:mb-12 overflow-hidden max-w-3xl mx-auto">
                    <ImageWithFallback
                      src={news.image.url}
                      alt={news.title}
                      className="w-full h-[260px] md:h-[420px] object-cover"
                    />
                  </div>
                )}

                {news.body ? (
                  <div
                    className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646]/78 space-y-5 max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: news.body }}
                  />
                ) : (
                  <p className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646]/78 max-w-3xl mx-auto">
                    詳細本文は準備中です。
                  </p>
                )}

                <div className="mt-14 pt-10 border-t border-[#123646]/12 text-center">
                  <Link
                    to="/news"
                    className="font-ja inline-flex items-center justify-center border border-[#123646] px-8 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
                  >
                    お知らせ一覧へ戻る
                    <span className="font-en-medium ml-4">→</span>
                  </Link>
                </div>
              </motion.article>

              {otherNews.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[#123646]/35"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {otherNews.map((item, index) => {
                      const { year, month, day } = formatDateParts(item.date);

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
                            className="group block h-full bg-white/70 border border-[#123646]/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,54,70,0.08)]"
                          >
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
                                    <div className="text-[#123646] font-en-medium text-[22px] md:text-[28px] leading-[1.05] tracking-[0.08em]">
                                      ILHA
                                      <br />
                                      FORMOSA
                                    </div>
                                    <div className="mt-5 text-[#B08A6A] text-[11px] tracking-[0.35em]">
                                      NEWS
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="absolute inset-0 bg-gradient-to-t from-[#123646]/45 via-transparent to-transparent opacity-70" />

                              <div className="absolute left-5 bottom-5 text-white">
                                <p className="font-en-medium text-[11px] tracking-[0.24em] text-white/80">
                                  {year}
                                </p>
                                <p className="font-en-medium mt-1 text-[26px] md:text-[30px] tracking-[0.08em] leading-none">
                                  {month}.{day}
                                </p>
                              </div>
                            </div>

                            <div className="px-5 py-5 md:px-6 md:py-6 min-h-[130px] flex flex-col">
                              <div className="mb-4">
                                <p className="font-en-medium text-[10px] tracking-[0.18em] text-[#B08A6A]">
                                  NEW POST
                                </p>
                              </div>

                              <h4 className="font-ja text-[14px] md:text-[15px] leading-[1.9] tracking-[0.04em] text-[#123646] group-hover:text-[#B08A6A] transition duration-300">
                                {item.title}
                              </h4>

                              <div className="mt-auto pt-5 flex items-center gap-3 text-[#123646]/70 group-hover:text-[#B08A6A] transition duration-300">
                                <span className="font-en-medium text-[10px] tracking-[0.16em]">
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
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}