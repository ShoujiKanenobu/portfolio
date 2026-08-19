
const CONTENT = {

  ui: {
    nav: {
      work:       { en: "Work",       ja: "実績" },
      experience: { en: "Experience", ja: "経歴" },
      contact:    { en: "Contact",    ja: "お問い合わせ" },
    },
    skip:       { en: "Skip to content", ja: "本文へスキップ" },
    themeLabel: { en: "Switch between light and dark theme", ja: "ライト / ダークテーマを切り替える" },
    langSwitch: { en: "日本語", ja: "EN" },
    langLabel:  { en: "日本語に切り替える", ja: "Switch to English" },
    menuOpen:   { en: "Open menu",  ja: "メニューを開く" },
    menuClose:  { en: "Close menu", ja: "メニューを閉じる" },
  },

  site: {
    title: {
      en: "Kyle McGhie — Game Developer",
      ja: "カイル・マギー — ゲーム開発者",
    },
    description: {
      en: "A Game developer building systems, worlds, and fun!",
      ja: "システムと世界と、おもしろさをつくるゲーム開発者。",
    },
    logo: "KYLE",
  },

  hero: {
    name: { en: "Kyle McGhie", ja: "カイル・マギー" },
    tagline: {
      en: "I build *games* that players love.",
      ja: "プレイヤーに愛される*ゲーム*をつくる。",
    },
    intro: {
      en:
        "I thrive in the space between design and implementation, the part " +
        "where \"wouldn't it be cool if…\" turns into something playable. " +
        "Currently a Unity Programmer at Mankind Games in Tokyo.",
      ja:
        "デザインと実装のあいだ、「こんなのがあったら面白いよね」が実際に遊べるものへ" +
        "変わる瞬間が、いちばん得意な領域です。現在は東京の Mankind Games で " +
        "Unity プログラマーとして働いています。",
    },
    actions: [
      { label: { en: "See my work",  ja: "制作実績を見る" }, href: "#work" },
      { label: { en: "Get in touch", ja: "連絡する" },       href: "#contact" },
    ],
    facts: [
      { value: "Unity",
        label: { en: "Main engine", ja: "メインエンジン" } },
      { value: { en: "EN / JA", ja: "英語 / 日本語" },
        label: { en: "Native bilingual", ja: "ネイティブバイリンガル" } },
      { value: { en: "Tokyo", ja: "東京" },
        label: { en: "Currently in", ja: "拠点" } },
    ],
  },

  about: {
    paragraphs: [
      {
        en:
          "I've worked across gameplay, UI, networking, AI, and XR. I'm someone who " +
          "can get handed unfamiliar problems and figure them out quickly and " +
          "efficiently. My best work happens shoulder-to-shoulder with designers, " +
          "artists, and technical leadership rather than off on my own.",
        ja:
          "ゲームプレイ、UI、ネットワーク、AI、XR と幅広い領域を担当してきました。" +
          "はじめて触れる課題を渡されても、素早く的確に解きほぐしていくのが得意です。" +
          "ひとりで抱え込むより、デザイナーやアーティスト、技術責任者と肩を並べて" +
          "進めるときに、いちばんいい仕事ができます。",
      },
      {
        en: "Prototyping through post-launch, I like being around for the whole arc.",
        ja: "プロトタイプからリリース後の運用まで、ひと通りの流れに関わっていたいタイプです。",
      },
    ],
    photo: "images/kyle.jpg",
    photoAlt: { en: "Kyle McGhie", ja: "カイル・マギー" },
    skills: [
      { group: { en: "Programming", ja: "プログラミング" },
        items: ["C#", "HLSL", "C++", "Python"] },
      { group: { en: "Technologies", ja: "技術・ツール" },
        items: ["Unity", "Photon Quantum 3", "Nintendo SDK", "Shadergraph", "Git"] },
      { group: { en: "Spoken", ja: "語学" },
        items: [
          { en: "English (Native)",  ja: "英語（ネイティブ）" },
          { en: "Japanese (Native)", ja: "日本語（ネイティブ）" },
        ] },
    ],
  },

  work: {
    heading: { en: "Selected work", ja: "主な制作実績" },
    eyebrow: { en: "The fun stuff", ja: "たのしいところ" },
    subheading: {
      en: "Things I've shipped, and what I actually did on them.",
      ja: "これまでに世に出したものと、そこで実際に担当したこと。",
    },
    projects: [

      {
        featured: true,
        title: {
          en: "Sanrio Characters Smash Festa!",
          ja: "サンリオキャラクターズ スマッシュフェスタ！",
        },
        kicker: {
          en: "Multiplayer · Photon Quantum 3",
          ja: "マルチプレイ · Photon Quantum 3",
        },
        year: "2025 — 2026",
        role: { en: "Gameplay Programmer", ja: "ゲームプレイプログラマー" },
        description: {
          en:
            "Took ownership of development following the prototype phase, carrying " +
            "the game through release and post-launch updates.",
          ja:
            "プロトタイプ期以降の開発を引き継いで主導し、リリースとその後の" +
            "アップデートまで通して担当しました。",
        },
        highlights: [
          {
            en: "Implemented core gameplay systems, UI, and features through release and post-launch updates",
            ja: "コアとなるゲームプレイシステム、UI、各種機能を、リリース後のアップデートまで一貫して実装",
          },
          {
            en: "Partnered with the CTO on technical architecture, then became the project's primary code reviewer",
            ja: "CTO とともに技術アーキテクチャを設計し、その後はプロジェクトの主担当レビュアーを担当",
          },
          {
            en: "Implemented Photon Quantum 3 systems for UI, menus, and matchmaking during the multiplayer networking rewrite",
            ja: "マルチプレイのネットワーク再設計にあたり、UI・メニュー・マッチメイキングの Photon Quantum 3 システムを実装",
          },
        ],
        tags: ["Unity", "C#", "Photon Quantum 3",
               { en: "Multiplayer", ja: "マルチプレイ" }],
        image: "images/smashfesta.png",
        imageAlt: {
          en: "Sanrio Characters Smash Festa!",
          ja: "サンリオキャラクターズ スマッシュフェスタ！",
        },
        links: [
          { label: { en: "Official site", ja: "公式サイト" }, href: "https://smash-festa.com/" },
        ],
        credit: "© 2026 SANRIO CO., LTD. TOKYO, JAPAN Ⓚ © tatsumaki games Inc.",
      },

      {
        title: "KAMITSUBAKI CITY VIRTUAL REALITY",
        kicker: {
          en: "Virtual reality · Rhythm boss battles",
          ja: "VR · リズムボスバトル",
        },
        year: "2025",
        role: { en: "Gameplay Programmer", ja: "ゲームプレイプログラマー" },
        description: {
          en:
            "Joined mid-development and shipped five boss encounters. Rhythm-synced, " +
            "on schedule, and without disturbing what was already working.",
          ja:
            "開発途中から参加し、5 体のボス戦を実装してリリースまで届けました。" +
            "リズムにきっちり同期させつつ、スケジュール通りに、既存の実装を壊すことなく。",
        },
        highlights: [
          {
            en: "Authored rhythm-based boss battles using Unity Timeline and custom tooling",
            ja: "Unity Timeline と自作ツールを用いて、リズム連動型のボス戦を制作",
          },
          {
            en: "Translated design specifications into tightly synchronized gameplay and animation sequences",
            ja: "デザイン仕様を、緻密に同期したゲームプレイとアニメーションのシーケンスへ落とし込み",
          },
          {
            en: "Contributed to debugging, gameplay polish, and iteration ahead of launch",
            ja: "リリースに向けたデバッグ、ゲームプレイの調整、イテレーションに貢献",
          },
        ],
        tags: ["Unity", "C#", "VR", "Unity Timeline"],
        image: "images/kamitsubaki.jpg",
        imageAlt: "KAMITSUBAKI CITY VIRTUAL REALITY",
        links: [
          { label: { en: "Official site", ja: "公式サイト" }, href: "https://srd.kamitsubaki.jp/en/game/" },
        ],
        credit: "© KAMITSUBAKI STUDIO",
      },

      {
        title: {
          en: "Confidential Client Projects",
          ja: "秘密保持契約下のクライアント案件",
        },
        kicker: {
          en: "VR / AR · Client work",
          ja: "VR / AR · クライアントワーク",
        },
        year: "2024 — 2025",
        role: { en: "Unity Programmer", ja: "Unity プログラマー" },
        description: {
          en:
            "Sole programmer on a run of Unity VR and AR applications, each taken " +
            "from concept to deployment. Different client, different problem, every time.",
          ja:
            "複数の Unity 製 VR / AR アプリケーションで唯一のプログラマーを務め、" +
            "企画から納品まで担当しました。案件ごとにクライアントも課題も異なる環境です。",
        },
        highlights: [
          {
            en: "Built various applications, such as an interactive VR demonstration, a physical therapy rehabilitation tool, and an immersive AR/VR event experience",
            ja: "インタラクティブな VR デモ、リハビリテーション支援ツール、没入型の AR / VR イベント体験など、幅広いアプリケーションを開発",
          },
          {
            en: "Worked with designers and stakeholders to turn requirements into performant, user-focused applications",
            ja: "デザイナーやステークホルダーと連携し、要件を軽快に動くユーザー本位のアプリケーションへ具体化",
          },
        ],
        tags: ["Unity", "C#", "VR / AR"],
        image: "images/lock.svg",
        imageAlt: {
          en: "This work is covered by NDA",
          ja: "この案件は NDA の対象です",
        },
      },
    ],
  },

  experience: {
    heading: { en: "Experience",     ja: "経歴" },
    eyebrow: { en: "How I got here", ja: "これまでの歩み" },
    entries: [
      {
        role:     { en: "Unity Programmer", ja: "Unity プログラマー" },
        company:  "Mankind Games",
        period:   { en: "Sept 2024 — Present", ja: "2024年9月 — 現在" },
        location: { en: "Tokyo, JP", ja: "東京" },
        description: {
          en:
            "Develop Unity-based games and applications across commercial, client, " +
            "and internal projects. Collaborate with designers, artists, and technical " +
            "leadership to architect and implement gameplay systems, tools, and " +
            "engineering workflows across gameplay, UI, networking, AI, and XR.",
          ja:
            "商用タイトル、クライアント案件、社内プロジェクトを横断して、Unity 製の" +
            "ゲームとアプリケーションを開発。デザイナー、アーティスト、技術責任者と" +
            "協働しながら、ゲームプレイ・UI・ネットワーク・AI・XR にわたるシステムや" +
            "ツール、開発ワークフローの設計と実装を担当しています。",
        },
      },
      {
        role:     { en: "QA Tester Intern", ja: "QA テスター（インターン）" },
        company:  "TwinRayJ Studios",
        period:   { en: "Sept 2023 — Jun 2024", ja: "2023年9月 — 2024年6月" },
        location: "",
        description: {
          en:
            "Tested games across gameplay, UI, visual presentation, and functionality, " +
            "writing detailed bug reports with clear reproduction steps and technical " +
            "context. Took part in a mentorship program focused on programming and game design.",
          ja:
            "ゲームプレイ、UI、ビジュアル表現、機能面にわたるテストを担当し、明確な" +
            "再現手順と技術的な背景を添えた詳細なバグレポートを作成。プログラミングと" +
            "ゲームデザインに焦点を当てたメンターシッププログラムにも参加しました。",
        },
      },
      {
        role:     { en: "B.S. Software Engineering", ja: "ソフトウェア工学 学士" },
        company:  { en: "Brigham Young University — Idaho", ja: "ブリガムヤング大学アイダホ校" },
        period:   { en: "Graduated Dec 2023", ja: "2023年12月 卒業" },
        location: "",
        description: "",
      },
    ],
  },

  contact: {
    heading: { en: "Contact me!", ja: "ご連絡ください！" },
    eyebrow: { en: "Say hi",      ja: "ごあいさつ" },
    blurb: {
      en:
        "Always up for talking gameplay, tools, or anything Unity — in English or " +
        "Japanese. Email reaches me fastest; I'm far better at replying than I am " +
        "at social media.",
      ja:
        "ゲームプレイやツール、Unity まわりの話ならいつでも歓迎です。英語でも日本語でも" +
        "構いません。連絡はメールがいちばん早く届きます。SNS より返信は得意です。",
    },
    email: "kyle@mcghie.org",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/kyle-mcghie" },
    ],
  },
};
