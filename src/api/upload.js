import axios from 'axios';

/**
 * 上传图片到服务器
 * @param {File} file - 需要上传的文件对象
 * @returns {Promise<Object>} - 返回后端的响应
 */
export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append('image', file); // 确保字段名为后端预期的字段

  return axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};