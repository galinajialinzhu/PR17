// Data for different locations
const locations = [
    {
        gif: 'image/FieldTrip/Tokyo/BigCatBang/BigCatBang.mp4',
        image: 'image/FieldTrip/Tokyo/BigCatBang/BigCatBang.png',
        nameEn: 'Big Cat Bang @ Ginza Six',
        nameJp: 'ビッグキャットバン @ ギンザシックス',
        descriptionEn: "BIG CAT BANG is an imaginative art installation by Kenji Yanobe at Ginza Six, showcasing astronaut cats in a spaceship resembling the Tower of the Sun. Unveiled in April 2024, it combines traditional craftsmanship with contemporary design, celebrating the relationship between art and the cosmos​.",
        descriptionJp: 'ビッグキャットバン @ ギンザシックス は、ギンザシックスにあるヤノベケンジによる想像力豊かなアートインスタレーションで、太陽の塔に似た宇宙船に宇宙飛行士の猫を展示しています。2024年4月に公開されるこのインスタレーションは、伝統的な職人技と現代的なデザインを融合し、アートと宇宙の関係を祝福しています。'
    },
    {
        gif: 'image/FieldTrip/Nagoya/PiPhotonics/Piphotonics.mp4',
        image: 'image/FieldTrip/Nagoya/PiPhotonics/Piphotonics.png',
        nameEn: 'Pi Photonics',
        nameJp: '株式会社パイフォトニクス',
        descriptionEn: "Pi Photonics specializes in advanced photonic technologies, focusing on innovative solutions for optical communication and sensing applications, harnessing light's properties to enhance performance and efficiency in various industries.",
        descriptionJp: ' パイフォトニクスは、先進的なフォトニクス技術を専門とし、光通信やセンシングアプリケーションの革新的なソリューションに焦点を当て、さまざまな産業での性能と効率を向上させるために光の特性を活用しています。'
    },
    {
        gif: 'image/FieldTrip/Nagoya/SuzusanShibori/SuzusanShibori.mp4',
        image: 'image/FieldTrip/Nagoya/SuzusanShibori/SuzusanShibori.png',
        nameEn: 'Suzusan Shibori Light',
        nameJp: '株式会社スズサン',
        descriptionEn: 'Suzusan Shibori Light showcases traditional Japanese tie-dye techniques, transforming fabric into stunning lighting fixtures that reflect the beauty of nature, blending craftsmanship with modern design for a unique aesthetic appeal.',
        descriptionJp: '鈴さんしぼりライトは、伝統的な日本の絞り染め技術を展示し、布を美しい照明器具に変え、自然の美しさを反映させ、職人技と現代デザインを融合させた独自の美的魅力を生み出します。​'
    },
    {
        gif: 'image/FieldTrip/Nagoya/MinnaNoMori/MinnaNoMori.mp4',
        image: 'image/FieldTrip/Nagoya/MinnaNoMori/MinnaNoMori.png',
        nameEn: 'Minna no Mori Gifu Media Cosmos',
        nameJp: 'みんなの森 ぎふメディアコスモス',
        descriptionEn: 'Minna no Mori Gifu Media Cosmos is a cultural facility in Gifu, Japan, offering a blend of media art, interactive exhibits, and community engagement, fostering creativity and collaboration among visitors through innovative technology and artistic expression.',
        descriptionJp: 'みんなの森ぎふメディアコスモスは、日本の岐阜にある文化施設で、メディアアート、インタラクティブな展示、地域交流を融合させ、革新的な技術と芸術表現を通じて訪問者の創造性と協力を促進します。'
    },
    {
        gif: 'image/FieldTrip/Nagoya/MinoTown/MinoTown.mp4',
        image: 'image/FieldTripA/Nagoya/MinoTown/MinoTown.png',
        nameEn: 'Mino Town',
        nameJp: '美濃市',
        descriptionEn: 'Mino Town, located in Gifu Prefecture, Japan, is famous for its rich history in traditional washi paper making and stunning natural landscapes, offering visitors a glimpse into Japanese craftsmanship and serene rural life.​',
        descriptionJp: '美濃市は岐阜県に位置し、伝統的な和紙作りの豊かな歴史と美しい自然景観で知られ、訪れる人々に日本の職人技と穏やかな田舎の生活を垣間見せます。'
    },
    {
        gif: 'image/FieldTrip/Nagoya/MinoWashiPaking/MinoWashiMaking.mp4',
        image: 'image/FieldTrip/Nagoya/MinoWashiPaking/MinoWashiMaking.png',
        nameEn: 'Mino Washi Paper Making',
        nameJp: '美濃和紙作り',
        descriptionEn: "Mino Washi no Sato Hall in Mino City celebrates Mino Washi paper artistry, offering hands-on activities. Nearby, Warabi Paper Company showcases high-quality washi production, enriching visitors' experience of the region's vibrant paper-making heritage.",
        descriptionJp: '美濃和紙の里会館は、美濃市で美濃和紙の芸術を称え、実践的な活動を提供しています。近くの蕨製紙所では、質の高い和紙の生産を展示し、地域の豊かな和紙作りの遺産を訪問者に伝えます。'
    },
    {
        gif: "image/FieldTrip/Nagoya/X'sFactory/x's.mp4",
        image: "image/FieldTrip/Nagoya/X'sFactory/x's.png",
        nameEn: "X's Factory",
        nameJp: "X's工場見学",
        descriptionEn: "X's Factory is a creative space that combines art, technology, and craftsmanship, offering workshops and exhibitions. It serves as a hub for artists and makers, promoting innovative projects and collaborations in a dynamic environment​",
        descriptionJp: "X's工場見学は、アート、テクノロジー、職人技を融合させたクリエイティブスペースで、ワークショップや展示を提供しています。アーティストやクリエイターのためのハブとして、革新的なプロジェクトやコラボレーションを促進する活気ある環境です。"
    },
    {
        gif: 'image/FieldTrip/Nagoya/YamadaSan/Yamada.mp4',
        image: 'image/FieldTrip/Nagoya/YamadaSan/Yamada.png',
        nameEn: 'Yamada-san Porcelain',
        nameJp: '山田さんの瀬戸磁器',
        descriptionEn: "Yamada-san Porcelain, located in Seto, Aichi Prefecture, is renowned for exquisite Seto ware, boasting over a thousand years of history. Visitors can explore traditional porcelain production techniques, emphasizing local materials and craftsmanship that define Seto ware's artistry.​",
        descriptionJp: '山田さん陶器は、愛知県瀬戸市に位置し、千年以上の歴史を誇る美しい瀬戸焼で知られています。訪問者は、地元の材料と職人技を強調した伝統的な陶器の製造技術を探求できます。'
    },
    {
        gif: 'image/FieldTrip/Kyoto/Yusai-tei/Yusaitei.mp4',
        image: 'image/FieldTrip/Kyoto/Yusai-tei/Yusaitei.png',
        nameEn: 'Yusai-tei Textile Studio',
        nameJp: '祐斎亭染色スタジオ',
        descriptionEn: 'Yusai-tei Textile Studio specializes in creating vibrant, hand-dyed fabrics using traditional techniques. Visitors can participate in workshops, exploring the art of dyeing and weaving while gaining insight into the cultural significance of Japanese textiles.​',
        descriptionJp: '祐斎亭染色スタジオは、伝統的な技法を用いて鮮やかな手染めの布を制作する専門スタジオです。訪問者はワークショップに参加し、染色や織りの技術を探求し、日本の織物の文化的重要性を学ぶことができます。'
    },
    {
        gif: 'image/FieldTrip/Kyoto/Ittoku-sanTemple/Ittoku.mp4',
        image: 'image/FieldTrip/Kyoto/Ittoku-sanTemple/Ittoku.png',
        nameEn: 'Monk Ittoku-san: Zen & Healing Light',
        nameJp: '一徳さん: 禅と癒しの光',
        descriptionEn: "Monk Ittoku-san teaches the intersection of Zen philosophy and healing light, emphasizing mindfulness and meditation for inner peace. Through Zazen, individuals connect with their true nature, harnessing innate healing energy for well-being and emotional balance.​",
        descriptionJp: '一徳僧は、禅哲学と癒しの光の交差点について教え、内なる平和のためのマインドフルネスと瞑想の重要性を強調します。座禅を通じて、個人は真の自分とつながり、幸福と感情のバランスを促進する内なる癒しのエネルギーを活用します'
    },
    {
        gif: 'image/FieldTrip/Kyoto/KojimaShoten/kojima.mp4',
        image: 'image/FieldTrip/Kyoto/KojimaShoten/Kojima.png',
        nameEn: 'Kojima Shoten',
        nameJp: '小嶋商店',
        descriptionEn: 'Kojima Shoten is a traditional Japanese store specializing in unique hand-crafted textiles and local crafts. It offers a variety of products, showcasing the rich heritage of craftsmanship while promoting sustainable practices within the community.',
        descriptionJp: '小島商店は、ユニークな手作りの織物や地域の工芸品を専門とする伝統的な日本の店舗です。さまざまな製品を提供し、職人技の豊かな遺産を紹介し、地域内での持続可能な実践を促進しています。'
    },
    {
        gif: 'image/FieldTrip/Kyoto/POJStudio/POJ.mp4',
        image: 'image/FieldTrip/Kyoto/POJStudio/POJ.png',
        nameEn: 'POJ Studio',
        nameJp: 'POJスタジオ',
        descriptionEn: ' POJ Studio is a creative space specializing in design and art, offering workshops and exhibitions that foster innovation. It serves as a collaborative hub for artists, promoting unique projects and artistic exploration.',
        descriptionJp: 'POJスタジオは、デザインとアートを専門とするクリエイティブスペースで、革新を育むワークショップや展示を提供しています。アーティストのためのコラボレーションハブとして、独自のプロジェクトと芸術的探求を促進します。'
    },
    {
        gif: 'image/FieldTrip/Kyoto/ZenNight/Zen.mp4',
        image: 'image/FieldTrip/Kyoto/ZenNight/Zen.png',
        nameEn: 'Zen Night Walk Kyoto',
        nameJp: '禅ナイトウォーク京都',
        descriptionEn: "The Zen Night Walk is a unique event held at Kenninji Temple, Kyoto's oldest Zen temple. This immersive experience combines ambient soundscapes with artistic light installations, creating a serene atmosphere conducive to mindfulness.",
        descriptionJp: '禅ナイトウォークは、京都最古の禅寺である建仁寺で開催されるユニークなイベントです。この没入型体験は、周囲の音風景と芸術的な光のインスタレーションを組み合わせ、マインドフルネスにつながる穏やかな雰囲気を作り出します。​'
    },
    {
        gif: 'image/FieldTrip/Kyoto/ErikoHorikiShowroom/eriko.mp4',
        image: 'image/FieldTrip/Kyoto/ErikoHorikiShowroom/eriko.png',
        nameEn: 'Eriko Horiki Showroom',
        nameJp: '堀木エリコショールーム',
        descriptionEn: "The Eriko Horiki Showroom in Tokyo features contemporary textile art, showcasing the innovative works of designer Eriko Horiki. Visitors can experience unique fabric designs and engage with the artistic process through exhibitions and workshops, highlighting the fusion of tradition and modernity.​",
        descriptionJp: '堀木エリ子ショールームは東京にあり、デザイナー堀木エリ子の革新的な現代織物アートを展示しています。訪問者は独自の布デザインを体験し、展示やワークショップを通じて芸術的なプロセスに参加でき、伝統と現代の融合を強調しています​'
    },
    {
        gif: 'image/FieldTrip/Kyoto/HosooTextileGallery/hosoo.mp4',
        image: 'image/FieldTrip/Kyoto/HosooTextileGallery/hosoo.png',
        nameEn: 'Hosoo Textile Gallery/Showroom',
        nameJp: '細尾テキスタイルギャラリー/ショールーム',
        descriptionEn: "The Hosoo Textile Gallery, located in Kyoto, showcases the rich tradition of Nishijin textile weaving. Visitors can explore exquisite fabrics, attend workshops, and learn about the history and techniques behind this intricate art form, celebrating Japanese textile craftsmanship.",
        descriptionJp: '細尾織物ギャラリーは京都にあり、にしじん織りの豊かな伝統を展示しています。訪問者は美しい布地を探索し、ワークショップに参加し、この複雑なアートフォームの歴史と技法について学ぶことができ、日本の織物技術を祝います。'
    },
    {
        gif: "image/FieldTrip/Naoshima/HiroshiSugimotoGallery/Hiroshi.mp4",
        image: 'image/FieldTrip/Naoshima/HiroshiSugimotoGallery/Hiroshi.png',
        nameEn: 'Hiroshi Sugimoto Gallery',
        nameJp: '杉本博司ギャラリー',
        descriptionEn: "The Hiroshi Sugimoto Gallery, located in Tokyo, exhibits the innovative works of photographer and artist Hiroshi Sugimoto, known for his ethereal seascapes and architectural photography, exploring the relationship between time, memory, and perception.",
        descriptionJp: '杉本博司ギャラリーは東京にあり、写真家でアーティストの杉本博司の革新的な作品を展示しています。彼のエーテル的な海景や建築写真は、時間、記憶、知覚の関係を探求しています。'
    },
    {
        gif: "image/FieldTrip/Naoshima/ValleyGallery/valley.mp4",
        image: 'image/FieldTrip/Naoshima/ValleyGallery/valley.png',
        nameEn: 'Valley Gallery',
        nameJp: 'ヴァレーギャラリー',
        descriptionEn: "Valley Gallery is a contemporary art space on Naoshima, designed by Tadao Ando. It showcases works by various artists, focusing on the interplay of art and nature. The gallery complements Naoshima's rich artistic landscape",
        descriptionJp: 'バレーギャラリーは、安藤忠雄が設計した直島の現代アートスペースです。アートと自然の相互作用に焦点を当て、さまざまなアーティストの作品を展示しています。ギャラリーは直島の豊かな芸術的景観を引き立てます。'
    },
    {
        gif: "image/FieldTrip/Naoshima/ChichuMuseum/chichu.mp4",
        image: 'image/FieldTrip/Naoshima/ChichuMuseum/Chichu.png',
        nameEn: 'Chichu Art Museum',
        nameJp: '地中美術館',
        descriptionEn: "The Chichu Art Museum, designed by Tadao Ando, integrates art and nature, featuring works by Claude Monet, James Turrell, and Walter de Maria. Its underground layout minimizes environmental impact, allowing natural light to enhance the visitor experience​",
        descriptionJp: '安藤忠雄が設計した地中美術館は、クロード・モネ、ジェームズ・タレル、ウォルター・デ・マリアの作品を展示し、芸術と自然を融合しています。地下のレイアウトは環境への影響を最小限に抑え、自然光が訪問者の体験を向上させます。'
    },
    {
        gif: "image/FieldTrip/Naoshima/TeshimaArtMuseum/Teshima.mp4",
        image: 'image/FieldTrip/Naoshima/TeshimaArtMuseum/Teshima.png',
        nameEn: 'Teshima Art Museum',
        nameJp: '豊島美術館',
        descriptionEn: 'The Teshima Art Museum, designed by Ryue Nishizawa, seamlessly integrates art and nature, resembling a droplet of water. It features a stunning installation by Rei Naito, emphasizing the interaction between space, light, and the surrounding landscape',
        descriptionJp: 'テシマアートミュージアムは、西沢立衛によって設計され、アートと自然が一体となった水滴のような形をしています。内藤礼の驚くべきインスタレーションがあり、空間、光、周囲の風景との相互作用を強調しています'
    },
    {
        gif: "image/FieldTrip/Naoshima/ArtHouse/ArtHouse.mp4",
        image: 'image/FieldTrip/Naoshima/ArtHouse/ArtHouse.png',
        nameEn: 'Art Houses',
        nameJp: 'アートハウスプロジェクト',
        descriptionEn: "The Art House Project in Honmura, Naoshima, transforms abandoned homes, a shrine, and a temple into contemporary art installations. Artists from Japan and abroad have reimagined these spaces, creating unique, immersive experiences that blend art with the local environment",
        descriptionJp: 'アートハウスプロジェクトは、直島の本村で、廃屋、神社、寺を現代アートのインスタレーションに変えています。日本国内外のアーティストがこれらの空間を再構築し、アートと地域環境が融合したユニークで没入感のある体験を提供しています'
    },
    {
        gif: "image/FieldTrip/Naoshima/BenesseHouseMuseum/Benesse.mp4",
        image: 'image/FieldTrip/Naoshima/BenesseHouseMuseum/Benesse.png',
        nameEn: 'Benesse House Museum',
        nameJp: 'ベネッセハウス美術館',
        descriptionEn: "The Benesse House Museum is a unique museum-hotel on Naoshima Island, combining contemporary art and accommodation. Designed by Tadao Ando, it showcases a diverse collection of modern art within an architecturally stunning environment, fostering a close relationship between nature and art​​",
        descriptionJp: 'ベネッセハウスミュージアムは、現代アートと宿泊施設を組み合わせた直島のユニークなミュージアムホテルです。安藤忠雄が設計したこの美術館は、建築的に素晴らしい環境の中で、自然とアートの密接な関係を育む多様な現代アートコレクションを展示しています。​'
    },
    {
        gif: 'image/FieldTrip/Tokyo/AtelierMuji/Muji.mp4',
        image: 'image/FieldTrip/Tokyo/AtelierMuji/Muji.png',
        nameEn: 'Atelier Muji',
        nameJp: 'アトリエ無印',
        descriptionEn: "Atelier Muji is a creative space located in Ginza, Tokyo, dedicated to exploring design, craftsmanship, and sustainable living. It hosts a variety of exhibitions and workshops, showcasing Muji's philosophy of simplicity and functionality. The gallery features works from both local and international artists, encouraging dialogue about everyday items and their impact on life​",
        descriptionJp: "アトリエ無印良品は、東京の銀座に位置するクリエイティブスペースで、デザイン、工芸、持続可能な生活を探求しています。さまざまな展示やワークショップを開催し、無印良品のシンプルさと機能性の哲学を紹介しています。ギャラリーには、地元および国際的なアーティストの作品が展示されており、日常品とその生活への影響についての対話を促しています​"
    },
    {
        gif: 'image/FieldTrip/Tokyo/MoriMuseum/mori.mp4',
        image: 'image/FieldTrip/Tokyo/AtelierMuji/Mori.png',
        nameEn: 'Mori Art Museum',
        nameJp: '森美術館',
        descriptionEn: "The Mori Art Museum, located on the 53rd floor of the Mori Tower in Roppongi, Tokyo, showcases contemporary art from Japan and beyond. Established in 2003, it hosts rotating exhibitions, focusing on modern artistic expressions and cultural discussions, alongside stunning city views​",
        descriptionJp: '森美術館は、東京・六本木の森タワー53階に位置し、日本や世界中の現代アートを展示しています。2003年に設立され、現代の芸術表現や文化的議論に焦点を当てた展覧会を開催し、素晴らしい都市の景観を楽しめます'
    },
    {
        gif: 'image/FieldTrip/Tokyo/21_21/2121.mp4',
        image: 'image/FieldTrip/Tokyo/21_21/2121.png',
        nameEn: '21_21 Design Sight',
        nameJp: '21_21デザインサイト',
        descriptionEn: '21_21 Design Sight is a design museum located in Tokyo Midtown, founded by fashion designer Issey Miyake in 2007. The museum focuses on exploring the relationship between everyday life and design through various exhibitions and events. It aims to inspire visitors by showcasing innovative design concepts and encouraging interaction with everyday objects, making design more accessible',
        descriptionJp: '21_21デザインサイトは、2007年にファッションデザイナーの三宅一生によって設立された東京ミッドタウンに位置するデザインミュージアムです。この美術館は、日常生活とデザインの関係を探求することに焦点を当て、さまざまな展示やイベントを通じて来訪者を刺激します。革新的なデザインコンセプトを紹介し、日常の物とのインタラクションを促進することで、デザインをより身近なものにすることを目指しています​'
    },
    {
        gif: 'image/FieldTrip/Tokyo/Teamlab/teamlab.mp4',
        image: 'image/FieldTrip/Tokyo/Teamlab/Teamlab.png',
        nameEn: 'teamLab Planets',
        nameJp: 'チームラボプラネッツ',
        descriptionEn: 'TeamLab Planets in Toyosu, Tokyo, offers an immersive experience where art and nature intertwine through interactive installations. Visitors walk through water and digital landscapes, engaging with artworks that change with their movements. This sensory-rich environment includes installations like the "Floating Flower Garden" and "Universe of Fire Particles," inviting exploration and creativity',
        descriptionJp: 'チームラボプラネッツは、東京・豊洲に位置し、アートと自然が融合した没入型体験を提供しています。訪問者は水の中を歩き、デジタル風景を通過しながら、自らの動きに応じて変化するアート作品に触れます。「浮遊する花園」や「火粒子の宇宙」などのインスタレーションが含まれ、探索と創造性を促します'
    },
    {
        gif: 'image/FieldTrip/Tokyo/Yamagiwa/Yamagiwa.mp4',
        image: 'image/FieldTrip/Tokyo/Yamagiwa/yamagiwa.png',
        nameEn: 'Yamagiwa Light Showroom',
        nameJp: '山際照明ショールーム',
        descriptionEn: "The Yamagiwa Light Showroom in Tokyo showcases the brand's commitment to 'The Art of Lighting.' Visitors can explore innovative lighting designs, including original products and collaborations with international brands. The showroom reflects Japanese craftsmanship and the aesthetic quality of lighting, providing a unique experience for design enthusiasts",
        descriptionJp: 'ヤマギワショールームは、東京にあり「光のアート」をテーマにしたブランドのコンセプトを展示しています。来館者は、オリジナル製品や国際的なブランドとのコラボレーションを含む革新的な照明デザインを探索でき、和の職人技と美的品質を反映したユニークな体験が提供されます'
    },
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
    const timestamp = new Date().getTime(); // Unique timestamp to force reload if needed
    const videoSource = document.getElementById('video-source');
    const backgroundVideo = document.getElementById('background-video');

    if (location.gif) {
        videoSource.src = location.gif + '?' + timestamp; // Set the MP4 video file
        backgroundVideo.load(); // Load the new video file
    } else {
        videoSource.src = ''; // Clear the video source if no GIF is available
    }

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

// Function to open a YouTube video in a new window
function openYoutubeVideo(videoUrl) {
    window.open(videoUrl, '_blank', 'width=800,height=600');
}


// Get all sidebar items
const sidebarItems = document.querySelectorAll('.sidebar a[data-dot]');

// Loop through each sidebar item
sidebarItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        // Get the corresponding dot ID from the data attribute
        const dotId = this.getAttribute('data-dot');
        const dot = document.getElementById(dotId);

        // Add a hover effect to the dot
        if (dot) {
            dot.style.backgroundColor = 'red'; // Change the color to red on hover
        }
    });

    item.addEventListener('mouseout', function() {
        // Get the corresponding dot ID
        const dotId = this.getAttribute('data-dot');
        const dot = document.getElementById(dotId);

        // Remove the hover effect
        if (dot) {
            dot.style.backgroundColor = 'black'; // Reset the color when not hovered
        }
    });
});

function showDetail(index) {
    if (locations[index]) {
        window.location.href = `detail-page.html?index=${index}`;
    } else {
        console.error('Invalid location index:', index);
    }
}

