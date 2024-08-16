export const Utils = {
  addGobalEventListener: (type, selector, callback, parent = document) => {
    parent.addEventListener(type, e => {
      if (e.target.matches(selector)) {
        callback(e)
      }
    })
  },
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let slugs = url.split("/")
    let segments = {
      resource: null,
      id: null,
      verb: null
    }
    segments.resource = slugs[1]
    segments.id = slugs[2]
    segments.verb = slugs[3]
    return segments
  },
  getParams: match => {
    const values = match.slice(1);
    const keys = Array.from(match.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
    }));
  }
}
