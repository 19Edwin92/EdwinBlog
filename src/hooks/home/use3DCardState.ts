import { useCallback, useState } from "react";

export const use3DCardState = () => {
  const [mouseHover, setMouseHover] = useState<boolean>(false)
  const handleMouseEnter = useCallback(() => {
    setMouseHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseHover(false);
  }, []);

  return {mouseHover, handleMouseEnter, handleMouseLeave} as const
}