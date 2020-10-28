module.exports = {
  url: process.env.SERVICE_URL || 'https://duckduckgo.com/?q=%21%20%s',
  // The domain to limit search results.
  domain: process.env.SEARCH_DOMAIN || 'github',
  // The default URL for empty queries.
  fallbackUrl: process.env.FALLBACK_URL || 'http://github.com/'
}
