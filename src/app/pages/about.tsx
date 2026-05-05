import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import buildingImage from "../../imports/building.jpeg";
import ochaImage from "../../imports/ocha.jpeg";
import yakuzenImage from "../../imports/yakuzen.jpeg";
import kawamuraImage from "../../imports/kawamura.jpg";

export function About() {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden text-[#123646]">
      {/* Hero Section (MVは維持) */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957097741-fea28cb227b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJlc3RhdXJhbnQlMjBjb3VudGVyJTIwY2hlZiUyMGNvb2tpbmcwfGVufDF8fHx8MTc3NDg3NDAyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="ILHA FORMOSA Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6 text-white tracking-[0.3em] font-light">
              私たちについて
            </h1>
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-white/90 tracking-[0.2em] font-light">
              ILHA FORMOSAの考える台湾料理
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Concept Section ===== */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[160px_1fr_0.95fr] gap-10 lg:gap-16 items-center">
            {/* 左の縦書き */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col items-center justify-center h-full"
            >
              <div
                className="text-[48px] xl:text-[56px] leading-[1.75] tracking-[0.16em] text-[#B08A6A] font-light"
                style={{ writingMode: "vertical-rl" }}
              >
                台湾料理
              </div>

              <div
                className="mt-20 text-[15px] leading-loose tracking-[0.16em] text-[#123646] font-ja font-semibold"
                style={{ writingMode: "vertical-rl" }}
              >
                美しい島の食卓
              </div>
            </motion.div>

            {/* 中央テキスト */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:pt-4"
            >
              <p className="font-en-medium text-[13px] md:text-[15px] tracking-[0.28em] text-[#B08A6A] mb-16 md:mb-24">
                CONCEPT
              </p>

              <div className="lg:hidden mb-12">
                <p className="text-[34px] leading-relaxed tracking-[0.18em] text-[#B08A6A] font-light">
                  台湾料理
                </p>
                <p className="font-ja mt-3 text-[13px] tracking-[0.18em] text-[#123646] font-semibold">
                  美しい島の食卓
                </p>
              </div>

              <h2 className="text-[32px] md:text-[43px] leading-[1.85] tracking-[0.13em] text-[#123646] font-mincho mb-16">
                台湾の、<br />
                あたたかな記憶を<br />
                京都の一皿へ。
              </h2>

              <div className="font-ja text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646] space-y-4 max-w-xl">
                <p>訪れた方がふっと心をほどく、台湾の活気とやさしさ。</p>
                <p>ILHA FORMOSAは、台湾という美しい島の食文化を、</p>
                <p>京都の落ち着いた時間に寄り添う料理として届けたいと考えました。</p>
                <p>薬膳の香り、食材の旨み、屋台のような親しみやすさ。</p>
                <p>そこに少しの自由な発想を重ねて、</p>
                <p>日常にも特別な夜にもなじむ台湾料理をお楽しみいただけます。</p>
              </div>
            </motion.div>

            {/* 右画像 */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-tr-[42px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758957097741-fea28cb227b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJlc3RhdXJhbnQlMjBjb3VudGVyJTIwY2hlZiUyMGNvb2tpbmcwfGVufDF8fHx8MTc3NDg3NDAyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ILHA FORMOSAの店内"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Food / Message Section ===== */}
      <section className="relative px-0 md:px-12 lg:px-20 py-16 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 lg:gap-24 items-center">
            {/* 左テキスト */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="px-6 md:px-0 lg:pl-8 lg:order-2"
            >
              <div className="font-ja text-[14px] md:text-[15px] leading-[2.45] tracking-[0.08em] text-[#123646] space-y-4 max-w-xl">
                <p>台湾の食卓には、朝も夜も、いつも人の気配があります。</p>
                <p>湯気の立つ一皿、香ばしく焼き上げる音、食欲を誘う香り。</p>
                <p>それらはただの食事ではなく、</p>
                <p>その日を前向きに始めたり、大切な人と語らったりするための、</p>
                <p>ささやかな力になっているように思います。</p>
                <p>ILHA FORMOSAでは、そんな台湾の食文化を大切にしながら、</p>
                <p>京都で過ごすひとときに合う味わいへと整えています。</p>
                <p>皆さまのご来店を、心よりお待ちしております。</p>
              </div>

              <p className="mt-20 md:mt-24 text-[28px] md:text-[33px] leading-relaxed tracking-[0.04em] text-[#B08A6A] font-light">
                Always warm, always Formosa.
              </p>
            </motion.div>

            {/* 右画像コラージュ */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4 px-6 md:px-0 lg:order-1"
            >
              <div className="row-span-2 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="台湾料理"
                  className="w-full h-full min-h-[360px] md:min-h-[520px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-tr-[12px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="料理"
                  className="w-full h-[174px] md:h-[252px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-br-[12px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="料理"
                  className="w-full h-[174px] md:h-[252px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Origin Section ===== */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/75 rounded-[28px] md:rounded-[36px] px-6 md:px-16 lg:px-24 py-16 md:py-24 text-center"
          >
            <h2 className="text-[25px] md:text-[42px] tracking-[0.12em] leading-relaxed text-[#123646] font-mincho">
              ILHA FORMOSAとは？
            </h2>

            <p className="font-en-medium mt-4 text-[13px] md:text-[15px] tracking-[0.12em] text-[#B08A6A]">
              WHAT IS ILHA FORMOSA?
            </p>

            <div className="font-ja mt-12 mx-auto max-w-[780px] text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646] space-y-1.3">
              <p>
                「ILHA FORMOSA」は、ポルトガル語で「美しい島」と呼ばれたことに由来します。
              </p>
              <p>
                かつて台湾がそう呼ばれたように、海を渡って育まれてきた食文化、人を迎えるあたたかさ、香り豊かな料理には、台湾ならではの魅力があります。
              </p>
              <p>
                ILHA FORMOSAは、その“美しい島”の食の記憶を、京都の街でゆっくり楽しんでいただきたいという想いから生まれました。一皿の料理を通して、台湾の香りとあたたかな時間をお届けします。
              </p>

            </div>

            <div className="mt-14 overflow-hidden max-w-3xl mx-auto">
              <ImageWithFallback
                src={buildingImage}
                alt="ILHA FORMOSAの建物"
                className="w-full h-[260px] md:h-[360px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Hope Section：Redesign ===== */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 overflow-hidden">
        {/* 背景装飾 */}
        <div className="pointer-events-none absolute top-24 md:top-20 -right-24 md:-right-24 w-[360px] h-[360px] rounded-full bg-[#123646]/5" />
        <div className="pointer-events-none absolute bottom-10 -left-24 w-[300px] h-[300px] rounded-full bg-[#B08A6A]/10" />

        <div className="relative max-w-7xl mx-auto">
          {/* 見出し */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.32em] text-[#B08A6A] mb-6">
              OUR VALUE
            </p>

            <h2 className="text-[32px] md:text-[46px] leading-[1.6] tracking-[0.09em] text-[#123646] font-mincho">
              ILHA FORMOSAが届ける<br />
              “美しい島の記憶”
            </h2>

            <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-8" />

            <div className="font-ja mt-10 text-[14px] md:text-[15px] leading-[2.25] tracking-[0.08em] text-[#123646] space-y-4 max-w-2xl mx-auto">
              <p>
                私たちは、台湾料理を通して、香り・時間・発見のある食体験をお届けします。
              </p>
              <p>
                ただ食べるだけではなく、心に残るひとときを過ごしていただくことを大切にしています。
              </p>
            </div>
          </motion.div>

          {/* 3カード */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                number: "01",
                en: "Taiwan Tea",
                ja: "台湾茶へのこだわり",
                vertical: "台灣茶香",
                image: ochaImage,
                alt: "台湾茶",
                text:
                  "台湾茶は、台湾から取り寄せた茶葉を中心にご用意しています。現地の先生から学んだ淹れ方や楽しみ方を大切にしながら、香りや余韻までゆっくり味わえる一杯に。お料理とともに、台湾茶の奥深さもお楽しみください。",
              },
              {
                number: "02",
                en: "Herbs",
                ja: "薬膳の知恵を食卓へ",
                vertical: "藥膳之香",
                image: yakuzenImage,
                alt: "薬膳料理",
                text:
                  "台湾ならではの薬膳素材や香辛料を取り入れ、香り・味わい・食材の組み合わせを大切にしています。なじみのある一皿から、少し珍しい素材を使った料理まで、台湾薬膳の奥行きを身近に楽しんでいただけます。",
              },
              {
                number: "03",
                en: "Hospitality",
                ja: "アットホームなひととき",
                vertical: "人情味",
                image: kawamuraImage,
                alt: "料理人",
                text:
                  "台湾で生まれ、アメリカで育ったルーツから生まれる、明るく親しみやすい空気もILHA FORMOSAの魅力のひとつ。料理のこと、台湾のこと、何気ない会話まで楽しみながら、初めての方にもほっとくつろいでいただける時間をお届けします。",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-white/65 border border-[#123646]/10 overflow-hidden"
              >
                {/* 画像 */}
                <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#123646]/55 via-transparent to-transparent" />

                  <p className="absolute left-6 bottom-5 font-en-medium text-[13px] tracking-[0.22em] text-white/90">
                    {item.number}
                  </p>

                  <div
                    className="absolute right-5 bottom-5 text-[28px] tracking-[0.16em] text-white/80 font-light"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {item.vertical}
                  </div>
                </div>

                {/* テキスト */}
                <div className="relative px-7 md:px-8 py-9 md:py-10 min-h-[310px]">
                  <p className="font-en-medium text-[34px] md:text-[40px] tracking-[0.1em] text-[#123646] leading-none">
                    {item.en}
                  </p>

                  <h3 className="font-ja mt-6 text-[18px] md:text-[20px] tracking-[0.1em] text-[#123646]">
                    {item.ja}
                  </h3>

                  <div className="w-10 h-[1px] bg-[#B08A6A] mt-7 mb-7" />

                  <p className="font-ja text-[13px] md:text-[14px] leading-[2.15] tracking-[0.07em] text-[#123646]/76">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}