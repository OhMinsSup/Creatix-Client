interface UserProfile {
  id: string;
  display_name: string;
  thumbnail: string | null;
  fk_user_id: string;
  profile_links: any;
  created_at: Date;
  updated_at: Date;
}

export default UserProfile;
