import _ from 'lodash';
import {Collection} from "@quintype/framework/server/api-client";


exports.getTrendingStories = function(client) {
  return Collection.getCollectionBySlug(client, 'trending-stories', {'item-type': 'stories'})
  .then(result => {
    return result.items;
      });
}