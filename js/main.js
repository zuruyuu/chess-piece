// Pawn
document.querySelectorAll('.pawnWhite').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('movePawnWhite');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('movePawnWhite');
  })
})

document.querySelectorAll('.pawnBlack').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('movePawnBlack');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('movePawnBlack');
  })
})



// Rook
document.querySelectorAll('.rookWhiteL').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveRookWhiteL');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveRookWhiteL');
  })
})

document.querySelectorAll('.rookWhiteR').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveRookWhiteR');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveRookWhiteR');
  })
})


document.querySelectorAll('.rookBlackL').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveRookBlackL');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveRookBlackL');
  })
})

document.querySelectorAll('.rookBlackR').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveRookBlackR');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveRookBlackR');
  })
})



// Knight
document.querySelectorAll('.knightWhite').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveKnightWhite');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveKnightWhite');
  })
})

document.querySelectorAll('.knightBlack').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveKnightBlack');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveKnightBlack');
  })
})



// Bishop
document.querySelectorAll('.bishopWhiteL').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveBishopWhiteL');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveBishopWhiteL');
  })
})

document.querySelectorAll('.bishopWhiteR').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveBishopWhiteR');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveBishopWhiteR');
  })
})


document.querySelectorAll('.bishopBlackL').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveBishopBlackL');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveBishopBlackL');
  })
})

document.querySelectorAll('.bishopBlackR').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('moveBishopBlackR');
  })
  item.addEventListener('mouseover', () => {
    item.classList.remove('moveBishopBlackR');
  })
})