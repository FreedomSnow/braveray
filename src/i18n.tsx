import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "zh-CN" | "en" | "fr" | "ja" | "de";

type Messages = {
  header: {
    brandName: string;
    logoAlt: string;
    nav: {
      home: string;
      services: string;
      cases: string;
      team: string;
    };
    cta: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    cta: string;
    tags: { title: string; description: string }[];
    audienceTitle: string;
    audiences: { emoji: string; title: string; description: string }[];
  };
  services: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  caseStudies: {
    heading: string;
    intro: string;
    viewCase: string;
    prevLabel: string;
    nextLabel: string;
    cases: { client: string; industry: string; title: string; description: string }[];
  };
  team: {
    heading: string;
    intro: string;
    contactLabel: string;
    members: { name: string; role: string; bio: string }[];
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    emailValue: string;
    timeLabel: string;
    timeValue: string;
    formTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
    };
    submit: string;
    alertMissing: string;
    mailSubject: string;
    mailBodyTemplate: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    contact: string;
  };
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const translations: Record<Language, Messages> = {
  "zh-CN": {
    header: {
      brandName: "北锐科技",
      logoAlt: "北锐科技",
      nav: {
        home: "首页",
        services: "开发服务",
        cases: "客户案例",
        team: "开发团队"
      },
      cta: "联系我们",
      languageLabel: "语言"
    },
    hero: {
      badge: "专业软件开发服务",
      titleLine1: "专业软件开发",
      titleHighlight: "定制您的解决方案",
      description: "我们致力于为每个客户提供专业、可靠的定制化解决方案，建立长期合作关系。",
      cta: "立即咨询",
      tags: [
        { title: "移动应用开发", description: "iOS / Android / 跨平台" },
        { title: "车机应用开发", description: "智能车载系统" },
        { title: "上位机开发", description: "桌面应用 / 工控软件" },
        { title: "嵌入式开发", description: "硬件控制 / 物联网" }
      ],
      audienceTitle: "适合人群",
      audiences: [
        { emoji: "🚀", title: "创业者", description: "快速实现产品想法" },
        { emoji: "🏢", title: "企业外包", description: "专业团队协作" },
        { emoji: "💼", title: "兼职合作", description: "灵活项目支持" }
      ]
    },
    services: {
      heading: "核心开发服务",
      intro: "100%热忱投入每个开发项目，认真负责对待每一行代码，用专业和诚信赢得客户信任。",
      items: [
        {
          title: "移动应用开发",
          description: "专业开发 iOS 与 Android 原生及跨平台移动应用，为您打造流畅、稳定的移动端解决方案。"
        },
        {
          title: "车机应用开发",
          description: "提供车载系统应用定制开发，针对车机环境优化交互体验，实现智能化车载功能。"
        },
        {
          title: "上位机开发",
          description: "开发功能强大的上位机软件系统，实现设备监控、数据采集与分析，提升工业自动化水平。"
        },
        {
          title: "嵌入式开发",
          description: "专注嵌入式系统软件开发，从底层驱动到应用层实现，为硬件设备赋予智能化能力。"
        },
        {
          title: "应用维护及二次开发",
          description: "为现有系统提供专业维护、升级及功能扩展服务，确保应用持续稳定运行并满足新需求。"
        },
        {
          title: "应用定制",
          description: "根据客户独特需求量身定制软件解决方案，完美契合业务流程，实现个性化功能需求。"
        }
      ]
    },
    caseStudies: {
      heading: "成功案例",
      intro: "见证我们如何与客户携手，解决复杂挑战，创造真实价值。",
      viewCase: "查看完整案例",
      prevLabel: "上一案例",
      nextLabel: "下一案例",
      cases: [
        {
          client: "IM即时通讯",
          industry: "移动应用",
          title: "IM即时通讯SDK",
          description: "自研IM即时通讯SDK，提供标准集成接口，支持多平台多应用无缝集成，实现高并发、低延迟的即时聊天功能，助力企业快速搭建专属通讯系统。"
        },
        {
          client: "车载流媒体",
          industry: "车机应用",
          title: "车载流媒体中间件",
          description: "提供流媒体中间件，定制修改Chrome源码，提供数据下载和播放接口，可在车机系统上实现音乐和视频的流畅播放，支持多种定制化需求。"
        },
        {
          client: "医疗上位机数据传输",
          industry: "医疗上位机",
          title: "医疗上位机数据高效传输",
          description: "实现医疗硬件与上位机之间的数据高效、稳定传输，保障医疗数据的及时性与准确性，助力医疗信息化升级。"
        }
      ]
    },
    team: {
      heading: "开发团队",
      intro: "我们是一群对技术充满热情的开发者，为您提供最专业的服务。",
      contactLabel: "联系团队",
      members: [
        {
          name: "Yunni",
          role: "架构师兼首席技术官",
          bio: "拥有 15 年软件服务经验，曾在多家全球 500 强科技公司担任技术架构师，致力于通过技术驱动应用变革。"
        },
        {
          name: "张伟",
          role: "开发工程师",
          bio: "拥有丰富的安卓开发经验，熟悉多种安卓框架和工具，致力于打造高质量的移动应用。"
        },
        {
          name: "Jane",
          role: "开发工程师",
          bio: "拥有10年软件开发经验，精通多种编程语言，擅长构建高性能、可扩展的软件系统。"
        },
        {
          name: "Chase",
          role: "产品经理",
          bio: "拥有丰富的产品管理经验，擅长需求分析与用户体验设计，致力于推动产品创新与市场成功。"
        }
      ]
    },
    contact: {
      heading: "准备好开始您的软件开发项目了吗？",
      intro: "无论您需要移动应用、车机应用、上位机还是嵌入式开发，我们都将全力以赴，为您提供专业可靠的定制化服务。",
      emailLabel: "发送邮件",
      emailValue: "support@braveray.top",
      timeLabel: "咨询时间",
      timeValue: "周一至周五 9:00 - 18:00",
      formTitle: "联系我们",
      form: {
        nameLabel: "姓名",
        namePlaceholder: "您的姓名",
        emailLabel: "电子邮箱*",
        emailPlaceholder: "name@company.com",
        companyLabel: "公司名称",
        companyPlaceholder: "您的公司名称",
        messageLabel: "需求描述*",
        messagePlaceholder: "请简要描述您的项目需求..."
      },
      submit: "发送信息",
      alertMissing: "请填写电子邮箱和需求描述",
      mailSubject: "开发服务咨询",
      mailBodyTemplate: "{email} 发来消息：\n{message}"
    },
    footer: {
      copyright: "© 2026 北锐科技. 保留所有权利。",
      privacy: "隐私政策",
      terms: "使用条款",
      contact: "联系我们"
    }
  },
  en: {
    header: {
      brandName: "Braveray",
      logoAlt: "Braveray",
      nav: {
        home: "Home",
        services: "Services",
        cases: "Case Studies",
        team: "Team"
      },
      cta: "Contact Us",
      languageLabel: "Language"
    },
    hero: {
      badge: "Professional software development",
      titleLine1: "Professional software development",
      titleHighlight: "Tailored solutions for you",
      description: "We deliver reliable, custom solutions and build long-term partnerships for every client.",
      cta: "Get a quote",
      tags: [
        { title: "Mobile App Development", description: "iOS / Android / Cross-platform" },
        { title: "In-vehicle App Development", description: "Smart in-car systems" },
        { title: "Desktop Application Development", description: "Desktop apps / industrial software" },
        { title: "Embedded Development", description: "Hardware control / IoT" }
      ],
      audienceTitle: "Best for",
      audiences: [
        { emoji: "🚀", title: "Founders", description: "Ship product ideas fast" },
        { emoji: "🏢", title: "Enterprise outsourcing", description: "Dedicated team collaboration" },
        { emoji: "💼", title: "Part-time partnership", description: "Flexible project support" }
      ]
    },
    services: {
      heading: "Core Services",
      intro: "We put 100% into every project, treating each line of code with care and earning trust through expertise and integrity.",
      items: [
        {
          title: "Mobile App Development",
          description: "We build native and cross-platform iOS and Android apps that are smooth, stable, and production-ready."
        },
        {
          title: "In-vehicle App Development",
          description: "Custom in-car applications optimized for vehicle environments with intelligent features and UX."
        },
        {
          title: "Desktop Application Development",
          description: "Powerful desktop control systems for monitoring, data acquisition, and analytics to boost automation."
        },
        {
          title: "Embedded Development",
          description: "From low-level drivers to application layers, we enable smart capabilities for embedded devices."
        },
        {
          title: "Maintenance & Enhancement",
          description: "Professional maintenance, upgrades, and feature expansion to keep your systems reliable and evolving."
        },
        {
          title: "Custom Software",
          description: "Tailored solutions aligned with your workflows to deliver precisely what your business needs."
        }
      ]
    },
    caseStudies: {
      heading: "Case Studies",
      intro: "See how we partner with clients to solve complex challenges and create real value.",
      viewCase: "View full case",
      prevLabel: "Previous case",
      nextLabel: "Next case",
      cases: [
        {
          client: "IM Messaging",
          industry: "Mobile App",
          title: "IM Messaging SDK",
          description: "A proprietary IM SDK with standard integration APIs and multi-platform support, enabling high-concurrency, low-latency chat systems."
        },
        {
          client: "In-car Streaming",
          industry: "In-vehicle App",
          title: "In-car Streaming Middleware",
          description: "Customized streaming middleware and Chrome modifications with download and playback APIs for smooth in-car media experiences."
        },
        {
          client: "Medical Control Data",
          industry: "Medical Systems",
          title: "High-efficiency Medical Data Transfer",
          description: "Reliable, efficient data transfer between medical hardware and control systems, improving timeliness and accuracy."
        }
      ]
    },
    team: {
      heading: "Our Team",
      intro: "We are a passionate team of developers delivering professional services.",
      contactLabel: "Contact team",
      members: [
        {
          name: "Yunni",
          role: "Chief Architect & CTO",
          bio: "15 years of software services experience, former architect at multiple Fortune 500 tech companies, driving transformation through technology."
        },
        {
          name: "张伟",
          role: "Software Engineer",
          bio: "Experienced Android developer familiar with diverse frameworks and tools, focused on building high-quality mobile apps."
        },
        {
          name: "Jane",
          role: "Software Engineer",
          bio: "10 years of software development experience, proficient in multiple languages, specializing in high-performance systems."
        },
        {
          name: "Chase",
          role: "Product Manager",
          bio: "Skilled in product management, requirements analysis, and UX design, driving innovation and market success."
        }
      ]
    },
    contact: {
      heading: "Ready to start your software project?",
      intro: "Whether you need mobile apps, in-vehicle apps, desktop control, or embedded development, we deliver reliable custom services.",
      emailLabel: "Email",
      emailValue: "support@braveray.top",
      timeLabel: "Consulting hours",
      timeValue: "Mon–Fri 9:00–18:00",
      formTitle: "Contact Us",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email*",
        emailPlaceholder: "name@company.com",
        companyLabel: "Company",
        companyPlaceholder: "Your company",
        messageLabel: "Project description*",
        messagePlaceholder: "Briefly describe your project..."
      },
      submit: "Send message",
      alertMissing: "Please fill in email and project description.",
      mailSubject: "Software development inquiry",
      mailBodyTemplate: "{email} sent a message:\n{message}"
    },
    footer: {
      copyright: "© 2026 Braveray. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact Us"
    }
  },
  fr: {
    header: {
      brandName: "Braveray",
      logoAlt: "Braveray",
      nav: {
        home: "Accueil",
        services: "Services",
        cases: "Études de cas",
        team: "Équipe"
      },
      cta: "Nous contacter",
      languageLabel: "Langue"
    },
    hero: {
      badge: "Développement logiciel professionnel",
      titleLine1: "Développement logiciel professionnel",
      titleHighlight: "Des solutions sur mesure",
      description: "Nous fournissons des solutions personnalisées fiables et construisons des partenariats durables.",
      cta: "Demander un devis",
      tags: [
        { title: "Développement d'applications mobiles", description: "iOS / Android / Multiplateforme" },
        { title: "Applications embarquées en voiture", description: "Systèmes embarqués intelligents" },
        { title: "Développement d'applications desktop", description: "Apps desktop / logiciels industriels" },
        { title: "Développement embarqué", description: "Contrôle matériel / IoT" }
      ],
      audienceTitle: "Idéal pour",
      audiences: [
        { emoji: "🚀", title: "Fondateurs", description: "Lancer rapidement des idées" },
        { emoji: "🏢", title: "Externalisation d'entreprise", description: "Collaboration d'équipe dédiée" },
        { emoji: "💼", title: "Partenariat à temps partiel", description: "Soutien flexible aux projets" }
      ]
    },
    services: {
      heading: "Services principaux",
      intro: "Nous nous investissons à 100 % dans chaque projet, avec expertise et intégrité.",
      items: [
        {
          title: "Développement d'applications mobiles",
          description: "Apps iOS et Android natives ou multiplateformes, fluides et stables."
        },
        {
          title: "Applications embarquées en voiture",
          description: "Applications sur mesure optimisées pour l'environnement véhicule et l'expérience utilisateur."
        },
        {
          title: "Développement d'applications desktop",
          description: "Systèmes de supervision pour la surveillance, l'acquisition et l'analyse des données."
        },
        {
          title: "Développement embarqué",
          description: "Du bas niveau aux applications, nous donnons des capacités intelligentes aux équipements."
        },
        {
          title: "Maintenance et évolutions",
          description: "Maintenance, mises à niveau et extensions fonctionnelles pour des systèmes fiables."
        },
        {
          title: "Logiciel sur mesure",
          description: "Solutions personnalisées alignées sur vos processus métier."
        }
      ]
    },
    caseStudies: {
      heading: "Études de cas",
      intro: "Découvrez comment nous aidons nos clients à résoudre des défis complexes.",
      viewCase: "Voir l'étude complète",
      prevLabel: "Étude précédente",
      nextLabel: "Étude suivante",
      cases: [
        {
          client: "Messagerie IM",
          industry: "Application mobile",
          title: "SDK de messagerie IM",
          description: "SDK IM propriétaire avec API d'intégration standard et support multiplateforme pour un chat à haute concurrence."
        },
        {
          client: "Streaming embarqué",
          industry: "Application embarquée",
          title: "Middleware de streaming embarqué",
          description: "Middleware et modifications de Chrome pour le téléchargement et la lecture fluide des médias en voiture."
        },
        {
          client: "Données médicales",
          industry: "Systèmes médicaux",
          title: "Transfert efficace des données médicales",
          description: "Transfert fiable et efficace entre équipements médicaux et systèmes de contrôle pour plus de précision."
        }
      ]
    },
    team: {
      heading: "Notre équipe",
      intro: "Une équipe passionnée offrant des services professionnels.",
      contactLabel: "Contacter l'équipe",
      members: [
        {
          name: "Yunni",
          role: "Architecte en chef & CTO",
          bio: "15 ans d'expérience, ancien architecte dans des entreprises du Fortune 500, moteur de la transformation par la technologie."
        },
        {
          name: "张伟",
          role: "Ingénieur logiciel",
          bio: "Développeur Android expérimenté, expert en frameworks et outils, pour des applications mobiles de qualité."
        },
        {
          name: "Jane",
          role: "Ingénieur logiciel",
          bio: "10 ans d'expérience, experte en systèmes performants et évolutifs."
        },
        {
          name: "Chase",
          role: "Chef de produit",
          bio: "Spécialiste de la gestion produit, analyse des besoins et UX, pour l'innovation et le succès marché."
        }
      ]
    },
    contact: {
      heading: "Prêt à démarrer votre projet logiciel ?",
      intro: "Apps mobiles, applications embarquées, logiciels desktop ou embarqués : nous livrons des services fiables.",
      emailLabel: "Email",
      emailValue: "support@braveray.top",
      timeLabel: "Horaires de consultation",
      timeValue: "Lun–Ven 9:00–18:00",
      formTitle: "Nous contacter",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "E-mail*",
        emailPlaceholder: "name@company.com",
        companyLabel: "Société",
        companyPlaceholder: "Nom de votre société",
        messageLabel: "Description du besoin*",
        messagePlaceholder: "Décrivez brièvement votre projet..."
      },
      submit: "Envoyer le message",
      alertMissing: "Veuillez renseigner l'e-mail et la description.",
      mailSubject: "Demande de développement logiciel",
      mailBodyTemplate: "{email} a envoyé un message :\n{message}"
    },
    footer: {
      copyright: "© 2026 Braveray. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      contact: "Nous contacter"
    }
  },
  ja: {
    header: {
      brandName: "Braveray",
      logoAlt: "Braveray",
      nav: {
        home: "ホーム",
        services: "サービス",
        cases: "事例",
        team: "チーム"
      },
      cta: "お問い合わせ",
      languageLabel: "言語"
    },
    hero: {
      badge: "プロフェッショナルなソフトウェア開発",
      titleLine1: "プロフェッショナルなソフトウェア開発",
      titleHighlight: "最適なソリューションを提供",
      description: "信頼性の高いカスタムソリューションで長期的なパートナーシップを築きます。",
      cta: "相談する",
      tags: [
        { title: "モバイルアプリ開発", description: "iOS / Android / クロスプラットフォーム" },
        { title: "車載アプリ開発", description: "スマート車載システム" },
        { title: "デスクトップ開発", description: "デスクトップアプリ / 産業向けソフト" },
        { title: "組み込み開発", description: "ハードウェア制御 / IoT" }
      ],
      audienceTitle: "対象",
      audiences: [
        { emoji: "🚀", title: "起業家", description: "アイデアを迅速に形に" },
        { emoji: "🏢", title: "企業アウトソーシング", description: "専任チームで協力" },
        { emoji: "💼", title: "副業パートナー", description: "柔軟なプロジェクト支援" }
      ]
    },
    services: {
      heading: "主な開発サービス",
      intro: "すべてのプロジェクトに100%の情熱で取り組み、専門性と誠実さで信頼を得ます。",
      items: [
        {
          title: "モバイルアプリ開発",
          description: "iOS/Androidのネイティブおよびクロスプラットフォーム開発。"
        },
        {
          title: "車載アプリ開発",
          description: "車載環境に最適化したカスタムアプリでスマート機能を実現。"
        },
        {
          title: "デスクトップ開発",
          description: "監視・データ収集・分析を支える高機能デスクトップシステム。"
        },
        {
          title: "組み込み開発",
          description: "ドライバからアプリ層まで、組み込み機器のスマート化を支援。"
        },
        {
          title: "保守・追加開発",
          description: "保守、アップグレード、機能拡張で安定運用を継続。"
        },
        {
          title: "カスタム開発",
          description: "業務フローに合わせた最適なソフトウェアを提供。"
        }
      ]
    },
    caseStudies: {
      heading: "成功事例",
      intro: "複雑な課題を解決し、価値を生むパートナーシップをご覧ください。",
      viewCase: "詳細を見る",
      prevLabel: "前の事例",
      nextLabel: "次の事例",
      cases: [
        {
          client: "IMメッセージ",
          industry: "モバイルアプリ",
          title: "IMメッセージSDK",
          description: "標準APIとマルチプラットフォーム対応のIM SDKで高同時接続・低遅延のチャットを実現。"
        },
        {
          client: "車載ストリーミング",
          industry: "車載アプリ",
          title: "車載ストリーミング・ミドルウェア",
          description: "Chrome改修を含むミドルウェアでダウンロードと再生APIを提供し、滑らかな再生を実現。"
        },
        {
          client: "医療データ転送",
          industry: "医療システム",
          title: "医療データの高効率転送",
          description: "医療機器と制御システム間の効率的で安定したデータ転送を実現。"
        }
      ]
    },
    team: {
      heading: "開発チーム",
      intro: "技術に情熱を持つ開発者が、最適なサービスを提供します。",
      contactLabel: "チームに連絡",
      members: [
        {
          name: "Yunni",
          role: "アーキテクト兼CTO",
          bio: "15年の経験を持つ技術アーキテクト。大手企業での実績を活かし変革を推進。"
        },
        {
          name: "张伟",
          role: "開発エンジニア",
          bio: "豊富なAndroid開発経験を持ち、高品質なアプリ開発に注力。"
        },
        {
          name: "Jane",
          role: "開発エンジニア",
          bio: "10年の開発経験を持ち、高性能で拡張性の高いシステムが得意。"
        },
        {
          name: "Chase",
          role: "プロダクトマネージャー",
          bio: "要件分析とUX設計に強く、プロダクトの成功を推進。"
        }
      ]
    },
    contact: {
      heading: "ソフトウェア開発プロジェクトを始めませんか？",
      intro: "モバイル、車載、デスクトップ、組み込み開発まで、信頼できるサービスを提供します。",
      emailLabel: "メール",
      emailValue: "support@braveray.top",
      timeLabel: "相談時間",
      timeValue: "月〜金 9:00 - 18:00",
      formTitle: "お問い合わせ",
      form: {
        nameLabel: "お名前",
        namePlaceholder: "お名前",
        emailLabel: "メールアドレス*",
        emailPlaceholder: "name@company.com",
        companyLabel: "会社名",
        companyPlaceholder: "会社名",
        messageLabel: "要件内容*",
        messagePlaceholder: "プロジェクト内容を簡単にご記入ください..."
      },
      submit: "送信",
      alertMissing: "メールアドレスと要件内容を入力してください。",
      mailSubject: "開発サービスのお問い合わせ",
      mailBodyTemplate: "{email} からのメッセージ：\n{message}"
    },
    footer: {
      copyright: "© 2026 Braveray. 無断転載を禁じます。",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ"
    }
  },
  de: {
    header: {
      brandName: "Braveray",
      logoAlt: "Braveray",
      nav: {
        home: "Start",
        services: "Leistungen",
        cases: "Referenzen",
        team: "Team"
      },
      cta: "Kontakt",
      languageLabel: "Sprache"
    },
    hero: {
      badge: "Professionelle Softwareentwicklung",
      titleLine1: "Professionelle Softwareentwicklung",
      titleHighlight: "Individuelle Lösungen für Sie",
      description: "Wir liefern zuverlässige, maßgeschneiderte Lösungen und bauen langfristige Partnerschaften auf.",
      cta: "Jetzt anfragen",
      tags: [
        { title: "Mobile App-Entwicklung", description: "iOS / Android / Cross-Platform" },
        { title: "In-Car App-Entwicklung", description: "Intelligente Fahrzeugsysteme" },
        { title: "Desktop-Entwicklung", description: "Desktop-Apps / Industrie-Software" },
        { title: "Embedded-Entwicklung", description: "Hardwaresteuerung / IoT" }
      ],
      audienceTitle: "Geeignet für",
      audiences: [
        { emoji: "🚀", title: "Gründer", description: "Ideen schnell umsetzen" },
        { emoji: "🏢", title: "Enterprise-Outsourcing", description: "Zusammenarbeit mit Profi-Team" },
        { emoji: "💼", title: "Nebenprojekt-Kooperation", description: "Flexible Projektunterstützung" }
      ]
    },
    services: {
      heading: "Kernleistungen",
      intro: "Wir investieren 100 % in jedes Projekt und gewinnen Vertrauen durch Expertise und Integrität.",
      items: [
        {
          title: "Mobile App-Entwicklung",
          description: "Native und Cross-Platform iOS- und Android-Apps, stabil und reif für den Einsatz."
        },
        {
          title: "In-Car App-Entwicklung",
          description: "Maßgeschneiderte Apps für Fahrzeugsysteme mit optimierter UX."
        },
        {
          title: "Desktop-Entwicklung",
          description: "Leistungsstarke Desktop-Systeme für Monitoring, Datenerfassung und Analysen."
        },
        {
          title: "Embedded-Entwicklung",
          description: "Von Treibern bis zur Anwendungsschicht für smarte Gerätefunktionen."
        },
        {
          title: "Wartung & Weiterentwicklung",
          description: "Professionelle Wartung, Upgrades und Erweiterungen für stabile Systeme."
        },
        {
          title: "Maßgeschneiderte Software",
          description: "Individuelle Lösungen, die perfekt zu Ihren Abläufen passen."
        }
      ]
    },
    caseStudies: {
      heading: "Erfolgsgeschichten",
      intro: "Erleben Sie, wie wir mit Kunden komplexe Herausforderungen lösen und echten Mehrwert schaffen.",
      viewCase: "Vollständige Fallstudie ansehen",
      prevLabel: "Vorherige Fallstudie",
      nextLabel: "Nächste Fallstudie",
      cases: [
        {
          client: "IM-Messaging",
          industry: "Mobile App",
          title: "IM-Messaging-SDK",
          description: "Eigenes IM-SDK mit Standard-APIs und Multi-Platform-Support für hohe Last und geringe Latenz."
        },
        {
          client: "In-Car Streaming",
          industry: "In-Car App",
          title: "In-Car Streaming Middleware",
          description: "Middleware und Chrome-Anpassungen mit Download- und Playback-APIs für flüssiges In-Car-Streaming."
        },
        {
          client: "Medizinische Daten",
          industry: "Medizinsysteme",
          title: "Hocheffiziente Datenübertragung",
          description: "Effiziente, stabile Datenübertragung zwischen Medizingeräten und Leitsystemen."
        }
      ]
    },
    team: {
      heading: "Entwicklungsteam",
      intro: "Ein leidenschaftliches Team von Entwicklern für professionelle Dienstleistungen.",
      contactLabel: "Team kontaktieren",
      members: [
        {
          name: "Yunni",
          role: "Chefarchitekt & CTO",
          bio: "15 Jahre Erfahrung, ehemaliger Architekt in Fortune-500-Unternehmen, treibt Wandel durch Technologie."
        },
        {
          name: "张伟",
          role: "Softwareentwickler",
          bio: "Erfahrener Android-Entwickler mit Fokus auf hochwertige mobile Anwendungen."
        },
        {
          name: "Jane",
          role: "Softwareentwicklerin",
          bio: "10 Jahre Erfahrung, spezialisiert auf leistungsstarke und skalierbare Systeme."
        },
        {
          name: "Chase",
          role: "Produktmanager",
          bio: "Stark in Produktmanagement, Anforderungsanalyse und UX-Design, treibt Innovation voran."
        }
      ]
    },
    contact: {
      heading: "Bereit für Ihr Softwareprojekt?",
      intro: "Ob mobile Apps, In-Car, Desktop oder Embedded – wir liefern zuverlässige, individuelle Services.",
      emailLabel: "E-Mail",
      emailValue: "support@braveray.top",
      timeLabel: "Sprechzeiten",
      timeValue: "Mo–Fr 9:00–18:00",
      formTitle: "Kontakt",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "E-Mail*",
        emailPlaceholder: "name@company.com",
        companyLabel: "Unternehmen",
        companyPlaceholder: "Ihr Unternehmen",
        messageLabel: "Projektbeschreibung*",
        messagePlaceholder: "Beschreiben Sie kurz Ihr Projekt..."
      },
      submit: "Nachricht senden",
      alertMissing: "Bitte E-Mail und Beschreibung ausfüllen.",
      mailSubject: "Anfrage zur Softwareentwicklung",
      mailBodyTemplate: "{email} hat eine Nachricht gesendet:\n{message}"
    },
    footer: {
      copyright: "© 2026 Braveray. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt"
    }
  }
};

const isLanguage = (value: string | null | undefined): value is Language =>
  value === "zh-CN" || value === "en" || value === "fr" || value === "ja" || value === "de";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }
  try {
    const stored = localStorage.getItem("braveray_language");
    if (isLanguage(stored)) {
      return stored;
    }
  } catch {
    // 忽略存储访问异常，继续回退到浏览器语言
  }
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("zh")) return "zh-CN";
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("fr")) return "fr";
  if (browser.startsWith("ja")) return "ja";
  if (browser.startsWith("de")) return "de";
  return "en";
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("braveray_language", language);
      } catch {
        // 忽略存储访问异常，避免影响渲染
      }
    }
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      messages: translations[language]
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

const fallbackContext: I18nContextValue = {
  language: "en",
  setLanguage: () => {},
  messages: translations.en
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    if (typeof console !== "undefined") {
      console.warn("useI18n is used outside I18nProvider. Falling back to English messages.");
    }
    return fallbackContext;
  }
  return context;
};
