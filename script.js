@import url(https://fonts.googleapis.com/css?family=Cabin);

$colorBg: #121212;
$colorOutline: #cde800;
$colorOutlineFade: #4e5559;

$widthMouse: 52px;
$heightMouse: 88px;
$borderMouse: 6px;

$posMouse: 8px;
$posText: 2px;

$sizeTrackball: 10px;
$posTrackball: 20px;
$shrinkTrackball: 0.4;

$animDuration: 5s;

@mixin bgGradient {
  background: $colorOutlineFade
    linear-gradient(
      transparent 0%,
      transparent 50%,
      $colorOutline 50%,
      $colorOutline 100%
    );
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $colorBg;
}

p {
  margin-top: 50px;
  font-family: "Cabin", sans-serif;
  letter-spacing: 12px;
  text-indent: 12px;
  color: $colorOutline;
  animation: colorText $animDuration ease-out infinite,
    nudgeText $animDuration ease-out infinite;
}

.mouse {
  @include bgGradient;
  position: relative;
  width: $widthMouse;
  height: $heightMouse;
  border-radius: 100px;
  background-size: 100% 200%;
  animation: colorSlide $animDuration linear infinite,
    nudgeMouse $animDuration ease-out infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  &:before {
    width: $widthMouse - $borderMouse;
    height: $heightMouse - $borderMouse;
    background-color: $colorBg;
    border-radius: 100px;
  }
  &:after {
    background-color: $colorOutline;
    width: $sizeTrackball;
    height: $sizeTrackball;
    border-radius: 100%;
    animation: trackBallSlide $animDuration linear infinite;
  }
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: $colorOutlineFade;
  }
  29.99% {
    background-color: $colorOutline;
    background-position: 0% 0%;
  }
  30% {
    background-color: $colorOutlineFade;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: $colorOutlineFade;
  }
  59% {
    background-color: $colorOutline;
    background-position: 0% 0%;
  }
  60% {
    background-color: $colorOutlineFade;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: $colorOutlineFade;
  }
  90%,
  100% {
    background-color: $colorOutline;
  }
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  14% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  15%,
  19% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  44% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  45%,
  49% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY($posTrackball/4);
  }
  74% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY($posTrackball * 2);
  }
  75%,
  79% {
    opacity: 0;
    transform: scale($shrinkTrackball) translateY(-$posTrackball);
  }
  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-$posTrackball);
  }
}

@keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY($posMouse);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY($posMouse);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY($posMouse);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes nudgeText {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY($posText);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY($posText);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY($posText);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes colorText {
  21% {
    color: $colorOutlineFade;
  }
  30% {
    color: $colorOutline;
  }
  51% {
    color: $colorOutlineFade;
  }
  60% {
    color: $colorOutline;
  }
  81% {
    color: $colorOutlineFade;
  }
  90% {
    color: $colorOutline;
  }
}
