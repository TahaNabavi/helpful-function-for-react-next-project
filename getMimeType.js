export default function getMimeType(ext) {
    let lext = ext.toLocaleLowerCase();
    const types = {
      txt: "text",
      html: "text",
      css: "text",
      js: "application",
      json: "application",
      jpg: "image",
      jpeg: "image",
      png: "image",
      gif: "image",
      svg: "image",
      webp: "image",
      pdf: "application",
      doc: "application",
      docx: "application",
      xls: "application",
      xlsx: "application",
      ppt: "application",
      pptx: "application",
      mp3: "audio",
      wav: "audio",
      ogg: "audio",
      aac: "audio",
      flac: "audio",
      m4a: "audio",
      mp4: "video",
      mov: "video",
      avi: "video",
      wmv: "video",
      flv: "video",
      mkv: "video",
      webm: "video",
    };
  
    return types[lext] || "application";
  }
  