function itemColumnCreator (viewPort, items) {

  const domData = [];
  const w = viewPort.width;
  const minSizes = [0, 400, 790, 1100];
  var numCols = minSizes.filter(size => size<=w).length;
  return columnArrayGenerator(numCols);

  function columnArrayGenerator (cols) {
    for (let i = 0; i < cols; i++) {
      domData[i] = []
    }
    for (let i = 0; i < items.length; i++) {
      domData[ (i % cols) ].push(items[i])
    }
    return domData
  }
}

module.exports = itemColumnCreator