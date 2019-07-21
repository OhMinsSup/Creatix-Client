import { gql } from 'apollo-boost';

export const WRITE_ILLUST = gql`
  mutation WriteIllust(
    $title: String!
    $url_slug: String
    $description: String
    $thumbnail: [String]
    $tags: [String]
    $is_private: Boolean!
  ) {
    WriteIllust(
      title: $title
      url_slug: $url_slug
      description: $description
      thumbnail: $thumbnail
      tags: $tags
      is_private: $is_private
    ) {
      ok
      error
      illust {
        id
        url_slug
        user {
          username
        }
      }
    }
  }
`;
