// The server returns an invalid image URL when sorting or requesting by category

export function restoreOriginalImageUrl(url: string): string {
  return url.replace(/\.(jpg|png)$/, (ext) => {
    return url.endsWith(`t${ext}`) ? ext : `t.png`;
  });
}
