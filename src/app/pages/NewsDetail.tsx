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
  time?: string;
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

export function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
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
          return;
        }

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
        <div className="max-w-4xl mx-auto">
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
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="bg-white/60 border border-[#123646]/10 px-6 md:px-12 py-10 md:py-14"
            >
              <div className="mb-10 md:mb-12">
                <p className="font-en-medium text-[12px] tracking-[0.22em] text-[#B08A6A] mb-4">
                  {formatDate(news.date)} {news.time || ""}
                </p>

                <h2 className="font-ja text-[26px] md:text-[36px] leading-[1.7] tracking-[0.08em] text-[#123646] font-light">
                  {news.title}
                </h2>
              </div>

              {news.image?.url && (
                <div className="mb-10 md:mb-12 overflow-hidden">
                  <ImageWithFallback
                    src={news.image.url}
                    alt={news.title}
                    className="w-full h-[260px] md:h-[420px] object-cover"
                  />
                </div>
              )}

              {news.body ? (
                <div
                  className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646]/78 space-y-5"
                  dangerouslySetInnerHTML={{ __html: news.body }}
                />
              ) : (
                <p className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646]/78">
                  詳細本文は準備中です。
                </p>
              )}

              <div className="mt-14 pt-10 border-t border-[#123646]/12">
                <Link
                  to="/news"
                  className="font-ja inline-flex items-center justify-center border border-[#123646] px-8 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
                >
                  お知らせ一覧へ戻る
                  <span className="font-en-medium ml-4">→</span>
                </Link>
              </div>
            </motion.article>
          )}
        </div>
      </section>
    </div>
  );
}