const validateEditSettings = {
  password: {
    minLength: { value: 6, message: 'Минимальная длинна 6 символа.' },
    maxLength: { value: 40, message: 'Максимальная длинна 40 символов.' },
  },
  image: {
    pattern: { value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/, message: 'Неккоректный url' },
  },
};

export default validateEditSettings;
