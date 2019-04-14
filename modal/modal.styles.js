const containerStyle = `
    background-color: transparent;
    position: fixed;
    height: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100000;
    display: none;
`;

const textStyle = `
    max-width: 800px;
    min-width: 150px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-family: sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-transform: uppercase;
`;

export { containerStyle, textStyle };
