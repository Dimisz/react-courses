function chooseColor(colors){
  return colors[Math.floor(Math.random() * colors.length)];
}

export { chooseColor }