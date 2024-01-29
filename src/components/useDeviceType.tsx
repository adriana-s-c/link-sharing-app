import { useMediaQuery } from "react-responsive";

interface DeviceType {
  isMobile: boolean;
  isTablet: boolean;
}

const useDeviceType = (): DeviceType => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return { isMobile, isTablet };
};

export default useDeviceType;
