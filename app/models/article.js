// Example model


function Article (opts) {
  if(!opts) opts = {};
  this.title = opts.title || '';
  this.subtitle = opts.subtitle || '';
  this.url = opts.url || '';
  this.text = opts.text || '';
}

module.exports = Article;

