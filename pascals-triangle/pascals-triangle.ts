function generate(numRows: number): number[][] {

  let output: number[][] = []

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      output.push([1])
      continue
    }

    if (i === 1) {
      output.push([1, 1])
      continue
    }

    let prevArray = output[i - 1]
    let newArray = [1]

    for (let j = 0; j < prevArray.length - 1; j++) {
      newArray.push(prevArray[j] + prevArray[j + 1])
    }

    newArray.push(1)
    output.push(newArray)
  }

  return output
}