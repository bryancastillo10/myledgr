import { Image, View } from "react-native";

interface AvatarProps {
  size?: number;
}

const Avatar = ({ size = 32 }: AvatarProps) => {
  return (
    <View>
      <Image
        source={require("@/assets/images/avatar.png")}
        style={{ width: size, height: size }}
      />
    </View>
  );
};

export default Avatar;
