import apiClient from './apiClient';

export const fileUpload = (file: File, userId: string) => {
  const data = new FormData();
  data.append('image', file);
  data.append('userId', userId);

  type FileUploadResponse = {
    filename: string;
    path: string;
    url: string;
  };

  return apiClient.post<FileUploadResponse>(
    '/api/v1/files/illust/create-url',
    data,
    {
      headers: {
        'Content-Type': file.type,
      },
      withCredentials: true,
    },
  );
};
