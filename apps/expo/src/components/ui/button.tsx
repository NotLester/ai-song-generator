import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  onPressHandler: () => void;
  text: string;
};

const Button = ({ onPressHandler, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      className="w-full items-center justify-center rounded-lg bg-black p-4"
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
