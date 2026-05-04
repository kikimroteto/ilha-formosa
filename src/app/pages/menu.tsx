import { motion } from "motion/react";
import { useState, useEffect } from "react";
import foodImage from "../../imports/food.jpeg";
import courseRanImage from "../../imports/image-4.png";
import lunchbento from "../../imports/image-5.png";
import sweets from "../../imports/image-7.png";
import alcohol from "../../imports/image-3.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const [activeSection, setActiveSection] = useState("course");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        const offset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(hash);
      }
    }, 100);
  }, []);

  const courseMenu = [
    {
      name: "ちょい飲みコース",
      price: "¥2,000",
      description:
        "台湾の定番料理を少しずつ気軽に愉しめる軽やかなコース。800円までの1ドリンクとともに、香りや旨みをつまむように味わう、日常に寄り添うひとときを。",
    },
    {
      name: "水仙",
      price: "¥3,500",
      description:
        "冷菜と温菜を織り交ぜた前菜5種を中心に、バランスよく構成したコース。やさしい味わいと香りの重なりを感じながら、台湾料理の魅力を心地よくお愉しみいただけます。",
    },
    {
      name: "蘭",
      price: "¥5,000",
      description:
        "前菜5種に加え、主菜2品を取り入れた充実のスタンダードコース。一皿ごとに広がる旨みと香りの調和を通して、満足感のあるひとときをご堪能ください。",
      tag: "おすすめ",
    },
    {
      name: "梅花",
      price: "¥7,500",
      description:
        "前菜5種に加え、スペシャル一品を含む主菜、ご飯または麺までゆったりと味わう上質なコース。素材の持ち味と奥行きある味わいを丁寧に引き出した、特別な時間にふさわしいひとときをお届けします。",
    },
  ];

  const lunchMenu = [
    {
      name: "ルーローハン",
      price: "¥1,500",
      description:
        "丁寧に煮含めた豚肉に、八角がほのかに香る甘辛い醤を纏わせ、艶やかなご飯とともに。とろける脂の旨みと奥行きのある香りを愉しむ、台湾の伝統を上品に仕立てた一皿。",
    },
    {
      name: "ジーローハン",
      price: "¥1,500",
      description:
        "しっとりと仕上げた鶏肉を丁寧にほぐし、香味豊かな特製ダレとともに。やさしく広がる旨みと軽やかな余韻を愉しむ、上品に仕立てた台湾の一皿。",
    },
    {
      name: "本日の麺",
      price: "¥1,500",
      description:
        "その日の素材と季節に合わせて仕立てる、料理人こだわりの一杯。香りと旨みの重なりが織りなす、一期一会の味わいをお愉しみください。",
    },
    {
      name: "台湾鉄道弁当",
      price: "¥1,800",
      description:
        "香ばしく仕上げた排骨を主役に、煮卵や青菜などを丁寧に盛り込んだ一折。多彩な味わいと香りが重なり合う、台湾の食文化を凝縮した贅沢なひととき。",
      tag: "数量限定",
    },
    {
      name: "本日のスペシャル",
      price: "時折ございます。",
      description:
        "厳選した食材とともに、その日だけのために仕立てる特別な一皿。季節の移ろいとともに変化する、ここでしか出会えない味わいをお愉しみください。",
    },
  ];

  const teaSweetsMenu = [
    {
      name: "阿里山烏龍茶",
      price: "¥1,200",
      description:
        "台湾・阿里山の豊かな自然に育まれた茶葉を使用した烏龍茶。芳醇で奥行きのある香りと、すっきりと澄んだ味わいが特徴です。お料理の余韻をやさしく引き立て、心地よい食後のひとときをお愉しみいただけます。",
    },
    {
      name: "阿里山紅茶",
      price: "¥1,400",
      description:
        "阿里山の茶葉から生まれる、まろやかで深みのある台湾紅茶。やわらかな甘みと穏やかな香りが広がり、ゆったりとした余韻をもたらします。食後のひとときをやさしく包み込む、上品な一杯です。",
    },
    {
      name: "本日のデザート",
      price: "¥600",
      description:
        "その日ごとにご用意する、台湾のエッセンスを取り入れた甘味。やさしい甘さと軽やかな口当たりで、お食事の締めくくりにふさわしい一品です。食後のひとときを、穏やかな余韻とともにお愉しみください。",
    },
  ];

  const drinkMenu = [
    {
      category: "ビール",
      items: [
        { name: "台湾ビール", price: "¥700" },
        { name: "生ビール", price: "¥700" },
        { name: "ノンアルコールビール", price: "¥600" },
      ],
    },
    {
      category: "紹興酒",
      items: [
        { name: "紹興酒 10年熟成", price: "Glass　¥800　/　Bottle　¥7,000" },
      ],
    },
    {
      category: "焼酎",
      note: "飲み方指定ください",
      items: [{ name: "芋・麦", price: "¥700" }],
    },
    {
      category: "ウイスキー",
      note: "ロック / ハイボール / お湯割り / ストレート",
      items: [
        { name: "サントリー角", price: "¥700" },
        { name: "Dewer's 12", price: "¥900" },
        { name: "KAVALAN No.1", price: "¥1,000" },
        { name: "KAVALAN No.2", price: "¥1,000" },
      ],
    },
    {
      category: "スパークリング",
      items: [
        { name: "フリッツァンテ ランブルスコ　赤/白", price: "¥900" },
        {
          name: "ボトルを用意しております",
          price: "問い合わせください　¥7,000～",
        },
      ],
    },
    {
      category: "白ワイン",
      items: [
        {
          name: "アラゴスタ ヴェルメンティーノ",
          price: "Glass　¥1,000　/　Bottle　¥7,000",
        },
        {
          name: "カーサ・エルト・ソアベ",
          price: "Glass　¥1,100　/　Bottle　¥7,400",
        },
      ],
    },
    {
      category: "赤ワイン",
      items: [
        {
          name: "カブリアック グルナッシュ",
          price: "Glass　¥1,000　/　Bottle　¥7,000",
        },
        {
          name: "ポッジョレヴォルピ ローマ",
          price: "Glass　¥1,100　/　Bottle　¥7,400",
        },
        { name: "ルチェンテ", price: "Bottle　¥12,000" },
        { name: "カイユベル コート ド ベルジュラック", price: "Bottle　¥9,600" },
        { name: "その他ボトル", price: "問い合わせください" },
      ],
    },
    {
      category: "日本酒",
      note: "グラス 90ml 季節限定も揃えております",
      items: [
        { name: "常山", price: "¥900" },
        { name: "鳳凰美田", price: "¥1,000" },
        { name: "季節限定プレミアム", price: "¥1,400" },
        { name: "その他もお問い合わせください" },
      ],
    },
    {
      category: "カクテル",
      items: [{ name: "台湾ブルー　パッションフルーツベース", price: "¥1,000" }],
    },
    {
      category: "ソフトドリンク",
      items: [
        { name: "コーラ", price: "¥400" },
        { name: "水出し烏龍茶・紅茶　阿里山より", price: "¥500" },
        { name: "酸梅湯", price: "¥500" },
        { name: "冬瓜茶", price: "¥500" },
        { name: "青草茶", price: "¥600" },
      ],
    },
    {
      category: "台湾茶",
      note: "台湾阿里山からこだわりのお茶を取り寄せました 数々の受賞歴を誇ります",
      items: [
        { name: "阿里山烏龍茶", price: "¥1,200" },
        { name: "阿里山紅茶", price: "¥1,400" },
        { name: "数々の受賞歴を誇る阿里山の逸品です 3煎お楽しみください" },
      ],
    },
  ];

  const menuSections = [
    { id: "course", label: "COURSE", labelJa: "コース" },
    { id: "lunch", label: "LUNCH", labelJa: "ランチ" },
    { id: "tea-sweets", label: "TEA / SWEETS", labelJa: "お茶と甘味" },
    { id: "drink", label: "DRINK", labelJa: "ドリンク" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#123646]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <ImageWithFallback
          src={foodImage}
          alt="MENU"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[34px] md:text-[48px] mb-6 text-white tracking-[0.26em] font-light">
              お料理
            </h1>
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8"></div>
            <p className="font-ja text-[13px] md:text-[16px] text-white/90 tracking-[0.16em] font-light">
              台湾の味わいを、京都の感性で
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative pt-0 pb-24 md:pb-32 px-6">
        <div className="pointer-events-none absolute top-32 right-0 hidden md:block w-[280px] h-[280px] rounded-full bg-[#B08A6A]/8" />
        <div className="pointer-events-none absolute bottom-40 left-0 hidden md:block w-[260px] h-[260px] rounded-full bg-[#123646]/5" />

        <div className="relative container mx-auto max-w-5xl">
          {/* アンカーナビゲーション */}
          <motion.div className="sticky top-0 z-30 mb-14 md:mb-20">
            <nav className="flex justify-center py-3 md:py-5">
              <div className="w-full max-w-[760px] overflow-x-auto border border-[#123646]/10 bg-white/80 px-2 md:px-3 py-2 shadow-[0_12px_34px_rgba(18,54,70,0.04)] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2 min-w-max md:min-w-0">
                  {menuSections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`min-w-[92px] md:min-w-0 md:flex-1 px-4 md:px-6 py-3 transition duration-300 ${
                          isActive
                            ? "bg-[#123646] text-white"
                            : "text-[#123646] hover:bg-[#123646]/8"
                        }`}
                      >
                        <span className="font-en-medium block text-[9px] md:text-[11px] tracking-[0.12em]">
                          {section.label}
                        </span>
                        <span className="font-ja block mt-1.5 text-[9px] md:text-[11px] tracking-[0.08em]">
                          {section.labelJa}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>
          </motion.div>

          {/* コースセクション */}
          <motion.section
            id="course"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-36 md:mb-44 scroll-mt-32"
          >
            <div className="mb-16 md:mb-20 text-center">
              <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.34em] text-[#B08A6A] mb-5">
                COURSE
              </p>

              <h2 className="font-en-medium text-[34px] md:text-[46px] text-[#123646] tracking-[0.16em] font-light">
                COURSE
              </h2>

              <p className="font-ja mt-4 text-[11px] md:text-[12px] text-[#B08A6A] tracking-[0.28em]">
                コース
              </p>

              <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-7" />
            </div>

            <div className="bg-white/55 border border-[#123646]/8 px-5 py-5 md:px-8 md:py-8">
              <div className="max-w-4xl mx-auto mb-12 md:mb-16 overflow-hidden">
                <img
                  src={courseRanImage}
                  className="w-full h-[280px] md:h-[420px] object-cover"
                />
              </div>

              <div className="max-w-3xl mx-auto">
                {courseMenu.map((course, index) => (
                  <div
                    key={index}
                    className="px-2 md:px-6 py-9 md:py-10 border-b border-[#123646]/12 last:border-none"
                  >
                    <div className="flex justify-between items-start md:items-end mb-4 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-en-medium text-[11px] tracking-[0.18em] text-[#B08A6A]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {course.tag && (
                            <span className="font-ja text-[10px] tracking-[0.12em] text-white bg-[#B08A6A] px-3 py-1">
                              {course.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="text-[22px] md:text-[25px] tracking-[0.08em] text-[#123646] font-light">
                          {course.name}
                        </h3>
                      </div>

                      <p className="font-en-medium text-[15px] md:text-[16px] text-[#B08A6A] whitespace-nowrap pt-7">
                        {course.price}
                      </p>
                    </div>

                    <p className="font-ja text-[12px] md:text-[13px] leading-[2] tracking-[0.06em] text-[#123646]/72">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ランチセクション */}
          <motion.section
            id="lunch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-36 md:mb-44 scroll-mt-32"
          >
            <div className="mb-16 md:mb-20 text-center">
              <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.34em] text-[#B08A6A] mb-5">
                LUNCH
              </p>

              <h2 className="font-en-medium text-[34px] md:text-[46px] text-[#123646] tracking-[0.16em] font-light">
                LUNCH
              </h2>

              <p className="font-ja mt-4 text-[11px] md:text-[12px] text-[#B08A6A] tracking-[0.28em]">
                ランチ
              </p>

              <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-7" />
            </div>

            <div className="bg-white/55 border border-[#123646]/8 px-5 py-5 md:px-8 md:py-8">
              <div className="max-w-4xl mx-auto mb-12 md:mb-16 overflow-hidden">
                <img
                  src={lunchbento}
                  className="w-full h-[280px] md:h-[420px] object-cover"
                />
              </div>

              <div className="max-w-3xl mx-auto">
                {lunchMenu.map((item, index) => (
                  <div
                    key={index}
                    className="px-2 md:px-6 py-9 md:py-10 border-b border-[#123646]/12 last:border-none"
                  >
                    <div className="flex justify-between items-start md:items-end mb-4 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-en-medium text-[11px] tracking-[0.18em] text-[#B08A6A]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item.tag && (
                            <span className="font-ja text-[10px] tracking-[0.12em] text-white bg-[#B08A6A] px-3 py-1">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="text-[22px] md:text-[25px] tracking-[0.08em] text-[#123646] font-light">
                          {item.name}
                        </h3>
                      </div>

                      <p className="font-en-medium text-[15px] md:text-[16px] text-[#B08A6A] whitespace-nowrap pt-7">
                        {item.price}
                      </p>
                    </div>

                    <p className="font-ja text-[12px] md:text-[13px] leading-[2] tracking-[0.06em] text-[#123646]/72">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-ja mt-10 text-center text-[12px] text-[#B08A6A] tracking-[0.08em]"
              >
                ※全てのランチには前菜盛り合わせとスープが付きます
              </motion.div>
            </div>
          </motion.section>

          {/* TEA / SWEETSセクション */}
          <motion.section
            id="tea-sweets"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-36 md:mb-44 scroll-mt-32"
          >
            <div className="mb-16 md:mb-20 text-center">
              <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.34em] text-[#B08A6A] mb-5">
                TEA / SWEETS
              </p>

              <h2 className="font-en-medium text-[34px] md:text-[46px] text-[#123646] tracking-[0.16em] font-light">
                TEA / SWEETS
              </h2>

              <p className="font-ja mt-4 text-[11px] md:text-[12px] text-[#B08A6A] tracking-[0.28em]">
                お茶と甘味
              </p>

              <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-7" />
            </div>

            <div className="bg-white/55 border border-[#123646]/8 px-5 py-5 md:px-8 md:py-8">
              <div className="max-w-4xl mx-auto mb-12 md:mb-16 overflow-hidden">
                <img
                  src={sweets}
                  className="w-full h-[280px] md:h-[420px] object-cover"
                />
              </div>

              <div className="max-w-3xl mx-auto">
                {teaSweetsMenu.map((item, index) => (
                  <div
                    key={index}
                    className="px-2 md:px-6 py-9 md:py-10 border-b border-[#123646]/12 last:border-none"
                  >
                    <div className="flex justify-between items-start md:items-end mb-4 gap-6">
                      <div>
                        <span className="font-en-medium block text-[11px] tracking-[0.18em] text-[#B08A6A] mb-3">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-[22px] md:text-[25px] tracking-[0.08em] text-[#123646] font-light">
                          {item.name}
                        </h3>
                      </div>

                      <p className="font-en-medium text-[15px] md:text-[16px] text-[#B08A6A] whitespace-nowrap pt-7">
                        {item.price}
                      </p>
                    </div>

                    <p className="font-ja text-[12px] md:text-[13px] leading-[2] tracking-[0.06em] text-[#123646]/72">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ドリンクセクション */}
          <motion.section
            id="drink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32 md:mb-40 scroll-mt-32"
          >
            <div className="mb-16 md:mb-20 text-center">
              <p className="font-en-medium text-[12px] md:text-[13px] tracking-[0.34em] text-[#B08A6A] mb-5">
                DRINK
              </p>

              <h2 className="font-en-medium text-[34px] md:text-[46px] text-[#123646] tracking-[0.16em] font-light">
                DRINK
              </h2>

              <p className="font-ja mt-4 text-[11px] md:text-[12px] text-[#B08A6A] tracking-[0.28em]">
                ドリンク
              </p>

              <div className="w-20 h-[1px] bg-[#123646]/25 mx-auto mt-7" />
            </div>

            <div className="bg-white/55 border border-[#123646]/8 px-5 py-5 md:px-8 md:py-8">
              <div className="max-w-4xl mx-auto mb-12 md:mb-16 overflow-hidden">
                <img
                  src={alcohol}
                  className="w-full h-[280px] md:h-[420px] object-cover"
                />
              </div>

              <div className="max-w-3xl mx-auto space-y-14 md:space-y-16">
                {drinkMenu.map((category, index) => (
                  <div
                    key={index}
                    className="px-0 md:px-0 py-0 border-b border-[#123646]/10 pb-12 md:pb-14 last:border-b-0 last:pb-0"
                  >
                    <div className="mb-6">
                      <span className="font-en-medium block text-[11px] tracking-[0.18em] text-[#B08A6A] mb-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[22px] md:text-[25px] tracking-[0.08em] text-[#123646] font-light">
                        {category.category}
                      </h3>

                      {category.note && (
                        <p className="font-ja text-[12px] text-[#B08A6A] mt-4 leading-relaxed tracking-[0.08em]">
                          {category.note}
                        </p>
                      )}
                    </div>

                    <div className="border-t border-[#123646]/14 pt-3 md:pt-5">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-[#123646]/10 py-4 last:border-b-0 md:flex md:justify-between md:items-start md:gap-10"
                        >
                          <span className="font-ja block text-[12px] md:text-[13px] tracking-[0.06em] leading-relaxed text-[#123646] md:max-w-[58%]">
                            {item.name}
                          </span>

                          {item.price && (
                            <span className="font-en-medium block mt-2 text-right text-[#B08A6A] text-[12px] md:text-[13px] tracking-[0.04em] leading-relaxed md:mt-0 md:min-w-[260px]">
                              {item.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* 注意事項 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-ja text-center text-[12px] text-[#B08A6A] tracking-[0.08em] leading-loose"
          >
            ※価格は税込表示です
            <br />
            ※食材の仕入れ状況により、メニューが変更になる場合がございます
          </motion.div>
        </div>
      </div>
    </div>
  );
}