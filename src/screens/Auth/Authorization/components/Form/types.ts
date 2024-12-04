export type TFormProps = {
  setFormData: React.Dispatch<React.SetStateAction<TForm>>;
};

export type TForm = {
  login: string;
  password: string;
};
