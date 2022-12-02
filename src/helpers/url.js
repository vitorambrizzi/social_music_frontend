const slugify = (string) => {
  const trimStart = new RegExp(/^\s+/, 'g')
  const trimEnd = new RegExp(/\s+$/, 'g')
  const space = new RegExp(/\s+/, 'g')
  const hyphen = new RegExp(/-+/, 'g')
  const sC01 = new RegExp(/[àáâãäåª]/, 'g')
  const sC02 = new RegExp(/[èéêë]/, 'g')
  const sC03 = new RegExp(/[ìíîï]/, 'g')
  const sC04 = new RegExp(/[òóôõöº]/, 'g')
  const sC05 = new RegExp(/[ùúûü]/, 'g')
  const sC06 = new RegExp(/[ýÿ]/, 'g')
  const sC07 = new RegExp(/[ñ]/, 'g')
  const sC08 = new RegExp(/[ç]/, 'g')
  const sC09 = new RegExp(/[ß]/, 'g')
  const sC10 = new RegExp(/[æ]/, 'g')
  const sC11 = new RegExp(/[øœ]/, 'g')
  
  return  string.toString().toLowerCase()
  .replace(trimStart, '')
  .replace(trimEnd, '')    
  .replace(space, '+')
  .replace(hyphen, '-')
  .replace(sC01, 'a')
  .replace(sC02, 'e')
  .replace(sC03, 'i')
  .replace(sC04, 'o')
  .replace(sC05, 'u')
  .replace(sC06, 'y')
  .replace(sC07, 'n')
  .replace(sC08, 'c')
  .replace(sC09, 'ss')
  .replace(sC10, 'ae')
  .replace(sC11, 'oe')
}

export default slugify