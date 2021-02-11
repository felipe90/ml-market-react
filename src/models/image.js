class Image {
  constructor(params) {
    this.title = params.title || null;
    this.alt = params.previewImageSrc || null;
    this.previewImageSrc = params.previewImageSrc || null;
    this.thumbnailImageSrc = params.thumbnailImageSrc || null;
  }
}

export default Image;
