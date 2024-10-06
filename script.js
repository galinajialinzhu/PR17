// Data for different locations
const locations = [
    {
        gif: '',
        image: 'image/map_jpn.png',
        nameEn: 'Big Cat Bang @ Ginza Six',
        nameJp: 'ビッグキャットバン @ ギンザシックス',
        descriptionEn: "Big Cat Bang is an art installation by Kenji Yanobe at Ginza Six, Tokyo, celebrating its seventh anniversary. Unveiled on April 5, 2024, it features astronaut cats in a spaceship resembling Taro Okamoto's Tower of the Sun. This piece is part of Yanobe's 'Ship's Cat' series, inspired by maritime cats that protected sailors. The installation includes a scale model of the Tower of the Sun and aims to convey messages of fortune and exploration​.",
        descriptionJp: 'ビッグキャットバン @ ギンザシックス は、ヤノベケンジによる東京・ギンザシックスでの7周年記念のアートインスタレーションです。2024年4月5日に公開されるこの作品は、岡本太郎の太陽の塔に似た宇宙船に宇宙飛行士の猫が乗っている様子が描かれています。この作品は、船員を守る海猫にインスピレーションを得たヤノベの「船猫」シリーズの一部です。インスタレーションには太陽の塔のスケールモデルが含まれており、幸運と探検のメッセージを伝えることを目的としています。'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Pi Photonics',
        nameJp: '株式会社パイフォトニクス',
        descriptionEn: 'Pi Photonics is a dynamic startup based in Hamamatsu, Japan, founded in 2006 by Takahiro Ikeda, a former MIT researcher in optics. The company specializes in designing and manufacturing advanced optical technologies, notably their flagship product, HOLOLIGHT. This innovative lighting solution combines high-intensity LEDs with unique optical elements to create highly visible light patterns, making it particularly useful for safety applications in industrial settings​.',
        descriptionJp: 'パイフォトニクス は、浜松、日本に拠点を置くダイナミックなスタートアップで、2006年に池田隆宏によって設立されました。彼は元MITの光学研究者です。この会社は、高度な光学技術の設計と製造を専門としており、特にフラッグシップ製品であるHOLOLIGHT（ホロライト）が注目されています。この革新的な照明ソリューションは、高出力のLEDと独自の光学要素を組み合わせて、高い視認性を持つ光パターンを生成します。このため、特に工業環境での安全アプリケーションに役立っています'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Suzusan Shibori Light',
        nameJp: '株式会社スズサン',
        descriptionEn: 'Suzusan is a design label rooted in the traditional Shibori technique, practiced in Arimatsu for over 100 years. Suzusan’s Shibori Lights combine traditional Japanese craftsmanship with modern aesthetics, creating unique three-dimensional lighting designs. Founded by Hiroyuki Murase, the company blends the ancient art of Shibori with contemporary design to produce textiles that bring an elegant and artisanal touch to home lighting',
        descriptionJp: 'スズサンは、有松で100年以上にわたり受け継がれてきた伝統的な絞り染め技術に根ざしたデザインブランドです。スズサンのシボリライトは、日本の伝統工芸と現代の美学を融合させたユニークな3次元照明デザインを提供します。創設者の村瀬弘行は、古代の技術を現代的なデザインに取り入れ、照明にエレガントで職人技の光をもたらしています​'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Minna no Mori Gifu Media Cosmos',
        nameJp: 'みんなの森 ぎふメディアコスモス',
        descriptionEn: 'Minna no Mori Gifu Media Cosmos is a multipurpose facility located in Gifu City, Japan. It includes the Gifu City Chuo Library, which serves as a "Knowledge Hub," alongside a Community Activity Exchange Center and a Multicultural Plaza. The facility is designed to cultivate knowledge, culture, and community connections, featuring exhibition galleries for various activities. Architect Toyo Ito designed this space to provide an inviting atmosphere for learning and collaboration',
        descriptionJp: 'みんなの森ぎふメディアコスモスは、日本の岐阜市にある複合施設です。岐阜市中央図書館を「知識のハブ」としてはじめ、市民活動交流センターや多文化交流プラザを備えています。この施設は、知識や文化、地域のつながりを育むことを目的としており、さまざまな活動のための展示ギャラリーもあります。建築家の伊東豊雄によってデザインされ、学びと協働のための魅力的な空間を提供しています'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Mino Town',
        nameJp: '美濃市',
        descriptionEn: 'Mino Town is renowned for its production of Mino Washi, a traditional Japanese paper that has been crafted for over 1,300 years. The town is also famous for its chochin lanterns, which are made from washi and bamboo. These lanterns have a rich history in Japan and are celebrated for their beauty and craftsmanship. Visitors can experience the creation of these lanterns and explore the artistry involved during local festivals, including the Mino Washi Akari Art Festival, where lantern art showcases the potential of Mino Washi​',
        descriptionJp: '美濃市は、1300年以上にわたって作られてきた伝統的な和紙である美濃和紙の生産地として知られています。また、町は和紙と竹から作られた提灯でも有名です。これらの提灯は日本の豊かな歴史を持ち、その美しさと職人技が称賛されています。訪問者は、地元の祭りや美濃和紙あかりアート展などで提灯の制作体験をし、和紙の可能性を展示するアートを楽しむことができます'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Mino Washi Paper Making',
        nameJp: '美濃和紙作り',
        descriptionEn: "Mino Washi no Sato Hall is a cultural facility in Mino City, dedicated to showcasing the art of Mino Washi, a traditional Japanese paper known for its beauty and durability. Visitors can engage in hands-on activities to learn about washi-making techniques. Nearby, the Warabi Paper Company offers insights into the production of high-quality washi. Together, these sites provide a rich experience of Mino's paper-making heritage",
        descriptionJp: '美濃和紙の里会館は、岐阜県美濃市にある伝統的な日本の和紙である美濃和紙の技術を紹介する文化施設です。訪問者は、和紙製作技術を学ぶ体験活動に参加できます。近くのわらび製紙会社では、高品質な和紙の生産についての洞察を提供しています。これらの施設を通じて、美濃の和紙作りの遺産を深く体験できます'
    },
    {
        gif: '',
        image: '',
        nameEn: "X's Factory",
        nameJp: "X's工場見学",
        descriptionEn: "The X's Factory Tour in Tajimi offers visitors a unique opportunity to explore the art of tile-making in one of Japan's ceramic capitals. Tajimi is renowned for its rich tradition in ceramics and pottery, with a focus on Mino ware. During the tour, guests can witness the intricate processes involved in creating custom-tailored tiles, from production to glazing and firing methods. The factory, part of X'S Corporation, also emphasizes sustainability by recycling materials in tile production​",
        descriptionJp: "X's工場見学は、陶器の中心地である多治見市で、タイル製作の芸術を探求するユニークな機会を提供します。多治見は、美濃焼きに焦点を当てた陶器と陶芸の豊かな伝統で知られています。見学中、訪問者はカスタムタイルの制作過程を目の前で観察し、製造から釉薬、焼成方法までの詳細を学ぶことができます。この工場は、X'S株式会社の一部であり、タイル生産において材料のリサイクルを重視した持続可能性も強調しています"
    },
    {
        gif: '',
        image: '',
        nameEn: 'Yamada-san Porcelain',
        nameJp: '山田さんの瀬戸磁器',
        descriptionEn: "Yamada-san Porcelain is a renowned pottery establishment located in Seto, Aichi Prefecture, famous for its exquisite Seto ware. This type of porcelain has a rich history dating back over a thousand years, and Seto is recognized as one of Japan's six ancient kilns. Visitors to Yamada-san's factory can explore the traditional techniques of porcelain production, which include high-quality glazing and firing methods. The establishment also emphasizes the use of local materials, showcasing the unique artistry and craftsmanship that Seto ware is celebrated for​",
        descriptionJp: '山田さんの瀬戸磁器は、愛知県の瀬戸市にある有名な陶器工房で、美しい瀬戸焼で知られています。この種類の磁器は千年以上の歴史を持ち、瀬戸は日本の六古窯の一つとして認識されています。山田さんの工場を訪れると、質の高い釉薬や焼成方法を含む伝統的な磁器製造技術を探求することができます。地元の素材を使用し、瀬戸焼が称賛される独特の芸術性と職人技を展示しています'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Yusai-tei Textile Studio',
        nameJp: '祐斎亭染色スタジオ',
        descriptionEn: 'Yusai-tei is a textile studio located in Arashiyama, Kyoto, specializing in the traditional Japanese dyeing technique known as Yume Kōrozome. This historic studio, set in a Meiji-era building over 150 years old, offers visitors the chance to engage in dyeing experiences and learn about the intricate methods involved in producing beautifully crafted textiles. The studio also highlights the beauty of nature surrounding Arashiyama, enhancing the artistic experience​',
        descriptionJp: '祐斎亭は、京都の嵐山に位置する染色スタジオで、夢こうろ染という伝統的な日本の染色技法を専門としています。この歴史的なスタジオは、150年以上の歴史を持つ明治時代の建物にあり、訪問者は染色体験を楽しみ、美しく仕立てられたテキスタイルを生み出すための複雑な方法について学ぶことができます。スタジオは、嵐山の自然の美しさを強調し、アート体験をより豊かなものにしています'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Monk Ittoku-san: Zen & Healing Light',
        nameJp: '一徳さん: 禅と癒しの光',
        descriptionEn: "Monk Ittoku-san is known for his teachings on the intersection of Zen philosophy and the concept of healing light. He emphasizes the importance of mindfulness and meditation as pathways to achieve inner peace and emotional balance. Through practices like Zazen (sitting meditation), individuals can connect with their true nature and harness an innate healing energy that promotes well-being. Ittoku-san's teachings often reflect the idea that this light within can help alleviate stress and foster a deeper understanding of oneself, ultimately guiding individuals toward a more harmonious life​",
        descriptionJp: '一徳さんは、禅の哲学と癒しの光の概念の交差点についての教えで知られています。彼は、内なる平和と感情のバランスを達成するための道として、マインドフルネスや瞑想の重要性を強調しています。座禅などの実践を通じて、個人は真の自己とつながり、幸福を促進する内在する癒しのエネルギーを活用できます。一徳さんの教えは、内なる光がストレスを和らげ、自己理解を深める手助けをするという考えを反映しています。これにより、調和のとれた生活へと導くことができます'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Kojima Shoten',
        nameJp: '小嶋商店',
        descriptionEn: 'Kojima Shoten, a renowned lantern studio in Kyoto, specializes in traditional Kyo-chochin lanterns, crafted using the ancient jibari-shiki method. Visitors can participate in hands-on workshops where they learn to create their own paper lanterns. The experience includes a guided tour of the workshop, showcasing the meticulous process of lantern-making—from splitting bamboo to gluing washi paper. This immersive activity not only allows participants to appreciate the craftsmanship but also to understand the cultural significance of these lanterns in Japanese history',
        descriptionJp: '小嶋商店は、京都にある有名な提灯工房で、伝統的な京提灯を専門に制作しています。訪問者は、提灯作りの手作りワークショップに参加することができ、古代のじばり式技法を学ぶことができます。この体験では、工房の見学を通じて、竹を割る作業から和紙を貼り付ける工程まで、提灯作りの細かなプロセスを紹介します。この没入型の活動は、参加者に職人技を感謝する機会を提供するだけでなく、提灯の日本の歴史における文化的重要性を理解することを可能にします'
    },
    {
        gif: '',
        image: '',
        nameEn: 'POJ Studio',
        nameJp: 'POJスタジオ',
        descriptionEn: ' POJ Studio is a Kyoto-based platform dedicated to connecting Japan’s master artisans with a global audience. Founded by Tina Koyama and Hana Tsukamoto, the studio focuses on preserving traditional crafts while offering modern lifestyle products. Their offerings include kintsugi workshops, where participants learn the art of repairing ceramics with gold, alongside a range of handmade items that embody the essence of Japanese craftsmanship. POJ Studio aims to foster a sustainable approach to living by promoting conscious consumption and celebrating the rich heritage of Japanese artisans',
        descriptionJp: 'POJスタジオは、京都に拠点を置くプラットフォームで、日本の職人と世界をつなぐことに専念しています。ティナ・コヤマとハナ・ツカモトによって設立され、スタジオは伝統工芸を守りながら現代のライフスタイル製品を提供することに焦点を当てています。提供されるワークショップでは、参加者が金を使って陶器を修復する技術である金継ぎを学び、手作りのアイテムが日本の職人技の本質を体現しています。POJスタジオは、持続可能な生活へのアプローチを促進し、日本の職人の豊かな遺産を祝うことを目指しています'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Zen Night Walk Kyoto',
        nameJp: '禅ナイトウォーク京都',
        descriptionEn: "The Zen Night Walk is a unique event held at Kenninji Temple, Kyoto's oldest Zen temple, running from 7 PM to 9:30 PM until September 22, 2024. This immersive experience combines ambient soundscapes with artistic light installations, creating a serene atmosphere conducive to mindfulness. Visitors stroll through the temple's grounds while listening to 'neuro music,' scientifically designed to enhance relaxation and focus. Highlights include a projection of twin dragons and a sea of clouds in the temple's renowned dry landscape garden, Daioen, providing a captivating sensory experience",
        descriptionJp: '禅ナイトウォークは、京都最古の禅寺である建仁寺で開催されるユニークなイベントで、2024年9月22日まで毎日午後7時から9時30分まで行われます。この没入型体験は、周囲の音風景とアートの光のインスタレーションを組み合わせ、マインドフルネスに適した穏やかな雰囲気を生み出します。訪問者は、リラクゼーションと集中力を高めるために科学的にデザインされた「ニューロミュージック」を聴きながら、寺院の敷地を散策します。見どころには、双龍のプロジェクションや、著名な枯山水庭園「大韵」での雲海があり、魅力的な感覚体験を提供します​'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Eriko Horiki Showroom',
        nameJp: '堀木エリコショールーム',
        descriptionEn: "The Eriko Horiki Showroom is a contemporary space located in Kyoto, showcasing the innovative work of Eriko Horiki, a renowned washi paper artist. Horiki's designs bridge traditional Japanese washi techniques with modern aesthetics, producing large-scale installations and functional art pieces. Visitors can explore a variety of washi creations, including lighting elements and decorative artworks, which highlight the unique textures and beauty of this traditional craft. The showroom also serves as a hub for promoting washi art in architectural spaces, ensuring that this centuries-old craft continues to evolve​",
        descriptionJp: '堀木エリコショールームは、京都に位置する現代的な空間で、著名な和紙アーティストである堀木エリコの革新的な作品を展示しています。堀木のデザインは、伝統的な和紙技術と現代的な美学を融合させ、大規模なインスタレーションや機能的なアートピースを生み出しています。訪問者は、照明要素や装飾アートを含むさまざまな和紙作品を探索でき、この伝統工芸の独特のテクスチャーと美しさを強調しています。ショールームはまた、建築空間における和紙アートの普及の場として機能し、数世代にわたるこの古代技術が進化し続けることを確実にしています​'
    },
    {
        gif: '',
        image: '',
        nameEn: 'Hosoo Textile Gallery/Showroom',
        nameJp: '細尾テキスタイルギャラリー/ショールーム',
        descriptionEn: "The Hosoo Textile Gallery, opened in September 2019, is part of the long-established Hosoo company located in Kyoto's Nishijin district, which dates back to 1688. This gallery serves as a hub for showcasing the art of traditional Japanese textiles, particularly focusing on kimono and innovative fabric designs. Visitors can explore exhibitions that highlight the history, beauty, and techniques of dyeing and weaving. The showroom also features a selection of luxury lifestyle products crafted from Hosoo fabrics, combining modern design with traditional craftsmanship",
        descriptionJp: '細尾テキスタイルギャラリーは、2019年9月にオープンし、1688年に遡る京都の西陣地区に位置する老舗の細尾会社の一部です。このギャラリーは、伝統的な日本のテキスタイル、特に着物や革新的な生地デザインの芸術を展示する中心地です。訪問者は、染色や織りの歴史、美しさ、技術を強調する展示を探索できます。また、ショールームでは、細尾の生地を使用した高級ライフスタイル製品のセレクションもあり、現代的なデザインと伝統的な職人技を融合させています'
    },
    {
        gif: "",
        image: 'image/FieldTrip/Naoshima/HiroshiSugimotoGallery/IMG_1034.jpeg',
        nameEn: 'Hiroshi Sugimoto Gallery',
        nameJp: '杉本博司ギャラリー',
        descriptionEn: "The Hiroshi Sugimoto Gallery, known as the Time Corridor, is located on Naoshima, a renowned art island in Japan. Opened in March 2022, this gallery showcases the renowned works of Hiroshi Sugimoto, a prominent photographer and artist celebrated for his explorations of time, light, and perception. The gallery features Sugimoto's photography, designs, and sculptures, allowing visitors to experience the interplay of nature and art within the context of his creative vision. The architecture by Tadao Ando complements Sugimoto's work, encouraging reflection on the nature of time and existence​",
        descriptionJp: '杉本博司ギャラリー、通称タイムコリドールは、著名なアートアイランドである直島に位置しています。2022年3月にオープンしたこのギャラリーでは、時間、光、知覚の探求で知られる著名な写真家でアーティストの杉本博司の作品が展示されています。ギャラリーは、杉本の写真、デザイン、彫刻を特徴としており、訪問者は彼の創造的ビジョンの文脈の中で、自然とアートの相互作用を体験することができます。安藤忠雄による建築は、杉本の作品を引き立て、時間と存在の本質についての反省を促します'
    },
    {
        gif: "",
        image: 'image/FieldTrip/Naoshima/ValleyGallery/IMG_1072.jpeg',
        nameEn: 'Valley Gallery',
        nameJp: 'ヴァレーギャラリー',
        descriptionEn: "The Valley Gallery, designed by renowned architect Tadao Ando, opened in March 2022 on Naoshima, Japan's famous art island. This gallery is unique in its trapezoidal design, resembling a shrine and harmonizing with the surrounding nature. The gallery features Yayoi Kusama's iconic Narcissus Garden installation, as well as Tsuyoshi Ozawa's Slag Buddha 88, which emphasizes the relationship between nature, art, and local history. The architecture allows natural light, wind, and rain to flow through, enhancing visitors' connection with the environment",
        descriptionJp: 'ヴァレーギャラリーは、著名な建築家安藤忠雄によってデザインされ、2022年3月に日本のアートアイランド直島にオープンしました。このギャラリーは、周囲の自然と調和するように設計されたトラペzoイド形状の建物で、神社を彷彿とさせるデザインが特徴です。ギャラリーでは、草間彌生の象徴的なナルシスの庭インスタレーションや、大沢剛のスラグ・ブッダ88が展示され、自然、アート、地域の歴史の関係が強調されています。建築は自然光、風、雨が流れ込み、訪問者と環境とのつながりを深めるようになっています'
    },
    {
        gif: "",
        image: 'image/FieldTrip/Naoshima/ChichuMuseum/IMG_1087.jpeg',
        nameEn: 'Chichu Art Museum',
        nameJp: '地中美術館',
        descriptionEn: "The Chichu Art Museum, designed by architect Tadao Ando, is a unique contemporary art museum located mostly underground on Naoshima, Japan. Opened on July 18, 2004, the museum utilizes natural light to illuminate its exhibits, creating an immersive and serene environment. Key highlights include large-scale works from Claude Monet's Water Lilies series, as well as installations by artists like James Turrell and Walter De Maria. The museum emphasizes the relationship between nature and art, with a beautiful garden inspired by Monet's own designs​",
        descriptionJp: '地中美術館は、建築家安藤忠雄によって設計された、主に地下に位置するユニークな現代アートミュージアムで、日本の直島にあります。2004年7月18日にオープンし、自然光を利用して展示物を照らすことで、没入感と静寂な環境を創出しています。見どころには、クロード・モネの睡蓮シリーズの大規模な作品のほか、ジェームズ・タレルやウォルター・ディ・マリアによるインスタレーションがあります。美術館は自然とアートの関係を強調しており、モネのデザインに触発された美しい庭園も備えています'
    },
    {
        gif: "image/FieldTrip/Naoshima/TeshimaArtMuseum/My Movie 1.gif",
        image: 'image/FieldTrip/Naoshima/TeshimaArtMuseum/teshima-artmuseum_kv_thumb_01_pc.jpg',
        nameEn: 'Teshima Art Museum',
        nameJp: '豊島美術館',
        descriptionEn: 'The Teshima Art Museum, designed by architect Ryue Nishizawa and artist Rei Naito, is a unique contemporary art space located on Teshima Island in Japan. Opened in 2010, the museum resembles a droplet of water, seamlessly integrating with the surrounding rice fields. The structure features a concrete shell with two elliptical openings, allowing natural light, air, and sound to flow through, enhancing the connection between art and nature. The museum houses a single artwork, Matrix, which embodies the interplay of water and light, creating an immersive experience for visitors',
        descriptionJp: '豊島美術館は、建築家西沢立衛とアーティスト内藤玲によってデザインされたユニークな現代アートスペースで、日本の豊島に位置しています。2010年にオープンしたこの美術館は、水滴を模した形状で、周囲の田んぼとシームレスに統合されています。構造はコンクリート製の殻で、2つの楕円形の開口部があり、自然光、風、音が流れ込み、アートと自然のつながりが深まります。美術館には、単一のアート作品であるマトリックスが展示されており、水と光の相互作用を体現し、訪問者に没入感のある体験を提供します'
    },
    {
        gif: "image/FieldTrip/Naoshima/ArtHouse/My Movie 2.gif",
        image: 'image/FieldTrip/Naoshima/ArtHouse/IMG_1241.jpeg',
        nameEn: 'Art Houses',
        nameJp: 'アートハウスプロジェクト',
        descriptionEn: "The Art House Project is a unique initiative located in Honmura, a small port town on Naoshima Island, Japan. This project involves a collection of abandoned houses, a temple, and a shrine, which have been transformed into art installations and exhibition spaces by various artists from Japan and abroad. The Art Houses blend seamlessly into the traditional neighborhood, making them appear unassuming from the street. Notable installations include Kadoya, featuring LED displays, and Minamidera, designed by Tadao Ando, showcasing James Turrell's work. Each house offers visitors a distinct artistic experience that reflects both the location and the artists' visions",
        descriptionJp: 'アートハウスプロジェクトは、日本の直島にある小さな港町、本村に位置するユニークな取り組みです。このプロジェクトは、廃屋や寺社を含むコレクションであり、日本国内外のアーティストによってアートインスタレーションや展示スペースに変貌を遂げました。アートハウスは、伝統的な地域に溶け込んでおり、道からは目立たないように見えます。注目すべきインスタレーションには、LEDディスプレイを備えた門屋や、田植えによって設計された南寺があり、ジェームズ・タレルの作品が展示されています。各アートハウスは、訪問者にその場所とアーティストのビジョンを反映した独特のアート体験を提供します'
    },
    {
        gif: "",
        image: 'image/FieldTrip/Naoshima/BenesseHouseMuseum/IMG_1252.jpeg',
        nameEn: 'Benesse House Museum',
        nameJp: 'ベネッセハウス美術館',
        descriptionEn: "The Benesse House Museum, located on Naoshima Island, is a unique blend of contemporary art museum and resort hotel, designed by renowned architect Tadao Ando. Opened in 1992, the museum features a diverse collection of artworks inspired by the island's natural surroundings and the interplay of nature, art, and architecture. Guests can enjoy 24-hour access to the museum if they stay at the hotel. The museum complex includes several buildings, such as the Oval, Park, and Beach, each showcasing different artistic experiences and outdoor installations, including Yayoi Kusama’s iconic pumpkin sculpture​",
        descriptionJp: 'ベネッセハウス美術館は、直島に位置する現代アート美術館とリゾートホテルのユニークな融合で、著名な建築家安藤忠雄によって設計されました。1992年にオープンしたこの美術館は、島の自然環境に触発された多様なアートコレクションを展示しています。ホテルに宿泊するゲストは、24時間いつでも美術館にアクセスできる特典があります。美術館コンプレックスは、さまざまなアート体験と屋外インスタレーションを展示するオーバル、パーク、ビーチなどの複数の建物で構成されています。中でも、草間彌生の象徴的なかぼちゃの彫刻が有名です​'
    },
    // {
    //     gif: '',
    //     image: '',
    //     nameEn: 'Noguchi Garden Museum',
    //     nameJp: 'イサム・ノグチ庭園美術館',
    //     descriptionEn: "The Isamu Noguchi Garden Museum, located in Mure-cho, Kagawa Prefecture, Japan, is a tribute to the renowned sculptor Isamu Noguchi (1904–1988). Established in his former studio, the museum showcases a collection of approximately 150 sculptures, many unfinished, preserving the creative atmosphere of Noguchi's workspace. Opened to inspire artists and scholars, the museum blends art with nature, featuring both indoor and outdoor installations set against the backdrop of historic Yashima and Mount Gokenzan. Visits are by appointment only, allowing guests to experience Noguchi’s artistic legacy in a serene environment​",
    //     descriptionJp: 'イサム・ノグチ庭園美術館は、香川県牟礼町に位置し、著名な彫刻家イサム・ノグチ（1904–1988）を讃える美術館です。彼の元スタジオに設立されたこの美術館には、約150点の彫刻が展示されており、その多くは未完成のまま保存されており、ノグチの創造的な作業空間の雰囲気を保っています。芸術家や学者にインスピレーションを与えるためにオープンしたこの美術館は、自然とアートが調和する空間で、屋内外のインスタレーションを含みます。訪問は予約制で、ノグチの芸術的遺産を穏やかな環境で体験できます'
    // },
    
    // {
    //     gif: '',
    //     image: '',
    //     nameEn: '',
    //     nameJp: '',
    //     descriptionEn: '',
    //     descriptionJp: ''
    // },
    // {
    //     gif: '',
    //     image: '',
    //     nameEn: '',
    //     nameJp: '',
    //     descriptionEn: '',
    //     descriptionJp: ''
    // },
    // {
    //     gif: '',
    //     image: '',
    //     nameEn: '',
    //     nameJp: '',
    //     descriptionEn: '',
    //     descriptionJp: ''
    // },
    // {
    //     gif: '',
    //     image: '',
    //     nameEn: '',
    //     nameJp: '',
    //     descriptionEn: '',
    //     descriptionJp: ''
    // },
    // Add more locations as needed
];
// Data for different locations (as defined before)



let currentIndex = 0;

// Get the 'index' query parameter from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Update the page content based on the currentIndex
function updateContent() {
    const location = locations[currentIndex];
    const timestamp = new Date().getTime();  // Unique timestamp to force GIF reload
    document.getElementById('background').src = location.gif + '?' + timestamp;
    document.getElementById('location-image').src = location.image;
    document.getElementById('location-name-en').textContent = location.nameEn;
    document.getElementById('location-name-jp').textContent = location.nameJp;
    document.getElementById('description-en').textContent = location.descriptionEn;
    document.getElementById('description-jp').textContent = location.descriptionJp;
}

// Initialize the page based on the 'index' from the URL
function init() {
    const index = getQueryParam('index');
    if (index !== null && locations[index]) {
        currentIndex = parseInt(index, 10);  // Parse the index as an integer
        updateContent();
    } else {
        console.error('Invalid index or no index provided');
    }
}

// Navigation to the previous item
function previousItem() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : locations.length - 1;
    updateContent();
}

// Navigation to the next item
function nextItem() {
    currentIndex = (currentIndex < locations.length - 1) ? currentIndex + 1 : 0;
    updateContent();
}

// Initialize the page when it loads
window.onload = init;

// Function to return to the main page
function goToMainPage() {
    window.location.href = 'index.html';  // Change this if your main page URL is different
}

// Other functions (updateContent, previousItem, nextItem) remain unchanged

// Function to show the selected section and hide others
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.add('hidden');
    });
    
    // Show the selected section
    document.getElementById(section).classList.remove('hidden');
}

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(section).classList.remove('hidden');

    // Remove 'active' class from all buttons
    document.querySelectorAll('.bottom-bar button').forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    document.querySelector(`.bottom-bar button[onclick="showSection('${section}')"]`).classList.add('active');
}




