import { KEYBOARD_SHORTCUTS } from "../utils/staticData.js";
export const getWindowData = (req, res) => {
  const { os } = req.params;

  if (!os) {
    return res.status(400).json({
      success: false,
      message: "OS parameter is required"
    });
  }

  const osKey = os.toLowerCase();
  const data = KEYBOARD_SHORTCUTS[os?.toLowerCase()];

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Keyboard shortcuts not found for OS: ${os}`
    });
  }

  return res.json({
    success: true,
    data
  });
};
