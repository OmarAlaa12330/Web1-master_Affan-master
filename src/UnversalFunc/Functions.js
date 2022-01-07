//funtion to limit characters appearing in preview workout

export function TextLimiter ({ content, limit }) {
  if (content.length <= limit) {
    return content;
  } else {
    const toShow = content.substring(0, limit) + "...";
    return toShow;
  }
};

