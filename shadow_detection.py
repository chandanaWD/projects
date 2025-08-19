import cv2
import numpy as np

# --- Config ---
SOURCE = 0  # 0 for webcam; or RTSP/HTTP/file path string
LEARNING_RATE = -1  # auto
AREA_MIN = 500      # min contour area to keep

# Create background subtractor with shadow detection enabled
# Shadows in mask will be 127 (gray)
bgs = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=16, detectShadows=True)

def remove_shadows(fgmask):
    """
    MOG2 mask: 0=bg, 127=shadow, 255=foreground.
    We drop 127 to remove shadows from FG.
    """
    # Keep only 255, set 127 -> 0
    _, hard = cv2.threshold(fgmask, 200, 255, cv2.THRESH_BINARY)
    return hard

cap = cv2.VideoCapture(SOURCE)
if not cap.isOpened():
    raise RuntimeError("Cannot open video source")

print("Press 'q' to quit")
while True:
    ret, frame = cap.read()
    if not ret:
        break

    fgmask = bgs.apply(frame, learningRate=LEARNING_RATE)

    # Remove shadows (127) and clean up
    no_shadow = remove_shadows(fgmask)
    no_shadow = cv2.morphologyEx(no_shadow, cv2.MORPH_OPEN,
                                 cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3)))
    no_shadow = cv2.morphologyEx(no_shadow, cv2.MORPH_CLOSE,
                                 cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,5)))

    # Find and draw contours
    contours, _ = cv2.findContours(no_shadow, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    out = frame.copy()
    for c in contours:
        if cv2.contourArea(c) < AREA_MIN:
            continue
        x,y,w,h = cv2.boundingRect(c)
        cv2.rectangle(out, (x,y), (x+w, y+h), (0,255,0), 2)

    # Visualize
    vis_mask = cv2.cvtColor(fgmask, cv2.COLOR_GRAY2BGR)
    cv2.putText(vis_mask, "MOG2 mask (127=shadow)", (10,20), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255,255,255), 1)
    cv2.imshow("Original", frame)
    cv2.imshow("MOG2 Mask", vis_mask)
    cv2.imshow("Foreground (shadows removed)", no_shadow)
    cv2.imshow("Tracked Objects", out)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
