const validateArticleSettings = {
  title: {
    required: { value: true, message: 'Это поле обязательно.' },
  },
  description: {
    required: { value: true, message: 'Это поле обязательно.' },
  },
  body: {
    required: { value: true, message: 'Это поле обязательно.' },
  },
};

export default validateArticleSettings;
