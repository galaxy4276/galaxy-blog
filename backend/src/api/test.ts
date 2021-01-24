describe('Basic Types', () => {
  test('Enum#number', () => {
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    expect(c).toBe(1);
  });
});