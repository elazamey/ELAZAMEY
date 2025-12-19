export default function cloudflareLoader({ src, width, quality }: any) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  return `https://your-r2-public-url.com/${src}?${params.join('&')}`;
}
