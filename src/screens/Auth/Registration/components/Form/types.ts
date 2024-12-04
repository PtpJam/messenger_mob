export type TFormProps = {
  setFormData: React.Dispatch<React.SetStateAction<TForm>>;
};

export type TForm = {
  email: string;
  phone: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};
