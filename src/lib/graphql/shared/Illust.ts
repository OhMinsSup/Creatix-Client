import User from './User';

interface Illust {
  id: string;
  url_slug: string;
  title: string;
  description: string;
  is_private: boolean;
  likes: number;
  views: number;
  fk_user_id: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  illustImages: any[]; // IllustImage[];
  illustsTags: any[]; // IllustsTags[];
}

export default Illust;
