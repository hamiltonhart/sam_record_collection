// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import genre from "./genre";
import vibe from "./vibe";
import artist from "./artist";
import album from "./album";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([artist, album, genre, vibe, blockContent]),
});
