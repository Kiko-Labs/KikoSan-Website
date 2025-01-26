import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

export default withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })