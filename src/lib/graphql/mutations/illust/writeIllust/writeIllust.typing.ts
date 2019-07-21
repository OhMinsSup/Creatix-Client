import Illust from '../../../shared/Illust';

export interface writeIllust_WriteIllust {
  __typename: 'WriteIllustResponse';
  ok: boolean;
  error: string | null;
  illust: Illust;
}

export interface writeIllust {
  WriteIllust: writeIllust_WriteIllust;
}

export interface WriteIllustVariables {
  title: string;
  thumbnail: string[];
  is_private: boolean;
  url_slug?: string;
  description?: string;
  tags?: string[];
}
