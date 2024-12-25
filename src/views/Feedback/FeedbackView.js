export default {
  name: "FeedbackView",
  data() {
    return {
      form: {
        name: "",
        contact: "",
        suggestion: "",
      },
    };
  },
  methods: {
    submitFeedback() {
      // 提交反馈的处理逻辑
      console.log("反馈已提交：", this.form);
      alert("感谢您的反馈！");
      this.form.name = "";
      this.form.contact = "";
      this.form.suggestion = "";
    },
  },
};
