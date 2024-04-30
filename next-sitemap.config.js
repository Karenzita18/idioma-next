const siteUrl = 'https://lifebiologicalcontrol.com.br'


module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/api' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  exclude: ['/api'],
  changefreq: 'hourly',
}
