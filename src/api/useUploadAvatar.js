import { ref } from "vue";
import axios from "axios";

export function useUploadAvatar() {
  const avatarUrl = ref("");

  const uploadAvatar = async (file) => {
    if (!file) {
      alert("请选择一个头像文件");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      avatarUrl.value = response.data; // 更新头像 URL
      console.log("上传成功，图片 URL:", avatarUrl.value);
    } catch (error) {
      console.error("上传头像失败:", error);
      alert("上传头像失败");
    }
  };

  return {
    avatarUrl,
    uploadAvatar,
  };
}
