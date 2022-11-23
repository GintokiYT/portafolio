const GlobalVariable = {
  fontSize: {
    fs1: 'clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)', // 14.58 - 15.36
    fs2: 'clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)', // 17.50 - 19.20
    fs3: 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)', // 21.00 - 24.00
    fs4: 'clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)', // 25.20 - 30.00
    fs5: 'clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)', // 30.24 - 37.50
    fs6: 'clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)', // 36.29 - 46.88
    fs7: 'clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)', // 43.55 - 58.59
    fs8: 'clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)', // 52.25 - 73.24
  }
}

export const LightTheme = {
  body: '#F5F9FF',
  toggle: '#161B22',
  color: '#0D1117',
  text: '#1F2428',
  hover: '#979DA6',
  menu: {
    background: '#161B22',
    text: '#969BA5',
    hover: '#F9F9F9'
  },
  fontSize: GlobalVariable.fontSize
}

export const DarkTheme = {
  body: '#0D1117',
  toggle: '#161B22',
  color: '#F5F9FF',
  text: '#969BA5',
  hover: '#F9F9F9',
  menu: {
    background: '#161B22',
    text: '#1F2428',
    hover: '#A2A7B0'
  },
  fontSize: GlobalVariable.fontSize
}