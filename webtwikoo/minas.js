  // Function to replace remote image links with backup 404 image links
  function replaceRemoteImagesWithBackup() {
    const backupURL = "https://jsd.cdn.zzko.cn/gh/mrxie68/picx-images-hosting@master/dadd50a3fca29ab42a644d9103c54a90.58v5id3dtas0.webp";
    const images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const originalURL = image.src;

      if (originalURL.startsWith("https://bu.dusays.com") && originalURL.endsWith(".webp")) {
        image.src = backupURL;
      }
    }
  }

  // Call the function to replace remote images with backup images
  replaceRemoteImagesWithBackup();
