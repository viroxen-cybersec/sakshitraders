import { IMAGE_SIZES, type ImageKey } from "./image-sizes";

/** Props for next/image: path plus intrinsic size, so layout never jumps. */
export function imageProps(key: ImageKey) {
  const { w, h } = IMAGE_SIZES[key];
  return { src: `/img/${key}.jpg`, width: w, height: h };
}
