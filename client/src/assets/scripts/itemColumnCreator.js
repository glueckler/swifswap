function itemColumnCreator (viewPort, items) {

  const domData = {
      col1: undefined,
      col2: undefined,
      col3: undefined,
      col4: undefined
    }

  const
    w = viewPort.width,
    mediaSmall = 400,
    mediaMedium = 790,
    mediaLarge = 1100

  if (w > -1 && w < mediaSmall) {
    domData.col1 = items
    return domData
  } else if (w >= mediaSmall && w < mediaMedium) {
    return columnArrayGenerator(2)
  } else if (w >= mediaMedium && w < mediaLarge) {
    return columnArrayGenerator(3)
  } else if (w >= mediaLarge) {
    return columnArrayGenerator(4)
  }

  function columnArrayGenerator (cols) {
    for (let i = 1; i <= cols; i++) {
      domData['col' + i] = []
    }
    for (let i = 0; i < items.length; i++) {
      const columnNumber = i % cols
      const j = columnNumber + 1
      domData['col' + j].push(items[i])
    }
    return domData
  }
}

module.exports = itemColumnCreator