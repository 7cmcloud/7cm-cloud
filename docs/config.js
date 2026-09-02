/**
 * 运行时配置 — 修改后刷新页面即可生效，无需重新打包
 */
window.APP_CONFIG = {
  PANEL_TYPE: '7limiyun',

  API_CONFIG: {
    urlMode: 'static',
    showCheckBackend: false,
    staticBaseUrl: ['https://api.googolao.com/api/v1'],
    autoConfig: {
      useSameProtocol: true,
      appendApiPath: true,
      apiPath: '/api/v1',
    },
  },

  SITE_CONFIG: {
    siteName: '7CM Cloud',
    siteDescription: '7cm Cloud 提供稳定高速的翻墙、VPN、科学上网与海外网络加速服务，支持多平台客户端、流媒体访问与跨境办公。',
    copyright: `© ${new Date().getFullYear()} 7cm Cloud. All Rights Reserved.`,
    showLogo: true,
    logoUrl: '/images/logo.svg',
    landingText: {
      'zh-CN': '7cm Cloud — 稳定高速的翻墙 / VPN / 科学上网',
      'en-US': '7cm Cloud — Stable and fast VPN & global network access',
    },
    customLandingPage: '',
  },

  SEO_CONFIG: {
    title: '7cm Cloud - 翻墙 / VPN / 科学上网 · 稳定高速全球网络加速',
    description: '7cm Cloud（7厘米云）提供稳定高速的翻墙、VPN、科学上网与海外网络加速服务。支持 Windows / macOS / iOS / Android / Linux 多平台客户端，解锁流媒体，适合跨境办公、全球网站访问与日常翻墙需求。',
    keywords: '7cm Cloud, 7厘米云, 翻墙, VPN, 科学上网, 翻墙软件, 翻墙机场, 梯子, 代理, Clash, Shadowrocket, 网络加速, 海外网络访问, 跨境网络, 全球网络访问, 流媒体加速, 稳定节点, 云加速, 机场推荐, 高速VPN',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    canonicalUrl: 'https://www.7cmc.com/',
    ogType: 'website',
    ogLocale: 'zh_CN',
    ogSiteName: '7cm Cloud',
    ogUrl: 'https://www.7cmc.com/',
    ogTitle: '7cm Cloud - 翻墙 / VPN / 科学上网 · 稳定高速全球网络加速',
    ogDescription: '7cm Cloud 专注稳定高速翻墙与 VPN 体验，覆盖多平台客户端，适合科学上网、跨境办公、流媒体解锁和全球网络访问。',
    ogImage: 'https://www.7cmc.com/images/logo.png',
    twitterCard: 'summary_large_image',
    twitterTitle: '7cm Cloud - 翻墙 / VPN / 科学上网 · 稳定高速全球网络加速',
    twitterDescription: '稳定节点、多平台客户端、流畅访问全球网络。满足翻墙、VPN、科学上网与跨境加速需求。',
  },

  DEFAULT_CONFIG: {
    defaultLanguage: 'zh-CN',
    defaultTheme: 'light',
    primaryColor: '#0d9488',
    enableLandingPage: true,
  },

  AUTH_CONFIG: {
    autoAgreeTerms: true,
    verificationCode: {
      showCheckSpamTip: true,
      checkSpamTipDelay: 1000,
    },
    popup: {
      enabled: false,
      title: '用户须知',
      content: '<p>欢迎使用</p>',
      cooldownHours: 0,
      closeWaitSeconds: 0,
    },
  },

  SHOP_CONFIG: {
    showHotSaleBadge: false,
    showPlanFeatureCards: true,
    autoSelectMaxPeriod: false,
    hidePeriodTabs: false,
    lowStockThreshold: 5,
    enableDiscountCalculation: false,
    periodOrder: [
      'year_price',
      'half_year_price',
      'quarter_price',
      'month_price',
      'onetime_price',
    ],
    popup: { enabled: false, title: '', content: '', cooldownHours: 0, closeWaitSeconds: 0 },
  },

  ORDER_CONFIG: {
    confirmOrder: true,
    confirmOrderContent: '<p>确认提交订单？</p>',
  },

  DASHBOARD_CONFIG: {
    showUserEmail: false,
    importButtonHighlightBtnbgcolor: false,
    enableResetTraffic: true,
    resetTrafficDisplayMode: 'low',
    lowTrafficThreshold: 10,
    enableRenewPlan: true,
    renewPlanDisplayMode: 'always',
    expiringThreshold: 7,
    showOnlineDevicesLimit: true,
    showImportSubscription: true,
  },

  CLIENT_CONFIG: {
    showDownloadCard: true,
    showIOS: true,
    showAndroid: false,
    showMacOS: true,
    showWindows: true,
    showLinux: true,
    showOpenWrt: true,
    clientLinks: {
      ios: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
      android: 'https://play.google.com/store/apps/xxx',
      macos: 'https://github.com/7cmcloud/7cm-cloud/releases',
      windows: 'https://github.com/7cmcloud/7cm-cloud/releases',
      win7: 'https://github.com/7cmcloud/7cm-cloud/releases',
      linux: 'https://github.com/7cmcloud/7cm-cloud/releases',
      openwrt: 'https://github.com/7cmcloud/7cm-cloud/releases',
    },
    githubRelease: {
      repo: '7cmcloud/7cm-cloud',
      tag: 'dev',
    },
    showShadowrocket: true,
    showSurge: true,
    showStash: true,
    showQuantumultX: true,
    showHiddifyIOS: true,
    showSingboxIOS: true,
    showLoon: true,
    showFlClashAndroid: true,
    showV2rayNG: true,
    showClashAndroid: true,
    showSurfboard: true,
    showClashMetaAndroid: true,
    showNekobox: true,
    showSingboxAndroid: true,
    showHiddifyAndroid: true,
    showFlClashWindows: true,
    showClashVergeWindows: true,
    showClashWindows: true,
    showNekoray: true,
    showSingboxWindows: true,
    showHiddifyWindows: true,
    showFlClashMac: true,
    showClashVergeMac: true,
    showClashX: true,
    showClashMetaX: true,
    showSurgeMac: true,
    showStashMac: true,
    showQuantumultXMac: true,
    showSingboxMac: true,
    showHiddifyMac: true,
  },

  PROFILE_CONFIG: {
    showGiftCardRedeem: true,
    showRecentDevices: true,
  },

  SECURITY_CONFIG: {
    enableFrontendDomainCheck: false,
    // 禁用 F12 / 开发者工具快捷键；检测到 DevTools 打开则跳转空白页并锁死返回
    disableDevTools: true,
    // 本地 npm run dev 时默认不启用，避免影响开发；上线后可改为 false 强制启用
    disableDevToolsInDev: false,
  },

  AUTHORIZED_DOMAINS: [],

  CAPTCHA_CONFIG: {
    captchaType: 'google',
    google: { verifyUrl: 'https://www.google.com/recaptcha/api/siteverify' },
    cloudflare: { verifyUrl: 'https://challenges.cloudflare.com/turnstile/v0/siteverify' },
  },

  CUSTOM_HEADERS: {
    enabled: false,
    headers: {},
  },

  PAYMENT_CONFIG: {
    openPaymentInNewTab: true,
    qrcodeSize: 200,
    qrcodeColor: '#000000',
    qrcodeBackground: '#ffffff',
    autoCheckPayment: true,
    autoCheckInterval: 5000,
    autoCheckMaxTimes: 60,
    useSafariPaymentModal: true,
    autoSelectFirstMethod: true,
  },

  WALLET_CONFIG: {
    presetAmounts: [6, 30, 68, 128, 256, 328, 648, 1280],
    defaultSelectedAmount: null,
    minimumDepositAmount: 1,
  },

  INVITE_CONFIG: {
    showCommissionBadge: false,
    recordsPerPage: 10,
    inviteLinkConfig: {
      linkMode: 'auto',
      customDomain: 'https://example.com',
    },
  },

  BROWSER_RESTRICT_CONFIG: {
    enabled: true,
    restrictBrowsers: {
      '360': true,
      QQ: true,
      WeChat: true,
      Baidu: true,
      Sogou: true,
      UC: false,
      Maxthon: false,
    },
    recommendedBrowsers: {
      Chrome: 'https://www.google.cn/chrome/',
      Edge: 'https://www.microsoft.com/edge',
    },
  },

  TICKET_CONFIG: {
    includeUserInfoInTicket: true,
    popup: {
      enabled: false,
      title: '工单须知',
      content: '<p>请准确描述您的问题</p>',
      cooldownHours: 24,
      closeWaitSeconds: 0,
    },
    isImageHosting: false,
    imgbbApiKey: '',
  },

  TRAFFICLOG_CONFIG: {
    enableTrafficLog: true,
    showTrafficTable: true,
    daysToShow: 30,
    sumDailyTraffic: false,
  },

  NODES_CONFIG: {
    showNodeRate: true,
    showNodeDetails: false,
    allowViewNodeInfo: true,
  },

  CUSTOMER_SERVICE_CONFIG: {
    enabled: false,
    type: 'crisp',
    customHtml: '',
    embedMode: 'popup',
    showWhenNotLoggedIn: true,
    iconPosition: {
      desktop: { left: '20px', bottom: '20px' },
      mobile: { right: '20px', bottom: '100px' },
    },
  },

  NAVIGATION_CONFIG: {
    thirdNavItem: 'invite',
    fourthNavItem: 'docs',
    hiddenMenuItems: ['nodes', 'more'],
  },

  MORE_PAGE_CONFIG: {
    enableCustomCards: false,
    customCards: [],
  },
}
