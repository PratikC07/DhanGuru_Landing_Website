# Animation Instructions

## Robot AI Animation

The GuruAI section now uses the `Robot.json` file for the 3D robot animation on the left side of the section.

### Customization

If you want to use a different animation:

1. Replace the `Robot.json` file with another Lottie animation file
2. Or change the path in the `GuruAiSection.tsx` file:
   ```typescript
   const ROBOT_ANIMATION_PATH = '/animations/YourNewAnimation.json';
   ```

### Animation Positioning

The animation is configured to fill the container. If you need to adjust its position or size:

1. Open `src/components/GuruAiSection.tsx`
2. Find the `RobotAIAnimation` component
3. Modify the style object in the Lottie component

## Alternative Animations

You can find more AI and robot-themed animations on:
- [LottieFiles](https://lottiefiles.com/) - Search for "robot" or "AI"
- [Icons8](https://icons8.com/animations) - Various animated illustrations 