const Comment = require("./comment_sequalize");

module.exports = {
  index: () => {
    console.log("index");
  },
  modify: () => {
    console.log("modify");
  },
  create: () => {
    console.log("create");
  },
  destroy: () => {
    console.log("destroy");
  },
};
