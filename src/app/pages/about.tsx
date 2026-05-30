import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import buildingImage from "../../imports/building.jpeg";
import ochaImage from "../../imports/ocha.jpeg";
import yakuzenImage from "../../imports/yakuzen.jpeg";
import kawamuraImage from "../../imports/kawamura.jpg";
import interiorImage1 from "../../imports/interior1.jpg";
import interiorImage2 from "../../imports/interior2.jpg";
import crabImage from "../../imports/crab.jpeg";
import image2 from "../../imports/image-2.png";
import ownerImage from "../../imports/owner.png";
import yanzu from "../../imports/yanzu.jpg";
import ruro from "../../imports/ruro.jpg";

export function About() {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden text-[#123646]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={ownerImage}
            alt="ILHA FORMOSAのオーナー"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
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
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8" />
            <p className="text-base md:text-lg text-white/90 tracking-[0.2em] font-light">
              ILHA FORMOSAの考える台湾料理
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Concept Section ===== */}
      <section
        id="concept"
        className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 scroll-mt-28"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[140px_0.95fr_1.15fr] gap-10 lg:gap-14 items-center">
            {/* 左の縦書き */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col items-center justify-center h-full"
            >
              <div
                className="text-[46px] xl:text-[54px] leading-[1.7] tracking-[0.16em] text-[#B08A6A] font-mincho"
                style={{ writingMode: "vertical-rl" }}
              >
                台灣食藝
              </div>

              <div
                className="mt-16 text-[14px] leading-loose tracking-[0.16em] text-[#123646] font-ja font-semibold"
                style={{ writingMode: "vertical-rl" }}
              >
                美しい島から京都へ
              </div>
            </motion.div>

            {/* 中央テキスト */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-en-medium text-[13px] md:text-[14px] tracking-[0.28em] text-[#B08A6A] mb-12 md:mb-16">
                CONCEPT
              </p>

              <div className="lg:hidden mb-10">
                <p className="text-[34px] leading-relaxed tracking-[0.18em] text-[#B08A6A] font-mincho">
                  台灣食藝
                </p>
                <p className="font-ja mt-3 text-[13px] tracking-[0.18em] text-[#123646] font-semibold">
                  美しい島から京都へ
                </p>
              </div>

              <h2 className="text-[31px] md:text-[42px] leading-[1.78] tracking-[0.13em] text-[#123646] font-mincho mb-12">
                創作台湾料理を、<br />
                京都の隠れ家で。
              </h2>

              <div className="font-ja text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646] space-y-4 max-w-xl">
                <p>
                  台湾の食文化をベースに、創作台湾料理やアメリカンチャイニーズのエッセンスを取り入れた、ILHA FORMOSAらしい一皿をご提供しています。
                </p>
                <p>
                  本場の味付けを大切に、台湾から届く茶葉や香辛料、薬膳素材を取り入れ、香りや余韻まで楽しめる味わいに仕上げています。
                </p>
                <p>
                  台湾のお酒やお茶をはじめ、料理に合わせたドリンクとのペアリングもお楽しみいただけます。
                </p>
                <p>
                  アンティークとモダンが調和した隠れ家的な店内で、普段のお食事から特別なひとときまで、ゆっくりとお楽しみください。
                </p>
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
                  src={ruro}
                  alt="ルーローハン"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Food / Message Section ===== */}
      <section className="relative py-12 md:py-20">
        <div className="grid lg:grid-cols-[minmax(0,0.58fr)_minmax(420px,0.42fr)] gap-10 lg:gap-20 items-center">
          {/* 画像コラージュ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-[1.05fr_1fr] gap-1.5 md:gap-4 w-full max-w-none lg:max-w-[820px] justify-self-start px-0 pr-6 md:px-6 md:pr-0 lg:px-0"
          >
            <div className="row-span-2 overflow-hidden">
              <ImageWithFallback
                src={yanzu}
                alt="マンゴーココナッツ"
                className="w-full h-full min-h-[250px] md:min-h-[420px] lg:min-h-[520px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-tr-[10px] md:rounded-tr-[16px]">
              <ImageWithFallback
                src={image2}
                alt="tea"
                className="w-full h-[123px] md:h-[204px] lg:h-[252px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-br-[10px] md:rounded-br-[16px]">
              <ImageWithFallback
                src={crabImage}
                alt="ILHA FORMOSAの料理"
                className="w-full h-[123px] md:h-[204px] lg:h-[252px] object-cover"
              />
            </div>
          </motion.div>

          {/* テキスト */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 px-6 md:px-12 lg:px-0 lg:pr-20"
          >
            <div className="font-ja text-[13px] md:text-[15px] leading-[2.05] md:leading-[2.2] tracking-[0.08em] text-[#123646] space-y-3 md:space-y-4 max-w-xl">
              <p>台湾生まれ、アメリカ育ち。</p>
              <p>
                そんなルーツから生まれたのが、ILHA FORMOSAの自由な台湾料理です。
              </p>
              <p>
                台湾の家庭料理や薬膳の知恵に、アメリカで親しまれてきたチャイニーズフードの楽しさを重ねて、どこか懐かしく少し新しい味わいに仕上げています。
              </p>
              <p>
                スパイシーな肉料理や甘みのある前菜には、台湾のお酒やお茶をはじめ、料理に合わせたドリンクとのペアリングもお楽しみいただけます。
              </p>
              <p>
                本場の味わいを大切にしながらも、肩ひじ張らずに楽しめる一皿を。
              </p>
              <p>
                京都の落ち着いた空間で、台湾とアメリカの魅力がほどよくまざる、ILHA FORMOSAらしい食体験をお届けします。
              </p>
            </div>

            <p className="mt-8 md:mt-12 lg:mt-16 text-[15px] md:text-[19px] lg:text-[25px] leading-relaxed tracking-[0.04em] text-[#B08A6A] font-light">
              Taiwanese × American Chinese.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Origin Section ===== */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/72 rounded-[28px] md:rounded-[36px] px-6 md:px-14 lg:px-20 py-14 md:py-20 text-center"
          >
            <h2 className="text-[25px] md:text-[40px] tracking-[0.12em] leading-relaxed text-[#123646] font-mincho">
              ILHA FORMOSAとは？
            </h2>

            <p className="font-en-medium mt-4 text-[13px] md:text-[15px] tracking-[0.12em] text-[#B08A6A]">
              WHAT IS ILHA FORMOSA?
            </p>

            <div className="font-ja mt-10 mx-auto max-w-[760px] text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646] space-y-4">
              <p>
                「ILHA FORMOSA」は、ラテン語で「美しい島」と呼ばれたことに由来します。
              </p>
              <p>
                かつて台湾がそう呼ばれたように、海を渡って育まれてきた食文化や香り豊かな料理には、台湾ならではの魅力があります。
              </p>
              <p>
                ILHA FORMOSAは、その“美しい島”の食の記憶を、京都の街でゆっくり楽しんでいただきたいという想いから生まれました。一皿の料理を通して、台湾の香りとあたたかな時間をお届けします。
              </p>
            </div>

            <div className="mt-12 overflow-hidden max-w-3xl mx-auto">
              <ImageWithFallback
                src={buildingImage}
                alt="ILHA FORMOSAの建物"
                className="w-full h-[300px] md:h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Value Section ===== */}
      <section
        id="our-value"
        className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 overflow-hidden scroll-mt-28"
      >
        <div className="relative max-w-6xl mx-auto">
          {/* 見出し */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.32em] text-[#B08A6A] mb-6">
              OUR VALUE
            </p>

            <h2 className="text-[30px] md:text-[42px] leading-[1.6] tracking-[0.09em] text-[#123646] font-mincho">
              ILHA FORMOSAが<br />
              大切にしていること
            </h2>

            <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-8" />

            <div className="font-ja mt-8 text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646] max-w-2xl mx-auto">
              <p>
                台湾から取り寄せた茶葉や香辛料、薬膳素材を取り入れながら、現地で親しまれてきた味わいを大切にしています。ただ料理を楽しむだけでなく、台湾で食卓を囲むようなあたたかさや、香りまで楽しめるひとときをお届けします。
              </p>
            </div>
          </motion.div>

          {/* 3カード */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                en: "Taiwan Tea",
                ja: "台湾茶へのこだわり",
                vertical: "台灣茶香",
                image: ochaImage,
                alt: "台湾茶",
                text:
                  "台湾茶は、台湾から取り寄せた茶葉を中心にご用意しています。現地の先生から学んだ淹れ方や楽しみ方を大切にしながら、香りや余韻までゆっくり味わえる一杯に。お料理とともに、台湾茶の奥深さもお楽しみください。",
              },
              {
                en: "Herbs",
                ja: "薬膳の知恵を食卓へ",
                vertical: "藥膳之香",
                image: yakuzenImage,
                alt: "薬膳料理",
                text:
                  "台湾ならではの薬膳素材や香辛料を取り入れ、香り・味わい・食材の組み合わせを大切にしています。なじみのある一皿から、少し珍しい素材を使った料理まで、台湾薬膳の奥行きを身近に楽しんでいただけます。",
              },
              {
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
                key={item.en}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-white/65 border border-[#123646]/10 overflow-hidden"
              >
                <div className="relative h-[250px] md:h-[285px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#123646]/55 via-transparent to-transparent" />

                  <div
                    className="absolute right-5 bottom-5 text-[27px] tracking-[0.16em] text-white/80 font-light"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {item.vertical}
                  </div>
                </div>

                <div className="relative px-7 md:px-8 py-8 md:py-9 min-h-[290px]">
                  <p className="font-en-medium text-[32px] md:text-[38px] tracking-[0.1em] text-[#123646] leading-none">
                    {item.en}
                  </p>

                  <h3 className="font-ja mt-6 text-[18px] md:text-[20px] tracking-[0.1em] text-[#123646]">
                    {item.ja}
                  </h3>

                  <div className="w-10 h-[1px] bg-[#B08A6A] mt-6 mb-6" />

                  <p className="font-ja text-[13px] md:text-[14px] leading-[2.05] tracking-[0.07em] text-[#123646]/76">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Interior Section ===== */}
      <section className="relative py-20 md:py-32 pb-20 md:pb-55">
        <div className="grid lg:grid-cols-[minmax(0,0.58fr)_minmax(420px,0.42fr)] gap-10 lg:gap-20 items-center">
          
          {/* 写真エリア */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-[1.05fr_1fr] gap-1.5 md:gap-4 w-full max-w-none lg:max-w-[820px] justify-self-start px-0 pr-6 md:px-6 md:pr-0 lg:px-0 pb-8 md:pb-0"
          >
            <div className="row-span-2 overflow-hidden">
              <ImageWithFallback
                src={interiorImage1}
                alt="ILHA FORMOSAのカウンター席"
                className="w-full h-full min-h-[250px] md:min-h-[420px] lg:min-h-[520px] object-cover"
              />
            </div>

            <div className="row-span-2 overflow-hidden rounded-tr-[10px] md:rounded-tr-[16px] rounded-br-[10px] md:rounded-br-[16px]">
              <ImageWithFallback
                src={interiorImage2}
                alt="ILHA FORMOSAのテーブル席"
                className="w-full h-full min-h-[250px] md:min-h-[420px] lg:min-h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* テキストエリア */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 px-6 md:px-12 lg:px-0 lg:pr-20"
          >
            <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.32em] text-[#B08A6A] mb-8">
              INTERIOR
            </p>

            <h2 className="text-[30px] md:text-[42px] leading-[1.7] tracking-[0.1em] text-[#123646] font-mincho mb-10">
              落ち着いた、<br />
              隠れ家的な空間
            </h2>

            <div className="w-16 h-[1px] bg-[#B08A6A] mb-10" />

            <div className="font-ja text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646] space-y-4 max-w-xl">
              <p>アンティークとモダンが調和した、落ち着きのある隠れ家的な店内。</p>
              <p>ゆとりを持たせた席配置で、車椅子やベビーカーをご利用の方、小さなお子様連れのお客様にも安心してお過ごしいただけます。</p>
              <p>軽いお食事からコース料理まで幅広くご用意しておりますので、普段のお食事はもちろん、女子会やご宴会など、さまざまなシーンでご利用ください。</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}