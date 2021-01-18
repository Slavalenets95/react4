const validateSettings = {
  userName: {
    required: { value: true, message: 'Это поле обязательно.' },
    minLength: { value: 3, message: 'Минимальная длинна 3 символа.' },
    maxLength: { value: 20, message: 'Максимальная длинна 20 символов.' },
  },
  email: {
    required: { value: true, message: 'Это поле обязательно.' },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Неккоректный почтовый адресс.',
    },
  },
  password: {
    required: { value: true, message: 'Это поле обязательно.' },
    minLength: { value: 6, message: 'Минимальная длинна 6 символа.' },
    maxLength: { value: 40, message: 'Максимальная длинна 40 символов.' },
  },
  license: {
    required: { value: true, message: 'Это поле обязательно.' },
  },
};

export default validateSettings;
