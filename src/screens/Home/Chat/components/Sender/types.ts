export type TSenderProps = {
  messageText: string
  onSend: (data: { message?: string; file?: File }) => void;
  setMessageText: React.Dispatch<React.SetStateAction<string>>;
  selectedFile: any,
  setSelectedFile: React.Dispatch<any>,
};
